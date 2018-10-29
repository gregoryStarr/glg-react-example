import React, { useState, Fragment, Suspense } from "react";
import "ui-theme/dist/semantic.min.css";
import "./App.css";
import {Loader} from 'semantic-ui-react'
const ImageViewer = React.lazy(() => import('./ImageViewer'));
import { useObservable, observer } from "./mobx-react";

const App = () => {

  return (
      <div>
          <Suspense fallback={<Loader active />}>
              <ImageViewer />
          </Suspense>
      </div>
  );
};

export default App;
