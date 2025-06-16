import type { Meta, StoryObj } from '@storybook/vue3';

import MyInput from "@/components/ui/MyInput/MyInput.vue";

const meta: Meta<typeof MyInput> = {
    title: 'UI/MyInput',
    component: MyInput,
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: "text", description: "input" },
    },
    parameters: {
        docs: {
            description: {
                component: 'Компонент поля input собсветнный UI',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Input"
    },
    parameters: {
        docs: {
            description: {
                story: 'Отображает ErrorBoundary с дочерним компонентом без ошибок.',
            },
        },
    },
};

export const Secondary: Story = {
    args: {
        placeholder: "Input Secondary",
    }
}