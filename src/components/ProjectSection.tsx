import styles from './project/Project.module.css';
import { ProjectList, projects } from './project';

export default function ProjectSection() {
  return (
    <section className={styles.projects}>
      <h2 className="section_title">Projects</h2>
      <ProjectList projects={projects} />
    </section>
  );
}
