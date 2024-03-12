import { ReactElement } from "react";
import Sider from "./sider";
import Banner from "./banner";
import Footer from "./footer";

export interface LayoutProps {
  children: ReactElement;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sider />
      <div className="p-4 sm:ml-64">
        <div className="p-8">{children}</div>
      </div>
      <Footer />
    </>
  );
}
