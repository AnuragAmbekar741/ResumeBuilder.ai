import { Button } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <div className="absolute top-0 flex justify-between w-full p-5 shadow-md">
      <div>
        <h1 className="text-2xl font-bold tracking-tight transition delay-100 hover:scale-110">
          Free Resume !
        </h1>
      </div>
      <div>
        <Button
          variant="outlined"
          className="px-3 py-2 text-sm font-medium transition delay-150 scale-110 border-black rounded-2xl text-slate-900 w-28 hover:bg-black hover:text-white"
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
};
