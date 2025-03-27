"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./CertificatesSection.module.scss";

const SectionTitle = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <>
            <h2 className={`sectionTitle ${styles.title}`}>
                {!isLoading && t("CertificatesPage.Title")}
            </h2>
        </>
    );
};

export default SectionTitle;
