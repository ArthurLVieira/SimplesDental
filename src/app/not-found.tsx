import ErrorMessage from "@/components/ErrorMessage";
import React from "react";

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <ErrorMessage
      title="Page Not Found"
      status="404"
      content="The page you are looking for does not exist."
    />
  );
};

export default NotFoundPage;
