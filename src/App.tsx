import React from "react";
import {I18nextProvider} from 'react-i18next';
import i18n from './contexts/i18n';
import TripProvider from "./contexts/TripProvider";
import Calculator from "./components/Calculator";
import { MetroMap } from "./components/MetroMap";
import "./styles/App.scss";
import MapProvider from "./contexts/MapProvider";

const App = () => {
  return (
    <>
      <div className="App">
        <I18nextProvider i18n={i18n}>
          <TripProvider>
            <Calculator />
            <MapProvider>
              <MetroMap />
            </MapProvider>
          </TripProvider>
        </I18nextProvider>
      </div>
      <footer>
        <a href="https://github.com/hspotlight/">Developed by HSpolight</a>
      </footer>
    </>
  );
};

export default App;
