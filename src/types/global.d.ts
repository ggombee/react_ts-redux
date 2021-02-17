import {} from "express";
declare global {
  //앱 브릿지 타입선언
  interface Window {
    base?: {
      getCommToken?: any;
    };
    _commToken?: any;
  }
}
