import classNames from 'classnames';
import styles from './cntentarea-4.module.scss';

export interface Cntentarea4Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Cntentarea4 = ({ className }: Cntentarea4Props) => {
    return (
        <div className={classNames(styles.root, styles.contenbox2)}>
            Cntentarea4
            <div className={styles.contenbox2} />
        </div>
    );
};
