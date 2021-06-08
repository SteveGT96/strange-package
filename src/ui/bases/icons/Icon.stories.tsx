import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Icon, IconProps} from "./Icon";

export default {
    title: 'Base/Icon',
    component: Icon,
} as Meta;

const Template: Story<IconProps> = (args: IconProps) => <Icon {...args}/>
export const User = Template.bind({})
User.args = {
    name: "user"
}