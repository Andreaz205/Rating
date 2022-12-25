import React, {FC, useEffect} from 'react';
import cn from "classnames";
import styles from "./Popup.module.scss";
import CatalogItemTitle from "../CatalogItemTitle/CatalogItemTitle";
import Price from "../../../Price/Price";
import SeeButton from "../SeeButton/SeeButton";

export interface IPopupProps {
    active: boolean,
    setHoveredId: (id: null) => void,
    popupRef: InstanceType<any>
}

const Popup: FC<IPopupProps> = ({
   active,
   setHoveredId,
   popupRef
}) => {

    useEffect(() => {
        popupRef?.current?.addEventListener('mouseleave', mouseLeaveCallback)
        return () => {
            popupRef?.current?.removeEventListener('mouseleave', mouseLeaveCallback)
        }
    }, [popupRef])

    const mouseLeaveCallback = () => {
        setHoveredId(null)
    }

    return (
        <div className={cn(styles.hovered, {[styles.active]: active})} ref={popupRef}>
            <div className={styles.verticalIndent}></div>
            <div className={styles.popupContentWrapper}>
                <CatalogItemTitle title={'Клик Кляк'}/>
                <Price price={34990} oldPrice={35990} sale={20} priceFontSize={20} width={'90%'} mt={5}/>
                <SeeButton/>
                <div className={styles.sizeTitle}>Размер</div>
                <div className={styles.sizes}>
                    <div className={styles.sizeHeaders}>
                        <div className={styles.headerItem}>Длина</div>
                        <div className={styles.headerItem}>Ширина</div>
                        <div className={styles.headerItem}>Высота</div>
                    </div>
                    <div className={styles.sizeValues}>
                        <div className={styles.value}>210 см</div>
                        <div className={styles.xSpace}>х</div>
                        <div className={styles.value}>150 см</div>
                        <div className={styles.xSpace}>х</div>
                        <div className={styles.value}>50 см</div>
                    </div>
                    <div className={styles.line}></div>
                    <button className={styles.cartButton}>
                        В корзину
                    </button>
                    <div className={styles.details}>
                        подробнее о товаре
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Popup;