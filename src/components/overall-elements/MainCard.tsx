import { Div } from "components/_index";


interface MainCardProps {
    className?: string ;
    children: React.ReactElement | React.ReactNode | JSX.Element;
}

function MainCard(props: MainCardProps) {
  return (
    <Div className={`bg-lightBackground dark:bg-darkBackground my-4 px-5 py-5 rounded-3xl ${props.className}`}>
        {props.children}
    </Div>
  )
}
export default MainCard;
