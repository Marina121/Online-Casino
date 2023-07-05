import React from 'react';
import "../ListMenu/listMenu.css";

export default function ListMenu() {
  return (
  <div className='list-menu'>
    <div className='container'>
        <ul className='ul-menu'>
            <li className='li-menu'>
            <a href="https://www.sonnenspiele.de/de/zahlungsanbieter">
                <img className="img-menu" src='./images/visa.png' alt='visa'/>
                </a>
            </li>
            <li className='li-menu'>
            <a href="https://www.sonnenspiele.de/de/zahlungsanbieter">
                <img className="img-menu" src='./images/masterCard.png' alt='masterCard'/>
                </a>
            </li>
            <li className='li-menu'>
            <a href="https://www.sonnenspiele.de/de/zahlungsanbieter">
                <img className="img-menu" src='./images/sofort.png' alt='sofort'/>
                </a>
            </li>
            <li className='li-menu'>
            <a href="https://www.sonnenspiele.de/de/zahlungsanbieter">
                <img className="img-menu" src='./images/paypal.png' alt='paypal'/>
                </a>
            </li>
            
        </ul>
    </div>
    </div>
  );
}