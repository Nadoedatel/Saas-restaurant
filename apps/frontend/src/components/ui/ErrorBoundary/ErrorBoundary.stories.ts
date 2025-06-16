import type { Meta, StoryObj } from '@storybook/vue3';
import ErrorBoundary from './ErrorBoundary.vue';
import { h } from 'vue';

const meta: Meta<typeof ErrorBoundary> = {
    title: 'UI/ErrorBoundary',
    component: ErrorBoundary,
    tags: ['autodocs'],
    argTypes: {
        // Здесь можно добавить argTypes, если у компонента ErrorBoundary появятся пропсы
    },
    parameters: {
        docs: {
            description: {
                component: 'Компонент-обработчик ошибок, который перехватывает ошибки в дочерних компонентах и отображает запасной UI.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Вспомогательный компонент для имитации ошибки
const ComponentWithError = {
    setup() {
        if (typeof window !== 'undefined') {
            throw new Error('Это имитированная ошибка дочернего компонента!');
        }
        return () => h('div', 'Этот контент не должен быть виден из-за ошибки.');
    },
    template: '<div>Этот контент не должен быть виден из-за ошибки.</div>'
};

// Вспомогательный компонент, который не выбрасывает ошибку
const ComponentWithoutError = {
    template: '<div>Это контент дочернего компонента без ошибок.</div>'
};

export const Default: Story = {
    render: (args) => ({
        components: { ErrorBoundary, ComponentWithoutError },
        template: `
            <ErrorBoundary v-bind="args">
                <ComponentWithoutError />
            </ErrorBoundary>
        `,
    }),
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Отображает ErrorBoundary с дочерним компонентом без ошибок.',
            },
        },
    },
};

export const WithError: Story = {
    render: (args) => ({
        components: { ErrorBoundary, ComponentWithError },
        template: `
            <ErrorBoundary v-bind="args">
                <ComponentWithError />
            </ErrorBoundary>
        `,
    }),
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Отображает ErrorBoundary с дочерним компонентом, который выбрасывает ошибку. Должен быть виден запасной UI.',
            },
        },
    },
};

export const CustomErrorSlot: Story = {
    render: (args) => ({
        components: { ErrorBoundary, ComponentWithError },
        template: `
            <ErrorBoundary v-bind="args">
                <ComponentWithError />
                <template #error="{ error, clearError }">
                    <div style="padding: 20px; border: 2px dashed orange; background-color: #fffbe6; color: #cc8400; text-align: center;">
                        <h3>Произошла пользовательская ошибка!</h3>
                        <p>Сообщение: {{ error.message }}</p>
                        <button @click="clearError" style="background-color: orange; color: white; border: none; padding: 8px 16px; cursor: pointer;">
                            Сбросить и попробовать снова
                        </button>
                    </div>
                </template>
            </ErrorBoundary>
        `,
    }),
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Отображает ErrorBoundary с дочерним компонентом, который выбрасывает ошибку, используя пользовательский слот для отображения ошибки.',
            },
        },
    },
};