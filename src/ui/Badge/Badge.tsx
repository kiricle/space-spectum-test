import { PropsWithChildren } from 'react';
import styles from './Badge.module.scss';

const Badge = ({ children }: PropsWithChildren) => {
    return <span className={styles.badge}>{children}</span>;
};

export default Badge;
