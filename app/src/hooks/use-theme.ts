import { writable } from 'svelte/store'
import day from 'dayjs'

const themes = [
    "light",
    "dark",
    "bumblebee",
    "emerald",
    "synthwave",
    "cyberpunk",
    "aqua",
    "night",
    "dracula",
    "cmyk",
    "coffee",
]
// const isDark =
//     day().isAfter(day().set('hour', 18)) ||
//     day().isBefore(day().set('hour', 6))
//
// const storedTheme = localStorage.getItem('theme')
// const theme = writable(storedTheme || (isDark ? "dark" : "light"))
const theme = writable('coffee')

const useTheme = () => {
    const setTheme = (selectedTheme: string) => {
        if (themes.includes(selectedTheme)) {
            theme.set(selectedTheme)
            localStorage.setItem('theme', selectedTheme)
        }
    }

    return {
        theme,
        themes,
        setTheme
    }
}


export default useTheme