import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ROUTES from "../../common/routeConstants";

function MainPage() {
  const history = useHistory();
  useEffect(() => {
    history.push(ROUTES.LANDING);
  },[history]);
  return <div></div>;
}

export default MainPage;
