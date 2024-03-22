import classNames from 'classnames';
import styles from './sidemenubox-1.module.scss';

export interface Sidemenubox1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidemenubox1 = ({ className }: Sidemenubox1Props) => {
    return <div className={classNames(styles.root, className)}>Sidemenubox1</div>;
};
