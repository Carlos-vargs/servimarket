import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Lexend', sans-serif;",
        mono: "'Roboto', sans-serif",
    },
    colors: {
        body: "#071838",
        baseLigth: "#142442"
    }
})

export default theme