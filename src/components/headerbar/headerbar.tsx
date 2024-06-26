import classNames from 'classnames';
import styles from './headerbar.module.scss';

export interface HeaderbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Headerbar = ({ className }: HeaderbarProps) => {
    return (
        <div className={styles.headbartop}>
            <div className={styles.headbar}></div>
        </div>
    );
};
