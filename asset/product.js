let lists = document.querySelector('.lists');
let jewelery = document.querySelector('.jewelery');
let men = document.querySelector('.men');
let women = document.querySelector('.women');
let electronics = document.querySelector('.electronic');
const singleItem = document.querySelector('template');
const input = document.querySelector('input');
const searchBtn = document.querySelector('.btn');
const clearAll = document.querySelector('.parent');

const clearState = () => {
  electronics.innerHTML = '';
  women.innerHTML = '';
  lists.innerHTML = '';
  men.innerHTML = '';
  jewelery.innerHTML = '';
};

const createProducts = (data, lists) => {
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

const fetchProducts = () => {
  clearState();
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => createProducts(data, lists));
};

fetchProducts();

const renderHandler = () => {
  
    const value = input.value.toUpperCase().trim();
    const fetchJewelery = () => {
      if (
        value.includes('JEWEL') ||
        value.includes('JEWEL') ||
        value.includes('GOLD')
      ) {
        fetch(`https://fakestoreapi.com/products/category/jewelery`)
          .then((res) => res.json())
          .then((data) => createProducts(data, jewelery));
      }
    };

    fetchJewelery();

    const fetchMen = () => {
      if (value.includes('MEN')) {
        fetch(`https://fakestoreapi.com/products/category/men's%20clothing/`)
          .then((res) => res.json())
          .then((data) => createProducts(data, men));
      }
    };

    fetchMen();

    const fetchElectronics = () => {
      if (value.includes('ELE') || value.includes('TECH')) {
        fetch(`https://fakestoreapi.com/products/category/electronics/`)
          .then((res) => res.json())
          .then((data) => createProducts(data, electronics));
      }
    };

    clearState();
    fetchElectronics();

    const fetchWomen = () => {
      if (value.includes('FEM') || value.includes('WO')) {
        fetch(`https://fakestoreapi.com/products/category/women's%20clothing/`)
          .then((res) => res.json())
          .then((data) => createProducts(data, women));
      }
    };
    clearState();
    fetchWomen();
  };

searchBtn.addEventListener('click', renderHandler);
