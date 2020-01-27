import React from 'react'

import './style.sass'

export default function (props) {
    const { lang, text } = props
    return (
        <>
            <div className="price-container">
                <h1>Price</h1>
                <div className="price-content-container">


                    <div className="price-table-container">
                        <div className="price-table-container__content ">
                            <h3 className="price-table-container__content title firstTitle">Quota Mensual Infantil</h3>
                            <ul className="list">
                                <li>
                                    <p>1 sessió mes</p>
                                    <p>20€</p>
                                </li>
                                <li>
                                    <p>2 sessions mes</p>
                                    <p>40€</p>
                                </li>
                            </ul>
                        </div>
                        <div className="price-table-container__content center-table">
                            <h3 className="price-table-container__content title secondTitle">Quotes Basiques</h3>
                            <ul className="list">
                                <li>
                                    <p>9 sessions mes <span>40€</span></p>
                                </li>
                                <li>
                                    <p>9 sessions mes (matins) <span>30€</span></p>
                                </li>
                                <li>
                                    <p>13 sessions mes <span>45€</span></p>
                                </li>
                                <li>
                                    <p>Il·limitat</p>
                                    <p>58€</p>
                                </li>
                                <li>
                                    <p>Il·limitat (matins)</p>
                                    <p>40€</p>
                                </li>

                            </ul>
                        </div>
                        <div className="price-table-container__content ">
                            <h3 className="price-table-container__content title thirdTitle">Bonos</h3>
                            <ul className="list">
                                <li>
                                    <p>1 sessio</p>
                                    <p>8€</p>
                                </li>
                                <li>
                                    <p>5 sessions</p>
                                    <p>35€</p>
                                </li>
                                <li>
                                    <p>10 sessions</p>
                                    <p>60€</p>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="price-offer-container">
                        <p>Estudiants, Jubilats, Agents ordre public, familiars de socis <span>-10%</span></p>
                    </div>


                    <div className="price-info-container">
                        <h3 className="price-info-container__matricula">Matricula 40€</h3>
                        <p className="price-info-container__iva">IVA inclós en totes les quotes</p>
                    </div>


                </div>
            </div>
        </>
    )
}