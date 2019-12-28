import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

type IProps = {
  children: React.ReactNode;
  to: string;
  strict?: boolean;
  sensitive?: boolean;
};

const MyLink: React.FunctionComponent<IProps> = ({
  children,
  to,
  strict = true,
  sensitive = true
}) => {
  const match = useRouteMatch({
    path: to,
    strict,
    sensitive
  });
  if (match && match.isExact) {
    return <strong>{children}</strong>;
  }
  return <Link to={to}>{children}</Link>;
};

export default MyLink;
