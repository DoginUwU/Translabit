import styles from "./styles.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Principal</h2>
        <ul>
          <li>Inicial</li>
          <li>Últimas Noticias</li>
          <li>Ajuda</li>
          <li>Sobre o Site</li>
        </ul>
        <h2>Conteúdo</h2>
        <ul>
          <li>Traduções</li>
          <li>Tabela de Progressão</li>
          <li>Jogo Aleatório</li>
          <li>Tutorials</li>
        </ul>
        <h2>Comunidade</h2>
        <ul>
          <li>Wiki Game Hacking</li>
          <li>Grupo e Tradutores</li>
          <li>Outros Links</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;