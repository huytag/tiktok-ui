import { HashTagIcon, HashTagMusicIcon } from '~/component/Icon';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

function Discover() {
   return (
      <div className={cx('discover')}>
         <p className={cx('label')}>Discover</p>
         <div className={cx('discover-list')}>
            <a className={cx('discover-item')} href="/">
               <HashTagIcon />
               <p>suthatla</p>
            </a>
            <a className={cx('discover-item')} href="/">
               <HashTagIcon />
               <p>mackedoi</p>
            </a>
            <a className={cx('discover-item')} href="/">
               <HashTagIcon />
               <p>sansangthaydoi</p>
            </a>
            <a className={cx('discover-item')} href="/">
               <HashTagMusicIcon />
               <p>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n</p>
            </a>
            <a className={cx('discover-item')} href="/">
               <HashTagMusicIcon />
               <p>Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng</p>
            </a>
            <a className={cx('discover-item')} href="/">
               <HashTagMusicIcon />
               <p>Thiên Thần Tình Yêu - RICKY STAR</p>
            </a>
            <a className={cx('discover-item')} href="/">
               <HashTagIcon />
               <p>Tgenzlife</p>
            </a>
            <a className={cx('discover-item')} href="/">
               <HashTagIcon />
               <p>7749hieuung</p>
            </a>
         </div>
      </div>
   );
}

export default Discover;
