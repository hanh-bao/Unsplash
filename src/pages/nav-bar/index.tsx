import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="sticky border-b-[1px] top-0 z-40 w-full border-b-slate-700 bg-background"
      style={{
        height: "var(--navbar-height)",
      }}
    >
      <div className="flex justify-between p-3">
        <Link className="ml-2 font-bold text-xl flex items-center" to="/">
          Unsplash
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
