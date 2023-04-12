import React from 'react';
import './Product.css';
import image from './images/Lillakortet.png'
// import imap from './images/Storakortet.png'
import { Button } from 'react-bootstrap';

const Product = (props) => {
    const { name, price, categories } = props.product;
    return (

        <div className="container">
            <div className="product-card">
                

                <img className="product-img" src={image} alt="" />
                
                <h5 className="product-title">{name}</h5>
                <h5 className="price">Price: ${price}</h5>

                {/* <Button
                className="btn btn-success" style={{ backgroundColor:"orange"}}> Add to Cart</Button> */}
            </div>
            
                    <div className='email-box'>
                            <h4> Sign Up to our Newsletter</h4>
                        <div className="form-group">
                            <input name="Your Email" type="email" className="form-control" placeholder="Your Email" />
                        </div>
                        <Button style={{ backgroundColor:"orange"}}> Sign Up</Button> 
                    </div>
        </div>
    );
};

export default Product;
