const AuthContext = React.createContext();

function AuthProvider({ children }) {
    try {
        const [user, setUser] = React.useState(null);
        const [isLoginOpen, setIsLoginOpen] = React.useState(false);
        const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);

        const login = async (email, password) => {
            try {
                // Simulate API call
                if (email && password) {
                    const userData = {
                        id: 1,
                        name: 'John Doe',
                        email: email,
                        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
                    };
                    setUser(userData);
                    setIsLoginOpen(false);
                    return { success: true };
                }
                return { success: false, error: 'Invalid credentials' };
            } catch (error) {
                return { success: false, error: 'Login failed' };
            }
        };

        const register = async (name, email, password) => {
            try {
                // Simulate API call
                if (name && email && password) {
                    const userData = {
                        id: 1,
                        name: name,
                        email: email,
                        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
                    };
                    setUser(userData);
                    setIsRegisterOpen(false);
                    return { success: true };
                }
                return { success: false, error: 'All fields are required' };
            } catch (error) {
                return { success: false, error: 'Registration failed' };
            }
        };

        const logout = () => {
            setUser(null);
        };

        const value = {
            user,
            login,
            register,
            logout,
            isLoginOpen,
            setIsLoginOpen,
            isRegisterOpen,
            setIsRegisterOpen,
            isAuthenticated: !!user
        };

        return React.createElement(AuthContext.Provider, { value }, children);
    } catch (error) {
        console.error('AuthProvider error:', error);
        reportError(error);
    }
}

const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
