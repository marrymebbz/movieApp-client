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
                    <p className="text-uppercase fw-bold mb-2 text-warning">Best MOVIE App</p>
                    <h1 className="fs-2">Welcome to ReelJourney, your guide to amazing stories and unforgettable movies.</h1>
                    <p className="fs-4">Discover new favorites or revisit classics with ReelJourney by your side.</p>
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
                    <p>At ReelJourney, we bring your movie passion to life with personalized recommendations, curated playlists, and exclusive insights. From planning your next movie night to exploring timeless classics, ReelJourney is your all-in-one platform to stay entertained and inspired. Start your cinematic journey today and immerse yourself in the magic of storytelling!</p>
                </Col>
            </Row>
            <Footer />
        </>
    )
}