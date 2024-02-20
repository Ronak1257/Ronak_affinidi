import Image from "next/image";
import styled from "styled-components";

import { useLocalContent } from "src/lib/hooks/use-local-content";


const LocalLandingPage = ({addToCart}) => {
  const { gender } = useLocalContent();
  const maleproducts = [
    { id: 1, name: "Man Hoodie", price: 30, imageUrl: "man_hoodie.webp" },
    { id: 2, name: "Man T-Shirt", price: 20, imageUrl: "man_tshirt.jpg" },
    { id: 3, name: "Man Shirt", price: 25, imageUrl: "man_shirt.png" },
  ];
  const femaleproducts = [
    { id: 4, name: "Female Hoodie", price: 25, imageUrl: "female_hoodie.jpg" },
    { id: 5, name: "Female T-Shirt", price: 15, imageUrl: "female_tshirt.webp" },
    
  ];
  let products=[];
  const checkgen=()=>{
    if (gender==="male") {
      products=maleproducts;
      return "Men's wear"
    }
    else if(gender==="female"){
      products=femaleproducts;
      return "Woman's wear"
    }
    else{
      products=maleproducts.concat(femaleproducts);
      return "Men's and Woman's wear"
    }
  }

  return (
    <>
    <div className="px-4 py-4">
      <h1 className="pb-8 text-5xl font-bold text-center p-2.5">{checkgen()}</h1>
      <div className="flex flex-row flex-wrap gap-5 rounded-lg justify-center  p-5">
        {products.map((product) => (
          <div key={product.id} className="flex  flex-col items-center justify-center  bg-green-300 border-blue-100 rounded-lg text-center w-80">
            <div>
              <img className="max-h-60 p-4 rounded-3xl h-auto " src={product.imageUrl} alt={product.name} />
            </div>
            <div>
              <h2 className="text-2xl my-2.5">{product.name}</h2>
              <p className="text-xl my-2.5">${product.price}</p>
              <button className="bg-blue-400 p-4 mb-4 rounded-xl" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default LocalLandingPage;
