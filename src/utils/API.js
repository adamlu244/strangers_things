const cohortName = "2209-ftb-pt-web-pt";
const BASEURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

// POST Register endpoint

export async function registerUser(user) {
  try {
    const response = await fetch(`${BASEURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  }
}

// POST Login endpoint

export async function loginUser(user) {
  try {
    const response = await fetch(`${BASEURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  } 
}


// GET Posts endpoint

export async function fetchPostsList(token) {
  // console.log(token);
  try {
    let response;
    if(token) {
      response = await fetch(`${BASEURL}/posts`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
    } else {
      response = await fetch(`${BASEURL}/posts`);
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch(err) {
    console.error(err);
  }
}


// POST Posts endpoint

export async function createPosts(post, token) {
  // console.log(post, "THIS IS USER");
  try {
    const response = await fetch(`${BASEURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(post)
    });
    const data = await response.json();
    // console.log(data);
    return data;
  } catch(err) {
    console.error(err);
  }
}
// console.log(createPosts());


// GET me endpoint

export async function fetchMe(token) {
  if (token) {
    try {
      const response = await fetch(`${BASEURL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await response.json();
      // console.log(data);
      return data;
    } catch(err) {
      console.error(err);
    }
  } else {
    return null;
  }
}
// console.log(fetchMe());


// DELETE Posts and ID endpoint

export async function deletePosts(postId, token) {
  // console.log(postId, "this is post");
  try {
    const response = await fetch(`${BASEURL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    // console.log(token, "this token");
    // console.log(data, "this data");
    return data;
  } catch(err) {
    console.error(err);
  }
}
// console.log(deletePosts());


// POST Messages endpoint

 export async function sendMessages(message, postId, token) {
  // console.log(message, "this is message");
  // console.log(postId, "this is post");
  // console.log(token, "this is token");
  try {
    const response = await fetch(`${BASEURL}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(message)
    });
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err);
  }
}

