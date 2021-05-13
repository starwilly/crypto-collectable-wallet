import * as React from "react";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./AppProvider";

export const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
