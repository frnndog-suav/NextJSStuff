import Link from "next/link";

const AppBar = () => {
    return (
        <div>
            <Link href={"/"}>Go to home page</Link>
            <Link href={"/userPost"}>Go to user post page</Link>
            <Link href={"/testPage"}>Go to test page</Link>
            <Link href={"/privatePage"}>Go to private page</Link>
        </div>
    )
};

export default AppBar;
