import { ReactElement } from "react";
import Sider from "./sider";
import Banner from "./banner";
import Footer from "./footer";

export interface LayoutProps {
  children: ReactElement;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="text-gray-700">
      <Sider />
      <div className="px-4 pt-4 sm:ml-64">
        <div className="pt-8 px-0 lg:px-24 [@media(width>=1500px)]:px-52">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
