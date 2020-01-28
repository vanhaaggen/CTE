import React from 'react'

import './style.sass'

export default function (props) {
    const { lang, text } = props

    const { sectionPrice: { child, basic, bond, offer, info } } = text[`${lang}`]

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
                                    <p>{child.content1.text}</p>
                                    <p>{child.content1.price}</p>
                                </li>
                                <li>
                                    <p>{child.content2.text}</p>
                                    <p>{child.content2.price}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="price-table-container__content center-table">
                            <h3 className="price-table-container__content title secondTitle">Quotes Basiques</h3>
                            <ul className="list">
                                <li>
                                    <p>{basic.content1.text} <span>{basic.content1.price}</span></p>
                                </li>
                                <li>
                                    <p>{basic.content2.text} <span>{basic.content2.price}</span></p>
                                </li>
                                <li>
                                    <p>{basic.content3.text}<span>{basic.content3.price}</span></p>
                                </li>
                                <li>
                                    <p>{basic.content4.text}</p>
                                    <p>{basic.content4.price}</p>
                                </li>
                                <li>
                                    <p>{basic.content5.text}</p>
                                    <p>{basic.content5.price}</p>
                                </li>

                            </ul>
                        </div>
                        <div className="price-table-container__content ">
                            <h3 className="price-table-container__content title thirdTitle">Bonos</h3>
                            <ul className="list">
                                <li>
                                    <p>{bond.content1.text}</p>
                                    <p>{bond.content1.price}</p>
                                </li>
                                <li>
                                    <p>{bond.content2.text}</p>
                                    <p>{bond.content2.price}</p>
                                </li>
                                <li>
                                    <p>{bond.content3.text}</p>
                                    <p>{bond.content3.price}</p>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="price-offer-container">
                        <p>{offer.text} <span>{offer.discount}</span></p>
                    </div>


                    <div className="price-info-container">
                        <h3 className="price-info-container__matricula">{info.text} <span>{info.price}</span></h3>
                        <p className="price-info-container__iva">{info.vat}</p>
                    </div>


                </div>
            </div>
        </>
    )
}