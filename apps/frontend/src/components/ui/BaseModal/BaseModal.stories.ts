import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';
import BaseModal from "@/components/ui/BaseModal/BaseModal.vue";



const meta = {
    title: 'ui/BaseModal',
    component: BaseModal,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small'] },
    },
    args: {
        close: fn(),
    },
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {

    },
};

export const Secondary: Story = {
    args: {

    },
};

