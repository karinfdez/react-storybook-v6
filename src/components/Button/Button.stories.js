import React from "react";
import Button from "./Button";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
    title: "Form/Button",
    component: Button,
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
); //text is a function that takes 2 parameters: 1: name of the prop, 2: initial value for the prop

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});
export const Accessible = Template.bind({});
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
    onClick: () =>
        console.log(
            "Button Clicked with env variable data",
            process.env.STORYBOOK_DATA_KEY
        ),
};

Danger.args = {
    variant: "danger",
    children: "Danger",
};

Accessible.args = {
    variant: "purple",
    children: "Accessible",
};
