import Link from "next/link";
import React from "react";

function HomePage() {
    return (
        <React.Fragment>
            <div>Home page</div>
            <Link href={"/posts/seu-custom-slug"}>
                Ir para pagina de posts com o param do slug
            </Link>
            <img src="/images/github-profile-pic.jpg" />
        </React.Fragment>
    );
}

export default HomePage;
