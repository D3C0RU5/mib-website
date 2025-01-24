import styles from "./style.module.scss";

type SectionProps = {
  minHeight: React.CSSProperties["minHeight"];
  backgroundColor: React.CSSProperties["backgroundColor"];
};

export const Section: React.FC<SectionProps> = ({
  minHeight = 0,
  backgroundColor = "white",
}) => {
  return (
    <section className={styles.section} style={{ minHeight, backgroundColor }}>
      teste
    </section>
  );
};
