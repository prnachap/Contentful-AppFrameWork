import { AppExtensionSDK } from "@contentful/app-sdk";
import React from "react";

interface Props {
  sdk: AppExtensionSDK;
}

const AppConfiguration: React.FC<Props> = (props) => {
  return <div>Welcome to Contentful App</div>;
};

export default AppConfiguration;
