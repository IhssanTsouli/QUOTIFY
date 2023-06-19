import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import iconstar from './assets/iconstar.png';
import njma from './assets/njma.png';
import drop from './assets/drop.svg';
// import { FaBeer } from 'react-icons/fa';
// import { FaBeer } from 'react-icons/fa';
import { FaFontAwesome } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [datafavorite, setdatafavorite] = useState([]);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then((quote) => {
        setQuote(quote.content);  
        setAuthor(quote.author);
      });

    getData();
  }, []);

  const getData = () => {
    axios.get(`http://127.0.0.1:8000/api/index`)
      .then((res) => {
        console.log(res.data);
        setdatafavorite(res.data);
      });
  };

  const addquote = (quote) => {
  const user = datafavorite.find((user) => user.quote === quote);

  if (!user) {
    setIsStarted(true);  // set isStarted to true before making the request
    axios.post(`http://127.0.0.1:8000/api/ajouter`, {
      quote,
      author,
    }).then(() => {
      getData();
    });
  } else {
    alert('This quote is already in your favorites.');
  }
};

  const fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then((quote) => {
        setQuote(quote.content);  
        setAuthor(quote.author);
      });
  };

  const onDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/destroy/${id}`)
      .then(() => {
        getData();
      });
  };
  const Starticon = (item) => {
    console.log(item);
    return datafavorite.some((fav)=>fav.quote === quote);
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <a class="jj" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <img src={iconstar} width="30" height="30" alt="Favorites Icon" />
              </a>
            </form>
          </div>
        </div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registre">Registre</Link>
          </li>
        </ul>
      </nav>
      
      <div className="App">
        <div className="quote">
          <h2>{quote}</h2>
          <small>- {author} -</small>
        </div><br/>

        <div className="btnf"> 
          <button id='btnstar' class="btn waves-effect" onClick={() => {addquote(quote);}}>
  {Starticon(quote) ? <FaStar style={{color: 'ffd905',fontSize: '24px'}} />: <FaStar style={{color: '30474f',fontSize: '24px'}} />}
          </button>
         
          <button className="btn" onClick={fetchNewQuote}>Generate New Quote</button>
        </div>   
      </div>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel" style={{color: '2f4951'}}>My Favorite Quotes</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="container-fluid">
            <table>
              <tbody >
                {datafavorite.map((data) => {
                  return (
                    <tr>
                      <td class="quotef">{data.quote}</td>
                      <td class="authorf">{data.author}</td>
                      <td> 
                        <img
                          src={drop}
                          onClick={() => onDelete(data.id)}
                          width="60"
                          height="30"
                          alt="Delete Icon"
                        />
                      </td>
                    </tr>
                  );
                })}
                <br></br>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Home;