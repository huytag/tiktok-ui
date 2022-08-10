import routesConfig from '~/config/routes';

//Layouts
import { HeaderOnyLayout } from '~/component/Layouts';

import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

const publicRoutes = [
   { path: routesConfig.home, component: HomePage },
   { path: routesConfig.following, component: FollowingPage },
   { path: routesConfig.profile, component: ProfilePage },
   { path: routesConfig.upload, component: UploadPage, layout: HeaderOnyLayout },
   { path: routesConfig.search, component: SearchPage, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
