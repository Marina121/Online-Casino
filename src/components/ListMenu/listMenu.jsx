import React from 'react';
import "../ListMenu/listMenu.css";

export default function ListMenu() {
  return (
  <div className='list-menu'>
    <div className='container'>
        <ul className='ul-menu'>
            <li className='li-menu'>
                <img className="img-menu" src='./images/visa.png' alt='visa'/>
            </li>
            <li className='li-menu'>
                <img className="img-menu" src='./images/masterCard.png' alt='masterCard'/>
            </li>
            <li className='li-menu'>
                <img className="img-menu" src='./images/sofort.png' alt='sofort'/>
            </li>
            <li className='li-menu'>
                <img className="img-menu" src='./images/paypal.png' alt='paypal'/>
            </li>
            
        </ul>
    </div>
    </div>
  );
}