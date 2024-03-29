import List, { ConfigListProps } from "components/warpper-element/List/index";
import WrapperList, {
  ConfigWrapperListProps,
} from "components/warpper-element/WrapperList/index";
import { CreateObjectLiterals } from "tools/object-literals";
import { Fragment } from "react";
import { HeaderLayout, FooterLayout, CopyBan } from "components/_index";

// eslint-disable-next-line react-refresh/only-export-components
export enum Type_List_Component {
  List = "List",
  WrapperList = "WrapperList",
  HeaderLayout = "HeaderLayout",
  FooterLayout = "FooterLayout",
  CopyBan = "CopyBan",
}

interface ObjectTest {
  WrapperList: JSX.Element;
  List: JSX.Element;
  HeaderLayout: JSX.Element;
  FooterLayout: JSX.Element;
  CopyBan: JSX.Element;
}

interface DynamicObjectLiteralsProps {
  type: Type_List_Component;
  configKey?: ConfigListProps | ConfigWrapperListProps;
}

function DynamicObjectLiterals(props: DynamicObjectLiteralsProps) {
  const finalComponentItemRendering: ObjectTest = {
    List: <List {...(props?.configKey as ConfigListProps)} />,
    WrapperList: (
      <WrapperList {...(props?.configKey as ConfigWrapperListProps)} />
    ),
    HeaderLayout: <HeaderLayout />,
    FooterLayout: <FooterLayout />,
    CopyBan: <CopyBan />,
  };

  const FinalObjectRendered: JSX.Element = CreateObjectLiterals(
    finalComponentItemRendering,
    props.type,
    Type_List_Component.WrapperList
  );
  return <Fragment>{FinalObjectRendered}</Fragment>;
}
export default DynamicObjectLiterals;
