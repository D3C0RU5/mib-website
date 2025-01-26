import styles from "./style.module.scss";

interface SectionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

};

export const Section: React.FC<SectionProps> = ({
  ...props
}) => {
  return (
    <section {...props} className="h-screen">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div>Conteudo aqui</div>
      </div>
    </section>
  );
};
