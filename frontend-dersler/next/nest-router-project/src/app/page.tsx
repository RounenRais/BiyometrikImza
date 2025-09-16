'use client';
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  type PokeItem = { name: string; url: string };

  const [data,setData]=useState<PokeItem[]>([])
  async function listPoke(){
    const res=await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    const resD=await res.json()
    setData(resD.results)
  }
  return (
    <div><button onClick={listPoke}>Fetch Pokemons</button>
        <ul className="grid" >
          
            {data.map((item,index)=>(
              <li key={index}>
               <Link className="no-underline" href={`/pokemons/${index+1}`}>{item.name}</Link>
               </li>
            ))}
        </ul>

    
    </div>
  );
}
