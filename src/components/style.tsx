import { globalCss, getCssText } from "../theme/stitches.config";

const globalStyles = globalCss({
  "html, body": { margin: 0, fontFamily: "system-ui" },
  body: { padding: "2rem", bg: "yellow" },
});

export const Style = () => {
  globalStyles();
  return (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
};
