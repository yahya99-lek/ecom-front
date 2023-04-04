import React from 'react'
import Dcard from './Dcard'

const Discount = () => {
  return (
    <>
        <section className="sicount background newarrivals">
            <div className="container">
            <div className="heading d_flex">
                    <div className="heading row f_flex">
                    <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                            <h2> BigDiscounts</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View all</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <Dcard />
            </div>
        </section>
    </>
  )
}

export default Discount