import CustomerForm from "./customer-form";
import CustomerPhoto from "./customer-photo";

export default function PersonalInfo() {
  return (
    <>
      <h4 className="text-[#14141F] text-[24px] py-6 font-[gilroy-semibold]">
        Personal Information
      </h4>
      <div className="grid grid-cols-6 gap-1">
        <div className="col-span-5">
          <CustomerForm />
        </div>
        <div className="flex justify-center">
          <CustomerPhoto url="/images/customer-photo.png" />
        </div>
      </div>
    </>
  );
}
