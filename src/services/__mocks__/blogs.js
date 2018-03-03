import React from 'react'

let token = null

const blogs = [
  {
    id: "5a451df7571c224a31b5c8ce",
    title: "fwefwe",
    author: "fefw",
    url: "grgeg",
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "testaaja",
      name: "janne"
    }
  },
  {
    id: "5a451e21e0b8b04a45638211",
    title: "fewfw",
    author: "fwefww",
    url: "fgwegf",
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "testaaja",
      name: "janne"
    }
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll, blogs }