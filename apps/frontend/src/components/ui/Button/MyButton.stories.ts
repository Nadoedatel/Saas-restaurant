import type { Meta, StoryObj } from '@storybook/vue3-vite';

import MyButton from "@/components/ui/Button/MyButton.vue";


const meta = {
    title: 'ui/MyButton',
    component: MyButton,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text', description: 'Label' },
    },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {

    },
};

export const Secondary: Story = {
    args: {
        label: "Button",
    },
};

