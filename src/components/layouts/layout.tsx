import { ReactElement } from "react";
import Sider from "./sider";
import Banner from "./banner";

export interface LayoutProps {
  children: ReactElement;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sider />
      <div className="p-4 sm:ml-64">
        <div className="p-8 border-2 border-gray-200 border-dashed rounded-lg">
          {children}
        </div>
      </div>
    </>
  );
}
