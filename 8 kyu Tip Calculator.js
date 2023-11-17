function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    return rating === 'terrible' ? 0
        : rating === 'poor' ? Math.ceil(amount * 0.05)
            : rating === 'good' ? Math.ceil(amount * 0.1)
                : rating === 'great' ? Math.ceil(amount * 0.15)
                    : rating === 'excellent' ? Math.ceil(amount * 0.2)
                        : "Rating not recognised";
}