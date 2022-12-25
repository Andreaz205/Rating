import React, {FC} from 'react';
import {IImage} from "../screens/product/Product";
import styles from "./VariantGallery.module.scss";
import Image from "next/image";
import TomHardi from "../../../public/tom-hardy.jpg";

const VariantGallery:FC<{ images?: IImage[] }> = ({images}) => {
    return (
        <div className={styles.gallery}>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image src={TomHardi.src} alt=''  width='800' height='550'/>
                </div>
            </div>
            <div className={styles.rightBlock}>

            </div>
        </div>
    );
};

export default VariantGallery;