import './styles/App.css';
import React from 'react';
import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div class="container">
      <h1 class="header">Menu Card</h1>
      <div class="row">
        <div class="col-md-3">
          <h3>About</h3>
          <img src="https://www.pngall.com/wp-content/uploads/5/Serving-Food-PNG-Image-HD.png" width="250px" height="200px" alt="Girl in a jacket" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsa eveniet esse ab voluptas, earum sapiente veritatis expedita, praesentium doloribus sed eius maxime. Quisquam eveniet exercitationem vel nulla ipsa voluptatum.</p>
        </div>
        <div class="col-md-9">
          <div style={{ display: 'flex' }}>
            <h3 style={{ width: '70%' }}>Name</h3>
            <h3 style={{ width: '16%' }}>Price</h3>
            <h3>Actions</h3>
          </div>
          <div class="section">
            <h4 class="subtitle">Starters</h4>
            <ul class="content">
              <li class="menuitem">
                <div class="name">Lorem ipsum dolor</div>
                <div class="cost">Rs.234</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
              <li class="menuitem">
                <div class="name">dolor sit amet</div>
                <div class="cost">Rs.500</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
              <li class="menuitem">
                <div class="name">Consectetur adipisicing elit</div>
                <div class="cost">Rs.1200</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="section">
            <h4 class="subtitle">Veg</h4>
            <ul class="content">
              <li class="menuitem">
                <div class="name">Lorem ipsum dolor</div>
                <div class="cost">Rs.234</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
              <li class="menuitem">
                <div class="name">dolor sit amet</div>
                <div class="cost">Rs.500</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
              <li class="menuitem">
                <div class="name">Consectetur adipisicing elit</div>
                <div class="cost">Rs.1200</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="section">
            <h4 class="subtitle">Non-Veg</h4>
            <ul class="content">
              <li class="menuitem">
                <div class="name">Lorem ipsum dolor</div>
                <div class="cost">Rs.234</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
              <li class="menuitem">
                <div class="name">dolor sit amet</div>
                <div class="cost">Rs.500</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
              <li class="menuitem">
                <div class="name">Consectetur adipisicing elit</div>
                <div class="cost">Rs.1200</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="section">
            <h4 class="subtitle">Deserts</h4>
            <ul class="content">
              <li class="menuitem">
                <div class="name">Lorem ipsum dolor</div>
                <div class="cost">Rs.234</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
              <li class="menuitem">
                <div class="name">dolor sit amet</div>
                <div class="cost">Rs.500</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
              <li class="menuitem">
                <div class="name">Consectetur adipisicing elit</div>
                <div class="cost">Rs.1200</div>
                <button type="button" class="up action btn btn-outline-dark">
                  <i class="fa fa-arrow-up"></i>
                </button>
                <button type="button" class="down action btn btn-outline-dark">
                  <i class="fa fa-arrow-down"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
