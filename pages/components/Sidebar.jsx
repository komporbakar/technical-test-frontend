import React from 'react';
import { IoIosLogOut, IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { LuMessagesSquare, LuTimer, LuUsers, LuWallet } from "react-icons/lu";
import { RiHomeSmile2Line } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import styles from "../styles/Home.module.scss";

const Sidebar = () => {
  return (
     <div className={styles.sidebar}>
          <div className={styles.colfirst}>
            <h2>S</h2>
            <div className={styles.iconmessage}>
              <LuMessagesSquare />
            </div>
          </div>
          <div className={styles.colsecond}>
            <div className={styles.active}>
              <RiHomeSmile2Line color="white" width={100} />
            </div>
            <div className={styles.icon}>
              <IoIosNotificationsOutline className={styles.iconsize} />
            </div>
            <div className={styles.icon}>
              <LuTimer />
            </div>
            <div className={styles.icon}>
              <LuUsers />
            </div>
            <div className={styles.icon}>
              <LuWallet />
            </div>
            <div className={styles.icon}>
              <TbSettings />
            </div>
          </div>
          <div className={styles.colthird}>
            <div className={styles.icon}>
              <IoPersonOutline />
            </div>
            <div className={styles.icon}>
              <IoIosLogOut />
            </div>
          </div>
        </div>
  )
}

export default Sidebar
