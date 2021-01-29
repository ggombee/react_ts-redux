import React from 'react';
import { Link } from 'react-router-dom';

function SellContainer(): React.ReactElement {
  return (
    <>
      <div>
        <Link to="/">
          <span>구매하기</span>
        </Link>
        <Link to="/sell">
          <span>판매하기</span>
        </Link>
        <div>
          <span>판매하기 페이지</span>
        </div>
      </div>
    </>
  );
}

export default SellContainer;
