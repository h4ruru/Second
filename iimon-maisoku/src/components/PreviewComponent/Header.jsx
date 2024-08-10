// Header.js
import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__left">
        <p>コメント</p>
        <h1 className="header__property-name">株式会社iimon</h1>
        <div className="header__address">東京都中央区日本橋箱崎町１−２ The Shore 日本橋茅場町 5階</div>
      </div>
      <div className="header__right">
        <p>1LDK</p>
        <p>アパート</p>
        <span className="header__rent">2000万円</span>
      </div>
    </div>
  </header>
);

export default Header;
