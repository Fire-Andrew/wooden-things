import { languagesData } from "@/data/languagesData";
import styles from "./LangSwitcher.module.scss";


const LangSwitcher = ({
  changeLanguage,
  currentLanguage
}) => {

  const onHandleSetUa = () => {
    const languageUser = languagesData.UA;
    changeLanguage(languageUser);
  };

  const onHandleSetDe = () => {
    const languageUser = languagesData.DE;
    changeLanguage(languageUser);
  };

   const onHandleSetEn = () => {
    const languageUser = languagesData.EN;
    changeLanguage(languageUser);
  };


  return (
    <ul className={styles.langSwitch}>
      <li
        className={currentLanguage === languagesData.UA ? styles.active : styles.langBtn}
        onClick={onHandleSetUa}
      >
        УКР
      </li>
      <li
        className={currentLanguage === languagesData.DE ? styles.active : styles.langBtn}
        onClick={onHandleSetDe}
      >
        DEU
      </li>
      <li
        className={currentLanguage === languagesData.EN ? styles.active : styles.langBtn}
        onClick={onHandleSetEn}
      >
        ENG
      </li>
    </ul>
  );
};


export default LangSwitcher;