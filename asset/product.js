let lists = document.querySelector('.lists');
let jewelery = document.querySelector('.jewelery');
let men = document.querySelector('.men');
let women = document.querySelector('.women');
let electronics = document.querySelector('.electronic');
let section = document.querySelector('section');
const singleItem = document.querySelector('template');
const input = document.querySelector('input');
const searchBtn = document.querySelector('.btn');
let uppercase;

const fetchProducts = () => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => fetchedProducts(data));
};

const fetchedProducts = (data) => {
  if (data) {
    for (const post of data) {
      const itemElement = document.importNode(singleItem.content, true);
      itemElement.querySelector('h3').textContent = `${post.title}.`;
      itemElement.querySelector('img').src = post.image;
      itemElement.querySelector('.price').textContent = `Price: $${post.price}`;
      itemElement.querySelector(
        '.rating'
      ).textContent = `Rating: ${post.rating.rate}`;
      itemElement.querySelector(
        '.count'
      ).textContent = `Available Count: ${post.rating.count}`;

      lists.append(itemElement);
    }
  }
};

fetchProducts();

searchBtn.addEventListener('click', () => {
  const fetchJewelery = () => {
    uppercase = input.value.toUpperCase().trim();
    if (
      uppercase.includes('JEWEL') ||
      uppercase.includes('JEWEL') ||
      uppercase.includes('GOLD')
    ) {
      fetch(`https://fakestoreapi.com/products/category/jewelery`)
        .then((res) => res.json())
        .then((data) => fetchedJewelery(data));
      
    }
  };
  const fetchedJewelery = (data) => {
    electronics.innerHTML = '';
    women.innerHTML = '';
    lists.innerHTML = '';
    men.innerHTML = '';

    if (data) {
      for (const post of data) {
        const itemElement = document.importNode(singleItem.content, true);
        itemElement.querySelector('h3').textContent = `${post.title}.`;
        itemElement.querySelector('img').src = post.image;
        itemElement.querySelector(
          '.price'
        ).textContent = `Price: $${post.price}`;
        itemElement.querySelector(
          '.rating'
        ).textContent = `Rating: ${post.rating.rate}`;
        itemElement.querySelector(
          '.count'
        ).textContent = `Available Count: ${post.rating.count}`;

        jewelery.append(itemElement);
      }
    }
  };
  fetchJewelery();

  const fetchMen = () => {
    uppercase = input.value.toUpperCase().trim();

    if (uppercase.includes('MEN')) {
      fetch(`https://fakestoreapi.com/products/category/men's%20clothing/`)
        .then((res) => res.json())
        .then((data) => fetchedMen(data));
    }
  };
  const fetchedMen = (data) => {
    electronics.innerHTML = '';
    women.innerHTML = '';
    jewelery.innerHTML = '';
    lists.innerHTML = '';

    if (data) {
      for (const post of data) {
        const itemElement = document.importNode(singleItem.content, true);
        itemElement.querySelector('h3').textContent = `${post.title}.`;
        itemElement.querySelector('img').src = post.image;
        itemElement.querySelector(
          '.price'
        ).textContent = `Price: $${post.price}`;
        itemElement.querySelector(
          '.rating'
        ).textContent = `Rating: ${post.rating.rate}`;
        itemElement.querySelector(
          '.count'
        ).textContent = `Available Count: ${post.rating.count}`;

        men.append(itemElement);
      }
    }
  };

  fetchMen();

  const fetchElectronics = () => {
    uppercase = input.value.toUpperCase().trim();

    if (uppercase.includes('ELE')) {
      fetch(`https://fakestoreapi.com/products/category/electronics/`)
        .then((res) => res.json())
        .then((data) => fetchedElectronics(data));
    }
  };
  const fetchedElectronics = (data) => {
    men.innerHTML = '';
    women.innerHTML = '';
    jewelery.innerHTML = '';
    lists.innerHTML = '';

    if (data) {
      for (const post of data) {
        const itemElement = document.importNode(singleItem.content, true);
        itemElement.querySelector('h3').textContent = `${post.title}.`;
        itemElement.querySelector('img').src = post.image;
        itemElement.querySelector(
          '.price'
        ).textContent = `Price: $${post.price}`;
        itemElement.querySelector(
          '.rating'
        ).textContent = `Rating: ${post.rating.rate}`;
        itemElement.querySelector(
          '.count'
        ).textContent = `Available Count: ${post.rating.count}`;

        electronics.append(itemElement);
      }
    }
  };

  fetchElectronics();

  const fetchWomen = () => {
    uppercase = input.value.toUpperCase().trim();

    if (uppercase.includes('FE') || uppercase.includes('WO')) {
      fetch(`https://fakestoreapi.com/products/category/women's%20clothing/`)
        .then((res) => res.json())
        .then((data) => fetchedWomen(data));
      console.log(uppercase);
    }
  };
  const fetchedWomen = (data) => {
    men.innerHTML = '';
    electronics.innerHTML = '';
    jewelery.innerHTML = '';
    lists.innerHTML = '';

    if (data) {
      for (const post of data) {
        const itemElement = document.importNode(singleItem.content, true);
        itemElement.querySelector('h3').textContent = `${post.title}.`;
        itemElement.querySelector('img').src = post.image;
        itemElement.querySelector(
          '.price'
        ).textContent = `Price: $${post.price}`;
        itemElement.querySelector(
          '.rating'
        ).textContent = `Rating: ${post.rating.rate}`;
        itemElement.querySelector(
          '.count'
        ).textContent = `Available Count: ${post.rating.count}`;

        women.append(itemElement);
      }
    }
  };

  fetchWomen();
});
