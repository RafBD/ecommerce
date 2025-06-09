function Profile() {
    try {
        const [user, setUser] = React.useState({
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+1 (555) 123-4567',
            address: '123 Main St, New York, NY 10001',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        });

        const [isEditing, setIsEditing] = React.useState(false);

        const handleSave = () => {
            setIsEditing(false);
        };

        return React.createElement('div', {
            className: 'fade-in',
            'data-name': 'profile-page',
            'data-file': 'pages/Profile.js'
        },
            React.createElement('h2', { className: 'text-3xl font-bold text-gray-800 mb-8' }, 'My Profile'),
            
            React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-3 gap-8' },
                React.createElement('div', { className: 'bg-white rounded-lg shadow-md p-6 text-center' },
                    React.createElement('img', {
                        src: user.avatar,
                        alt: 'Profile',
                        className: 'w-24 h-24 rounded-full mx-auto mb-4'
                    }),
                    React.createElement('h3', { className: 'text-xl font-semibold text-gray-800 mb-2' }, user.name),
                    React.createElement('p', { className: 'text-gray-600 mb-4' }, user.email),
                    React.createElement('button', {
                        className: 'btn-primary text-white px-6 py-2 rounded-lg'
                    }, 'Change Photo')
                ),
                
                React.createElement('div', { className: 'lg:col-span-2 bg-white rounded-lg shadow-md p-6' },
                    React.createElement('div', { className: 'flex items-center justify-between mb-6' },
                        React.createElement('h3', { className: 'text-xl font-semibold text-gray-800' }, 'Account Information'),
                        React.createElement('button', {
                            onClick: () => isEditing ? handleSave() : setIsEditing(true),
                            className: 'text-purple-600 hover:text-purple-800 font-medium'
                        }, isEditing ? 'Save Changes' : 'Edit Profile')
                    ),
                    
                    React.createElement('div', { className: 'space-y-4' },
                        React.createElement('div', null,
                            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Full Name'),
                            React.createElement('input', {
                                type: 'text',
                                value: user.name,
                                disabled: !isEditing,
                                className: `w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${!isEditing ? 'bg-gray-50' : ''}`,
                                onChange: (e) => setUser({...user, name: e.target.value})
                            })
                        ),
                        
                        React.createElement('div', null,
                            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Email'),
                            React.createElement('input', {
                                type: 'email',
                                value: user.email,
                                disabled: !isEditing,
                                className: `w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${!isEditing ? 'bg-gray-50' : ''}`,
                                onChange: (e) => setUser({...user, email: e.target.value})
                            })
                        ),
                        
                        React.createElement('div', null,
                            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Phone'),
                            React.createElement('input', {
                                type: 'tel',
                                value: user.phone,
                                disabled: !isEditing,
                                className: `w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${!isEditing ? 'bg-gray-50' : ''}`,
                                onChange: (e) => setUser({...user, phone: e.target.value})
                            })
                        ),
                        
                        React.createElement('div', null,
                            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Address'),
                            React.createElement('textarea', {
                                value: user.address,
                                disabled: !isEditing,
                                rows: 3,
                                className: `w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${!isEditing ? 'bg-gray-50' : ''}`,
                                onChange: (e) => setUser({...user, address: e.target.value})
                            })
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Profile component error:', error);
        reportError(error);
    }
}
