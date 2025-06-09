function Sidebar() {
    try {
        const { currentPage, selectedCategory, setSelectedCategory, isSidebarOpen, setIsSidebarOpen, navigateTo } = useApp();

        const menuItems = [
            { id: 'home', name: 'Home', icon: 'fas fa-home' },
            { id: 'cart', name: 'Shopping Cart', icon: 'fas fa-shopping-cart' },
            { id: 'orders', name: 'Order History', icon: 'fas fa-history' },
            { id: 'profile', name: 'Profile', icon: 'fas fa-user' }
        ];

        return React.createElement('div', {
            className: `fixed inset-y-0 left-0 z-50 w-64 sidebar-gradient text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
        },
            React.createElement('div', { className: 'flex flex-col h-full' },
                React.createElement('div', { className: 'flex items-center justify-between p-6 border-b border-purple-400' },
                    React.createElement('h1', { className: 'text-2xl font-bold' }, 'Purple Store'),
                    React.createElement('button', {
                        className: 'lg:hidden text-white hover:text-purple-200',
                        onClick: () => setIsSidebarOpen(false)
                    }, React.createElement('i', { className: 'fas fa-times' }))
                ),
                
                React.createElement('nav', { className: 'flex-1 p-6' },
                    React.createElement('div', { className: 'space-y-2' },
                        menuItems.map(item =>
                            React.createElement('button', {
                                key: item.id,
                                className: `w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${currentPage === item.id ? 'bg-white bg-opacity-20 text-white' : 'text-purple-100 hover:bg-white hover:bg-opacity-10 hover:text-white'}`,
                                onClick: () => navigateTo(item.id)
                            },
                                React.createElement('i', { className: item.icon }),
                                React.createElement('span', null, item.name)
                            )
                        )
                    ),
                    
                    React.createElement('div', { className: 'mt-8' },
                        React.createElement('h3', { className: 'text-purple-200 text-sm font-semibold mb-4 uppercase tracking-wide' }, 'Categories'),
                        React.createElement('div', { className: 'space-y-2' },
                            mockCategories.map(category =>
                                React.createElement('button', {
                                    key: category.id,
                                    className: `w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${selectedCategory === category.id ? 'bg-white bg-opacity-20 text-white' : 'text-purple-100 hover:bg-white hover:bg-opacity-10 hover:text-white'}`,
                                    onClick: () => {
                                        setSelectedCategory(category.id);
                                        navigateTo('home');
                                    }
                                },
                                    React.createElement('i', { className: category.icon }),
                                    React.createElement('span', { className: 'text-sm' }, category.name)
                                )
                            )
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Sidebar component error:', error);
        reportError(error);
    }
}
