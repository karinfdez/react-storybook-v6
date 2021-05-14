import React from "react";
import Input from "./Input";
import "./Input.css";
export default {
    title: "Input",
    component: Input,
};

export const Small = () => <Input type="text" size="small"></Input>;
export const Medium = () => <Input type="text" size="medium"></Input>;
export const Large = () => <Input type="text" size="large"></Input>;

export const Checkbox = () => <Input type="checkbox" size="small"></Input>;
export const Radio = () => <Input type="radio" size="medium"></Input>;
