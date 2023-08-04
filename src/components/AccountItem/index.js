import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b07d0fbd70c1ef0185364ba341a16395.jpeg?x-expires=1683903600&x-signature=YEbDA27xbJy7jBF%2FllO%2Baf0kgr0%3D" alt="hoa"></img>
            <div className={cx('info')} src="" alt="hoa">
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                </p>
                <span className={cx('username')}>Nguyen Van A</span>
            </div>
        </div>
    );
}

export default AccountItem;