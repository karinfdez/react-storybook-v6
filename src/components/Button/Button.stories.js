import React from "react";
import Button from "./Button";
import { action, actions } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

// export default {
//     title: "Storybook Knobs",
//     decorators: [withKnobs],
// };
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs for React props
// export const withAButton = () => (
//     <button disabled={boolean("Disabled", false)}>
//         {text("Label", "Hello Storybook")}
//     </button>
// );

// // Knobs as dynamic variables.
// export const asDynamicVariables = () => {
//     const name = text("Name", "James");
//     const age = number("Age", 35);
//     const content = `I am ${name} and I'm ${age} years old.`;

//     return <div>{content}</div>;
// };

export default {
    title: "Form/Button",
    component: Button,
    decorators: [withKnobs],
    argTypes: {
        variant: {
            type: "select",
            options: ["primary", "secondary", "success", "danger"],
        },
        children: {
            type: "select",
            options: ["Primary", "Secondary", "Success", "Danger"],
        },
    },
};

const Template = (args) => <Button {...args} />;
const TemplateKnowbs = () => (
    <Button disabled={boolean("Disabled", false)}>
        {text("Label", "Button Label")}
    </Button>
); //text is a function that taakes 2 parameters: 1: name of the prop, 2: initial value for the prop
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});
export const WithKnobs = TemplateKnowbs.bind({});

Primary.args = {
    variant: "primary",
    children: "Primary",
    onClick: action("Click handler"),
};

Secondary.args = {
    variant: "secondary",
    children: "Secondary",
    ...actions("onClick", "onMouseOver"),
};

Success.args = {
    variant: "success",
    children: "Success",
    onClick: () => console.log("Button Clicked"),
};

Danger.args = {
    variant: "danger",
    children: "Danger",
};
