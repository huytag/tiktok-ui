import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchBtnIcon } from '~/component/Icon';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hook';
import { searchService } from '~/Services/searchService';

const cx = classNames.bind(styles);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const debouncedValue = useDebounce(searchValue, 500);

   const inputRef = useRef();

   useEffect(() => {
      if (!debouncedValue.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchApi = async () => {
         setLoading(true);
         const result = await searchService(debouncedValue);
         setSearchResult(result);
         setLoading(false);
      };
      fetchApi();
   }, [debouncedValue]);

   const handleClearInput = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchValue(searchValue);
      }
   };

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   // };

   return (
      <div>
         <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
               <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                     <h4 className={cx('search-title')}>Accounts</h4>
                     {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result} />
                     ))}
                  </PopperWrapper>
               </div>
            )}
         >
            <div className={cx('search')}>
               <input
                  ref={inputRef}
                  value={searchValue}
                  placeholder="Search accounts and videos"
                  spellCheck="false"
                  onFocus={() => setShowResult(true)}
                  onChange={handleChange}
               ></input>
               {!!searchValue && !loading && (
                  <button className={cx('clear')} onClick={handleClearInput}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}
               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
               <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                  <SearchBtnIcon width="2.4rem" height="2.4rem" />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
