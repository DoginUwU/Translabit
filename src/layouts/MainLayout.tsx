import Header from "./Header";

import styles from "../styles/main.module.scss";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <div className={styles.root}>
            <Header />
            <div className={styles.body}>
                <div className={styles.sidebar}>
                    <Sidebar />
                    <div className={styles.statics}>
                        <h3>Estatísticas do Site</h3>
                        <ul>
                            <li>Traduções: <span>0</span></li>
                            <li>Tradutores: <span>0</span></li>
                            <li>Usuários: <span>0</span></li>
                        </ul>
                    </div>
                </div>
                <main className={styles.content}>
                    <Home />
                </main>
            </div>
        </div>
    );
}

export default MainLayout;