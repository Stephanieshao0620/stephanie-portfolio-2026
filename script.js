const menuButton = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'CLOSE' : 'MENU';
});

navigation?.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  navigation.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = 'MENU';
});

const variantCount = 13;
const variantPaths = Array.from(
  { length: variantCount },
  (_, index) => `assets/images/white-label-variant-${String(index + 1).padStart(2, '0')}.png`,
);
const card = document.querySelector('.white-label-card');
const phones = [...document.querySelectorAll('.white-label-card .phone')];
let previousKey = '0-1-2';
let pool = [];

function refillPool() {
  pool = [...Array(variantCount).keys()];
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[target]] = [pool[target], pool[index]];
  }
}

function nextCombination() {
  let selected;
  let key;
  do {
    if (pool.length < 3) refillPool();
    selected = pool.splice(0, 3);
    key = selected.join('-');
  } while (key === previousKey);
  previousKey = key;
  return selected;
}

function refreshWhiteLabelPreview() {
  const selected = nextCombination();
  const nextImages = selected.map((index) => {
    const image = new Image();
    image.src = variantPaths[index];
    return image;
  });
  Promise.all(nextImages.map((image) => image.decode().catch(() => undefined))).then(() => {
    phones.forEach((phone, index) => {
      phone.src = nextImages[index].src;
    });
  });
}

card?.addEventListener('pointerenter', refreshWhiteLabelPreview);
card?.addEventListener('focus', refreshWhiteLabelPreview);

document.querySelectorAll('img').forEach((image) => {
  if (!image.closest('.hero') && !image.closest('.site-header')) image.loading = 'lazy';
  image.decoding = 'async';
});
