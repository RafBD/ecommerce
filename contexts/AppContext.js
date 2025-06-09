const AppContext = React.createContext();

function AppProvider({ children }) {
    try {
        const [currentPage, setCurrentPage] = React.useState('home');
        const [selectedCategory, setSelectedCategory] = React.useState('all');
        const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
        const [searchQuery, setSearchQuery] = React.useState('');

        const navigateTo = (page) => {
            setCurrentPage(page);
            setIsSidebarOpen(false);
        };

        const filterProducts = (products) => {
            let filtered = products;
            
            if (selectedCategory !== 'all') {
                filtered = filtered.filter(product => product.category === selectedCategory);
            }
            
            if (searchQuery) {
                filtered = filtered.filter(product =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }
            
            return filtered;
        };

        const value = {
            currentPage,
            selectedCategory,
            setSelectedCategory,
            isSidebarOpen,
            setIsSidebarOpen,
            searchQuery,
            setSearchQuery,
            navigateTo,
            filterProducts
        };

        return React.createElement(AppContext.Provider, { value }, children);
    } catch (error) {
        console.error('AppProvider error:', error);
        reportError(error);
    }
}

const useApp = () => {
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
