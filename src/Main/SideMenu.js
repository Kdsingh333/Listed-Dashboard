import React from 'react'
import './SideMenu.css'
import dashboard from '../image/dashboard_icon1.svg'
import schedule from '../image/schedule_icon.svg'
import transaction from '../image/transaction_icon.svg'
import setting from '../image/setting_icon.svg'
import user from '../image/user_icon.svg'

function SideMenu() {
    return (
        <div className='mn'>
            <SideBar></SideBar>
        </div>
    )
}


function SideBar() {
    return (
        <>
            <div className='sidebar'>
                <h2>Board.</h2>
                <div className='firstsec'>
                    <ul>
                        <li>
                            <div className='listele'>
                                <img src={dashboard}></img>
                                <p>Dashboard</p>
                            </div>
                        </li>
                        <li>
                            <div className='listele'>
                                <img src={schedule}></img>
                                <p>Schedules</p>
                            </div>
                        </li>
                        <li>
                            <div className='listele'>
                                <img src={transaction}></img>
                                <p>Transaction</p>
                            </div>
                        </li>
                        <li>
                            <div className='listele'>
                                <img src={user}></img>
                                <p>User</p>
                            </div>
                        </li>
                        <li>
                            <div className='listele'>
                                <img src={setting}></img>
                                <p>Setting</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <Footer></Footer>
            </div>
        </>
    )
}

function Footer() {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <div className='listele'>
                            <p>Help</p>
                        </div>
                    </li>
                    <li>
                        <div className='listele'>

                            <p>Contact Us</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default SideMenu;