import React from 'react';
import "../Menu/menu.css";

export default function Menu() {
  return (
    <app-game-navigation-menu>
    <div className='menu-list'>
  <div className='container'>
    <div className='menus'>
        <div className='menu-inn'>
        <a className="menus" href="../products">Alle spiele</a>
        </div>
        <div className='menu-inn'>
        <a className="menus" href="../products">Zuletzt gespielte Spiele</a>
        </div>
        <div className='menu-inn'>
        <a className="menus" href="../products">Neueste spiele</a>
        </div>
        <div className='menu-inn'>
        <a className="menus" href="../products">Merkur</a>
        </div>
        <div className='menu-inn'>
        <a className="menus" href="../products">Novomatic</a>
        </div>
        <div className='menu-inn'>
        <a className="menus" href="../products">AMATIC</a>
        </div>
        <div className='menu-inn'>
        <a className="menus" href="../products">GAMOMAT</a>
        </div> 
    </div>

  </div>
  </div>
  </app-game-navigation-menu>
  );
}