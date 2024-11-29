// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//     // export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [user, setUser] = useState(null);  // Add user state

//     // Function to fetch user details
//     const fetchUserDetails = async (token) => {
//         console.log('Fetching user details with token:', token); // Debugging line
//         try {
//             const response = await fetch('https://movieapp-api-lms1.onrender.com/users/details', {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             const data = await response.json();
//             if (data && data.user) {
//                 console.log('User fetched:', data.user);  // Debugging line
//                 setUser(data.user);  // Set user details in context
//             }
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }
//     };

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         console.log('Token on load:', token);  // Debugging line
//         setIsAuthenticated(!!token); // true if token exists

//         if (token) {
//             // Fetch user details if token exists
//             fetchUserDetails(token);  // Use the function directly
//         }
//     }, []); // No need to add `fetchUserDetails` here since it's stable

//     const login = (token) => {
//         console.log('Logging in with token:', token);  
//         localStorage.setItem('token', token);
//         setIsAuthenticated(true);
//         fetchUserDetails(token);  // Call the function after login
//     };

//     const logout = () => {
//         console.log('Logging out');  // Debugging line
//         localStorage.removeItem('token');
//         setIsAuthenticated(false);
//         setUser(null);  // Clear user on logout
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, user, setUser, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider functional component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Function to fetch user details
    const fetchUserDetails = async (token) => {
        try {
            console.log('Fetching user details with token:', token); // Debugging
            const response = await fetch('https://movieapp-api-lms1.onrender.com/users/details', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                console.error('Failed to fetch user details:', response.status);
                throw new Error('Failed to fetch user details');
            }
            const data = await response.json();
            if (data && data.user) {
                console.log('User fetched:', data.user); // Debugging
                setUser(data.user);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    // Effect to check for token on load
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Token on load:', token); // Debugging
        setIsAuthenticated(!!token); // true if token exists

        if (token) {
            fetchUserDetails(token);
        }
    }, []); // Runs only once on mount

    // Login function
    const login = (token) => {
        console.log('Logging in with token:', token); // Debugging
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        fetchUserDetails(token);
    };

    // Logout function
    const logout = () => {
        console.log('Logging out'); // Debugging
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null); // Clear user data
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
