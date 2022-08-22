import images from '~/assets/images';
import Button from '~/component/Button';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '~/assets/images';

import { useState } from 'react';
import Menu from '~/component/Popper/Menu';
import {
   CoinIcon,
   FeedBackIcon,
   KeyBoardIcon,
   LanguageIcon,
   LogoutIcon,
   MessengerIcon,
   MoreBtnIcon,
   NotificationIcon,
   PlushIcon,
   ProfileIcon,
   SettingIcon,
} from '~/component/Icon';

import Image from '~/component/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <LanguageIcon />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               code: 'vi',
               title: 'Tiếng Việt (Việt Nam)',
            },
            {
               code: 'en',
               title: 'English',
            },
            {
               code: 'en',
               title: 'العربية',
            },
            {
               code: 'en',
               title: 'Cebuano (Pilipinas)',
            },
            {
               code: 'en',
               title: 'Deutsch',
            },
            {
               code: 'en',
               title: 'Filipino (Pilipinas)',
            },
            {
               code: 'en',
               title: '日本語（日本）',
            },
            {
               code: 'en',
               title: '한국어 (대한민국)',
            },
         ],
      },
   },
   {
      icon: <FeedBackIcon />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <KeyBoardIcon />,
      title: 'Keyboard shortcuts',
   },
];

function Header() {
   const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));

   //handle logic
   const handleMenuChange = (menuItem) => {
      if (String(menuItem.title).toLowerCase() === 'logout') {
         setCurrentUser(false);
         localStorage.setItem('currentUser', false);
      }
   };

   const userMenu = [
      {
         icon: <ProfileIcon />,
         title: 'View profile',
         to: '/view-profile',
      },
      {
         icon: <CoinIcon />,
         title: 'Get coin',
         to: '/coin',
      },
      {
         icon: <SettingIcon />,
         title: 'Setting',
         to: '/setting',
      },
      ...MENU_ITEMS,
      {
         icon: <LogoutIcon />,
         title: 'Logout',
         separate: true,
      },
   ];

   const handleLogin = () => {
      setCurrentUser(true);
      localStorage.setItem('currentUser', true);
   };

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo-link')}>
               <img src={image.logo} alt="tiktok"></img>
            </Link>
            {/* search */}

            <Search />

            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Button leftIcon={<PlushIcon />} small className={cx('action-btn-upload')}>
                        Upload
                     </Button>

                     <Tippy content="Messenger" placement="bottom" delay={[0, 300]}>
                        <button className={cx('action-btn')}>
                           <MessengerIcon />
                        </button>
                     </Tippy>

                     <Tippy content="Notification" placement="bottom" delay={[0, 300]}>
                        <button className={cx('action-btn')}>
                           <span className={cx('bell-btn')}>7</span>
                           <NotificationIcon width="3.2rem" height="3.2rem" />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary onClick={handleLogin}>
                        Log in
                     </Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <Image className={cx('user-avatar')} src={images.user}></Image>
                  ) : (
                     <button className={cx('more-btn')}>
                        <MoreBtnIcon />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
