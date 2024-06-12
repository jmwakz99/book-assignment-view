import type { Preview } from "@storybook/react";
import React from "react";

import ThemeWrapper from "../src/components/particles/theme/ThemeWrapper";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeWrapper>
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

  tags: ["autodocs"]
};

export default preview;
