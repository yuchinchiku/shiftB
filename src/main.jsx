import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './Header.jsx'
import BlogList from './BlogList.jsx'
import nav from "./data/nav";
import posts from './data/posts.js';

import './sass/styles.scss';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header src={nav} />
    <div className='content'>
      <BlogList src={posts} />
    </div>
  </StrictMode>,
)
