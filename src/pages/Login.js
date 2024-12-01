import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Notyf } from 'notyf';

import { AuthContext } from '../context/AuthContext';

<<<<<<< HEAD
=======

>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
export default function Login() {

    const notyf = new Notyf();

    const { user, setUser } = useContext(AuthContext);

    // State hooks to store the values of the input fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(true);


    function authenticate(e) {

        // Prevents page redirection via form submission
        e.preventDefault();
        fetch('https://movieapp-api-lms1.onrender.com/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                email: email,
                password: password

            })
        })
        .then(res => res.json())
        .then(data => {

            if(data.access !== undefined){

                console.log(data.access);
                localStorage.setItem('token', data.access);
                retrieveUserDetails(data.access);

                // Clear input fields after submission
                setEmail('');
                setPassword('');

                notyf.success(`Successful Login`);
            
            } else if (data.message === "Incorrect email or password") {

                notyf.error(`Incorrect Credentials. Try Again`);

            } else {

                notyf.error(`${email} does not exist. Try Again.`);
            }

        })

    }

    function retrieveUserDetails(token){
        fetch('https://movieapp-api-lms1.onrender.com/users/details', {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            setUser({
                id: data._id,
                isAdmin: data.isAdmin
            });
        })
    };

    useEffect(() => {

        // Validation to enable submit button when all fields are populated and both passwords match
        if(email !== '' && password !== ''){
            setIsActive(true);
        }else{
            setIsActive(false);
        }

    }, [email, password]);

    return (

        (user) ? 
            <Navigate to="/" />
            :
            <Form onSubmit={(e) => authenticate(e)} >
                <h1 className="mt-5 text-center">Login</h1>
                <div className="container p-4" style={{ maxWidth: '600px', border: '1px solid #ced4da' }}>
                    <Form.Group>
                        <Form.Label className="fw-semibold">Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="my-3">
                        <Form.Label className="fw-semibold">Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    </div>
                    <div className="container bg-info bg-gradient mb-3" style={{ maxWidth: '600px', border: '1px solid #ced4da' }}>
                    { isActive ? 
                        <Button variant="primary" type="submit" id="loginBtn" className="m-0 py-2 w-100 border-0 fw-semibold bg-transparent">
                            Submit
                        </Button>
                        : 
                        <Button variant="danger" type="submit" id="loginBtn" disabled className="py-2 w-100 border-0 fw-semibold bg-transparent">
                            Submit
                        </Button>
                    }
                    </div>
                    <div className="container text-center">
                        <p>Don't have an account yet? <Link to="/register">Click here</Link> to register.</p>
                    </div>
            </Form>       
    )
}