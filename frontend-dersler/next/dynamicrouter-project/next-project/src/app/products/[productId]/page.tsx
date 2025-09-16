"use client";
type Props={
   
        productId:string
    
};
type Product={

    id: number,
    title: string,
    price: 0.1,
    description: string,
    category: string,

}
export default async function product({params}:{params: Props}) {
    const res=await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const  prodItem:Product=await res.json()

  
  return (
    
   <>
    {prodItem.title}
   </>
  );
}
