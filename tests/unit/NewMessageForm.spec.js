import { expect } from 'chai';
import { mount } from '@vue/test-utils';
// eslint-disable-next-line import/extensions
import NewMessageForm from '../../src/components/NewMessageForm';

describe('NewMessageForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NewMessageForm);
  });

  describe('clicking the send button', () => {
    beforeEach(() => {
      wrapper
        .find('[data-test="messageText"]')
        .setValue('New message');

      wrapper
        .find('[data-test="sendButton"]')
        .trigger('click');
    });

    it('clears the text field', () => {
      expect(
        wrapper.find('[data-test="messageText"]').element.value,
      ).to.equal('');
    });

    it('emits the "send" event', () => {
      expect(wrapper.emitted().send[0]).to.deep.equal(['New message']);
    });
  });
});
