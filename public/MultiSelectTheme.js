const MultiSelectTheme = {
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#ff0076",
  }),
  control: (_, { isFocused }) => ({
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#071838",
    borderRadius: "0.375rem",
    padding: "8px 19px",
    textAlign: "left",
    border: isFocused ? "1px solid #ff0076" : "1px solid transparent",
    cursor: "pointer",
  }),
  option: (_, { isFocused }) => ({
    backgroundColor: isFocused ? "#C90E64" : "#ff0076",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color .3s ease",
    ":hover": {
      backgroundColor: "#C90E64",
    },
  }),
  multiValue: () => ({
    backgroundColor: "#ff0076",
    display: "flex",
    minWidth: "0",
    borderRadius: "0.375rem",
  }),
  noOptionsMessage: () => ({
    color: "#fff",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#fff",
  }),
  valueContainer: (styles) => ({
    ...styles,
    "&>div:first-of-type": {
      width: "auto !important",
    },
    gap: "4px",
    padding: "1px 9px",
    flexWrap: "wrap",
    alignItems: "center",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    borderRadius: "0.375rem",
    transition: "background-color .2s ease-in",
    ":hover": {
      backgroundColor: "#C90E64",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#637993",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "#637993",
    ":hover": {
      color: "#ff0076",
    },
  }),
  clearIndicator: (styles) => ({
    ...styles,
    color: "#637993",
    ":hover": {
      color: "#ff0076",
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    maxHeight: "26px",
    height: "100%",
    alignSelf: "center",
    backgroundColor: "#637993",
  }),
  input: (styles) => ({
    ...styles,
    color: "#fff",
  }),
  singleValue: (styles) => ({
    ...styles,
    display: "flex",
    color: "#fff",
  }),
};

export default MultiSelectTheme;
