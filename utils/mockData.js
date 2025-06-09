const mockProducts = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        rating: 4.5,
        category: "electronics",
        description: "Premium wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        rating: 4.3,
        category: "electronics",
        description: "Advanced smartwatch with health monitoring"
    },
    {
        id: 3,
        name: "Designer Backpack",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        rating: 4.7,
        category: "fashion",
        description: "Stylish and functional designer backpack"
    },
    {
        id: 4,
        name: "Coffee Maker",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
        rating: 4.2,
        category: "home",
        description: "Professional grade coffee maker for home use"
    },
    {
        id: 5,
        name: "Smartphone",
        price: 699.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        rating: 4.6,
        category: "electronics",
        description: "Latest smartphone with advanced camera system"
    },
    {
        id: 6,
        name: "Running Shoes",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        rating: 4.4,
        category: "fashion",
        description: "Comfortable running shoes for all terrains"
    }
];

const mockCategories = [
    { id: 'all', name: 'All Products', icon: 'fas fa-th-large' },
    { id: 'electronics', name: 'Electronics', icon: 'fas fa-laptop' },
    { id: 'fashion', name: 'Fashion', icon: 'fas fa-tshirt' },
    { id: 'home', name: 'Home & Garden', icon: 'fas fa-home' },
    { id: 'offers', name: 'Special Offers', icon: 'fas fa-tags' }
];

const mockOrders = [
    {
        id: 'ORD-001',
        date: '2024-01-15',
        total: 449.98,
        status: 'delivered',
        items: [
            { name: 'Wireless Headphones', quantity: 1, price: 299.99 },
            { name: 'Smart Watch', quantity: 1, price: 149.99 }
        ]
    },
    {
        id: 'ORD-002',
        date: '2024-01-10',
        total: 89.99,
        status: 'shipped',
        items: [
            { name: 'Designer Backpack', quantity: 1, price: 89.99 }
        ]
    }
];
