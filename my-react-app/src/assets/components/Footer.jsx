import React from "react";
import Styles from "../css/Footer.module.css";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>&copy; {new Date().getFullYear()} Matthieu Metz. Tous droits réservés.</p>
      <p className={Styles.footerdatatext}>Nous respectons votre vie privée : ce site ne collecte, ne stocke ni ne partage aucune donnée personnelle.</p>
    </footer>
  );
}

export default Footer;