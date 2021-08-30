async function loadSettings() {
  const response = await fetch('./settings/settings.json');
  const data = await response.json();
  return data;
}

function renderCards(settings) {
  const cardsSource = document.getElementById('cards-template').innerHTML;
  const cardsTemplate = Handlebars.compile(cardsSource);
  const renderedCardsHTML = cardsTemplate(settings);
  document.getElementById('card-holder').innerHTML = renderedCardsHTML;
}

document.addEventListener('DOMContentLoaded', async () => {
  const settings = await loadSettings();

  if (settings.title) {
    document.title = settings.title;
  }

  if (settings.background) {
    if (settings.background.startsWith("#")) {
      document.body.style.backgroundColor = settings.background;
    } else {
      document.body.style.backgroundImage = `url('${settings.background}')`;
    }
  }

  await renderCards(settings);
});
