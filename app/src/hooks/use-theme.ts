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
const isDark =
    day().isAfter(day().set('hour', 18)) ||
    day().isBefore(day().set('hour', 6))

const theme = writable(isDark ? "dark" : "light")
// const theme = writable(themes[Math.floor(Math.random() * themes.length)])

const useTheme = () => {
    const setTheme = (selectedTheme: string) => {
        if (themes.includes(selectedTheme)) {
            theme.set(selectedTheme)
        }
    }

    return {
        theme,
        themes,
        setTheme
    }
}


export default useTheme