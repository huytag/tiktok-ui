import config from '~/config';

//Layouts
import { HeaderOnyLayout } from '~/Layouts';

import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';
import LIVE from '~/pages/Live';

const publicRoutes = [
   { path: config.routes.home, component: HomePage },
   { path: config.routes.following, component: FollowingPage },
   { path: config.routes.live, component: LIVE },
   { path: config.routes.profile, component: ProfilePage },
   { path: config.routes.upload, component: UploadPage, layout: HeaderOnyLayout },
   { path: config.routes.search, component: SearchPage, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
