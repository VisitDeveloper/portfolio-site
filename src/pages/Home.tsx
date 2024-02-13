import {
  Div,
  // DynamicRenderingGlobal,
  MainCard,
  Span,
  CopyBan,
  Summary,
  LetsTalk,
  Projects,
  Stack
} from "components/_index";
// import { Type_List_Component } from "components/dynamic-renderer/main-dynamic-rendering-components/DynamicMainComponents";

const HomeIndex = () => {
  return (
    <>
      <Summary />

      <Div className="flex flex-row gap-3 w-full">
        <MainCard className="flex flex-row-reverse justify-between items-center w-full">
          <Div className="flex flex-col gap-4">
            <Span className="text-sm font-medium">Licensing</Span>
            <Span className="text-right text-sm">404</Span>
          </Div>

          <Div className="flex flex-col gap-4">
            <Span className="dark:text-textDark text-textLight text-sm">
              © 2024. All rights Reserved.
            </Span>
            <Span className="dark:text-textDark text-textLight text-sm">
              Made By Amirali
            </Span>
          </Div>
        </MainCard>

        <MainCard className="flex flex-row-reverse justify-between items-center w-full">
          <Div className="flex flex-col gap-4">
            <Span className="text-sm font-medium">Licensing</Span>
            <Span className="text-right text-sm">404</Span>
          </Div>

          <Div className="flex flex-col gap-4">
            <Span className="dark:text-textDark text-textLight text-sm">
              © 2024. All rights Reserved.
            </Span>
            <Span className="dark:text-textDark text-textLight text-sm">
              Made By Amirali
            </Span>
          </Div>
        </MainCard>
      </Div>

      <Projects/>

      <Stack/>

      <LetsTalk/>

      <CopyBan />

      {/* <DynamicRenderingGlobal
        type={Type_List_Component.CopyBan}
        configKey={{
          children: (
            <DynamicRenderingGlobal
              type={Type_List_Component.HeaderLayout}
              
            />
          ),
        }}
      /> */}
    </>
  );
};
export default HomeIndex;
