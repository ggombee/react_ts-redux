import React from 'react';
import { useLocation } from 'react-router-dom';
import BasePage from './BasePage';
import Header from 'src/component/common/Header';
import SubHeader from 'src/component/common/SubHeader';
import Footer from 'src/component/common/Footer';

import 'src/styles/scss/reset.scss';

function App(): React.ReactElement {
  const location = useLocation();
  //헤더, 푸터, 메인팝업, 메인페이지
  return (
    <section className="wrap">
      {location.pathname === '/' || location.pathname === '/sell' ? (
        <Header />
      ) : (
        <SubHeader />
      )}
      <BasePage />
      <Footer />
    </section>
  );
}

export default App;
