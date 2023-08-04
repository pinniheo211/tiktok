import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';

import Button from '../../../Button'
import { Wrapper as PopperWrapper } from '../../../Popper'
import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu';
const cx = classNames.bind(styles);


const MENU_ITEMS = [
    {
        icon: 'A',
        title: 'Language',
        children: {
            title: 'Language',
            data: [ 
                {
                    type: 'lang',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'lang',
                    code: 'vi',
                    title: 'Viet Nam'
                }
            ]
        }
    },
    {
        icon: 'A',
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: 'A',
        title: 'Keyboard shorcut',
        to: '/keyboard'
    },
]
function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 3000)
    }, [])

    //handle logic
    const handleMenuChange = (menuItem) => {
        // console.log(menuItem)
        switch (menuItem.type) {
            case 'lang':
                //neu la type la lang thi sao ...
                break;
            default:
        }
    }
    const currentUser = true;
    const userMenu=[
        {
            icon:"()",
            title: 'View profile',
            to:'/@hoaa'
        },
        {
            icon:"()",
            title: 'Get coins',
            to:'/coin'
        },
        {
            icon:"()",
            title: 'Setting',
            to:'/setting'
        },
        ...MENU_ITEMS,
        {
            icon:"()",
            title:"Logout",
            to:'/logout',
            separate:true
        }
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <h1>Tiktok</h1>
            </div>
            <HeadlessTippy
                interactive={true}
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>
                        </PopperWrapper>
                    </div>

                )}
            >
                <div className={cx('search')}>
                    <input type="text" placeholder="search" spellCheck={false} />
                    <button type="" className={cx('clear')}>
                        <i className="fa-regular fa-circle-xmark"></i>
                    </button>

                    <button type="" className={cx('search-btn')}>
                        {/* search */}
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>

                </div>
            </HeadlessTippy>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy content="Upload" delay={[0,200]} placement="bottom">
                            <button className={cx("action-btn")}>
                                Upload
                            </button>
                        </Tippy>

                            <Tippy content="Message" placement="bottom">
                                <button className={cx("action-btn")}>
                                    Message
                                </button>
                            </Tippy>

                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Login</Button>

                    </>
                )}
                <Menu
                    items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <img className={cx('user-avatar')} alt="nguyen van yeah" src="https://yt3.ggpht.com/1sjrCoAFx_Ak9g77xLRKv5na7Uz3MlvZ1KQQs-uhCtkdxFiLLTasPHH7e_NEuBO9DmPO_m9_=s88-c-k-c0x00ffffff-no-rj"></img>
                    ) :

                        (<button className={cx('more')}>:</button>)
                    }
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;