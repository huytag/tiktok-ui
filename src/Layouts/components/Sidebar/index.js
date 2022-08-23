import classNames from 'classnames/bind';
import config from '~/config';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';

import {
   LIVEIcon,
   FollowingIcon,
   FollowingActiveIcon,
   ForYourIcon,
   ForYourActiveIcon,
   LIVEActiveIcon,
} from '~/component/Icon';
import SuggestedAccounts from '~/component/SuggestedAccounts/SuggestedAccounts';
import { useEffect, useState } from 'react';
import { accountService } from '~/Services/searchService';
import { Discover } from './Discover';

const cx = classNames.bind(styles);

function SideBar() {
   const [accountResult, setAccountResult] = useState([]);
   const [followingResult, setFollowingResult] = useState([]);

   useEffect(() => {
      const fechApi = async () => {
         const result = await accountService();
         const result2 = await accountService('p', 'more');
         setAccountResult(result);
         setFollowingResult(result2);
      };
      fechApi();
   }, []);

   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem
               title="For You"
               to={config.routes.home}
               icon={<ForYourIcon />}
               activeIcon={<ForYourActiveIcon />}
            />
            <MenuItem
               title="Following"
               to={config.routes.following}
               icon={<FollowingIcon />}
               activeIcon={<FollowingActiveIcon />}
            />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LIVEIcon />} activeIcon={<LIVEActiveIcon />} />
         </Menu>
         <SuggestedAccounts accounts={accountResult} label="Suggested accounts" />
         <SuggestedAccounts accounts={followingResult} label="Following accounts" />
         <Discover />
      </aside>
   );
}

export default SideBar;
