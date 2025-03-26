"use client";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useWindowResize } from "@/hooks/windowResize";
import styles from "./CertificatesSection.module.scss";


const SectionTitle = () => {
    const { isLaptop } = useWindowResize(); 
    
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{ setIsLoading(false)},[]);
    

    return (
        <>
            {isLaptop && (
                <h2 className={`sectionTitle ${styles.title}`}>{!isLoading && t('CertificatesPage.Title') }</h2>
            )}
        </>
    );
};

export default SectionTitle;
