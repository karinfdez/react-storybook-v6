import React from "react";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import "@storybook/addon-console";
// A way to add global decorator with V5
// import { addDecorator } from "@storybook/react";
// import Center from "../src/components/Center/Center";
// addDecorator((story) => <Center>{story()}</Center>);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: (
            a,
            b //Sort stories
        ) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};

// Decorators V6(All stories will have margin 4 from the left)
export const decorators = [
    (Story) => (
        <ChakraProvider>
            <CSSReset />
            <Box m="4">
                <Story />
            </Box>
        </ChakraProvider>
    ),
];
