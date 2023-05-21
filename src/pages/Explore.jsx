import React from 'react'
import {Link} from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpeg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpeg'
import Slider from '../components/Slider'

export default function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        <Slider/>
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent icon"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Treehouses for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sell icon"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Treehouses for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
