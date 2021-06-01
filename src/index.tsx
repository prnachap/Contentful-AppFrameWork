import React from "react";
import ReactDOM from "react-dom";
import {
  FieldExtensionSDK,
  AppExtensionSDK,
  init,
  locations,
} from "@contentful/app-sdk";
import "@contentful/forma-36-react-components/dist/styles.css";
import { AppConfig, EntryField } from "./pages";
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
      {
        location: locations.LOCATION_APP_CONFIG,
        component: <AppConfig sdk={sdk as AppExtensionSDK} />,
      },
    ];

    ComponentLocationSettings.forEach((componentLocationSetting) => {
      if (sdk.location.is(componentLocationSetting.location)) {
        ReactDOM.render(componentLocationSetting.component, root);
      }
    });
  });
}
