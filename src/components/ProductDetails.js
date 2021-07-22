import axios from 'axios'
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectedProduct, removeSelectedProduct, loadingStatusFalse, loadingStatusTrue } from "../redux/actions/productActions";
import Loading from './Loading';

const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const {loading} = useSelector((state) => state);  
    const { image, title, price, category, description} = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = useCallback(async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log("Err ", err);
        })
        dispatch(loadingStatusTrue())
        dispatch(selectedProduct(response.data));
        dispatch(loadingStatusFalse())
    }, [dispatch, productId])

    useEffect(() => {
        if(productId && productId !== "") 
            fetchProductDetails();
        return () => {
          dispatch(removeSelectedProduct())
          dispatch(loadingStatusTrue())
        }
    }, [ productId, dispatch, fetchProductDetails ]);

    return (
      Object.keys(product).length === 0 || loading ? (
        <Loading />
      ) : (
        <div className="ui grid container">
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt={title} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <span className="ui teal tag label">${price}</span>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    )
}

export default ProductDetails
