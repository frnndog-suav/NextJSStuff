import CmsProvider from "../../service/cms/cmsContext";

export function PageHoc(Component) {
  return function Wrapper(props) {
    return (
      <CmsProvider cmsContent={props.cmsContent}>
        <Component {...props} />
      </CmsProvider>
    );
  };
}
