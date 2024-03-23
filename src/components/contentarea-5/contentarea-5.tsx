import classNames from 'classnames';
import styles from './contentarea-5.module.scss';

export interface Contentarea5Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contentarea5 = ({ className }: Contentarea5Props) => {
    return <div className={classNames(styles.root, className)}>Contentarea5</div>;
};
