import { Div } from "components/_index";

interface ChipProps {
  children: React.ReactNode | React.ReactElement | JSX.Element;
}

function Chip(props: ChipProps) {
  const { children } = props;
  return (
    <Div className="font-semibold text-textChipLight bg-lightChipBackground dark:bg-darkChipBackground dark:text-textChipDark  rounded-2xl text-sm w-fit px-2 py-0">
      {children}
    </Div>
  );
}
export default Chip;
