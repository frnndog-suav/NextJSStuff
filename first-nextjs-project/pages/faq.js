import { useEffect, useState } from "react";
import LinkRedirect from "../src/components/Link/index";

export async function getStaticProps() {
  const faq = await fetch(FAQ_API)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch(() => console.log("deu ruim"));

  return {
    props: {
      apenasUmTeste: "é isso mesmo",
      faq
    }, // will be passed to the page component as props
  };
}

const FAQ_API =
  "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

// @ts-ignore
export default function FAQPage(props) {
  console.log("getStaticProps", props);

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Essa é a página do FAQ</h1>
      <LinkRedirect children={"Voltar para home page"} href={"/"} />
      <ul>
        {props.faq.map((f) => (
          <li key={f.question}>
            <h3>{f.question}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
