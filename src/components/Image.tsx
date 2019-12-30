import React, { forwardRef } from "react";

type IProps = {
  variant?: "medium" | "large";
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image = forwardRef(
  (
    { variant = "medium", ...rest }: IProps = {},
    ref: React.Ref<HTMLImageElement>
  ) => (
    <img
      src={`${process.env.PUBLIC_URL}/logo${
        variant === "medium" ? "192" : "512"
      }.png`}
      alt="React logo"
      {...rest}
      ref={ref}
    />
  )
);

export default Image;
