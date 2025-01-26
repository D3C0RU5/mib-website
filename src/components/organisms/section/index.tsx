import styles from "./style.module.scss";

interface SectionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

};

export const Section: React.FC<SectionProps> = ({
  ...props
}) => {
  return (
    <section {...props} className="w-xl h-screen bg-background">
      teste
    </section>
  );
};
