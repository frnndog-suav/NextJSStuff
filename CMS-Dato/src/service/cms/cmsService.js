const DATO_TOKEN = process.env.DATO_TOKEN;

const globalQuery = `
query {
  globalFooter{
    description
  }
}
`;

export async function cmsService({ query }) {
  try {
    const pageContentResponse = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DATO_TOKEN}`,
      },
      body: JSON.stringify({
        query,
      }),
    }).then(async (response) => {
      const body = await response.json();
      if (!body.errors) return body;
      throw new Error(JSON.stringify(body));
    });

    const globalContentResponse = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DATO_TOKEN}`,
      },
      body: JSON.stringify({
        query: globalQuery,
      }),
    }).then(async (response) => {
      const body = await response.json();
      if (!body.errors) return body;
      throw new Error(JSON.stringify(body));
    });

    return {
      data: {
        ...pageContentResponse.data,
        globalContent: {
          ...globalContentResponse.data,
        },
      },
    };
  } catch (err) {
    throw new Error(err.message);
  }
}
