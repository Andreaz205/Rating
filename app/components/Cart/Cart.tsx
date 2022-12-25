import React, {useState} from 'react';
import styles from './Cart.module.scss'
import {AiOutlineClose} from "react-icons/ai";
import Price from "../Price/Price";

const Cart = () => {
    const [deliveryType, setDeliveryType] = useState<'delivery'|'pickup'>('delivery')

    const handleRadioClick = () => {

    }
    return (
    <>
        <div className={styles.cartWrapper}>
            <div className={styles.header}>
                <span>
                  Корзина
                </span>
            </div>
            <div className={styles.cart}>

                <div className={styles.cartItems}>

                    <div className={styles.cartItem}>
                        <div className={styles.leftArea}>
                            <div className={styles.image}></div>
                        </div>
                        <div className={styles.rightArea}>
                            <div className={styles.info}>
                                <div className={styles.itemHeader}>Диван Финка</div>
                                <div className={styles.size}>Размер: 212 см х 151 см х 121 см  </div>
                                <div className={styles.values}>Ткань: Нелла 089 </div>
                                <div className={styles.values}>Наполнение: ППУ</div>
                            </div>
                            <div className={styles.operations}>
                                <div className={styles.deleteButton}>
                                    <button>
                                        <span>Удалить</span>
                                        <AiOutlineClose />


                                    </button>
                                </div>
                                <div className={styles.countPrice}>
                                    <div className={styles.count}>
                                        <button className={styles.decrementButton}>
                                            -
                                        </button>
                                        <div className={styles.number}>
                                            1
                                        </div>
                                        <button className={styles.incrementButton}>
                                            +
                                        </button>
                                    </div>
                                    <div className={styles.price}>
                                        34990 P
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.cartItem}>
                        <div className={styles.leftArea}>
                            <div className={styles.image}></div>
                        </div>
                        <div className={styles.rightArea}>
                            <div className={styles.info}>
                                <div className={styles.itemHeader}>Диван Финка</div>
                                <div className={styles.size}>Размер: 212 см х 151 см х 121 см  </div>
                                <div className={styles.values}>Ткань: Нелла 089 </div>
                                <div className={styles.values}>Наполнение: ППУ</div>
                            </div>
                            <div className={styles.operations}>
                                <div className={styles.deleteButton}>
                                    <button>
                                        <span>Удалить</span>
                                        <AiOutlineClose />


                                    </button>
                                </div>
                                <div className={styles.countPrice}>
                                    <div className={styles.count}>
                                        <button className={styles.decrementButton}>
                                            -
                                        </button>
                                        <div className={styles.number}>
                                            1
                                        </div>
                                        <button className={styles.incrementButton}>
                                            +
                                        </button>
                                    </div>
                                    <div className={styles.price}>
                                        34990 P
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.cartItem}>
                        <div className={styles.leftArea}>
                            <div className={styles.image}></div>
                        </div>
                        <div className={styles.rightArea}>
                            <div className={styles.info}>
                                <div className={styles.itemHeader}>Диван Финка</div>
                                <div className={styles.size}>Размер: 212 см х 151 см х 121 см  </div>
                                <div className={styles.values}>Ткань: Нелла 089 </div>
                                <div className={styles.values}>Наполнение: ППУ</div>
                            </div>
                            <div className={styles.operations}>
                                <div className={styles.deleteButton}>
                                    <button>
                                        <span>Удалить</span>
                                        <AiOutlineClose />


                                    </button>
                                </div>
                                <div className={styles.countPrice}>
                                    <div className={styles.count}>
                                        <button className={styles.decrementButton}>
                                            -
                                        </button>
                                        <div className={styles.number}>
                                            1
                                        </div>
                                        <button className={styles.incrementButton}>
                                            +
                                        </button>
                                    </div>
                                    <div className={styles.price}>
                                        34990 P
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.cartItem}>
                        <div className={styles.leftArea}>
                            <div className={styles.image}></div>
                        </div>
                        <div className={styles.rightArea}>
                            <div className={styles.info}>
                                <div className={styles.itemHeader}>Диван Финка</div>
                                <div className={styles.size}>Размер: 212 см х 151 см х 121 см  </div>
                                <div className={styles.values}>Ткань: Нелла 089 </div>
                                <div className={styles.values}>Наполнение: ППУ</div>
                            </div>
                            <div className={styles.operations}>
                                <div className={styles.deleteButton}>
                                    <button>
                                        <span>Удалить</span>
                                        <AiOutlineClose />


                                    </button>
                                </div>
                                <div className={styles.countPrice}>
                                    <div className={styles.count}>
                                        <button className={styles.decrementButton}>
                                            -
                                        </button>
                                        <div className={styles.number}>
                                            1
                                        </div>
                                        <button className={styles.incrementButton}>
                                            +
                                        </button>
                                    </div>
                                    <div className={styles.price}>
                                        34990 P
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={styles.payment}>
                    <div className={styles.summary}>Итого 2 товара на сумму</div>
                    <Price price={34990} oldPrice={35990} sale={20}/>

                    <div className={styles.delivery}>
                            <span>
                                Стоимость доставки
                            </span>
                        <div className={styles.deliveryPrice}>
                            + 700 P
                        </div>
                    </div>
                    <button className={styles.orderButton}>
                        Оформить заказ
                    </button>
                </div>
            </div>

            <div className={styles.questionnaire}>
                <div className={styles.blank}>

                    <div className={styles.forms}>
                        <span className={styles.blankHeader}>Заполните имя получателя</span>
                        <div className={styles.flex}>
                            <div className={styles.formsArea}>
                                <div className={styles.additional}>Участник Золотое Руно</div>
                                <div className={styles.form}>
                                    <span>Имя</span>
                                    <input type="text" className={styles.blankInput}/>
                                </div>
                                <div className={styles.form}>
                                    <span>Телефон</span>
                                    <input type="text" className={styles.blankInput}/>
                                </div>
                                <div className={styles.form}>
                                    <span>Почта</span>
                                    <input type="text" className={styles.blankInput}/>
                                </div>
                                <div className={styles.deliveryTitle}>Выберите способ доставки</div>
                                <div className={styles.radioButtons}>
                                    <div className={styles.radio}>
                                        <input type="radio" id='delivery-first' name='delivery' checked={deliveryType === 'delivery'}/>
                                        <label className={styles.radioLabel} form='delivery-first' onClick={(e) => setDeliveryType('delivery')}>Доставка</label>
                                    </div>
                                    <div className={styles.radio}>
                                        <input type="radio" id='delivery-second' name='delivery' checked={deliveryType === 'pickup'}/>
                                        <label form='delivery-second' className={styles.radioLabel} onClick={(e) => setDeliveryType('pickup')}>Самовывоз</label>
                                    </div>
                                </div>
                                <div className={styles.form}>
                                    <span>Адрес</span>
                                    <input type="text" className={styles.blankInput}/>
                                </div>
                                <div className={styles.form}>
                                    <span>Добавь</span>
                                    <input type="text" className={styles.blankInput}/>
                                </div>
                                <div className={styles.min}>
                                    Оплата при получении производится после осмотра товаров. Курьер принимает только наличные средства. Пожалуйста, подготовьте сумму без сдачи.
                                </div>
                                <button className={styles.confirmedButton}>
                                    Подтверждаю заказ
                                </button>
                            </div>
                            <div className={styles.deliveryArea}>
                                <div className={styles.deliveryBlock}>
                                    <div className={styles.title}>Доставка</div>
                                    <div className={styles.item}>
                                        <span>по Челябинску</span>
                                        <span>
                                            700 P
                                        </span>
                                    </div>
                                    <div className={styles.item}>
                                        <span>по России</span>
                                        <span>
                                           <span className={styles.pre}>от</span>  1000 P
                                        </span>
                                    </div>
                                    <div className={styles.item}>
                                        <span>Самовывоз</span>
                                        <span className={styles.free}>
                                            Бесплатно
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Cart;