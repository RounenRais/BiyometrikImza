// app/pokemons/[pokeId]/page.tsx

type Props = { params: { pokeId: string } };
import { notFound } from "next/navigation";
export default async function PokeDetails({ params }: Props) {

const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeId}`)
 if (!response.ok) {
    notFound();
  }
type PokemonTypeEntriy={
  type:{name:string}
}
type Pokemon={
name:string,
sprites:{
  other:{
    ["official-artwork"]: {
      front_default: string | null | undefined;
  }
}
}
types:PokemonTypeEntriy[]

}
const  pokeItem:Pokemon=await response.json()

const typeArray:PokemonTypeEntriy[]=pokeItem.types;
  return (<>
  <h1 className="caret-amber-500 "> =Pokemon Detail Page</h1>
  <p>{pokeItem.name}</p>
  <img className="w-48 h-auto" src={pokeItem.sprites.other["official-artwork"].front_default??""} alt={pokeItem.name} />
 <p>Tipler</p>
  <ul>
    {typeArray.map((item,index:number)=>(
        <li key={index}>{item.type.name}</li>
    ))}
  </ul>
  </>
  );
}
