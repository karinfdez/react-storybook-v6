import React from "react";
import Button from "./Button";
import { action, actions } from "@storybook/addon-actions";
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
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});

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
