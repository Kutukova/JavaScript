const posts= [
  {id:1, text:'Hello'},
  {id:2, text:'World'}
]

function getData(){
  setTimeout(()=>{
      let dataItem = '';
      posts.forEach((post)=>{
          dataItem+=`<p>${post.text}</p>`
      });
      document.body.innerHTML = dataItem;
  }, 2000)
}

// function createData(post, callBackFn){
//     setTimeout(()=>{
//         posts.push(post);
//         callBackFn();
//     }, 3000);
// }
function createData(post){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          posts.push(post);
          let error = false;
          if(!error){
              resolve();
          }
          else{
              reject('Error in promise with write new post');
          }
          
      }, 3000);
  });
}
createData({id:3, text:'World new post'}).then(getData).catch(err=>console.log(err));
// getData();
// createData({id:3, text:'World new post'}, getData);