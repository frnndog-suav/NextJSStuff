import LinkRedirect from "../src/components/Link/index";

export default function Page404 () {
    return (
        <div>
            <h1>Página não existe</h1>            
            <LinkRedirect children={"Voltar para home page"} href={"/"} />
        </div>
    )
}