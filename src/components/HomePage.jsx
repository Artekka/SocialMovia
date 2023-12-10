import { useState, useEffect } from "react"

const Homepage = () => {

    const [movieCards, setMovieCards] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMovieCards(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    /* 
    figure out Promise.all() to fetch placeholder images https://picsum.photos/v2/list?page=1&limit=12
    */
    
    let multiFetch = () => {
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=12'),
            fetch('https://picsum.photos/v2/list?page=1&limit=12')
        ])
            .then((responses) => {
                return Promise.all(responses.map(function (response) {
                    return response.json();
                }))
        })
    };

    return (

        <div id="Homepage">
            <div className="container-fluid">
                <div className="row">
            {movieCards.map((movieCard) => {
                return (
                    <div className="cardBox col-3" key={movieCard.id}>
                        <div className="cardMain">
                            <div className="cardHeader">
                            <img src={`https://picsum.photos/200/300?random=${movieCard.id}`} alt="Super incredibly dynamic image generated via picsum's API" />
                                <h1>{movieCard.title}</h1>
                            </div>
                            <div className="cardBody">
                                <div className=""><p>
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
                </div>
            </div>
    );
};

export default Homepage