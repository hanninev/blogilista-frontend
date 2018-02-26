import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({
  addBlog, handleChange, newTitle, newAuthor, newUrl
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

  BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newTitle: PropTypes.string.isRequired,
  newAuthor: PropTypes.string.isRequired,
  newUrl: PropTypes.string.isRequired
}

  export default BlogForm