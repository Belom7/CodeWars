function vestBuy(price, haggle)
{
    const discounts = { light: 0.80, medium: 0.70,  heavy: 0.60, walkandswear: 0.10 };
    const finalPrice = (discounts[haggle]  || 0 ) * price;
    return finalPrice == 0 ? 'Run!!' : Math.round(finalPrice);
}