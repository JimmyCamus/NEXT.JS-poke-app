import Link from "next/link";

const Pokemon = ({pokemon}) => {
  const id = pokemon.url.split("/").filter(x => x).pop();
  return (
    <div>
      <li><Link href={`/pokemones/${id}`}>{pokemon.name}</Link></li>
    </div>
  );
}

export default function Pokemones({pokemones}) {
  return (
    <div>
      <h2>Mi aplicación de Pokemones</h2>
      <ul>
        {pokemones.map(p => <Pokemon pokemon={p} key={p.name} />)}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  return{
    props: {pokemones: data.results},
  };
};