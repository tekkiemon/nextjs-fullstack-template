// @ts-nocheck
/* eslint no-use-before-define: 0 */
//import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseTemplate, IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './baseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  // eslint-disable-next-line no-undef
} as ComponentMeta<typeof BaseTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line no-undef
const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseTemplate;
