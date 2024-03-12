import PersonalInfo from "@/components/customer/personal-info";
import Banner from "@/components/layouts/banner";
import ShowProfile from "@/components/customer/show-profile";
import DeleteAccount from "@/components/customer/delete-account";
import SupportTeam from "@/components/shared/support-team";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
      </div>
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
