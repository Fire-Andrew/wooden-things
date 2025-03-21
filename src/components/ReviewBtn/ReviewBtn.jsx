import Link from 'next/link';
import styles from './ReviewBtn.module.scss';

const ReviewBtn = ({ href, id }) => {
  return (
    <Link href={href} className={styles.btn} id={id}>
      {/* Переглянути */}
      More details
    </Link>
  );
};

export default ReviewBtn;
