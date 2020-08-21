<template>
  <div >
    <new-message-form @send="addMessage" />
    <message-list :messages="messages" />
  </div>
</template>

<script>

import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';

export default {
  name: 'App',
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    addMessage(text) {
      this.messages.unshift(text);
    },
  },
  components: { MessageList, NewMessageForm },
};
</script>

<style>

</style>
