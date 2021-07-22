import axios from 'axios';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts, loadingStatusFalse, loadingStatusTrue } from '../redux/actions/productActions'
import Loading from './Loading';

const ProductListing = () => {
    const {loading} = useSelector((state) => state);    
    const dispatch = useDispatch();

    const fetchProducts = useCallback( async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err ", err);
        });
        dispatch(loadingStatusTrue())
        dispatch(setProducts(response.data))
        dispatch(loadingStatusFalse())
    }, [dispatch])
    
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts]);

    return (
        loading ? 
        <Loading />
        : 
        <div className="ui grid container">
                <ProductComponent/>
        </div>
    )
}

export default ProductListing
