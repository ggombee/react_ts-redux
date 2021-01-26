import React from "react";
import { Link } from "react-router-dom";
import chatimg from "../../../styles/images/chatting.png";
import mypageicon from "../../../styles/images/mypageicon.png";
import search from "../../../styles/images/search.png";

// const _mainSlides = [
//   {
//     index: 0,
//     menuName: <em>구매하기</em>,
//     // component: <MyStory />,
//     isActive: false,
//   },
//   {
//     index: 1,
//     menuName: <em>판매하기</em>,
//     // component: <RegularStore />,
//     isActive: false,
//   },
// ];

function Header() {
  return (
    <>
      <header>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <span>
            <img src={search}></img>
          </span>
          &nbsp; &nbsp;
          <span>
            <img src={mypageicon}></img>
          </span>
          &nbsp; &nbsp;
          <span>
            <img src={chatimg}></img>
          </span>
        </div>
        {/* <Link to="/">
            <button>Home</button>
        </Link>
        <Link to="/auth">
          <button>Login</button>
        </Link> */}
      </header>
    </>
  );
}

export default Header;
