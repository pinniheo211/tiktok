import classNames from 'classnames/bind';
import { useState } from 'react'
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItems from './MenuItems';
import Header from './Header';
const cx = classNames.bind(styles);
const defaultFn = () => { }
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItems key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                }
                else {
                    onChange(item)
                }
            }}>
            </MenuItems>
        })
    }
    return (
        <Tippy
            interactive 
            offset={[12,8]}
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header title="Language" onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }}></Header>}
                        {renderItems()}
                    </PopperWrapper>
                </div>

            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}

        </Tippy>
    )
}
export default Menu