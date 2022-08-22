import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   return (
      <div className={cx('wrapper')}>
         <Header />
         <div className={cx('container')}>
            <SideBar />
            <div className={cx('content')}>{children}</div>
         </div>
      </div>
   );
}

DefaultLayout.protoTypes = {
   children: PropTypes.node.isRequired,
};

export default DefaultLayout;
