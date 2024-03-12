import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../inputs/text-input";
import { Button, Checkbox } from "@material-tailwind/react";
import Link from "next/link";
export default function CustomerForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    city: "",
    postalCode: "",
    address: "",
    email: "",
    phone: "",
    password: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    city: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Include at least one Uppercase, Lowercase, Number and a special character"
      ),
  });
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8 mb-4">
            <div className="col-span-1 [@media(width>=545px)]:col-span-2 [@media(width>=712px)]:col-span-1">
              <TextInput
                type="text"
                name="firstName"
                placeholder="First Name"
                label="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={
                  errors.firstName && touched.firstName && errors.firstName
                }
                success={!errors.firstName && touched.firstName ? "Valid" : ""}
              />
            </div>
            <div className="col-span-1 [@media(width>=545px)]:col-span-2 [@media(width>=712px)]:col-span-1">
              <TextInput
                type="text"
                name="lastName"
                placeholder="Last Name"
                label="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                error={errors.lastName && touched.lastName && errors.lastName}
                success={!errors.lastName && touched.lastName ? "Valid" : ""}
              />
            </div>
            <div className="col-span-1 [@media(width>=545px)]:col-span-2 [@media(width>=712px)]:col-span-1">
              <TextInput
                type="text"
                name="city"
                placeholder="City"
                label="City"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                error={errors.city && touched.city && errors.city}
                success={!errors.city && touched.city ? "Valid" : ""}
              />
            </div>
            <div className="col-span-1 [@media(width>=545px)]:col-span-2 [@media(width>=712px)]:col-span-1">
              <TextInput
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                label="Postal Code"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postalCode}
                error={
                  errors.postalCode && touched.postalCode && errors.postalCode
                }
                success={
                  !errors.postalCode && touched.postalCode ? "Valid" : ""
                }
              />
            </div>
            <div className="col-span-2">
              <TextInput
                type="text"
                name="address"
                placeholder="Address"
                label="Address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                error={errors.address && touched.address && errors.address}
                success={!errors.address && touched.address ? "Valid" : ""}
              />
            </div>

            <div className="col-span-1 [@media(width>=545px)]:col-span-2 [@media(width>=712px)]:col-span-1">
              <TextInput
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email && errors.email}
                success={!errors.email && touched.email ? "Valid" : ""}
              />
            </div>
            <div className="col-span-1 [@media(width>=545px)]:col-span-2 [@media(width>=712px)]:col-span-1">
              <TextInput
                type="text"
                name="phone"
                placeholder="Phone"
                label="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                error={errors.phone && touched.phone && errors.phone}
                success={!errors.phone && touched.phone ? "Valid" : ""}
              />
            </div>
            <div className="col-span-1 [@media(width>=545px)]:col-span-2 [@media(width>=712px)]:col-span-1">
              <TextInput
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password && errors.password}
                success={!errors.password && touched.password ? "Valid" : ""}
              />
            </div>
            <p className="col-span-2 mt-0">
              Use this email to log in to your{" "}
              <Link href="#" className="text-blue-500">
                resumedone.io
              </Link>{" "}
              account and receive notifications.
            </p>

            <div className="col-start-1 col-end-2 mt-0">
              <Button
                className="px-20 bg-blue-500 capitalize text-[15px]"
                type="submit"
                onSubmit={() => handleSubmit}
                disabled={isSubmitting}
                placeholder=""
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}
