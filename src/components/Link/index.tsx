import { ComponentProps } from "react";
import NextLink from "next/link";

interface LinkProps extends ComponentProps<typeof NextLink> {}

const Link: React.FC<LinkProps> = (props) => {
  return <NextLink {...props} />;
};

export default Link;
