import logoImage from "../assets/logo.svg";

function Header() {
  return (
    <header className="mx-auto my-0 flex w-full md:flex-col items-center justify-center gap-3 bg-neutral-700 p-3 md:pb-32 md:pt-8">
      <img src={logoImage} className="w-12 md:w-36" />
      <h1 className="text-3xl font-bold">GitHub Blog</h1>
    </header>
  );
}

export default Header;
