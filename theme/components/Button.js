const Button = {
  variants: {
    solid: {
      rounded: "50px",
      color: "#fff",
      fontFamily: "heading",
      background: "base_gradient",
      outline: "none",
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
    outline: (props) => ({
      borderRadius: "50px",
      outline: "none",
      backgroundColor: "base_ligth",
      transition: "all .3s ease-in-out",
      borderColor: "#585c75",
      border: "1px solid",
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
        borderColor: "base_pink",
      },
      _active: {
        background: "",
        backgroundColor: "base_pink",
        color: "#fff",
        borderColor: "base_pink",
      },
    }),
  },
};

export default Button;
