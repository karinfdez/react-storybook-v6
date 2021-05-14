import React from "react";
import Input from "./Input";
import "./Input.css";
export default {
    title: "Input",
    component: Input,
};

export const Small = () => (
    <Input placeholder="Enter small text" type="text" size="small"></Input>
);
export const Medium = () => (
    <Input placeholder="Enter medium text" type="text" size="medium"></Input>
);
export const Large = () => (
    <Input placeholder="Enter large text" type="text" size="large"></Input>
);

export const Checkbox = () => (
    <Input placeholder="Mark checkbox" type="checkbox" size="small"></Input>
);
export const Radio = () => (
    <Input placeholder="Mark radio button" type="radio" size="medium"></Input>
);
