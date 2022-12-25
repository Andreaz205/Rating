import React, {FC, useEffect, useRef} from 'react';
import styles from "./CatalogItem.module.scss";
import Price from "../../Price/Price";
import Popup from "./Popup/Popup";
import CatalogItemTitle from "./CatalogItemTitle/CatalogItemTitle";
import SeeButton from "./SeeButton/SeeButton";
import cn from "classnames";

export interface ICatalogItemProps {
    setHoveredId: (id: number|null) => void
    elementId: number
    hoveredId: number|null
}

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
                <div className={cn(styles.image, {[styles.active]: hoveredId === elementId})} ref={catalogItemRef}></div>
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