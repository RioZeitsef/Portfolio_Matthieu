import Styles from "../css/Footer.module.css";
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <p className={Styles.footertext}>2025 Matthieu Metz</p>
      <p className={Styles.footerdatatext}>Nous respectons votre vie privée : ce site ne collecte, ne stocke ni ne partage aucune donnée personnelle.</p>
    </footer>
  );
}

export default Footer;