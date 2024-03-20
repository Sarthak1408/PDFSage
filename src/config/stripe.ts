export const PLANS = [
    {
        name: 'Free',
        slug: 'free',
        quota: 10,
        pagesPerPdf: 50,
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
        quota: 50,
        pagesPerPdf: 100,
        price: {
            amount: 99,
            priceIds: {
                test: 'price_1Ow92mSE6nbEguhsWpmHsvuF',
                production: '',
            },
        },
    },
]