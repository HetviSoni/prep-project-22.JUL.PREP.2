import React from "react";
import { Fab } from "../Components/common/Fab";
import Fact from "../Fact";
const navigateToHome = () => (window.location.href = "/");

export function Trip() {
  React.useEffect(() => {
    document.title = "Plan a trip";
  }, []);

  return (
    <>
      <Fact/>
      <Fab onClick={navigateToHome} icon="thermostat">
        Weather
      </Fab>
    </>
  );
}

export default Trip;
