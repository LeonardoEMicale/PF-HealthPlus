const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: '***********************************'
})

const plansController = (req, res) => {
    const product = req.body;

    const preference = {
        items: [{
            id: 1,
            title: product.title,
            currency_id: 'ARS',
            picture_url: product.image,
            description: product.description,
            category_id: 'art',
            quantity: 1,
            unit_price: product.price
    }],
    back_urls: {
        success: 'http://localhost:5173/confirm',
        failure: '',
        pending: '',
    },
    auto_return: 'approved',
    binary_mode: true,
    }
    mercadopago.preferences.create(preference)
    .then((response) => res.status(200).send({response}))
    .catch((error) => res.status(400).send({error: error.message}))
}

module.exports = plansController;
