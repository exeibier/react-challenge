const URL_BASE = 'https://medium-api-post.mybluemix.net/'

function LogIn(data, callback) {
    const URL = `${URL_BASE}auth/login`;
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
    })
      .then(response => response.json())
      .then(data =>{
        callback(data)
      }) ;
  }
  function GetPosts(token) {
    const URL = `${URL_BASE}posts`;
    return fetch(URL, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": token
      },
      mode: "cors",
    })
  }
  
  function GetPost(token, id) {
    const URL = `${URL_BASE}posts/${id}`;
    return fetch(URL, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": token
      },
      mode: "cors",
    })
  }
  
  export { LogIn, GetPosts, GetPost };



