import React, {FC, useEffect, useRef} from 'react';
import styles from "./CatalogItem.module.scss";
import Price from "../../Price/Price";
import Popup from "./Popup/Popup";
import CatalogItemTitle from "./CatalogItemTitle/CatalogItemTitle";
import SeeButton from "./SeeButton/SeeButton";
import cn from "classnames";
import DesktopImage from "../DesktopImage/DesktopImage";
import photo1 from '/public/tom-hardy.jpg'
import photo2 from '/public/favicon.ico'
import photo3 from '/public/sale.png'
import photo4 from '/public/donnie.jpg'
import photo5 from '/public/encanto.jpg'
import photo6 from '/public/charlize.jpeg'
import photo7 from '/public/simu-liu.jpg'
import photo8 from '/public/stephanie.jpg'

export interface ICatalogItemProps {
    setHoveredId: (id: number|null) => void
    elementId: number
    hoveredId: number|null
}

let images = [
    {id: 1, path: photo1.src},
    {id: 2, path: photo2.src},
    {id: 3, path: photo3.src},
    {id: 4, path: photo4.src},
    {id: 5, path: photo5.src},
    {id: 6, path: photo6.src},
    {id: 7, path: photo7.src},
    {id: 8, path: photo8.src},
]

const CatalogItem:FC<ICatalogItemProps> = ({setHoveredId, elementId, hoveredId}) => {
    const catalogItemRef = useRef<HTMLDivElement>(null)
    const popupRef = useRef<HTMLDivElement>(null)

    const mouseEnterCallback = () => {
        setHoveredId(elementId)
    }

    useEffect(() => {
        catalogItemRef?.current?.addEventListener('mouseover', mouseEnterCallback)

        return () => {
            catalogItemRef?.current?.removeEventListener('mouseover', mouseEnterCallback)

        }
    }, [catalogItemRef])

    return (
        <div className={styles.catalogItem}>

            <Popup active={hoveredId === elementId} setHoveredId={setHoveredId} popupRef={popupRef}/>

            <div className={styles.content}>
                <div className={cn(styles.image, {[styles.active]: hoveredId === elementId})} ref={catalogItemRef}>
                    <DesktopImage images={images}/>
                </div>
                <div>
                    <CatalogItemTitle title={'Клик Кляк'} />
                    <Price price={34990} oldPrice={35990} sale={20} priceFontSize={20} width={'90%'} mt={5} />
                    <SeeButton />
                </div>
            </div>
        </div>
    );
};

export default CatalogItem;