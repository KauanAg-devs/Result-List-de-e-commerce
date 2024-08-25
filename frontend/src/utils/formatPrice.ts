    export const formatPrice = (price: string) => {
        return new Intl.NumberFormat('Id-ID', { style: 'currency', currency: 'IDR' }).format(parseInt(price));
    };