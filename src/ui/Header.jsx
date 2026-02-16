import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-rose-500 px-4 uppercase sm:px-6 sm:text-sm">
      <Link
        className="text-2xl font-bold tracking-[0.25rem] sm:tracking-[0.5rem]"
        to="/"
      >
        <div className="inline-flex items-center justify-between gap-2 py-4">
          <img
            src="../../public/pizza.png"
            alt="pizza.png"
            className="mx-auto max-h-10 w-auto md:max-h-12"
          />
          Swift Pizza Co.
        </div>
      </Link>
      <div>
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
};

export default Header;
