import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Yinon and Shai's Pokemon Retro Shop</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}