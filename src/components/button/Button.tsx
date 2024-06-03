import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  icon?: JSX.Element;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
};

export default function Button({
  text,
  icon,
  variant = 'primary',
  onClick,
}: ButtonProps) {
  const classNames = `${styles.btn} ${styles[variant]}`;

  return (
    <button className={classNames} onClick={onClick}>
      {text}
      {icon && icon}
    </button>
  );
}
