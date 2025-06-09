function ProductCard({ product }) {
    try {
        const { addToCart } = useCart();
        const { isAuthenticated, setIsLoginOpen } = useAuth();

        const handleAddToCart = () => {
            if (isAuthenticated) {
                addToCart(product);
            } else {
                setIsLoginOpen(true);
            }
        };

        const renderStars = (rating) => {
            const stars = [];
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;

            for (let i = 0; i < fullStars; i++) {
                stars.push(React.createElement('i', { key: i, className: 'fas fa-star text-yellow-400' }));
            }

            if (hasHalfStar) {
                stars.push(React.createElement('i', { key: 'half', className: 'fas fa-star-half-alt text-yellow-400' }));
            }

            const emptyStars = 5 - Math.ceil(rating);
            for (let i = 0; i < emptyStars; i++) {
                stars.push(React.createElement('i', { key: `empty-${i}`, className: 'far fa-star text-gray-300' }));
            }

            return stars;
        };

        return React.createElement('div', {
            className: 'bg-white rounded-xl shadow-lg overflow-hidden card-hover',
            'data-name': 'product-card',
            'data-file': 'components/ProductCard.js'
        },
            React.createElement('div', { className: 'relative overflow-hidden' },
                React.createElement('img', {
                    src: product.image,
                    alt: product.name,
                    className: 'w-full h-48 object-cover transition-transform duration-300 hover:scale-110'
                }),
                React.createElement('div', { className: 'absolute top-3 right-3' },
                    React.createElement('button', {
                        className: 'bg-white bg-opacity-90 text-purple-600 p-2 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200',
                        title: 'Add to Wishlist',
                        onClick: () => !isAuthenticated && setIsLoginOpen(true)
                    }, React.createElement('i', { className: 'far fa-heart' }))
                )
            ),
            
            React.createElement('div', { className: 'p-6' },
                React.createElement('h3', { className: 'text-lg font-semibold text-gray-800 mb-2' }, product.name),
                React.createElement('p', { className: 'text-gray-600 text-sm mb-3 line-clamp-2' }, product.description),
                
                React.createElement('div', { className: 'flex items-center space-x-1 mb-4' },
                    ...renderStars(product.rating),
                    React.createElement('span', { className: 'text-gray-500 text-sm ml-2' }, `(${product.rating})`)
                ),
                
                React.createElement('div', { className: 'flex items-center justify-between' },
                    React.createElement('span', { className: 'text-2xl font-bold text-purple-600' }, `$${product.price}`),
                    React.createElement('button', {
                        onClick: handleAddToCart,
                        className: 'btn-primary text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200',
                        title: isAuthenticated ? 'Add to Cart' : 'Login to add to cart'
                    }, isAuthenticated ? 'Add to Cart' : 'Login to Buy')
                )
            )
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
    }
}
