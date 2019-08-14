module.exports = (Franz) => {
  function getMessages() {
    const messages = document.querySelectorAll('.text-content.unread').length;

    // set Franz badge
    Franz.setBadge(messages);
  }

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
