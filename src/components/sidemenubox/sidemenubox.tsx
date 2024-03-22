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
        <div className={classNames(styles.root, styles.sudemenubox)}>
            <nav className={styles.menuitem}>
                <a href="/home" className={styles.navmenutem}>
                    Item
                    <img src="/src/assets/user ion.png" alt="" className={styles.iconimg} />
                </a>
                <a href="/home" className={styles.navmenutem}>
                    Item
                    <img src="/src/assets/item icon_1.png" alt="" className={styles.iconimg} />
                </a>
                <a href="/projects" className={styles.navmenutem}>
                    <img src="/src/assets/user ion.png" alt="" className={styles.iconimg} />
                    Categores
                </a>
                <a href="/about" className={styles.navmenutem}>
                    <img src="/src/assets/item icon_1.png" alt="" className={styles.iconimg} />
                    Issue Location
                </a>
                <a href="/contact" className={styles.navmenutem}>
                    <img src="/src/assets/user ion.png" alt="" className={styles.iconimg} />
                    Reference Table
                </a>
            </nav>{' '}
        </div>
    );
};
