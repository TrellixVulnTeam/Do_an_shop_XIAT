import React, { Component } from 'react'

const Footer = ()=>
{
    return(
        <div className="footer">
            <div className="rowCus">
                <div className="col-md-3Cus">
                    <h5>Products</h5>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>Product Help</p>
                </div>
                <div className="col-md-3Cus">
                    <h5>Services</h5>
                    <p>Help Center</p>
                    <p>Contact Us</p>   
                    <p>Product Help</p>
                </div>
                <div className="col-md-3Cus">
                    <h5>Support</h5>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>Product Help</p>
                </div>
                <div className="col-md-3Cus componentLogo">
                    <h2>LGSHOP</h2>
                    <div className="icon">
                        <i class="fab fa-facebook-square icon_grid"></i>
                        <i class="fab fa-instagram-square icon_grid"></i>
                        <i class="fab fa-youtube icon_grid"></i>
                        <i class="fab fa-twitter-square icon_grid"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
