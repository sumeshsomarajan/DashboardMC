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
            <div>
                <img src="/src/assets/logo_mcg (1).png" className={styles.logoimg} />
            </div>
            <div>
                <nav className={styles.menuitem}>
                    <a href="/home" className={styles.navmenutem}>
                        Item
                        <img src="/src/assets/item icon_1.png" alt="" className={styles.iconimg} />
                    </a>
                    <a href="/home" className={styles.navmenutem}>
                        Categories{' '}
                        <img src="/src/assets/item icon_1.png" alt="" className={styles.iconimg} />
                    </a>
                    <a href="/home" className={styles.navmenutem}>
                        Issue locations
                        <img src="/src/assets/item icon_1.png" alt="" className={styles.iconimg} />
                    </a>
                    <a href="/home" className={styles.navmenutem}>
                        Reference Table
                        <img src="/src/assets/item icon_1.png" alt="" className={styles.iconimg} />
                    </a>
                </nav>
            </div>
        </div>
    );
};
