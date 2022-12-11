import React from 'react';
import {GetStaticProps, NextPage} from "next";
import axios from "axios";

export interface IReview{
    count: number
    rating: number
}

export interface ProductType{
    id: number
    title: string
    fullTitle: string
    reviews: IReview
}

const ProductsPage:NextPage<{data: ProductType[]}> = ({data}) => {
    console.log(data)
    return (
        <div>
            {data.map(el => (<div key={el.id}>{el.id}</div>))}
        </div>

    );
};

export const getStaticProps:GetStaticProps = async () => {
    try {
        const {data} = await axios.get('http://localhost:8000/api/products')
        console.log(data)
        return {
            props: {
                data
            },
            revalidate: 60
        }
     } catch (e) {
        return {
            notFound: true
        }
    }
}

export default ProductsPage;