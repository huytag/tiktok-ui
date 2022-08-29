import { RecommendItem } from "~/component/RecommendItem";
import classNames from "classnames/bind";
import styles from './Home.module.scss';
import { useEffect, useState } from "react";
import { accountService } from '~/Services/SuggestedService';

const cx = classNames.bind(styles);

const initPage = 2;
const perPage = 10;

function Home() {
   const [recommentList, setRecommentList] = useState([]);

   useEffect(() => {
      const fechApi = async () => {
         const result = await accountService(initPage, perPage);
         setRecommentList((prev) => [...prev, ...result]);
      }
      fechApi();
   }, []);


   return (
      <div className={cx('wrapper')}>
         {recommentList.map((item) => (
            <RecommendItem key={item.id} data={item} />
         ))}
      </div>
   );
}

export default Home;
