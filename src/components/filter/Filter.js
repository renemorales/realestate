import React, { Component } from 'react';

import './filter.styles.css';

export class Filter extends Component {
  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <select name="neighborhood" className='filters neighborhood'>
            <option value="" >City</option>
            <option value="">Richardson, TX</option>
            <option value="">Plano, TX</option>
            <option value="">Frisco, TX</option>

          </select>
          <select name="housetype" className="filters housetype">
            <option value="">Types of houses</option>
            <option value="">Ranch</option>
            <option value="">Apartment</option>
          </select>
          <select name="bedrooms" className="filters bedrooms">
            <option value="">Bedrooms</option>
            <option value="">2 BR</option>
            <option value="">4 BR</option>
            </select>
            <div className="filters price">
              <span className="title">price</span>
              <input type="text" name="min-price" className="min-price" />
              <input type="text" name="max-price" className="max-price" />
            </div>
            <div className="filters floor-space">
              <span className="title">floor space</span>
              <input type="text" name="min-floor-space" className="min-floor-space" />
              <input type="text" name="max-floor-space" className="max-floor-space" />
            </div>
            <div className="filters extras">
              <span className="title">extras</span>
              <label htmlFor='extras'>
                <span>Elevators</span>
                <input type="checkbox" name="extras" value='elevator' className="" />
              </label>
              <label htmlFor='extras'>
                <span>Swimming Pool</span>
                <input type="checkbox" name="extras" value='swimming-pool' className="" />
              </label>
              <label htmlFor='extras'>
                <span>Garage</span>
                <input type="checkbox" name="extras" value='garage' className="" />
              </label>
              <label htmlFor='extras'>
                <span>Gym</span>
                <input type="checkbox" name="extras" value='gym' className="" />
              </label>
            </div>
        </div>
      </section>
    )
  }
}


