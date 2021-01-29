import React from 'react';
import { Link } from 'react-router-dom';
// import MainImageBanner from "../../components/MainImageBanner";

function PurchaseContainer(): React.ReactElement {
  // const history = useHistory();
  // const { tabIndex, setTabIndex } = useState("1");

  // const handleClickTab = (url) => {
  //   setTabIndex("2");
  //   history.pushState({
  //     pathname: url,
  //   });
  // };

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
          <span>구매하기 페이지</span>
        </div>
      </div>
    </>
  );
}

export default PurchaseContainer;
