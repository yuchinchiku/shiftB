import React from "react";
import { Link } from "react-router-dom";
import posts from './data/posts.js';

import styles from './cssModule/blogList.module.css'

const BlogList = () => (
  <ul className={styles.card}>
    {posts.map((elem) => {
      const date = new Date(elem.createdAt);
      const dateText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

      return (
        <li className={styles.card__item} key={elem.id}>
          <Link className={styles.card__link} to={`/posts/${elem.id}/`}>
            <div className={styles.card__head}>
              <p className={styles.card__date}>{dateText}</p>
              <ul className={styles.category}>
                {elem.categories.map(category =>
                  <li className={styles.category__item} key={category}>{category}</li>
                )}
              </ul>
            </div>
            <div className={styles.card__body}>
                <p className={styles.card__title}>{elem.title}</p>
                <p className={styles.card__desc} dangerouslySetInnerHTML={{ __html: elem.content }} />
            </div>
          </Link>
        </li>
      );
    })}
  </ul>
);


export default BlogList;