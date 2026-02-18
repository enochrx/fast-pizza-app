const Button = ({ children, disabled }) => {
  return (
    <button
      className="transition-color inline-block rounded-full bg-rose-500 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase duration-300 hover:bg-rose-400 focus:ring focus:ring-rose-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
