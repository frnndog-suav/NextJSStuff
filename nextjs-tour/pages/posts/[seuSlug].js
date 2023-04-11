import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Post() {
    const router = useRouter();

    return (
        <React.Fragment>
            <div>
                Slug na página é <b>{router.query.seuSlug}</b>
            </div>
            <Link href={"/"}>Ir para home</Link>
        </React.Fragment>
    );
}
