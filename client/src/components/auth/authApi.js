import { useNavigate } from "react-router-dom";


export function createUser(userdata) {
  return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8000/users', {
            method: "POST",
            body: JSON.stringify(userdata),
            headers: {'content-type' : 'application/json'}

      })
      const data = await response.json()
      resolve({data})
    }
    );
}
  

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch(`http://localhost:8000/users/email/${email}`);
    const data = await response.json();
  

    if (data) {
      if (password === data.user.password) {
        localStorage.setItem("islogin", 'success')
        localStorage.setItem("user", JSON.stringify(data.user));
        resolve({ data: data.user });
      } else {
        localStorage.setItem("logout",'failed')
        reject({ message: 'wrong credentials' });
      }
    } else {
      localStorage.setItem("logout",'failed')
      reject({ message: 'user not found' });
    }
  });
}

  
export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/users/' + update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}


export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: { 'content-type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

    // TODO: on server it will only return some info of user (not password)
  });
}

