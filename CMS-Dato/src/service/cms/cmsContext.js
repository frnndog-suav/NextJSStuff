import get from "lodash/get";
import React from "react";

const CmsContext = React.createContext({ cmsContent: {} });

export const getCmsContent = (path = "") => {
  const cmsContent = React.useContext(CmsContext).cmsContent;
  if (path === "") return cmsContent;
  const output = get(cmsContent, path);
  if (!output) throw new Error(`Não foi possível encontrar a chave '${path}'`);
  return output;
};

export default function CmsProvider({ cmsContent, children }) {
  return (
    <CmsContext.Provider value={{ cmsContent }}>{children}</CmsContext.Provider>
  );
}
