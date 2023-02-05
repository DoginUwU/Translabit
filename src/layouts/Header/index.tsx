import Logo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.right}>
        <img src="https://cdn.discordapp.com/attachments/768646098964709446/1071782148366925824/9bc4d33d2ac1f6967077508bd2dda5fb.jpg" className={styles.profile} />
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;