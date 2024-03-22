import styles from './App.module.scss';
import { Sidemenubox } from './components/sidemenubox/sidemenubox';
import { Contentarea2 } from './components/contentarea-2/contentarea-2';
import { Contentarea4 } from './components/contentarea-4/contentarea-4';

function App() {
    return (
        <div className={styles.App}>
            <div />
            <Sidemenubox />
            <Contentarea2 />
            <Contentarea4 />
        </div>
    );
}

export default App;
