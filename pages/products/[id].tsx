import React from 'react';
import {GetStaticPaths, GetStaticPathsContext, GetStaticProps, NextPage} from "next";
import axios from "axios";
import {ProductType} from "../products";
import Product from "../../app/components/screens/product/Product";

const ProductPage:NextPage<{ data: ProductType }> = ({data}) => {
    console.log(data)
    return (
        <Product data={data}/>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const {data} = await axios.get<ProductType[]>('http://localhost:8000/api/products')
        console.log(data)
        const paths = data.map(product => ({
            params: {id: String(product.id)}
        }))
        console.log(paths)
        return {paths, fallback: 'blocking'}
    } catch(e) {
        return {
            paths: [],
            fallback: false
        }
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    try {
       const {data} = await axios.get<ProductType>(`http://localhost:8000/api/products/${params?.id}`)
        return {
           props: {
               data
           },
            revalidate: 60
        }
    } catch(e) {
        return {
            notFound: true
        }
    }
}

export default ProductPage;