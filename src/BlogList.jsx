import React from "react";
import posts from './data/posts.js';

import styles from './cssModule/blogList.module.css'

const BlogList = () => (
  <ul className={styles.card}>
    {posts.map((elem) => {
      const date = new Date(elem.createdAt);
      const dateText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

      return (
        <li className={styles.card__item} key={elem.id}>
          <a className={styles.card__link} href={`/posts/${elem.id}/`}>
            <div className={styles.card__head}>
              <p className={styles.card__date}>{dateText}</p>
              <ul className={styles.category}>
                {elem.categories.map(category =>
                  <li  className={styles.category__item} key={category}>{category}</li>
                )}
              </ul>
            </div>
            <div className={styles.card__body}>
                <p className={styles.card__title}>{elem.title}</p>
                <p className={styles.card__desc} dangerouslySetInnerHTML={{ __html: elem.content }} />
            </div>
          </a>
        </li>
      );
    })}
  </ul>
);


export default BlogList;