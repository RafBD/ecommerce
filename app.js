function App() {
    try {
        const { currentPage, isSidebarOpen, setIsSidebarOpen } = useApp();
        const { isCartOpen, setIsCartOpen } = useCart();

        const renderPage = () => {
            switch (currentPage) {
                case 'home': return React.createElement(Home);
                case 'cart': return React.createElement(Cart);
                case 'orders': return React.createElement(Orders);
                case 'profile': return React.createElement(Profile);
                default: return React.createElement(Home);
            }
        };

        return React.createElement('div', { className: 'min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100' },
            React.createElement(Sidebar),
            
            isSidebarOpen && React.createElement('div', {
                className: 'fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden',
                onClick: () => setIsSidebarOpen(false)
            }),
            
            React.createElement('div', { className: 'lg:ml-64' },
                React.createElement(Header),
                React.createElement('main', { className: 'p-6' },
                    renderPage()
                )
            ),
            
            isCartOpen && React.createElement('div', {
                className: 'fixed inset-0 bg-black bg-opacity-50 z-50',
                onClick: () => setIsCartOpen(false)
            },
                React.createElement('div', {
                    className: 'fixed right-0 top-0 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out',
                    onClick: (e) => e.stopPropagation()
                },
                    React.createElement('div', { className: 'p-6 border-b' },
                        React.createElement('div', { className: 'flex items-center justify-between' },
                            React.createElement('h3', { className: 'text-lg font-semibold' }, 'Shopping Cart'),
                            React.createElement('button', {
                                onClick: () => setIsCartOpen(false),
                                className: 'text-gray-500 hover:text-gray-700'
                            }, React.createElement('i', { className: 'fas fa-times' }))
                        )
                    ),
                    React.createElement('div', { className: 'p-6' },
                        React.createElement(Cart)
                    )
                )
            ),
            
            React.createElement(LoginModal),
            React.createElement(RegisterModal)
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

function AppRoot() {
    try {
        return React.createElement(AuthProvider, null,
            React.createElement(AppProvider, null,
                React.createElement(CartProvider, null,
                    React.createElement(App)
                )
            )
        );
    } catch (error) {
        console.error('AppRoot error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(AppRoot));
