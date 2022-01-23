import ROUTES from "./routeConstants";
import {
  Main,
  Landing,
  Faq,
  Welcome,
  User,
  TermsOfService,
  PrivacyPolicy,
  PostDetail,
  About,
  Search,
  Login
} from "./../modules";

const Routes = {
  MAIN: { path: `${ROUTES.MAIN}`, protected: false, component: Main },
  LANDING: { path: `${ROUTES.LANDING}`, protected: false, component: Landing },
  LANDING_SORT: {
    path: `${ROUTES.LANDING}/:sortBy`,
    protected: false,
    component: Landing,
  },
  LANDING_SORT_TAG: {
    path: `${ROUTES.LANDING}/:sortBy/:tag`,
    protected: false,
    component: Landing,
  },
  FAQ: { path: ROUTES.FAQ, protected: false, component: Faq },
  WELCOME: { path: ROUTES.WELCOME, protected: false, component: Welcome },
  USER: {
    path: `${ROUTES.USER}/:authorName`,
    protected: false,
    component: User,
  },
  TNC: { path: `${ROUTES.TNC}`, protected: false, component: TermsOfService },
  PRIVACY: {
    path: `${ROUTES.PRIVACY}`,
    protected: false,
    component: PrivacyPolicy,
  },
  NEWS: {
    path: `${ROUTES.NEWS}/:id/:authorName/:postTitle`,
    protected: false,
    component: PostDetail,
  },
  ABOUT: { path: `${ROUTES.ABOUT}`, protected: false, component: About },
  SEARCH: { path: `${ROUTES.SEARCH}`, protected: false, component: Search },
  LOGIN: { path: `${ROUTES.LOGIN}`, protected: false, component: Login }
};

export default Routes;
