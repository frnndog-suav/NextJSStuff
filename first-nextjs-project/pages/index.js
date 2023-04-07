import React from "react";
import LinkRedirect from "../src/components/Link/index";
import GlobalStyle from "../src/theme/GlobalStyle";

function Title({ children, as }) {
  const Tag = as;
  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </React.Fragment>
  );
}

export default function HomePage() {
  return (
    <div>
        <GlobalStyle />
      <Title as="h2">Hello World</Title>
      <LinkRedirect children={"Ir para  FAQ"} href={"/faq"} />
    </div>
  );
}
