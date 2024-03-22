import classNames from 'classnames';
import styles from './sidepanel.module.scss';

export interface SidepanelProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidepanel = ({ className }: SidepanelProps) => {
    return <div className={classNames(styles.root, className)}>Sidepanel</div>;
};
