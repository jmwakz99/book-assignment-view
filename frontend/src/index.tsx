import React from "react";
import ReactDOM from "react-dom/client";

import ApolloWrapper from "@components/particles/apollo/ApolloProvider";
import ThemeWrapper from "@components/particles/theme/ThemeWrapper";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApolloWrapper>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </ApolloWrapper>
  </React.StrictMode>,
);
