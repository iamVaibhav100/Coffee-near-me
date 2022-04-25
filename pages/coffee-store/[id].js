import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Coffee Store</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
