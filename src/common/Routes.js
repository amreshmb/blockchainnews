import ROUTES from "./routeConstants";
import { Landing } from './../modules';


const Routes = {
  LANDING: { path: ROUTES.LANDING, protected: true, component: Landing }
};

export default Routes;
