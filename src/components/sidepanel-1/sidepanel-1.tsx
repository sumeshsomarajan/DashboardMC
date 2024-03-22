import classNames from 'classnames';
import styles from './sidepanel-1.module.scss';

export interface Sidepanel1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidepanel1 = ({ className }: Sidepanel1Props) => {
    return <div className={classNames(styles.root, className)}>Sidepanel1</div>;
};
