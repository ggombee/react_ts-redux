import React from 'react';
import {useHistory} from 'react-router-dom';

import chatimg from 'src/styles/images/test/chatting.png';
import mypageicon from 'src/styles/images/test/mypageicon.png';
import search from 'src/styles/images/test/search.png';

import 'src/styles/scss/header.scss';

function Header(): React.ReactElement {
  const history = useHistory();
  return (
    <header>
      <div className="header-area" >
        <span onClick={()=>{history.push({pathname:'/search'})}}>
          <img src={search} alt="검색" />
        </span>
        <span>
          <img src={mypageicon} alt="마이페이지" />
        </span>
        <span>
          <img src={chatimg} alt="채팅" />
        </span>
      </div>
    </header>
  );
}

export default Header;
