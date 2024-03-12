import Image from "next/image";
import SideMenu, { Menu } from "../shared/menu/side-menu";
import { MENUS } from "@/pages/api/static_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import UserAccount from "./user-account";
export default function Sider() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-gray-200 border-solid border-2"
        aria-label="Sidebar"
      >
        <div className="bg-white w-full px-5 py-4 border-black-900 border-solid border-b-2">
          <Image alt="logo" src="/images/logo.svg" width={114.47} height={24} />
        </div>

        <div className="h-[calc(100%_-_115px)] px-3 py-4 overflow-y-auto bg-white dark:bg-white">
          <SideMenu menus={MENUS} />
        </div>
        <UserAccount />
      </aside>
    </>
  );
}
