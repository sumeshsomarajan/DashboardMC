import styles from './App.module.scss';
import { Sidemenubox } from './components/sidemenubox/sidemenubox';

function App() {
    return (
        <div className={styles.App}>
            <Sidemenubox />
        </div>
    );
}

export default App;
