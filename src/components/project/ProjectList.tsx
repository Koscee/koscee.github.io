import type { Project } from './types';
import ProjectCard from './ProjectCard';
import styles from './Project.module.css';

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  const renderedProjects = projects.map((project) => (
    <ProjectCard key={project.title} {...project} />
  ));

  return <div className={styles.projects_list}>{renderedProjects}</div>;
}
