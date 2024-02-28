import { Provider } from "react-redux";
import React, { JSX } from "react";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

interface ProvidersProps {
  children: React.ReactNode | React.ReactElement | JSX.Element;
}

export function Providers({ children }: ProvidersProps) {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => children}
      </PersistGate>
    </Provider>
  );
}
