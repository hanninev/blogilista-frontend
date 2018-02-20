import React from 'react'

const BlogForm = ({
  addBlog, handleChange, newTitle, newAuthor, newUrl, newLikes
}) => {
  return (
    <div>
        <h2>Luo uusi blogi</h2>
        <form onSubmit={addBlog}>
        <div>
        nimi
          <input
            type="text"
            name="title"
            value={newTitle}
            onChange={handleChange}
          />
          </div>
          <div>
          tekijä
          <input
            type="text"
            name="author"
            value={newAuthor}
            onChange={handleChange}
          />
          </div>
          <div>
          url
          <input
            type="text"
            name="url"
            value={newUrl}
            onChange={handleChange}
          />
          </div>
          <button type="submit">tallenna</button>
        </form>
        </div>
  )}

  export default BlogForm