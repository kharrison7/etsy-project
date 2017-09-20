import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="upper-nav">
          <div className="upper-nav-left">
          <div> <h1 className="etsy-font"> Etsy </h1></div>
          <div className = "search-bar">
          <input className="search-input clearable dropdown-relative-positioned rounded" type="text" placeholder="Search for items or shops"></input>
          <button className="btn btn-primary" type="submit" value="Search">Search</button>
        </div>
          </div>
            <div className="upper-nav-right">
              <div><p className="header-font">Sell on Etsy</p></div>
              <div><p className="header-font">Register</p></div>
              <div><button className="sign-in">Sign In</button></div>
              <div> <i className="fa fa-shopping-cart" aria-hidden="true">Cart</i></div>
            </div>
        </div>

                <div className="lower-nav">
                  <ul className="header-list " id="button">
                  <li className="header-list-item">Clothing & Accessories</li>
                  <li className="header-list-item">Jewelry</li>
                  <li className="header-list-item">Craft Supplies & Tools</li>
                  <li className="header-list-item">Weddings</li>
                  <li className="header-list-item">Weddings</li>
                  <li className="header-list-item">Entertainment</li>
                  <li className="header-list-item">Home & Living</li>
                  <li className="header-list-item">Kids & Baby</li>
                  <li className="header-list-item">Vintage</li>
                  </ul>
                </div>



      </div>

    )
  }
};
