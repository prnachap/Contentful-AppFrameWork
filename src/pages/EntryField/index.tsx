import React from "react";
import { FieldExtensionSDK } from "@contentful/app-sdk";

interface Props {
  sdk: FieldExtensionSDK;
}

const EntryField: React.FC<Props> = (props) => {
  const { sdk } = props;
  return <div>{sdk.field.getValue()}</div>;
};

export default EntryField;
