import { useState } from "react"
import { useEffect } from "react"

const Homepage = () => {

    const [movieCards, setMovieCards] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMovieCards(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (

        <div id="Homepage">
            {movieCards.map((movieCard) => {
                return (
                    <div className="cardBox container-fluid" key={movieCard.id}>
                        <div className="cardMain">
                            <div className="cardHeader">
                                <h1>{movieCard.title}</h1>
                            </div>
                            <div className="card">
                                <div className="cardBody"><p>
                                    {movieCard.body}
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }

        </div>
    );
};

export default Homepage