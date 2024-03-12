import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { CSSProperties } from "react";
import Image from "next/image";
export interface Menu {
  prefixIcon?: string;
  label: string;
  route?: string;
  suffixIcon?: string;
  prefixImage?: string;
  iconStyle?: CSSProperties;
}
export interface SideMenuProps {
  menus: Menu[];
}
export default function SideMenu({ menus }: SideMenuProps) {
  return (
    <ul className="space-y-2 font-medium">
      {menus.map((menu) => (
        <li key={menu.label}>
          <Link
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-white group"
          >
            {menu.prefixIcon && (
              <FontAwesomeIcon width={16} icon={fas[menu.prefixIcon]} />
            )}
            {menu.prefixImage && (
              <Image
                width={16}
                height={16}
                alt="icon-menu"
                src={`/images/icons/${menu.prefixImage}.png`}
              />
            )}
            <span className="ms-3 flex-1">{menu.label}</span>
            {menu.suffixIcon && (
              <FontAwesomeIcon
                width={16}
                icon={fas[menu.suffixIcon]}
                className="float-right"
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
