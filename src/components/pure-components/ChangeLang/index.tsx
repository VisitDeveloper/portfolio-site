import { Div, Span } from 'components/_index';
// import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function ChangeLang() {
    // const {i18n} = useTranslation();
    document.body.dir = i18next.dir();
    // const getUserLanguage = () =>  window.navigator.language;

    // useEffect(() =>{
    //     console.log('ssdsd',getUserLanguage())
    // } , [])

    // const changeLanguage = (lng : string) => { 
    //     i18next.changeLanguage(`${lng}`)
    //     document.body.dir = i18next.dir(`${lng}`);
    // }

  return (
    <Div>
        {/* <Span onClick={() => changeLanguage('en-US')}> 
            En
        </Span>
        <Span>
            /
        </Span>
        <Span onClick={() => changeLanguage('fa-IR')}>
            Fa
        </Span> */}
    </Div>
  )
}
export default ChangeLang