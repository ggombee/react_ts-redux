import React from 'react';
import {useHistory} from 'react-router-dom';
import back from 'src/styles/images/test/ico_arr_back2.png';

import 'src/styles/scss/subheader.scss';

function SubHeader(): React.ReactElement {
  const history = useHistory();
  return (
    <header>
      <div className="subheader-area">
        <span onClick={()=>history.goBack()}>
          <img className="back" src={back} alt="뒤로가기" />
        </span>
        <span className="sub-tit">타이틀</span>

      </div>
    </header>
  );
}

export default SubHeader;
