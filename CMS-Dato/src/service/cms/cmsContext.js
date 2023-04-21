import React from "react";

const CmsContext = React.createContext({ cmsContent: {} });

export const getCmsContent = () => {
  return React.useContext(CmsContext).cmsContent;
};

export default function CmsProvider({ cmsContent, children }) {
  return (
    <CmsContext.Provider value={{ cmsContent }}>{children}</CmsContext.Provider>
  );
}
