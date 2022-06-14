import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Lexend', sans-serif;",
        mono: "'Roboto', sans-serif",
    },
    colors: {
        base: "#071838",
        base_ligth: "#142442",
        base_pink: "#ff0076",
    },
    fontWeights: {
        bold: "600",
    },
    lineHeights: {
        heading: "calc(82 / 72)",
        base: "calc(28 / 16)",
    },
    fontSizes: {
        body: "16px",
    }
})

export default theme