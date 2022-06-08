import Link from "next/link";
import coffeeStoresData from "../../data/coffee-stores.json";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id === Number(params.id);
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" }}],
    fallback: false,
  }
}

const DynamicRoute = (props) => {
  return (
    <div>
      <h1>Dynamic Route</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <p>{props.coffeeStore.name}</p>
      <p>{props.coffeeStore.address}</p>
    </div>
  );
};

export default DynamicRoute;
