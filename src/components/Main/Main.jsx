import { Component } from "react";

import "./Main.css";

class Main extends Component{
  render(){
    return (
      <main className="container">
        <div className="promo__section">
          <div className="promo__about">
            <div className="promo__info">
              <div className="info">
                <h1>A <b>super solution</b> for your <b>business.</b></h1>
                <p>Our marketing and sales automations help you scale your outreach to get more leads for your company. </p>
              </div>
              <button>
                <a href="#">Request Beta Access</a>
              </button>
            </div>
          </div>
          <div className="promo__status">
            <li>
              <strong>2K+</strong>
              <span>companies</span>
            </li>
            <li>
              <strong>8</strong>
              <span>LANGUAGES</span>
            </li>
            <li>
              <strong>1.2M</strong>
              <span>LEADS</span>
            </li>
          </div>
        </div>
      </main>
    )
  }
}


export default Main