"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
// import Cookies from "js-cookie";
import { languagesData } from "@/data/languagesData";
import Languages from "../Languages/Languages";


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
        // Cookies.set('language', lang);
        setIsLoad(false);
    }, []);


    const changeLanguage = (languageUser) => {
        localStorage.setItem("i18nextLng", languageUser);
        // const language = localStorage.getItem("i18nextLng");
        setLanguage(languageUser);
        i18n.changeLanguage(languageUser);
        // Cookies.set('language', languageUser);
    };


    return (
        <div className={className}>
            {!isLoad && (
                <Languages
                    changeLanguage={changeLanguage}
                    currentLanguage={language}
                />
            )}
        </div>
    );
};


export default TranslatorBtnBlock;