import React, {FC} from 'react';
import {ProductType} from "../../../../pages/products";
import styles from './Product.module.scss'
import Rating from "../../Rating/Rating";
import VariantGallery from "../../VariantGallery/VariantGallery";

export interface IImage{
    id: number,
    path: string
}

const Product:FC<{data: ProductType}> = ({data}) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.content}>
                <VariantGallery />
                <div className={styles.sticky}>
                    <div className={styles.textBlock}>
                        {/*<span>{data.title}</span>*/}
                        {/*<span>{data.fullTitle}</span>*/}
                        <Rating />
                    </div>
                </div>
            </div>
            <div className={styles.bottomBlock}>
                There is a bottomBlock
            </div>

        </div>
    );
};

export default Product;