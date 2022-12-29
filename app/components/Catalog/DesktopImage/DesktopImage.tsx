import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './DesktopImage.module.scss'
import {IImage} from "../../screens/product/Product";
import useWindowSize from "../../../hooks/useWindowSize";
import Image from "next/image";
import Photo from "./Photo/Photo";
import Area from "./Area/Area";

const DesktopImage:FC<{images: IImage[]}>= ({images}) => {
    const {width, height} = useWindowSize()
    const areaRef = useRef<HTMLDivElement>(null)
    const [activeId, setActiveId] = useState(0)
    console.log(activeId)


    useEffect(() => {
        if (width && areaRef && images && images.length) {
            // areaRef.current!.style.cssText = `width: ${100/images.length}%; border: 1px solid black; height: 100%;`
        }
    }, [width, areaRef, images])
    return (
        <div className={styles.wrapper} ref={areaRef}>
            <div className={styles.areas}>
                {images.map(image => (
                    <Area width={100/images.length} key={image.id} setActiveId={setActiveId} elementId={image.id}/>
                ))}
            </div>
            {images.map(image => (
                <Photo key={image.id} image={image} width={width} activeId={activeId}/>
            ))}
        </div>
    );
};

export default DesktopImage;