import classNames from 'classnames';
import styles from './contentarea-1.module.scss';

export interface Contentarea1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contentarea1 = ({ className }: Contentarea1Props) => {
    return <div className={classNames(styles.root, className)}>Contentarea1</div>;
};
