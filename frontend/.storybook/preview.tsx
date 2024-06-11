import type { Preview } from "@storybook/react";
import React from "react";

import Fonts from "../src/components/particles/Fonts";
import ThemeWrapper from "../src/components/particles/theme/provider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Fonts />
        <Story />
      </ThemeWrapper>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
