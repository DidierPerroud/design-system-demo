import React from "react";
import Title from "./Title";

export default {
    title: "Components/Title",
    component: Title
}

const Template = (args) => <Title {...args} />

export const Large = Template.bind({});
Large.args = {
    children: "Large Title",
    large: true
}

export const Medium = Template.bind({});
Medium.args = {
    children: "Medium Title",
    large: false
}