import styles from "./styles.module.scss";

const TranslateCard = () => {
    return (
        <div className={styles.container}>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677af80a-4f37-4a8c-8228-1dc57a31cf6f/deiaswl-24e8475c-35d3-4412-83e3-fcf27d71e144.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3N2FmODBhLTRmMzctNGE4Yy04MjI4LTFkYzU3YTMxY2Y2ZlwvZGVpYXN3bC0yNGU4NDc1Yy0zNWQzLTQ0MTItODNlMy1mY2YyN2Q3MWUxNDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pHjd1hsBIjmDT8OwDn3Ecaeqr92Yd-qs7UKDXeR-cas" alt="" />
            <div className={styles.content}>
                <div className={styles.gameInfo}>
                    <ul>
                        <li>Super Mario 64</li>
                        <li>Grupo aleatório</li>
                        <li>20/09/20xx</li>
                    </ul>
                    <div className={styles.gameInfoPlatforms}>
                        <img src="https://logospng.org/download/nintendo-64/nintendo-64-logo-2048.png" alt="" />
                    </div>
                </div>
                <div className={styles.stats}>
                    <p>100% concluído</p>
                </div>
            </div>
        </div>
    );
}

export default TranslateCard;