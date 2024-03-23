import '../../index.css';
import classNames from 'classnames';
import styles from './contentarea-2.module.scss';

export interface Contentarea2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contentarea2 = ({ className }: Contentarea2Props) => {
    return (
        <div>
            <div className={styles.content1}>
                <h3>Item Master</h3>
            </div>
            <div className={styles.content1}>
                <input className={styles.formbox1} placeholder="search here" />
            </div>

            <div className="contentbox1">
                <input className="formbox2" />
                <table id="customers">
                    <tr>
                        <th>Item No</th>
                        <th>Item Name</th>
                        <th>Supplier Name </th>
                    </tr>
                    <tr>
                        <td>01100</td>
                        <td>DUMMY</td>
                        <td>W.J.TOWELL & CO.L.L.C.</td>
                    </tr>
                    <tr>
                        <td>01101</td>
                        <td>WHITE VINEGAR</td>
                        <td>H & J BRUGGEN</td>
                    </tr>

                    <tr>
                        <td>01102</td>
                        <td>ROSE WATER</td>
                        <td>AURRUM ENTERPRISES P.LTD</td>
                    </tr>
                </table>
            </div>

            <div className="contentbox1">
                <h4>Main Category</h4>
                <img src="/src/assets/image-bar.jpg" alt="" width="600px" />
                <img src="/src/assets/image-graph.jpg" alt="" width="600" />
            </div>
            <div className="contentb1" />
        </div>
    );
};
