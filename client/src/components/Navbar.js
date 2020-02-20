import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
import '../style/nav-bar.css'

const Navbar = (props) => {

    const context = useContext(DarkModeContext);

    return (
        <nav>
            <div className='first-item'>
            <div className="toggle-container">
                <span style={{ color: context.darkMode ? "grey" : "yellow" }}>☀︎</span>
                <span className="toggle">
                    <input
                        checked={context.darkMode}
                        onChange={() => context.setDarkMode(prevMode => !prevMode)}
                        id="checkbox"
                        className="checkbox"
                        type="checkbox"
                    />
                    <label htmlFor="checkbox" />
                </span>
                <span style={{ color: context.darkMode ? "slateblue" : "grey" }}>☾</span>
            </div>
            </div>

            <h1 className='title'>מיקוד ישראל</h1>

        </nav>






    );
}

export default Navbar;