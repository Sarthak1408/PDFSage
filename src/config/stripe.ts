export const PLANS = [
    {
        name: 'Free',
        slug: 'free',
        quota: 5,
        pagesPerPdf: 10,
        price: {
            amount: 0,
            priceIds: {
                test: '',
                production: '',
            },
        },
    },
    {
        name: 'Pro',
        slug: 'pro',
        quota: 25,
        pagesPerPdf: 50,
        price: {
            amount: 99,
            priceIds: {
                test: 'price_1Ow92mSE6nbEguhsWpmHsvuF',
                production: '',
            },
        },
    },
]