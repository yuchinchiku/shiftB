import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './cssModule/blogList.module.css'

const PostsDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${postId}`);
        const data = await res.json();
        setPost(data.post);
      } finally {
        setLoading(false);
      }
    }

    fetcher();
  }, [postId]);

  if(loading) {
    return <p>Loading...</p>;
  } else if (!post) {
    return <div>記事が見つかりませんでした。</div>;
  }

  const date = new Date(post.createdAt);
  const dateText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

  return(
    <article className={styles.post}>
      <div className={styles.post__img}>
        <img src={post.thumbnailUrl} alt={post.title} />
      </div>
      <div className={styles.post__content}>
        <div className={styles.post__head}>
          <p className={styles.post__date}>{dateText}</p>
          <ul className={styles.category}>
            {post.categories.map(category => (
              <li className={styles.category__item} key={category}>{category}</li>
              ))}
          </ul>
        </div>
        <h1 className={styles.post__title}>{post.title}</h1>
        <p className={styles.post__details} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}

export default PostsDetails;