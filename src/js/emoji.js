import { EmojiButton } from '@joeattardi/emoji-button';

const picker = new EmojiButton();
const trigger = document.querySelector('#app');

picker.on('emoji', (selection) => {
  trigger.innerHTML = selection.emoji;
});

trigger &&
  trigger.addEventListener('click', () => picker.togglePicker(trigger));
