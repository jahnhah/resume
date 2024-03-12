import Image from "next/image";
import { Inter } from "next/font/google";
import PersonalInfo from "@/components/customer/personal-info";
import Banner from "@/components/layouts/banner";
import ShowProfile from "@/components/customer/show-profile";
import DeleteAccount from "@/components/customer/delete-account";
import SupportTeam from "@/components/shared/support-team";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />
      <div className="mt-8">
        <PersonalInfo />
      </div>
      <div className="mt-4">
        <ShowProfile />
      </div>
      <div className="mt-12">
        <DeleteAccount />
      </div>
      <div className="mt-12">
        <SupportTeam />
      </div>
    </>
  );
}
