import styles from "./styles.module.scss";

type MenuItemProps = {
  text: string;
  href?: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ text, href = '#' }) => {
  return (
    <a href={href} className={styles["menu-item"]}>
      <span className={styles["menu-text"]}>{text}</span>
    </a>
  );
};
