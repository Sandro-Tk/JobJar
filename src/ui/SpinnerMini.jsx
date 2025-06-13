import { BiLoaderAlt } from "react-icons/bi";

function SpinnerMini() {
    return (
        <BiLoaderAlt
            className="w-6 h-6 animate-spin text-blue-600"
            aria-label="Loading"
        />
    );
}

export default SpinnerMini;
