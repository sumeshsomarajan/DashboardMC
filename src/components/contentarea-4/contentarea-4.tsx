import classNames from 'classnames';
import styles from './contentarea-4.module.scss';

export interface Contentarea4Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contentarea4 = ({ className }: Contentarea4Props) => {
    return (
        <div className={classNames(styles.root, styles.contentarea4)}>
            <div className={styles.contentarea3box1}>
                <img src="/src/assets/codux.svg" alt="" width="90%" />
            </div>
            <div className={styles.contentarea3box3} />
        </div>
    );
};
