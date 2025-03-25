import React from "react";
import Icon from "./Icon";

export default {
    title: "Components/Icons",
    component: Icon
}

const Template = (args) => <Icon {...args} />

export const Primary = Template.bind({});
Primary.args = {
    name: "PawPrint",
    primary: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    name: "PawPrint",
    primary: false
}