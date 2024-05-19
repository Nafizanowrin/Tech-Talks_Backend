const News = require('../models/newsModel');

const createNews = async (req, res) => {
  try {
    const { heading, content } = req.body;
    const news = new News({ heading, content }); 
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateNews = async (req, res) => {
  try {
    const { heading, content } = req.body;
    const news = await News.findByIdAndUpdate(req.params.id, { heading, content }, { new: true });
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { createNews, getAllNews, getNewsById, updateNews, deleteNews };
