function RegisterModal() {
    try {
        const { isRegisterOpen, setIsRegisterOpen, register, setIsLoginOpen } = useAuth();
        const [formData, setFormData] = React.useState({ name: '', email: '', password: '', confirmPassword: '' });
        const [error, setError] = React.useState('');
        const [loading, setLoading] = React.useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            setError('');
            
            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                setLoading(false);
                return;
            }
            
            const result = await register(formData.name, formData.email, formData.password);
            
            if (!result.success) {
                setError(result.error);
            }
            setLoading(false);
        };

        const switchToLogin = () => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
        };

        if (!isRegisterOpen) return null;

        return React.createElement('div', {
            className: 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center',
            onClick: () => setIsRegisterOpen(false)
        },
            React.createElement('div', {
                className: 'bg-white rounded-lg p-8 w-full max-w-md mx-4',
                onClick: (e) => e.stopPropagation()
            },
                React.createElement('div', { className: 'flex justify-between items-center mb-6' },
                    React.createElement('h2', { className: 'text-2xl font-bold text-gray-800' }, 'Sign Up'),
                    React.createElement('button', {
                        onClick: () => setIsRegisterOpen(false),
                        className: 'text-gray-500 hover:text-gray-700'
                    }, React.createElement('i', { className: 'fas fa-times' }))
                ),
                
                React.createElement('form', { onSubmit: handleSubmit, className: 'space-y-4' },
                    React.createElement('div', null,
                        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Full Name'),
                        React.createElement('input', {
                            type: 'text',
                            required: true,
                            className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500',
                            value: formData.name,
                            onChange: (e) => setFormData({...formData, name: e.target.value})
                        })
                    ),
                    
                    React.createElement('div', null,
                        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Email'),
                        React.createElement('input', {
                            type: 'email',
                            required: true,
                            className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500',
                            value: formData.email,
                            onChange: (e) => setFormData({...formData, email: e.target.value})
                        })
                    ),
                    
                    React.createElement('div', null,
                        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Password'),
                        React.createElement('input', {
                            type: 'password',
                            required: true,
                            className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500',
                            value: formData.password,
                            onChange: (e) => setFormData({...formData, password: e.target.value})
                        })
                    ),
                    
                    React.createElement('div', null,
                        React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Confirm Password'),
                        React.createElement('input', {
                            type: 'password',
                            required: true,
                            className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500',
                            value: formData.confirmPassword,
                            onChange: (e) => setFormData({...formData, confirmPassword: e.target.value})
                        })
                    ),
                    
                    error && React.createElement('div', { className: 'text-red-600 text-sm' }, error),
                    
                    React.createElement('button', {
                        type: 'submit',
                        disabled: loading,
                        className: 'w-full btn-primary text-white py-2 rounded-lg font-medium disabled:opacity-50'
                    }, loading ? 'Creating Account...' : 'Create Account'),
                    
                    React.createElement('div', { className: 'text-center' },
                        React.createElement('span', { className: 'text-gray-600' }, 'Already have an account? '),
                        React.createElement('button', {
                            type: 'button',
                            onClick: switchToLogin,
                            className: 'text-purple-600 hover:text-purple-800 font-medium'
                        }, 'Sign In')
                    )
                )
            )
        );
    } catch (error) {
        console.error('RegisterModal component error:', error);
        reportError(error);
    }
}
