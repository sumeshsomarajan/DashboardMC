import '../../index.css';
import classNames from 'classnames';
import styles from './contentarea-3.module.scss';

export interface Contentarea3Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contentarea3 = ({ className }: Contentarea3Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            Contentarea3
            <div className="contentbox1" />
        </div>
    );
};
