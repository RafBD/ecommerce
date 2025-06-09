function Header() {
    try {
        const { searchQuery, setSearchQuery, isSidebarOpen, setIsSidebarOpen } = useApp();
        const { getTotalItems, setIsCartOpen } = useCart();
        const { user, logout, setIsLoginOpen, isAuthenticated } = useAuth();

        return React.createElement('header', { className: 'bg-white shadow-sm border-b border-purple-100' },
            React.createElement('div', { className: 'flex items-center justify-between px-6 py-4' },
                React.createElement('div', { className: 'flex items-center space-x-4' },
                    React.createElement('button', {
                        className: 'lg:hidden text-purple-600 hover:text-purple-800',
                        onClick: () => setIsSidebarOpen(!isSidebarOpen)
                    }, React.createElement('i', { className: 'fas fa-bars text-xl' })),
                    
                    React.createElement('div', { className: 'relative' },
                        React.createElement('input', {
                            type: 'text',
                            placeholder: 'Search products...',
                            className: 'w-64 md:w-96 pl-10 pr-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
                            value: searchQuery,
                            onChange: (e) => setSearchQuery(e.target.value)
                        }),
                        React.createElement('i', { className: 'fas fa-search absolute left-3 top-3 text-purple-400' })
                    )
                ),
                
                React.createElement('div', { className: 'flex items-center space-x-4' },
                    React.createElement('button', {
                        className: 'relative p-2 text-purple-600 hover:text-purple-800 transition-colors',
                        onClick: () => isAuthenticated ? setIsCartOpen(true) : setIsLoginOpen(true),
                        title: isAuthenticated ? 'View Cart' : 'Login to view cart'
                    },
                        React.createElement('i', { className: 'fas fa-shopping-cart text-xl' }),
                        isAuthenticated && getTotalItems() > 0 && React.createElement('span', {
                            className: 'absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'
                        }, getTotalItems())
                    ),
                    
                    isAuthenticated ? 
                        React.createElement('div', { className: 'flex items-center space-x-2 relative group' },
                            React.createElement('img', {
                                src: user.avatar,
                                alt: 'User',
                                className: 'w-8 h-8 rounded-full cursor-pointer'
                            }),
                            React.createElement('span', { className: 'text-purple-700 font-medium hidden md:block' }, user.name),
                            React.createElement('button', {
                                onClick: logout,
                                className: 'ml-2 text-purple-600 hover:text-purple-800 text-sm'
                            }, React.createElement('i', { className: 'fas fa-sign-out-alt' }))
                        ) :
                        React.createElement('button', {
                            onClick: () => setIsLoginOpen(true),
                            className: 'btn-primary text-white px-4 py-2 rounded-lg font-medium'
                        }, 'Sign In')
                )
            )
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
