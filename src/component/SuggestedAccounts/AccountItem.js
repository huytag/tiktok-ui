import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import Image from '../Image';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import { AccountPreview } from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
   const renderPreview = (attrs) => (
      <div className={cx('preview')} tabIndex="-1" {...attrs}>
         <PopperWrapper>
            <AccountPreview data={data} />
         </PopperWrapper>
      </div>
   );

   return (
      <div>
         <Tippy offset={[-25, 0]} interactive delay={[800, 0]} placement={'bottom'} render={renderPreview}>
            <div className={cx('account-item')}>
               <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />
               <div className={cx('item-info')}>
                  <p className={cx('nickname')}>
                     <strong>{data.nickname}</strong>
                     {data.tick && (
                        <svg
                           className="tiktok-shsbhf-StyledVerifyBadge e1aglo370"
                           width={14}
                           height={14}
                           viewBox="0 0 48 48"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <circle cx={24} cy={24} r={24} fill="#20D5EC" />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z"
                              fill="white"
                           />
                        </svg>
                     )}
                  </p>
                  <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

AccountItem.propsTypes = {
   label: PropTypes.string.isRequired,
};

export default AccountItem;
