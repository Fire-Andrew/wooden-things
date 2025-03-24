"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./TranslatorBtnBlock.module.scss";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import { languagesData } from "@/data/languagesData";
import Languages from "./LangSwitcher/LangSwitcher";


const TranslatorBtnBlock = ({ className }) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(
        // (prev) => !prev || prev === undefined ? languagesData.UA : prev
        "ua"
    );

    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        const lang = localStorage.getItem("i18nextLng");
        setLanguage(() => (lang ? lang : "ua"));
        setIsLoad(false);
    }, []);


    const changeLanguage = (languageUser) => {
        localStorage.setItem("i18nextLng", languageUser);
        // const language = localStorage.getItem("i18nextLng");
        setLanguage(languageUser);
        i18n.changeLanguage(languageUser);
    };


    return (
        <div className={styles.langswitch}>
            {!isLoad && (
                <LangSwitcher
                    changeLanguage={changeLanguage}
                    currentLanguage={language}
                    className={className}
                />
            )}
        </div>
    );
};


export default TranslatorBtnBlock;