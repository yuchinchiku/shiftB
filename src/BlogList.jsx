import React from "react";

const BlogList = ({ src }) => (
  <ul className="card">
    {src.map((elem) => {
      const date = new Date(elem.createdAt);
      const dateText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

      return (
        <li className="card__item" key={elem.id}>
          <a className="card__link" href={`/posts/${elem.id}/`}>
            <div className="card__head">
              <p className="card__date">{dateText}</p>
              <ul className="category">
                {elem.categories.map(category => 
                  <li  className="category__item" key={category}>{category}</li>
                )}
              </ul>
            </div>
            <div className="card__body">
                <p className="card__title">{elem.title}</p>
                <p className="card__desc" dangerouslySetInnerHTML={{ __html: elem.content }} />
            </div>
          </a>
        </li>
      );
    })}
  </ul>
);


export default BlogList;