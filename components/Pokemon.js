import Link from "next/link";
import Card from "../components/Card.js"

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <div>
      <Link href={`/pokemones/${id}`}>
        <Card>
          <p>{pokemon.name}</p>
        </Card>
      </Link>
    </div>
  );
};

export default Pokemon;
