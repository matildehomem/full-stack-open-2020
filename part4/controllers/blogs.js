const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

//fetching all blogs
blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs.map((blog) => blog.toJSON()));
});

//fetching individual blog
blogsRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id);
  try {
    if (blog) response.json(blog.toJSON());
    response.status(404).end();
  } catch (error) {
    next(error);
  }
});

//delete blog
blogsRouter.delete('/:id', async (req, res, next) => {
  try {
    await Blog.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

//create blog
blogsRouter.post('/', async (request, response, next) => {
  const body = request.body;
  console.log(body);
  
  if (!body.title) {
    return response.status(400).json({
      error: 'content missing',
    });
  }
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });
  try {
    const savedBlog = await blog.save();
    response.json(savedBlog.toJSON());
  } catch (exception) {
    next(exception);
  }
});

//update blog
blogsRouter.put('/:id', (request, response, next) => {
  const body = request.body;

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  };

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then((updatedBlog) => {
      response.json(updatedBlog.toJSON());
    })
    .catch((error) => next(error));
});

module.exports = blogsRouter;
