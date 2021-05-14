import React from "react";
import Input from "./Input";

export default {
    title: "Input",
    component: Input,
};

export const Basic = () => (
    <Input variant="text" defaultValue="Type your name here"></Input>
);
export const Checkbox = () => (
    <Input variant="checkbox" defaultValue="checked"></Input>
);
export const Radio = () => <Input variant="radio"></Input>;
