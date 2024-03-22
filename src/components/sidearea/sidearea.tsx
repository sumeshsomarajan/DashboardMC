import classNames from 'classnames';
import styles from './sidearea.module.scss';

export interface SideareaProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidearea = ({ className }: SideareaProps) => {
    return (
        <div className={classNames(styles.root, styles.sidarea)}>
            <div>
                <img src="/src/assets/logo_mcg (1).png" />
            </div>
            <div>
                <nav>
                    <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                    <a href="/about">About</a> | <a href="/contact">Contact Us</a>
                </nav>
            </div>
        </div>
    );
};
