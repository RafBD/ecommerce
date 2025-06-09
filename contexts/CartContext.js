const CartContext = React.createContext();

function CartProvider({ children }) {
    try {
        const [cartItems, setCartItems] = React.useState([]);
        const [isCartOpen, setIsCartOpen] = React.useState(false);

        const addToCart = (product) => {
            setCartItems(prev => {
                const existingItem = prev.find(item => item.id === product.id);
                if (existingItem) {
                    return prev.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prev, { ...product, quantity: 1 }];
            });
        };

        const removeFromCart = (productId) => {
            setCartItems(prev => prev.filter(item => item.id !== productId));
        };

        const updateQuantity = (productId, quantity) => {
            if (quantity <= 0) {
                removeFromCart(productId);
                return;
            }
            setCartItems(prev =>
                prev.map(item =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        };

        const getTotalPrice = () => {
            return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        };

        const getTotalItems = () => {
            return cartItems.reduce((total, item) => total + item.quantity, 0);
        };

        const value = {
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            getTotalPrice,
            getTotalItems,
            isCartOpen,
            setIsCartOpen
        };

        return React.createElement(CartContext.Provider, { value }, children);
    } catch (error) {
        console.error('CartProvider error:', error);
        reportError(error);
    }
}

const useCart = () => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
