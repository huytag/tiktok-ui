import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, accounts = [], onSeeAll }) {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('label')}>{label}</p>
         {accounts.map((account) => (
            <AccountItem key={account.id} data={account} />
         ))}
         <p className={cx('see-more')} onClick={onSeeAll}>
            See all
         </p>
      </div>
   );
}

SuggestedAccounts.propsTypes = {
   label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
