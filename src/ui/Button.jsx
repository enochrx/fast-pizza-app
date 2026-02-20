import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, opacity }) => {
  const base =
    "transition-color inline-block rounded-full bg-rose-500  font-semibold tracking-wide text-stone-800 uppercase duration-300 hover:bg-rose-400 focus:ring focus:ring-rose-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + ` px-4 py-2 text-xs md:px-5 md:py-2.5 ${opacity}`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
