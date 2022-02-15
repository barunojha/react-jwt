import React, { useState } from "react";
import axios from "axios";
import apiUrl from "../utils";
import { InputField} from "../components/atoms"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    axios.interceptors.request.use(
        (config) => {
          const { origin } = new URL(config.url);
      
          const allowedOrigins = [apiUrl];
      
          const token = localStorage.getItem("token");
      
          if (allowedOrigins.includes(origin)) {
            config.headers.authorization = `Bearer ${token}`;
          }
      
          return config;
        },
      
        (error) => {
          return Promise.reject(error);
        }
      );

      const navigate = useNavigate();
    const storedJwt = localStorage.getItem("token");
  const [jwt, setJwt] = useState(storedJwt || null);
//   const [foods, setFoods] = useState([]);
//   const [fetchError, setFetchError] = useState(null);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

    //POST
    const getJwt = async (value) => {
    const postData = {
      username: value.username, //input from form field username
      password: value.password, //input from form field password
    };

    const res = await axios.post(`${apiUrl}/jwt`, postData);

    if(res.status === 200){
    localStorage.setItem("token" , res.data?.token);

    setJwt(res.data?.token);

      navigate("/loggedIn");
    }
  };

    const handleChange = (e) => {
        e.persist();
        setLoginData((prevValue) => ({
          ...prevValue,
          [e.target.name]: e.target.value,
        }));
      };
    
      function handleSubmit(e) {
        e.preventDefault();
        getJwt(loginData);
      }

    return ( 
        <div className="p-login">
        <section>
            {/* This section is only shown if the user is */}
            <h1>Login Page</h1></section>
        

      <section style={{ marginBottom: "10px" }}>
      {/* Convert this into a form */}
      <form>
        
        <InputField
        name="username"
        label="USERNAME"
        type="text"
        value={loginData.username}
        onChange={handleChange} 
        />

        <InputField
        name="password"
        label="PASSWORD"
        type="password"
        value={loginData.password}
        onChange={handleChange}
        />

      </form>

  {/* Also try to show some error message if login fails */}

  <button type="submit" onClick={handleSubmit}>Login</button>

  {/* Also remove this and show some message instead */}
  {/* {jwt && (
    <pre>
      <code>You are logged in</code>
    </pre>
  )} */}

  </section>
</div>
);
}

export default LoginPage;