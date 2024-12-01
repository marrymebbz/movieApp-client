import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Home() {

    return (
        <>
            <Row
                className="text-white py-5 text-center main-banner d-flex justify-content-center align-items-center mx-auto"
                style={{ backgroundImage: 'url(/images/homepage_bg.jpg)', backgroundBlendMode: 'multiply' }}
            >
                <Col className="container">  
<<<<<<< HEAD
                    <p className="text-uppercase fw-bold mb-2 text-warning">Best MOVIE App</p>
                    <h1 className="fs-2">Welcome to ReelJourney, your guide to amazing stories and unforgettable movies.</h1>
                    <p className="fs-4">Discover new favorites or revisit classics with ReelJourney by your side.</p>
=======
                    <p className="text-uppercase fw-bold mb-2 text-warning">Best FitTracker App</p>
                    <h1 className="fs-2">Welcome to FitTrack, your trusted companion on the journey to a healthier, stronger, and more confident you. </h1>
                    <p className="fs-4">Whether you're starting fresh or aiming to elevate your fitness game, FitTrack is designed to guide and inspire you every step of the way.</p>
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
                    <Link 
                        to="/movies" 
                        className="m-0 py-2 px-5 w-100 border fw-semibold text-decoration-none rounded text-black text-uppercase bg-warning bg-gradient border-0"
                        >Check now!
                    </Link>
                </Col>
            </Row>
            <Row className="py-5 text-center mx-auto d-flex justify-content-center align-items-center container">
                <Col>  
                    <h2 className="text-uppercase fw-bold text-warning">--- About our App ---</h2>
<<<<<<< HEAD
                    <p>At ReelJourney, we bring your movie passion to life with personalized recommendations, curated playlists, and exclusive insights. From planning your next movie night to exploring timeless classics, ReelJourney is your all-in-one platform to stay entertained and inspired. Start your cinematic journey today and immerse yourself in the magic of storytelling!</p>
=======
                    <p>At FitTrack, we empower you to take control of your fitness goals with tailored movies, progress tracking, and expert insights. From planning your exercises to celebrating your milestones, FitTrack is your all-in-one fitness platform to stay motivated and achieve lasting results. Start your fitness journey today and become the best version of yourself!</p>
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
                </Col>
            </Row>
            <Footer />
        </>
    )
}