import { BsArrowLeftCircle,BsArrowRightCircle } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex p-5 text-white justify-between">
      <div className="flex gap-3 items-center">
        <BsArrowLeftCircle size={24} className="opacity-20 hover:opacity-100 cursor-pointer"/>
        <BsArrowRightCircle size={24} className="opacity-20 hover:opacity-100 cursor-pointer"/>
      </div>
      <div className="flex">
{/*         <button className="transition ease-in-out rounded-full px-7 py-2 text-sm border-2 border-[#23D3ED] hover:bg-[#23D3ED]">Upgrade</button> */}
        <button className="rounded-full ease-in-out ml-4 px-7 py-2 text-sm bg-[#23D3ED] hover:bg-[#000]">Piu Paul</button>
      </div>
    </div>
  );
};

export default TopBar;
