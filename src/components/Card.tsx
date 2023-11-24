interface DetailsProps {
  children: React.ReactNode;
  featured?: boolean;
}

interface ParentProps {
  children: React.ReactNode;
}

interface DataProps {
  icon: React.ReactNode;
  title: string;
}

interface ImageProps {
  src: string;
  alt: string;
}

function Card(props: DetailsProps) {
  const { children, featured = false } = props;

  return (
    <div
      className={`flex w-full  flex-col items-center gap-8 bg-neutral-800 px-9 py-8 ${
        featured
          ? "max-w-3xl  rounded-none md:-mt-24  md:flex-row md:items-start md:rounded-lg"
          : "max-w-[364px] flex-col rounded-lg"
      }`}
    >
      {children}
    </div>
  );
}

// TODO: Create Typography component with multiple variants and flexible styling
function Title(props: ParentProps) {
  const { children } = props;
  return <h2 className="text-2xl font-bold leading-tight">{children}</h2>;
}

function Subtitle(props: ParentProps) {
  const { children } = props;
  return (
    <h2 className="line-clamp-2 text-lg font-bold leading-tight">{children}</h2>
  );
}

function Description(props: ParentProps) {
  const { children } = props;
  return (
    <span className="text-md line-clamp-5 text-neutral-300">{children}</span>
  );
}

function Text(props: ParentProps) {
  const { children } = props;
  return <h2 className="text-sm text-neutral-400">{children}</h2>;
}

function Image(props: ImageProps) {
  const { src, alt } = props;
  return <img src={src} alt={alt} className="h-36 w-36 rounded-md" />;
}

function DataContainer(props: ParentProps) {
  const { children } = props;
  return (
    <div className="flex items-center justify-start gap-4">{children}</div>
  );
}

function Data(props: DataProps) {
  const { icon, title } = props;
  return (
    <div className="flex items-center gap-1">
      {icon}
      <span className="whitespace-nowrap text-neutral-300">{title}</span>
    </div>
  );
}

Card.Container = Card;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Text = Text;
Card.Description = Description;
Card.Image = Image;
Card.DataContainer = DataContainer;
Card.Data = Data;

export default Card;
