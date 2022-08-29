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
import { Discover } from './Discover';
import { accountService } from '~/Services/SuggestedService';

const cx = classNames.bind(styles);

const initPage = 1;
const perPage = 5;

function SideBar() {
   const [page, setPage] = useState(initPage);
   const [accountResult, setAccountResult] = useState([]);
   const [followingResult, setFollowingResult] = useState([]);

   useEffect(() => {
      const fechApi = async () => {
         const result = await accountService(page, perPage);
         const result2 = await accountService(3, perPage);
         setAccountResult((prev) => [...prev, ...result]);
         setFollowingResult(result2);
      };
      fechApi();
   }, [page]);

   const handleSeeAll = () => {
      setPage(page + 1);
   };
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
         <SuggestedAccounts accounts={accountResult} label="Suggested accounts" onSeeAll={handleSeeAll} />
         <SuggestedAccounts accounts={followingResult} label="Following accounts" />
         <Discover />
      </aside>
   );
}

export default SideBar;
