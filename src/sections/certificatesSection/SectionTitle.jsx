"use client";

import { useWindowResize } from "@/hooks/windowResize";

import styles from "./CertificatesSection.module.scss";

const SectionTitle = () => {
    const { isLaptop } = useWindowResize();
    return (
        <>
            {isLaptop && (
                <h2 className={`sectionTitle ${styles.title}`}>Сертифікати</h2>
            )}
        </>
    );
};

export default SectionTitle;
