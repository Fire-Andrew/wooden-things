"use client";
import React from 'react';
import Image from 'next/image';
import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
import { productsData } from '@/data/productsData';
import styles from './KitchenBoardsSection.module.scss';


const KitchenBoardsSection = () => {
 

  return (
    <section className={`section ${styles.section}`}>
      <div className='container'>
        <h2 className={`sectionTitle ${styles.title}`}>Kitchen Chopping Boards</h2>

        <ul>
          {productsData.map((product) =>
            <li key={product.slug} className={styles.productCard}>
              <div className={styles.imgWrapper}>
                  <Image
                    className={styles.img}
                    src={product.images[0].src}
                    alt={product.images[0].src}                    
                    sizes="(max-width: 743px) 95vw, (max-width: 1279px) 45vw, 580px"
                    width={703}
                    height={468}
                    priority={product.priority || false}
                  />
              </div>      

              <div className={styles.infoWrap}>
                  <p className={styles.description}>{product.descriptionEn}</p>        
                  <ReviewBtn href={`/kitchen-boards/${product.slug}`}/>
              </div>                   
          </li>)}
        </ul>
      </div>
    </section>
  )
}


export default KitchenBoardsSection;

// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
// import { productsData } from '@/data/productsData';
// import styles from './KitchenBoardsSection.module.scss';


// const KitchenBoardsSection = () => {
 
//   const[isLoad,setIsLoad]=useState(true)

//   const{t}=useTranslation()

//   useEffect(()=>{setIsLoad(false)},[])


//   return (
//     <section className={`section ${styles.section}`}>
//       <div className='container'>
//         <h2 className={`sectionTitle ${styles.title}`}>{!isLoad && t("KitchenBoardsSection.Title")}</h2>

//         <ul>
//           {productsData.map((product) =>
//             <li key={product.slug} className={styles.productCard}>
//               <div className={styles.imgWrapper}>
//                   <Image
//                     className={styles.img}
//                     src={product.images[0].src}
//                     alt={product.images[0].src}                    
//                     sizes="(max-width: 743px) 95vw, (max-width: 1279px) 45vw, 580px"
//                     width={703}
//                     height={468}
//                     priority={product.priority || false}
//                   />
//               </div>      

//               <div className={styles.infoWrap}>
//                   <p className={styles.description}>{product.descriptionEn}</p>        
//                   <ReviewBtn href={`/kitchen-boards/${product.slug}`}/>
//               </div>                   
//           </li>)}
//         </ul>
//       </div>
//     </section>
//   )
// }


// export default KitchenBoardsSection;