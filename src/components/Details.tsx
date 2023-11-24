interface DetailsProps {
  children: React.ReactNode;
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

function Details(props: DetailsProps) {
  const { children } = props;

  return (
    <div
      className={`flex w-full max-w-3xl flex-col items-center gap-8 rounded-lg bg-neutral-800 px-9 py-8 md:-mt-24 md:flex-row md:items-start`}
    >
      {children}
    </div>
  );
}

function Title(props: ParentProps) {
  const { children } = props;
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

function Description(props: ParentProps) {
  const { children } = props;
  return <span className="text-md text-neutral-300">{children}</span>;
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
      <span className="text-neutral-300">{title}</span>
    </div>
  );
}

Details.Container = Details;
Details.Title = Title;
Details.Description = Description;
Details.Image = Image;
Details.DataContainer = DataContainer;
Details.Data = Data;

export default Details;
