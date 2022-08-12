import { ImSpinner2 } from "react-icons/im";

function LoadingModal() {
  return (
    <div className=" fixed inset-0 z-50 flex h-full w-full transform items-center overflow-y-auto bg-gray-900/40 transition duration-150 ease-in-out">
      <ImSpinner2 size={40} color="white" className="m-auto animate-spin" />
    </div>
  );
}

export { LoadingModal };
