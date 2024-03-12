import React from "react";
import { Input } from "@material-tailwind/react";

export default function TextInput(props: any) {
  return (
    <div>
      <Input
        {...props}
        size="md"
        outline="true"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        error={props.error ? true : false}
        success={props.success ? true : false}
      />
      <span className="text-red-400 text-xs">{props.error}</span>
    </div>
  );
}
