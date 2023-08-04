import SideBar from '../DefaultLayout/SideBar'
import Header from '../components/Header'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)
function DefaultLayout({children}){
    return (
        <div className = {cx("wrapper")}>
            <Header></Header>
            <div className={cx("container")}> 
                <SideBar></SideBar>
                <div className={cx("content")}>
                    {children}                    
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout; 