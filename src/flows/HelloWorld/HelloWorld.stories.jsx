/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';

import HelloWorld from './HelloWorld.vue';

storiesOf('flows/HelloWorld', module)
  .addDecorator(withKnobs)
  .add('with JSX', () => ({
    components: { HelloWorld },
    render() {
      return <hello-world msg={this.msg} />;
    },
    computed: { msg: () => text('message') },
  }))
  .add('with text', () => ({
    components: { HelloWorld },
    template: '<hello-world :msg="msg">Hello Button</hello-world>',
    computed: { msg: () => text('message', 'asdasdasdasdas asd asd asS') },
  }))
  .add('with some emoji', () => ({
    components: { HelloWorld },
    template: '<hello-world :msg="msg">😀 😎 👍 💯</hello-world>',
    computed: { msg: () => text('message') },
  }));
