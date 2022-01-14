import Title from "../components/Title.js";
import Pokemon from "../components/Pokemon.js";
import Container from "../components/Container.js";

export default function Pokemones({ pokemones }) {
  return (
    <div>
      <Container>
        <Title>Mi aplicación de Pokemones</Title>
      </Container>
      <Container>
        <ul>
          {pokemones.map((p) => (
            <Pokemon pokemon={p} key={p.name} />
          ))}
        </ul>
      </Container>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  return {
    props: { pokemones: data.results },
  };
};
