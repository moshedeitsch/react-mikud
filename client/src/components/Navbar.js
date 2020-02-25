import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
import styles from '../style/nav-bar.module.css'

const Navbar = (props) => {

    const context = useContext(DarkModeContext);

    const { darkMode, setDarkMode } = context

    return (
        <nav>
            <div className={styles.firstItem}>
            <div className={styles.toggleContainer}>
                <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                <span className={styles.toggle}>
                    <input
                        checked={!darkMode}
                        onChange={() => setDarkMode(prevMode => !prevMode)}
                        id="checkbox"
                        className={styles.checkbox}
                        type="checkbox"/>
                    <label htmlFor="checkbox" />
                </span>
                <span style={{ color: context.darkMode ? "slateblue" : "grey" }}>☾</span>
            </div>
            </div>

            <h1 className={styles.title}>מיקוד ישראל</h1>

        </nav>






    );
}

export default Navbar;