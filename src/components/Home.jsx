import { useState , useEffect } from "react"
import React from 'react';
import Card from "./Card";

const Home = () => {
  
  let [intity , setintity] = useState();
  let apiUrl = `https://fakestoreapi.com/products`;
  let data;
  async function pullapi(){
    const res = await fetch(apiUrl);
    const resData = await res.json();
    data = resData.map((products)=>{
      return(
        <Card
          title={products.title}
          image={products.image}
          price={products.price}
        />
      );
    });
    setintity(data);
  }

  useEffect(()=>{
    pullapi();
  },[]);

  return (
    <>
      <Card/>
    </>
  )
}
export default Home;
