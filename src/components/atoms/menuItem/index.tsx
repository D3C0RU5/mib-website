import styles from "./styles.module.scss";

type MenuItemProps = {
  text: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
  return (
    <a href="#" className={styles["menu-item"]}>
      <span className={styles["menu-text"]}>{text}</span>
    </a>
  );
};
