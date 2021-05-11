import React, { Component } from 'react'

import './listings.styles.css'


export class Listings extends Component {
  render() {
    return (
      <section id='listings'>
        <section className="search-area">
          <input type="text" name="search" id="" />
        </section>
        <section className="sortby-area">
          <div className="results">
            390 results found
          </div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price-asc">Highest Price</option>
              <option value="price-dsc">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fas fa-th-list"></i>
              <i className="fas fa-th"></i>
            </div>
          </div>
        </section>
        <section className="listings-results">
          <div className="listing">
            <div className="listing-img">
              <span className="address">Address</span>
              <div className="details">
                <div className="user-img">

                </div>
                <div className="user-details">
                  <div className="user-name">Nina Smith</div>
                  <div className="post-date">05/08/2021</div>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="far fa-square"></i>
                    <span>1,000 ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fas fa-bed"></i>
                    <span> 3 bedrooms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span>$1000</span>
              <span><i className="fas fa-map-marker-alt"></i>location: Dallas, TX</span>
            </div>
          </div>
        </section>
        <section className="pagination">
          <ul className="pagination-nums">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    )
  }
}
