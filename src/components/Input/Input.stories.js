import React from "react";
import Input from "./Input";
import Center from "../Center/Center";
import "./Input.css";
export default {
    title: "Form/Input",
    component: Input,
};

const Template = (args) => (
    <Center>
        <Input {...args}></Input>
    </Center>
);

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const Checkbox = Template.bind({});
export const Radio = Template.bind({});

Small.args = {
    placeholder: "Enter small text",
    type: "text",
    size: "small",
};

Medium.args = {
    placeholder: "Enter medium text",
    type: "text",
    size: "medium",
};

Large.args = {
    placeholder: "Enter large text",
    type: "text",
    size: "large",
};

Checkbox.args = {
    placeholder: "Mark checkbox",
    type: "checkbox",
    size: "small",
};

Radio.args = {
    placeholder: "Mark radio button",
    type: "radio",
    size: "medium",
};

// Rename stories on V6
Small.storyName = "Small Input";
Medium.storyName = "Medium Input";
Large.storyName = "Large Input";
