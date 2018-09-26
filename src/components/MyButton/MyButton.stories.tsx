/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';

storiesOf('components/MyButton', module)
  .addDecorator(withKnobs)
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button>With JSX</my-button>;
    },
    computed: { msg: () => text('message') },
  }))
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="doIt">Hello Button</my-button>',
    computed: { msg: () => text('message') },
    methods: {
      doIt: action('click'),
    },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button>😀 😎 👍 💯</my-button>',
    computed: { msg: () => text('message') },
  }));
