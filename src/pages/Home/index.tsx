import Box from "../../components/Box";
import SearchBar from "../../components/SearchBar";
import TranslateCard from "../../components/TranslateCard";
import styles from "./styles.module.scss";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <div>
                    <h1>Bem-vindo ao TranslaBit</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dapibus velit.</span>
                </div>
                <Box header={<h2>Sobre o site</h2>}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dapibus velit. Morbi facilisis ligula orci, gravida sagittis ex aliquam non. Nullam pulvinar, ante vitae interdum consequat, augue velit tempus magna, sit amet fringilla nibh mi ut neque. Duis feugiat nibh quis accumsan consequat. Praesent faucibus dapibus turpis et egestas. Maecenas vitae velit eros. Nam sed nibh ut tellus consectetur congue. Pellentesque id lorem vitae ligula sodales finibus. Morbi sollicitudin libero eleifend ante vestibulum tempus.
                </Box>
                <div>
                    <h3>Falta a imagem e o textinho :c</h3>
                    <SearchBar />
                </div>
            </div>
            <div className={styles.undefined}>
                <span>Ainda sem nada :c</span>
            </div>
            <div className={styles.news}>
                <h2>Última Noticia</h2>
                <Box header={<div><h3>O mundo irá explodir!</h3><p>Enviado em 24/02/23</p></div>}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dapibus velit. Morbi facilisis ligula orci, gravida sagittis ex aliquam non. Nullam pulvinar, ante vitae interdum consequat, augue velit tempus magna, sit amet fringilla nibh mi ut neque. Duis feugiat nibh quis accumsan consequat. Praesent faucibus dapibus turpis et egestas. Maecenas vitae velit eros. Nam sed nibh ut tellus consectetur congue. Pellentesque id lorem vitae ligula sodales finibus. Morbi sollicitudin libero eleifend ante vestibulum tempus.
                </Box>
            </div>
            <div className={styles.uploads}>
                <h2>Traduções Recentes</h2>
                <Box contentClassName={styles.uploadsGames}>
                    <TranslateCard />
                    <TranslateCard />
                    <TranslateCard />
                </Box>
            </div>
        </div>
    );
}

export default Home;