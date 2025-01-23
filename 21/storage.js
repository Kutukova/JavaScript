window.onload = function(){
  document.cookie = "user=Tom; SameSite=None; Secure";
  document.cookie = "user=Den; SameSite=None; Secure";
  document.cookie = "userPro=Bob; SameSite=Strict;expires=31 Dec 2024 23:59:59 GMT; Secure";
  document.cookie = "userMaxAge=Age; SameSite=None; Secure; max-age=3600";
  document.cookie = "userMaxAge=; SameSite=None; Secure; max-age=0";
  function showCookie(){
      let allCookie = document.cookie;
      console.log(allCookie);
  }
  showCookie();

  window.localStorage.setItem('UserMenuState', 'False');
  window.localStorage["keyD"] = "test text value";
  window.localStorage.sipmleKey = "Simple";

  console.log(window.localStorage.getItem("sipmleKey"));
  console.log(window.localStorage.keyD);
  console.log(window.localStorage["UserMenuState"]);

  // window.localStorage.user = {userName:'Tom'};
  window.localStorage.user = JSON.stringify({userName:'Tom'});
  let parseData = JSON.parse(window.localStorage.getItem("user"));
  console.log(parseData);

  window.localStorage.removeItem("sipmleKey");
  window.localStorage.removeItem("timer");
  window.localStorage.clear();

  window.localStorage["keyD"] = "test text value";
  console.log(window.localStorage.length);

  //Sessinon storage
  window.sessionStorage.setItem('Item', 'Item value');
  window.sessionStorage.keyValue = 'Key info';
  window.sessionStorage['dynamic'] = 'Info';
  console.log('Session storage');
  console.log(window.sessionStorage.getItem('keyValue'));
  console.log(window.sessionStorage.Item);
  console.log(window.sessionStorage['dynamic']);

  window.sessionStorage.removeItem('keyValue');
  window.sessionStorage.clear();


}