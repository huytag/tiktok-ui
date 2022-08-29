import { faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind"
import Button from "../Button";
import { HashTagMusicIcon } from "../Icon";
import Image from "../Image";
import styles from './RecommendItem.module.scss';


const cx = classNames.bind(styles);

function RecommendItem({ data = [] }) {
    return (
        <div className={cx('recommend-item')}>
            <Image className={cx('avatar')} src={data.avatar} alt='' />
            <div className={cx('recommend-right')}>
                <div className={cx('recommend-header')}>
                    <div className={cx('music-author')}>
                        <div className={cx('info-author')}>
                            <Image className={cx('avatar-mb')} src={data.avatar} alt='' />
                            <a className={cx('author')} href="/">
                                <h3 className={cx('full_name')}>{`${data.first_name} ${data.last_name}`}</h3>
                                <h4 className={cx('nick_name')}>{data.nickname}</h4>
                            </a>
                        </div>
                        <div className={cx('video-desc')}>
                            <span className={cx('desc')}>{data.popular_video.description}</span> {' '}
                            <a className={cx('hashtag')} href="/"><strong>#viral </strong></a> {' '}
                            <a className={cx('hashtag')} href="/"><strong>#kingearthcomedy </strong></a> {' '}
                            <a className={cx('hashtag')} href="/"><strong>#fypシ</strong></a> {' '}
                            <a className={cx('hashtag')} href="/"><strong>#footballfun </strong></a>
                        </div>
                        <h4 className={cx('video-music-title')}><HashTagMusicIcon /> <span>{data.popular_video.music || 'original sound  - King Earth Comedy'} </span></h4>
                    </div>
                    {!data.is_followed && (
                        <Button outline small>Follow</Button>
                    )}
                </div>
                <div className={cx('recommend-content')}>
                    <div className={cx('recommend-video')}>
                        <video controls src={data.popular_video.file_url} />
                    </div>
                    <div className="recommend-action-item">
                        <button className={cx('btn')} type="button">
                            <span className={cx('b-icon')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                            </span>
                            <strong>{data.popular_video.likes_count}</strong>
                        </button>
                        <button className={cx('btn')} type="button">
                            <span className={cx('b-icon')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                            </span>
                            <strong>{data.popular_video.comments_count}</strong>
                        </button>
                        <button className={cx('btn')} type="button">
                            <span className={cx('b-icon')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                            </span>
                            <strong>{data.popular_video.shares_count}</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendItem