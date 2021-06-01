import React from "react";
import ReactDOM from "react-dom";
import { FieldExtensionSDK, init, locations } from "@contentful/app-sdk";
import "@contentful/forma-36-react-components/dist/styles.css";
import { EntryField } from "./pages";
if (process.env.NODE_ENV === "development" && window.self === window.top) {
  // You can remove this if block before deploying your app
  const root = document.getElementById("root");
  ReactDOM.render(<div>Cannot Run Outside Contentful App</div>, root);
} else {
  init((sdk) => {
    const root = document.getElementById("root");

    const ComponentLocationSettings = [
      {
        location: locations.LOCATION_ENTRY_FIELD,
        component: <EntryField sdk={sdk as FieldExtensionSDK} />,
      },
    ];

    ComponentLocationSettings.forEach((componentLocationSetting) => {
      if (sdk.location.is(componentLocationSetting.location)) {
        ReactDOM.render(componentLocationSetting.component, root);
      }
    });
  });
}
