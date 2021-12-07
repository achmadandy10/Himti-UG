import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { DarkModeContainer } from "./DarkMode.elements"

const DarkMode = () => {
    const [theme, setTheme] = useState('light-theme');
    const setMode = (mode: string) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode)
    }
    const toggleTheme = () => {
        theme === 'dark-theme' ? setMode('light-theme') : setMode('dark-theme');
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('light-theme');
    }, []);

    if (theme === 'dark-theme') {
        document.body.classList.add(theme)
    } else {
        document.body.classList.remove('dark-theme')
    }

    return (
        <>
            <DarkModeContainer>
                {
                    theme === "light-theme" ?
                        <BiMoon onClick={ toggleTheme }/>
                    :
                        <BiSun onClick={ toggleTheme }/>
                }
            </DarkModeContainer>
        </>
    )
}

export default DarkMode