import Layout from "../layout";
import { IoSettingsOutline, IoSearchSharp } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";

const Mail = () => {
  return (
    <Layout>
      <div className="md:my-4  w-full flex items-center bg-[white] justify-between p-4 rounded-lg">
        <h1 className="font-semibold text-lg capitalize">Inbox</h1>
        <label
          htmlFor=" search_email"
          className="md:w-1/3 relative hidden md:block"
        >
          <span className="sr-only">search</span>
          <span className="absolute text-xl inset-y-0 left-0 flex items-center pl-2">
            <IoSearchSharp />
          </span>
          <input
            type="search"
            name="serch_email"
            id="search_email"
            placeholder="Search inbox"
            className="placeholder:italic outline-none border-1 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-primary focus:ring-1 sm:text-sm"
          />
        </label>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer text-2xl p-1 rounded-full">
            <IoSettingsOutline />
          </div>
          <div className="cursor-pointer text-2xl p-1  rounded-full">
            <IoMdHelpCircleOutline />
          </div>
        </div>
      </div>
      <div className="px-4 md:w-1/3 relative md:hidden w-full md:my-4 flex items-center bg-[white] justify-between p-4 rounded-lg">
        <label htmlFor=" search_email" className=" w-full md:w-1/3 relative">
          <span className="sr-only">search</span>
          <span className="absolute text-xl inset-y-0 left-0 flex items-center pl-2">
            <IoSearchSharp />
          </span>
          <input
            type="search"
            name="serch_email"
            id="search_email"
            placeholder="Search inbox"
            className="placeholder:italic outline-none border-1 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-primary focus:ring-1 sm:text-sm"
          />
        </label>
      </div>
    </Layout>
  );
};
export default Mail;
