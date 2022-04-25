import { useRouter } from "next/router";
import Link from "next/link";

const DynamicPage = () => {
    const router = useRouter()
  return (
    <div>
        <h1>Dynamic Page: {router.query.id}</h1>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/dynamic">
            <a>Next</a>
        </Link>
    </div>
  )
}

export default DynamicPage