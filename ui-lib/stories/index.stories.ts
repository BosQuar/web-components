import { html, TemplateResult } from 'lit';
import '../src/components/button/button.js';

export default {
  title: 'Button',
  component: 'odv-button',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'primary',
          'success',
          'neutral',
          'warning',
          'danger',
          'text',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = () => html`
  <h1>Storybook</h1>
  <odv-button> </odv-button>
`;

export const Regular = Template.bind({});
