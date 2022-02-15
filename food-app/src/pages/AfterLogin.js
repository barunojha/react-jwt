import React, { useState } from "react";
import apiUrl from "../utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AfterLogin() {

  const navigate = useNavigate();
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

  
    const [foods, setFoods] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    //GET
  const getFoods = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/foods`);

      setFoods(data);

      setFetchError(null);
    } 
    catch(err) {
      setFetchError(err.message);
    }
  };

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

    return ( 
        <div><h1>AfterLogin</h1>
            <section>

{/* This section should only be displayed if logged in */}
  <button onClick={() => getFoods()}>Get Foods</button>

  <ul>
    {foods.map((food, i) => (
        <li>{food.description}</li>
    ))}
  </ul>

  {fetchError && <p style = {{ color: "red"}}>{fetchError}</p>}

  <button onClick={logout}>LOGOUT</button>
</section>
        </div>
     );
}

export default AfterLogin;