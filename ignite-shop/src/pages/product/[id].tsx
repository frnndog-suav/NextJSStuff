import { useRouter } from "next/router"

export default function Product() {
    const { query } = useRouter()

    return (<div>Pagina produto {JSON.stringify(query)}</div>)
}