import React from 'react'
import "./footer.css"

 const Footer = () => {
  return (
    <>
        <footer>
            <div className="container grid2">
                <div className="box">
                    <h1>Bonik</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, at. Saepe cupiditate eaque omnis, pariatur numquam id nobis doloremque esse sint, ab totam velit error inventore, aut quas quasi consequuntur?</p>
                    <div className="icon d_flex">
                        <div className="img d_flex">
                            <i className="fa-brands fa-google-play"></i>
                                <span>Google play</span>
                        </div>
                        <div className="img d_flex">
                            <i className="fa-brands fa-app-store-ios">
                                <span>App Store</span>
                            </i>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <h2>About Us</h2>
                    <ul>
                        
                        <li>Carrers</li>
                        <li>Our stores</li>
                        <li>Our Cares</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Customer Care</h2>
                    <ul>
                        <li>Help center</li>
                        <li>How to buy</li>
                        <li>Track your Order</li>
                        <li>Coporate & bulk Purchasing</li>
                        <li>Returns & Funds</li>
                    </ul>
                </div>
                <div className="box">
                <h2>Contact Us</h2>
                    <ul>
                    <li>44 Bloc 13,Qu Riyad </li>
                    <li>Email: yahya.lek99@gmail.com</li>
                    <li>Phone: +212 6 41 29 24 90</li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}
export default Footer
