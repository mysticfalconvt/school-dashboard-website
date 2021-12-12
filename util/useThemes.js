import { useState, useEffect } from "react";
import styled from "styled-components";
// list of themes   

const light = {
    colors: {
        primaryText: 'rgba(0, 0, 0, 1)',
        secondaryText: 'rgba(0, 0, 0, 0.7)',
        primaryBackground: 'rgba(255, 255, 255, 1)',
        secondaryBackground: 'rgba(255, 255, 255, 0.7)',
        primaryBorder: 'rgba(0, 0, 0, 0.1)',
        secondaryBorder: 'rgba(0, 0, 0, 0.05)',
        primaryHighlight: 'rgba(0, 0, 0, 0.1)',
        secondaryHighlight: 'rgba(0, 0, 0, 0.05)',
        primaryShadow: 'rgba(100, 100, 100, 0.8)',
        secondaryShadow: 'rgba(0, 0, 0, 0.05)',
        primaryHover: 'rgba(0, 0, 0, 0.1)',
        secondaryHover: 'rgba(0, 0, 0, 0.05)',
        primaryActive: 'rgba(0, 0, 0, 0.1)',
        secondaryActive: 'rgba(0, 0, 0, 0.05)',
        primaryDisabled: 'rgba(0, 0, 0, 0.1)',
        secondaryDisabled: 'rgba(0, 0, 0, 0.05)',
    },
}

const dark = {
    colors: {
        primaryText: 'rgba(255, 255, 255, 1)',
        secondaryText: 'rgba(255, 255, 255, 0.7)',
        primaryBackground: 'rgba(0, 0, 0, 1)',
        secondaryBackground: 'rgba(0, 0, 0, 0.7)',
        primaryBorder: 'rgba(255, 255, 255, 0.1)',
        secondaryBorder: 'rgba(255, 255, 255, 0.05)',
        primaryHighlight: 'rgba(255, 255, 255, 0.1)',
        secondaryHighlight: 'rgba(255, 255, 255, 0.05)',
        primaryShadow: 'rgba(255, 255, 255, 0.1)',
        secondaryShadow: 'rgba(255, 255, 255, 0.05)',
        primaryHover: 'rgba(255, 255, 255, 0.1)',
        secondaryHover: 'rgba(255, 255, 255, 0.05)',
        primaryActive: 'rgba(255, 255, 255, 0.1)',
        secondaryActive: 'rgba(255, 255, 255, 0.05)',
        primaryDisabled: 'rgba(255, 255, 255, 0.1)',
        secondaryDisabled: 'rgba(255, 255, 255, 0.05)',
    },
}
const neon = {
    colors: {
        primaryText: 'rgba(0, 255, 0, 1)',
        secondaryText: 'rgba(0, 0, 255, 0.7)',
        primaryBackground: 'rgba(10, 10, 10, 1)',
        secondaryBackground: 'rgba(10, 10, 10, 0.7)',
        primaryBorder: 'rgba(255, 255, 255, 0.1)',
        secondaryBorder: 'rgba(255, 255, 255, 0.05)',
        primaryHighlight: 'rgba(255, 255, 255, 0.1)',
        secondaryHighlight: 'rgba(255, 255, 255, 0.05)',
        primaryShadow: 'rgba(255, 255, 255, 0.1)',
        secondaryShadow: 'rgba(255, 255, 255, 0.05)',
        primaryHover: 'rgba(255, 255, 255, 0.1)',
        secondaryHover: 'rgba(255, 255, 255, 0.05)',
        primaryActive: 'rgba(255, 255, 255, 0.1)',
        secondaryActive: 'rgba(255, 255, 255, 0.05)',
        primaryDisabled: 'rgba(255, 255, 255, 0.1)',
        secondaryDisabled: 'rgba(255, 255, 255, 0.05)',
    },
}

const aqua = {
    colors: {
        primaryText: 'rgba(0, 255, 255, 1)',
        secondaryText: 'rgba(0, 0, 255, 0.7)',
        primaryBackground: 'rgba(10, 10, 10, 1)',
        secondaryBackground: 'rgba(10, 10, 10, 0.7)',
        primaryBorder: 'rgba(255, 255, 255, 0.1)',
        secondaryBorder: 'rgba(255, 255, 255, 0.05)',
        primaryHighlight: 'rgba(255, 255, 255, 0.1)',
        secondaryHighlight: 'rgba(255, 255, 255, 0.05)',
        primaryShadow: 'rgba(255, 255, 255, 0.1)',
        secondaryShadow: 'rgba(255, 255, 255, 0.05)',
        primaryHover: 'rgba(255, 255, 255, 0.1)',
        secondaryHover: 'rgba(255, 255, 255, 0.05)',
        primaryActive: 'rgba(255, 255, 255, 0.1)',
        secondaryActive: 'rgba(255, 255, 255, 0.05)',
        primaryDisabled: 'rgba(255, 255, 255, 0.1)',
        secondaryDisabled: 'rgba(255, 255, 255, 0.05)',
    },
}

const themes = {
    light,
    dark,
    neon,
    aqua,
};

const themesList = Object.keys(themes);

//theme picker styles
const ThemePickerStyle = styled.div`
// theme picker button in bottom right corner of screen
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 100;
    background-color: ${props => props.theme.colors.primaryBackground};
    border-radius: 0 0 0 5px;
    
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${props => props.theme.colors.secondaryBackground};
    }
    button {
        background-color: ${props => props.theme.colors.primaryBackground};
        border: 1px solid ${props => props.theme.colors.primaryBorder};
        color: ${props => props.theme.colors.primaryText};
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: ${props => props.theme.colors.secondaryBackground};
            border: 1px solid ${props => props.theme.colors.secondaryBorder};
        }
    }
`;



export default function useThemes() {
    const [theme, setTheme] = useState(themes.dark);
    const [displayThemePicker, setDisplayThemePicker] = useState(false);

    // function to set theme in local storage
    const setThemeInLocalStorage = (name) => {
        localStorage.setItem('theme', name);
    }

    const setThemeByName = (name) => {
        setTheme(themes[name]);
        setThemeInLocalStorage(name);
        setDisplayThemePicker(false);

    }
    // check local storage for theme on initial load
    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(themes[localTheme]);
        } else {
            setTheme(themes.light);
            setThemeInLocalStorage('light');
        }
    }, []);



    const ThemeButtons = () => {
        // A button that says themes, and when you click on it it shows a list of themes


        return (
            <ThemePickerStyle>
                {displayThemePicker && themesList.map((name, index) => {
                    return (
                        <button key={index} onClick={() => setThemeByName(name)}>{name}</button>
                    )
                })}
                <button onClick={() => setDisplayThemePicker(!displayThemePicker)}>Themes</button>
            </ThemePickerStyle>
        )
    }



    return { theme, setThemeByName, themesList, ThemeButtons };
}