import ROUTES from "./routeConstants";
import { Main, Landing, Faq, Welcome, User, TermsOfService, PrivacyPolicy } from "./../modules";

const Routes = {
  MAIN: { path: `${ROUTES.MAIN}`, protected: false, component: Main },
  LANDING: { path: `${ROUTES.LANDING}`, protected: false, component: Landing },
  LANDING_SORT: { path: `${ROUTES.LANDING}/:sortBy`, protected: false, component: Landing },
  LANDING_SORT_TAG: { path: `${ROUTES.LANDING}/:sortBy/:tag`, protected: false, component: Landing },
  FAQ: { path: ROUTES.FAQ, protected: false, component: Faq },
  WELCOME: { path: ROUTES.WELCOME, protected: false, component: Welcome },
  USER: { path: `${ROUTES.USER}/:authorName`, protected: false, component: User },
  TNC: { path: `${ROUTES.TNC}`, protected: false, component: TermsOfService },
  PRIVACY: { path: `${ROUTES.PRIVACY}`, protected: false, component: PrivacyPolicy },
};

export default Routes;
