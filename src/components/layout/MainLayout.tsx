import { Div, DynamicRenderingGlobal } from "components/_index";
import { Type_List_Component } from "components/dynamic-renderer/main-dynamic-rendering-components/DynamicMainComponents";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Div className=" p-2 container mx-auto lg:w-[800px] md:w-[700px] sm:w-full">
      <DynamicRenderingGlobal type={Type_List_Component.HeaderLayout} />
      <Outlet/>
      <DynamicRenderingGlobal type={Type_List_Component.FooterLayout} />
    </Div>
  );
};

export default MainLayout;
