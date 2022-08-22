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

const cx = classNames.bind(styles);

function SideBar() {
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
         <SuggestedAccounts label="Suggested accounts" />
         <SuggestedAccounts label="Following accounts" />
      </aside>
   );
}

export default SideBar;
