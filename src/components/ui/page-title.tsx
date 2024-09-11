const PageTitle = ({ title }: { title: string }) => {
  return (
    <header>
      <h1 className="mb-5 text-center text-3xl">{title}</h1>
    </header>
  );
};

export default PageTitle;
