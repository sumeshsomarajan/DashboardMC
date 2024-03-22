import classNames from 'classnames';
import styles from './contentbox-1.module.scss';

export interface Contentbox1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contentbox1 = ({ className }: Contentbox1Props) => {
    return <div className={classNames(styles.root, className)}>Contentbox1</div>;
};
