import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

export default {
    title: "Form Subscription",
};

const Template = (args) => (
    <>
        <Large />
        <Primary />
    </>
);
export const PrimarySubscription = Template.bind({});
