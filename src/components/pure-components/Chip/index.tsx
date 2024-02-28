import { Div, Span } from "components/_index";

interface ChipProps {
  children: React.ReactNode | React.ReactElement | JSX.Element;
  type?: "flag" | "hashtag";
}

function Chip(props: ChipProps) {
  const { children, type = "hashtag" } = props;

  switch (type) {
    case "hashtag":
      return (
        <Div className="font-semibold text-textChipLight bg-lightChipBackground dark:bg-darkChipBackground dark:text-textChipDark  rounded-2xl text-sm w-fit px-2 py-0">
          {children}
        </Div>
      );
    case "flag":
      return (
        <>
          <Span className="text-sm font-bold">{children}</Span>
        </>
      );
    default:
      return (
        <Div className="font-semibold text-textChipLight bg-lightChipBackground dark:bg-darkChipBackground dark:text-textChipDark  rounded-2xl text-sm w-fit px-2 py-0">
          {children}
        </Div>
      );
  }
}
export default Chip;
