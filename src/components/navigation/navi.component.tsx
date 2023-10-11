import Link from "next/link";

const Navi = () => {
    return <nav className="flex gap-2 mx-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/browse"}>My List</Link>
    </nav>
}

export default Navi;