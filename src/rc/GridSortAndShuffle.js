// On ready, attach listeners.
$(() => {
  $('.shuffle').on('click', () => {
    $('.leftContainer').append([...$('.child')]
      .map((childElement) => ({ key: Math.random(), value: childElement })) // Create a map with a random key.
      .sort((a, b) => a.key - b.key) // Sort by the randomized key.
      .map((sortedItem) => sortedItem.value)); // Return the value aka the dom element.
  });
  $('.sort').on('click', () => {
    [...$('.child')]
      .sort((a, b) => +a.innerText - +b.innerText) // convert them to the type before comparision.
      .forEach((childElement) => $('.leftContainer').append(childElement)); // attach every sorted element back to dom.
  });
});