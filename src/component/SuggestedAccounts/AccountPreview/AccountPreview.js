import classNames from 'classnames/bind';
import Image from '~/component/Image';
import styles from './AccountPreview.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <Image className={cx('avatar')} src={data.avatar} alt="" />
            <Button className={cx('follow-btn')} primary>
               Follow
            </Button>
         </div>
         <div className={cx('body')}>
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
            <p className={cx('name')}>{data.full_name}</p>
            <p className={cx('analytics')}>
               <strong className={cx('value')}>{data.followings_count}</strong>
               <span className={cx('label')}>Followers</span>
               <strong className={cx('value')}>{data.likes_count}</strong>
               <span className={cx('label')}>Likes</span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
