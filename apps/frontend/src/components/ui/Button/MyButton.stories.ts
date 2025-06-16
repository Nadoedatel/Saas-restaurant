import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';
import MyButton from "@/components/ui/Button/MyButton.vue";


const meta = {
    title: 'ui/MyButton',
    component: MyButton,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small'] },
        backgroundColor: { control: 'color' },
    },
    args: {
        primary: false,
        onClick: fn(),
    },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        primary: true,
        label: 'MyButton',
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        label: 'MyButton',
    },
};

