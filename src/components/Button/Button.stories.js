import React from "react";
import Button from "./Button";
import Center from "../Center/Center";
export default {
    title: "Form/Button",
    component: Button,
    decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
    variant: "primary",
    children: "Primary",
};

Secondary.args = {
    variant: "secondary",
    children: "Secondary",
};

Success.args = {
    variant: "success",
    children: "Success",
};

Danger.args = {
    variant: "danger",
    children: "Danger",
};
