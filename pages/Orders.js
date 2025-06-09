function Orders() {
    try {
        const getStatusColor = (status) => {
            switch (status) {
                case 'delivered': return 'text-green-600 bg-green-100';
                case 'shipped': return 'text-blue-600 bg-blue-100';
                case 'processing': return 'text-yellow-600 bg-yellow-100';
                default: return 'text-gray-600 bg-gray-100';
            }
        };

        return React.createElement('div', {
            className: 'fade-in',
            'data-name': 'orders-page',
            'data-file': 'pages/Orders.js'
        },
            React.createElement('h2', { className: 'text-3xl font-bold text-gray-800 mb-8' }, 'Order History'),
            
            mockOrders.length > 0 ? 
                React.createElement('div', { className: 'space-y-6' },
                    mockOrders.map(order =>
                        React.createElement('div', {
                            key: order.id,
                            className: 'bg-white rounded-lg shadow-md p-6'
                        },
                            React.createElement('div', { className: 'flex items-center justify-between mb-4' },
                                React.createElement('div', null,
                                    React.createElement('h3', { className: 'text-lg font-semibold text-gray-800' }, `Order #${order.id}`),
                                    React.createElement('p', { className: 'text-gray-600' }, `Date: ${order.date}`)
                                ),
                                React.createElement('div', { className: 'text-right' },
                                    React.createElement('span', {
                                        className: `px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(order.status)}`
                                    }, order.status),
                                    React.createElement('p', { className: 'text-xl font-bold text-purple-600 mt-1' }, `$${order.total.toFixed(2)}`)
                                )
                            ),
                            
                            React.createElement('div', { className: 'border-t pt-4' },
                                React.createElement('h4', { className: 'font-medium text-gray-700 mb-2' }, 'Items:'),
                                React.createElement('div', { className: 'space-y-2' },
                                    order.items.map((item, index) =>
                                        React.createElement('div', {
                                            key: index,
                                            className: 'flex justify-between text-sm'
                                        },
                                            React.createElement('span', null, `${item.name} x${item.quantity}`),
                                            React.createElement('span', { className: 'font-medium' }, `$${item.price.toFixed(2)}`)
                                        )
                                    )
                                )
                            ),
                            
                            React.createElement('div', { className: 'flex space-x-3 mt-4' },
                                React.createElement('button', {
                                    className: 'btn-primary text-white px-4 py-2 rounded-lg text-sm'
                                }, 'Track Order'),
                                React.createElement('button', {
                                    className: 'border border-purple-600 text-purple-600 px-4 py-2 rounded-lg text-sm hover:bg-purple-50'
                                }, 'Reorder')
                            )
                        )
                    )
                ) :
                React.createElement('div', { className: 'text-center py-12' },
                    React.createElement('i', { className: 'fas fa-history text-6xl text-gray-300 mb-4' }),
                    React.createElement('h3', { className: 'text-xl font-semibold text-gray-600 mb-2' }, 'No orders yet'),
                    React.createElement('p', { className: 'text-gray-500' }, 'Start shopping to see your orders here')
                )
        );
    } catch (error) {
        console.error('Orders component error:', error);
        reportError(error);
    }
}
