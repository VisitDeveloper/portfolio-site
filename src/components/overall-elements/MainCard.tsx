import { Div, HeaderMainCard } from "components/_index";

interface MainCardProps {
  className?: string;
  icon?: React.ReactNode | React.ReactElement | JSX.Element;
  headerTitle?: string | React.ReactNode | React.ReactElement | JSX.Element;
  children: React.ReactElement | React.ReactNode | JSX.Element;
  disableHeader?: boolean;
  id?: string;
}

function MainCard(props: MainCardProps) {
  return (
    <Div
      id={props.id}
      className={`bg-lightBackground dark:bg-darkBackground my-4 px-5 py-5 rounded-3xl ${props.className}`}
    >
      {props.disableHeader === true ||
      !props.icon ||
      !props.headerTitle ? null : (
        <HeaderMainCard icon={props.icon} children={props.headerTitle} />
      )}
      {props.children}
    </Div>
  );
}
export default MainCard;
