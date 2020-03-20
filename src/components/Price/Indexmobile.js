import React from 'react'
import Accordion from './Accordion'

import './IndexMobile.sass'

export default function ({ text, lang }) {
    const { sectionPrice: { fee, child, basic, bond } } = text[`${lang}`]
    return (
        <>

            <Accordion title={fee.child}>
                <div className="list-background-m">
                    <ul className="list-m">
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
            </Accordion>

            <Accordion title={fee.basic}>
                <div className="list-background-m">
                    <ul className="list-m">
                        <li>
                            <p>{basic.content1.text} <span>{basic.content1.price}</span></p>
                        </li>
                        <li>
                            <p>{basic.content2.text} <span>{basic.content2.price}</span></p>
                        </li>
                        <li>
                            <p>{basic.content3.text} <span>{basic.content3.price}</span></p>
                        </li>
                    </ul>
                    <ul className="list-m list-secondTitle-offer-m">
                        <li>
                            <p className="list-secondTitle-offer-text-m">{basic.content4.text}</p>
                            <p className="list-secondTitle-offer-price-m">{basic.content4.price}</p>
                        </li>
                        <li>
                            <p className="list-secondTitle-offer-m--line1-m divisor-line-m">{basic.content5.text}</p>
                            <p className="list-secondTitle-offer-m--line1-m">{basic.content5.price}</p>
                        </li>
                    </ul>
                </div>
            </Accordion>

            <Accordion title={fee.ticket}>
                <div className="list-background-m">
                    <ul className="list-m">
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
            </Accordion>

        </>
    )
}
