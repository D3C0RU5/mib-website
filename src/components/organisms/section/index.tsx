import styles from "./style.module.scss";

interface SectionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title = "",
  children,
  ...props
}) => {
  return (
    <section {...props} className={`${styles["background-striped"]} h-screen`}>
      <div className="mx-auto max-w-7xl p-6 lg:px-8  border-x border-b min-h-screen pt-[78px] bg-gray-950">
        <div className="mb-4 font-bold uppercase text-2xl border-b-2 py-4">
          {title}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};
