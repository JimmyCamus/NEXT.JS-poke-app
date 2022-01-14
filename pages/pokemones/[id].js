import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button.js";
import Container from "../../components/Container.js";
import Title from "../../components/Title.js";

const Pokemon = ({ data }) => {
  return (
    <div>
      <Container>
        <Title>
          {data.name} número #{data.id}{" "}
        </Title>
      </Container>
      <Container>
        <Image
          src={data.sprites.front_default}
          width={400}
          height={400}
          alt=""
        />
      </Container>
      <Container>
        <Link href="/">
          <Button>Volver al inicio</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Pokemon;

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();
  return { props: { data } };
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  return {
    paths,
    fallback: "blocking",
  };
};

/*
export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();
  return { props: { data } };
};
*/
