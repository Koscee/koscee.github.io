import { footerLinks } from './footer-links';
import styles from './Footer.module.css';

export default function Footer() {
  const renderLinks = () => {
    return footerLinks.map(({ name, icon, url }) => {
      const Icon = icon;
      return (
        <a className={styles.footer_link} href={url} key={name} title={name}>
          <Icon />
        </a>
      );
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_links}>{renderLinks()}</div>
    </footer>
  );
}
