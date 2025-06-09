function Cart() {
    try {
        const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
        const { isAuthenticated, setIsLoginOpen } = useAuth();

        if (!isAuthenticated) {
            return React.createElement('div', {
                className: 'text-center py-12 fade-in',
                'data-name': 'auth-required',
                'data-file': 'pages/Cart.js'
            },
                React.createElement('i', { className: 'fas fa-lock text-6xl text-gray-300 mb-4' }),
                React.createElement('h3', { className: 'text-xl font-semibold text-gray-600 mb-2' }, 'Authentication Required'),
                React.createElement('p', { className: 'text-gray-500 mb-4' }, 'Please sign in to view your cart'),
                React.createElement('button', {
                    onClick: () => setIsLoginOpen(true),
                    className: 'btn-primary text-white px-6 py-2 rounded-lg font-medium'
                }, 'Sign In')
            );
        }

        if (cartItems.length === 0) {
            return React.createElement('div', {
                className: 'text-center py-12 fade-in',
                'data-name': 'empty-cart',
                'data-file': 'pages/Cart.js'
            },
                React.createElement('i', { className: 'fas fa-shopping-cart text-6xl text-gray-300 mb-4' }),
                React.createElement('h3', { className: 'text-xl font-semibold text-gray-600 mb-2' }, 'Your cart is empty'),
                React.createElement('p', { className: 'text-gray-500' }, 'Add some products to get started')
            );
        }

        return React.createElement('div', {
            className: 'fade-in',
            'data-name': 'cart-page',
            'data-file': 'pages/Cart.js'
        },
            React.createElement('h2', { className: 'text-3xl font-bold text-gray-800 mb-8' }, 'Shopping Cart'),
            
            React.createElement('div', { className: 'grid grid-cols-1 gap-8' },
                React.createElement('div', { className: 'lg:col-span-2 space-y-4' },
                    cartItems.map(item =>
                        React.createElement('div', {
                            key: item.id,
                            className: 'bg-white rounded-lg shadow-md p-6 flex items-center space-x-4'
                        },
                            React.createElement('img', {
                                src: item.image,
                                alt: item.name,
                                className: 'w-16 h-16 object-cover rounded-lg'
                            }),
                            React.createElement('div', { className: 'flex-1' },
                                React.createElement('h3', { className: 'font-semibold text-gray-800' }, item.name),
                                React.createElement('p', { className: 'text-purple-600 font-bold' }, `$${item.price}`)
                            ),
                            React.createElement('div', { className: 'flex items-center space-x-2' },
                                React.createElement('button', {
                                    onClick: () => updateQuantity(item.id, item.quantity - 1),
                                    className: 'w-8 h-8 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200'
                                }, '-'),
                                React.createElement('span', { className: 'w-12 text-center font-medium' }, item.quantity),
                                React.createElement('button', {
                                    onClick: () => updateQuantity(item.id, item.quantity + 1),
                                    className: 'w-8 h-8 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200'
                                }, '+')
                            ),
                            React.createElement('button', {
                                onClick: () => removeFromCart(item.id),
                                className: 'text-red-500 hover:text-red-700 p-2'
                            }, React.createElement('i', { className: 'fas fa-trash' }))
                        )
                    )
                ),
                
                React.createElement('div', { className: 'bg-white rounded-lg shadow-md p-6 h-fit' },
                    React.createElement('h3', { className: 'text-xl font-semibold mb-4' }, 'Order Summary'),
                    React.createElement('div', { className: 'space-y-2 mb-4' },
                        React.createElement('div', { className: 'flex justify-between' },
                            React.createElement('span', null, 'Subtotal:'),
                            React.createElement('span', null, `$${getTotalPrice().toFixed(2)}`)
                        ),
                        React.createElement('div', { className: 'flex justify-between' },
                            React.createElement('span', null, 'Shipping:'),
                            React.createElement('span', null, 'Free')
                        ),
                        React.createElement('hr', { className: 'my-2' }),
                        React.createElement('div', { className: 'flex justify-between font-bold text-lg' },
                            React.createElement('span', null, 'Total:'),
                            React.createElement('span', { className: 'text-purple-600' }, `$${getTotalPrice().toFixed(2)}`)
                        )
                    ),
                    React.createElement('button', {
                        className: 'w-full btn-primary text-white py-3 rounded-lg font-medium'
                    }, 'Proceed to Checkout')
                )
            )
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
    }
}
