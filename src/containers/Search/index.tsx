import React, { useState,useEffect, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/stores/rootReducer';
import {selectSearchList} from 'src/stores/search/action';
import { useHistory } from 'react-router-dom';
import search from 'src/styles/images/test/search.png';

import {SearchGoodData} from 'src/stores/search/__mocks__/mockData';


// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from 'src/stores/rootReducer';

import 'src/styles/scss/search.scss';

function Search(): React.ReactElement {
  
  const history = useHistory();

  const dispatch = useDispatch();
  
   const {SearchGoodList} = useSelector((state: RootState) => {
     return {
      SearchGoodList: state.search.SearchGoodList,
      
   }});

   const{
    name
   }= SearchGoodList;
   

   const selectSearchGoodList = useCallback(() => {
    dispatch(selectSearchList(SearchGoodData));
  }, [dispatch]);
  
   useEffect(() => {
    selectSearchGoodList();
   }, [selectSearchList]);

  

   const [keyword, setKeyword]= useState("");
  


   
  

  const handleClick =()=>{
   
 
   const test = SearchGoodList.find(SearchGoodList => SearchGoodList.name.toLowerCase().includes(keyword.toLowerCase()));
   console.log("test:",test);


   if(test){
   dispatch(selectSearchList([test]));
  } else {
    alert('검색 결과가 없습니다.');
    dispatch(selectSearchList([]));
  }
  }
  
 

   const handleChange = (e)=>{
    
     setKeyword(e.target.value);
    
   }
  

  return (


    
    <div className="search">
      <input type="text" onChange={handleChange} value={keyword} placeholder="검색어를 입력 해 주세요."  />
      <span className="search-btn">
        <button onClick={handleClick} >검색</button> 
      </span>
      <span onClick={()=>{history.push({pathname:'/'})}}>
          <button>메인페이지 이동</button>
        </span>
      {SearchGoodList.length >0 && SearchGoodList.map((good,i)=>{
      return(
        <div key={i}>
          <span>
           {good.name}
           </span>
           

          </div>
          
      );
      })}
    </div>
  );
}

export default Search;
