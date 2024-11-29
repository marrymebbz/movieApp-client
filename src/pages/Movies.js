
import { useState, useEffect, useContext, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import { AuthContext } from '../context/AuthContext';

export default function Products() {
  const { user, setUser } = useContext(AuthContext); // Accessing context for user details
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user data
  const fetchUserData = useCallback(() => {
    const token = localStorage.getItem('token');
    if (!token) return; // No need to fetch user data if no token

    fetch('https://movieapp-api-lms1.onrender.com/users/details', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setUser(data.user); // Update context with user data
        } else {
          console.error('User data not found');
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [setUser]);

  // Fetch product data
  const fetchData = useCallback(() => {
    const token = localStorage.getItem('token');
    const fetchUrl = user?.isAdmin
      ? `${process.env.REACT_APP_API_BASE_URL}/products/all`
      : `${process.env.REACT_APP_API_BASE_URL}/products/active`;

    fetch(fetchUrl, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '', // Only send token if available
      },
    })
      .then(res => res.json())
      .then(data => {
        // Construct full URL for images
        const updatedProducts = data.map(product => {
          if (product.picture) {
            // Assuming the image is served from the "uploads" folder
            product.pictureUrl = `${process.env.REACT_APP_API_BASE_URL}/${product.picture}`;
          }
          return product;
        });
        setProducts(updatedProducts); // Update products with full image URLs
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      })
      .finally(() => {
        setLoading(false); // Mark as finished loading
      });
  }, [user]);

  useEffect(() => {
    fetchUserData(); // Fetch user data if logged in
  }, [fetchUserData]);

  useEffect(() => {
    fetchData(); // Fetch products based on user status (logged in or not)
  }, [fetchData, user]); // Fetch products whenever `user` changes (i.e., login state)

  // If loading is true, display a loading spinner or message
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      {user?.isAdmin ? (
        <AdminView productsData={products} fetchData={fetchData} />
      ) : (
        <UserView productsData={products} />
      )}
    </Container>
  );
}
