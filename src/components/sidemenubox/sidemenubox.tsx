import classNames from 'classnames';
import styles from './sidemenubox.module.scss';

export interface SidemenuboxProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Sidemenubox = ({ className }: SidemenuboxProps) => {
    return (
        <div className={styles.contentbox}>
            <div className={styles['content-content1']}>
                <h3>Item Master</h3>
            </div>
            <div className={styles['content-content1']} />
            <input className={styles.formbox} placeholder="search here" />
        </div>
    );
};
