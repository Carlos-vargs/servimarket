import { extendTheme, Avatar as AvatarChakra } from "@chakra-ui/react";
import fonts from "./foundations/fonts";
import colors from "./foundations/colors";
import fontWeights from "./foundations/fontWeights";
import lineHeights from "./foundations/lineHeights";
import fontSizes from "./foundations/fontSizes";
import breakpoints from "./foundations/breakpoints";
import Button from "./components/Button";
import Avatar from "./components/Avatar";

AvatarChakra.defaultProps = { ...AvatarChakra.defaultProps, translate: "no" };

const overrides = {
  fonts,
  colors,
  fontWeights,
  lineHeights,
  fontSizes,
  components: {
    Button,
    Avatar,
  },
  breakpoints,
};

export default extendTheme(overrides);
