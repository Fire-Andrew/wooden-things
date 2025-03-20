import React from 'react';
import Image from 'next/image';
import styles from './HomeFurniturePanelsSection.module.scss';

const HomeFurniturePanelsSection = () => {
  return (
    <section className={`section`}>
      <div className={`container`}>
        <h2 className={`sectionTitle ${styles.title}`}>Меблеві Щити</h2>
        <p className={styles.subtitle}>
          Має гарну дерев’яну текстуру, тому ідеально підходить для виготовлення
          красивих меблів.
        </p>
        <div className={styles.content}>
          <figure className={styles.imgContainers}>
            <Image
              src="/png/furniturePanels-laptop.png"
              alt="Меблеві Щити"
              fill={true}
            />
          </figure>
          <div>
            <h3 className={styles.accentText}>Якісний і міцний матеріал</h3>
            <p className={styles.text}>
              *Єдиний вид клею, який ми використовуємо, це двокомпонентний
              німецький клей D4 Kleiberit 304.1.Це гарантія того, що з’єднані
              поверхні ніколи не розійдуться.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFurniturePanelsSection;
