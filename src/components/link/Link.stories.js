import React from "react";
import Link from "./Link";

export default {
    name: "Components/Link",
    component: Link
}

const Template = (args) => <Link {...args} />

export const Dark = Template.bind({});
Dark.args = {
    href: "#",
    children: "Dark Link",
    dark: true
}

export const Default = Template.bind({});
Default.args = {
    href: "#",
    children: "Default Link",
    dark: false
}