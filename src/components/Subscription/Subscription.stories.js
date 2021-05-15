import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";
import Center from "../Center/Center";

export default {
    title: "Form Subscription",
    decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => (
    <>
        <Large />
        <Primary />
    </>
);
export const PrimarySubscription = Template.bind({});
