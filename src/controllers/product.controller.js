const getProducts = (req, res) => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => res.json(products));
}

const getProduct = (req, res) => {
    fetch('https://fakestoreapi.com/products/' + req.params.id)
        .then(response => response.json())
        .then(product => res.json(product));
}

module.exports = {
    getProducts,
    getProduct
}