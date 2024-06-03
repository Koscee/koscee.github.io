import styles from './Profile.module.css';

type ProfileProps = {
  name: string;
  imageUrl: string;
  jobTitle: string;
  actionEl?: React.ReactNode;
};

export default function Profile({
  name,
  imageUrl,
  jobTitle,
  actionEl,
}: ProfileProps) {
  return (
    <div className={styles.profile}>
      <figure>
        <div className={styles.profile_image_backdrop}></div>
        <img className={styles.profile_image} src={imageUrl} alt={name} />
        <figcaption className={styles.profile_info}>
          <h1>{name}</h1>
          <p>{jobTitle}</p>
        </figcaption>
      </figure>
      {actionEl && <div className={styles.profile_actions}>{actionEl}</div>}
    </div>
  );
}
