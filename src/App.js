import { React, Component } from 'react'
import axios from 'axios';
import './App.css';
import Marketplace from './components/Marketplace';
import Carousel from 'react-bootstrap/Carousel';


const images = [
    'https://unsplash.com/photos/4K2lIP0zc_k',
    'https://unsplash.com/photos/gcsNOsPEXfs',
    'https://unsplash.com/photos/8KfCR12oeUM',
    'https://unsplash.com/photos/90FzfXFEEjo',
];

class App extends Component {
    render() {
        return (
            <div className='carousel'>
                <View style={styles.container}>
                    <BackgroundCarousel images={images} />
                </View>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Home</h3>
                            <p>The community App to connect your ideas with the audience you're looking for</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Contact</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>About</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

export default App;