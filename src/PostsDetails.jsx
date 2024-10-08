import React from "react";
import { useParams } from "react-router-dom";
import posts from './data/posts.js';

import styles from './cssModule/blogList.module.css'

const PostsDetails = () => {
  const { postId } = useParams();
  const post = posts.find((elem) => elem.id.toString() === postId);
  const date = new Date(post.createdAt);
  const dateText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

  if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }
  return(
    <article className={styles.post}>
      <div className={styles.post__img}>
        <img src={post.thumbnailUrl} />
      </div>
      <div className={styles.post__content}>
        <div className={styles.post__head}>
          <p className={styles.post__date}>{dateText}</p>
          <ul className={styles.category}>
            {post.categories.map(category =>
              <li className={styles.category__item} key={category}>{category}</li>
            )}
          </ul>
        </div>
        <h1 className={styles.post__title}>{post.title}</h1>
        <p className={styles.post__details} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}

export default PostsDetails;