import CustomerForm from "./customer-form";
import CustomerPhoto from "./customer-photo";

export default function PersonalInfo() {
  return (
    <>
      <h4 className="text-[#14141F] text-[24px] py-6 font-[gilroy-semibold]">
        Personal Information
      </h4>
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-4 xl:col-span-3">
          <CustomerForm />
        </div>
        <div className="pb-8 col-span-4 xl:col-span-1 flex justify-center order-first xl:order-last xl:py-0">
          <CustomerPhoto url="/images/customer-photo.png" />
        </div>
      </div>
    </>
  );
}
