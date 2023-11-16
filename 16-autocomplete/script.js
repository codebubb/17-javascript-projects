const searchTextElement = document.getElementById('searchText');
const autoCompleteResultsElement = document.querySelector('#autoCompleteResults');
const autoCompleteBodyElement = document.querySelector('#autoCompleteResults tbody');

const debounce = (callback, delay) => {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    }
}

const getData = query => {
    const searchURL = new URL('https://dummyjson.com/products/search');
    searchURL.searchParams.append('q', query);

    return fetch(searchURL)
        .then(response => response.json())
        .then(result => {
            const products = result.products;
            const mappedProducts = products.map(product => ({
                title: product.title,
                price: product.price,
                category: product.category,
                image: product.images[0],
            }));
            
            return mappedProducts;
        });
}

const autoComplete = () => {
    const query = searchTextElement.value.trim();
    if (!query) {
        return;

    }

    getData(query)
        .then(products => {
            products.forEach(product => {
                autoCompleteResultsElement.classList.add('show');
                autoCompleteBodyElement.innerHTML += `<tr>
                <td>${product.title}</td>
                <td>$${product.price}</td>
                <td>${product.category}</td>
                <td><img src="${product.image}"></td>
                </tr>`
            });
        });
}

searchTextElement.addEventListener('keyup', debounce(autoComplete, 1000));
autoCompleteResultsElement.addEventListener('click', () => {
    autoCompleteResultsElement.classList.remove('show')
});