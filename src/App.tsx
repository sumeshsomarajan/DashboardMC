import styles from './App.module.scss';
import { Sidemenubox } from './components/sidemenubox/sidemenubox';
import { Contentarea2 } from './components/contentarea-2/contentarea-2';

function App() {
    return (
        <div className={styles.App}>
            <Sidemenubox />
            <Contentarea2 />
        </div>
    );
}

export default App;
