export const Header = () => {
  return (
    <div className="flex w-full p-5 justify-between absolute top-0 shadow-md">
      <div>
        <h1 className="text-2xl font-bold tracking-tight transition delay-100 hover:scale-110">
          Free Resume !
        </h1>
      </div>
      <div>
        <button className="text-sm font-medium px-3 py-2 text-slate-900 rounded-full w-28 hover:border border-black transition delay-150 scale-110">
          LOGIN
        </button>
      </div>
    </div>
  );
};
