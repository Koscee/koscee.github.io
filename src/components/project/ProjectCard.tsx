import styles from './Project.module.css';
import type { Project } from './types';

export default function ProjectCard({
  title,
  description,
  imageUrl,
  footerIcons,
  projectLink,
}: Project) {
  return (
    <a href={projectLink} className={styles.card} aria-label="card">
      <figure>
        <img className={styles.card_image} src={imageUrl} alt="card-image" />
      </figure>
      <div className={styles.card_content}>
        <div className={styles.card_body}>
          <h4 className={styles.card_title}>{title}</h4>
          <p className={styles.card_desc}>{description}</p>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.card_footer_left}>
            {footerIcons.map(({ name, icon }) => {
              const Icon = icon;
              return (
                <span key={name} title={name}>
                  <Icon />
                </span>
              );
            })}
          </div>
          {/* <div className={styles.card_footer_right}>
            <a href={projectLink} aria-label="view-more" role="button">
              <Eye />
            </a>
          </div> */}
        </div>
      </div>
    </a>
  );
}
