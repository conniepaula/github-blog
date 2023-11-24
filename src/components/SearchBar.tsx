import { MagnifyingGlass } from "@phosphor-icons/react";
import Button from "./Button";

function SearchBar() {
  return (
    <form className="flex w-full max-w-3xl gap-3">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 rounded-md border-[1px] border-neutral-700 bg-neutral-800 px-3 py-2 outline-none ring-neutral-600 focus:ring-1"
      />
      <Button type="submit" icon={<MagnifyingGlass /> }>
        Search
      </Button>
    </form>
  );
}

export default SearchBar;
