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

async function startPage(){
  await createData({id:3, text:'Async'});
  getData();
}
startPage();

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));

async function fetchData(){
  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await res.json();
  console.log(data);

  let res2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  let data2 = await res2.json();
  console.log(data2);
}

fetchData();