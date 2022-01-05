import ROUTES from "./routeConstants";
import { Landing, Faq, Welcome } from "./../modules";

const Routes = {
  LANDING: { path: ROUTES.LANDING, protected: true, component: Landing },
  FAQ: { path: ROUTES.FAQ, protected: true, component: Faq },
  WELCOME: { path: ROUTES.WELCOME, protected: true, component: Welcome },
};

export default Routes;
