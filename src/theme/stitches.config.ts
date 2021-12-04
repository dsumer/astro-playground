import { createStitches } from "@stitches/react";

const responsiveValueMapper = (fieldName: string) => {
  return (value: string | string[]) => {
    if (typeof value === "string") {
      return {
        [fieldName]: value,
      };
    }

    const [initial, ...breakpoints] = value;
    return {
      [fieldName]: initial,
      ...breakpoints.reduce(
        (acc, bp, index) => ({
          ...acc,
          [`@${index}`]: {
            [fieldName]: bp,
          },
        }),
        {}
      ),
    };
  };
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
    },
  },
  media: {
    0: "(min-width: 30em)",
    1: "(min-width: 48em)",
    2: "(min-width: 62em)",
    3: "(min-width: 80em)",
    4: "(min-width: 96em)",
  },
  utils: {
    bg: responsiveValueMapper("background"),
    mx: (value: string) => ({ marginLeft: value, marginRight: value }),
  },
});
