import { extendTheme, Avatar } from '@chakra-ui/react';

const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
}

Avatar.defaultProps = { ...Avatar.defaultProps, translate: "no" }

const theme = extendTheme({
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Lexend', sans-serif",
        mono: "'Roboto', sans-serif",
    },
    colors: {
        base: "#071838",
        base_ligth: "#142442",
        base_pink: "#ff0076",
        base_gradient: "linear-gradient(45deg,#590f87 0,#ff0076 50%,#590f87 100%)"
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
    },
    components: {
        Button: {
            variants: {
                solid: {
                    rounded: "50px",
                    color: "#fff",
                    fontFamily: "heading",
                    background: "base_gradient",
                    transition: "all .3s ease",
                    textTransform: "uppercase",
                    padding: "25px 29px",
                    fontSize: "14px",
                    backgroundSize: "200% 100%",
                    _hover: {
                        background: "",
                        backgroundPosition: "100% 0%",
                    },
                    _focus: {
                        backgroundPosition: "100% 0%",
                    },
                    _active: {
                        background: "",
                        backgroundPosition: "100% 0%",
                    },
                },
                outline: {
                    rounded: "50px",
                    backgroundColor: "base_ligth",
                    transition: "all .3s ease-in-out",
                    border: "1px solid",
                    borderColor: "#585c75",
                    color: "rgba(255,255,255,.4)",
                    padding: "20px 22px",
                    fontFamily: "heading",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    _hover: {
                        background: "",
                        backgroundColor: "base_pink",
                        color: "#fff",
                        borderColor: "base_pink",
                    },
                    _focus: {
                        background: "",
                        boxShadow: "none",
                        backgroundColor: "base_pink",
                        color: "#fff",
                        borderColor: "base_pink"
                    },
                    _active: {
                        background: "",
                        backgroundColor: "base_pink",
                        color: "#fff",
                        borderColor: "base_pink",
                    }
                }
            },
        },
        Avatar: {
            baseStyle: {
                excessLabel: {
                    fontSize:"10px",
                    paddingInlineStart: "6px",
                    background: "",
                    backgroundColor: "base"
                }
            },
        },
    },
    breakpoints,
})


export default theme