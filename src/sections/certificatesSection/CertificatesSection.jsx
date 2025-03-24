import Image from "next/image";
import SectionTitle from "./SectionTitle";

import styles from "./CertificatesSection.module.scss";

const CertificatesSection = () => {
    return (
        <section className={styles.section}>
            <SectionTitle />

            <div className={styles.documentWrap}>
                <div className={styles.firstBox}>
                    <a
                        className={styles.documentLink}
                        href='/pdf/certificate.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className={styles.imageWrapFirst}>
                            <Image
                                className={styles.image}
                                src='/certificates/certificate_FSC.webp'
                                alt='Додатково про документ'
                                priority
                                fill={true}
                                title='Перехід до документа'
                                sizes='(max-width: 743px) 90vw, (max-width: 1279px) 85vw, 70vw'
                            />
                        </div>
                    </a>
                </div>
                <div className={styles.innerBox}>
                    <a
                        className={styles.documentLink}
                        href='/pdf/declaration_OSMO.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className={styles.imageWrap}>
                            <Image
                                className={styles.image}
                                src='/certificates/declaration_OSMO.webp'
                                alt='Додатково про документ'
                                fill={true}
                                priority
                                title='Перехід до документа'
                                sizes='(max-width: 743px) 90vw, (max-width: 1279px) 45vw, 40vw'
                            />
                        </div>
                    </a>

                    <a
                        className={styles.documentLink}
                        href='/pdf/Zertifikat_OSMO.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className={styles.imageWrap}>
                            <Image
                                className={styles.image}
                                src='/certificates/Zertifikat_OSMO.webp'
                                alt='Додатково про документ'
                                fill={true}
                                title='Перехід до документа'
                                sizes='(max-width: 743px) 90vw, (max-width: 1279px) 45vw, 40vw'
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
