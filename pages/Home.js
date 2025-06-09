function Home() {
    try {
        const { filterProducts } = useApp();
        const filteredProducts = filterProducts(mockProducts);

        return React.createElement('div', {
            className: 'fade-in',
            'data-name': 'home-page',
            'data-file': 'pages/Home.js'
        },
            React.createElement('div', { className: 'mb-8' },
                React.createElement('h2', { className: 'text-3xl font-bold text-gray-800 mb-2' }, 'Discover Amazing Products'),
                React.createElement('p', { className: 'text-gray-600' }, `Showing ${filteredProducts.length} products`)
            ),
            
            filteredProducts.length > 0 ? 
                React.createElement('div', { className: 'product-grid' },
                    filteredProducts.map(product =>
                        React.createElement(ProductCard, { key: product.id, product })
                    )
                ) :
                React.createElement('div', { className: 'text-center py-12' },
                    React.createElement('i', { className: 'fas fa-search text-6xl text-gray-300 mb-4' }),
                    React.createElement('h3', { className: 'text-xl font-semibold text-gray-600 mb-2' }, 'No products found'),
                    React.createElement('p', { className: 'text-gray-500' }, 'Try adjusting your search or browse different categories')
                )
        );
    } catch (error) {
        console.error('Home component error:', error);
        reportError(error);
    }
}
