const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');

module.exports = () => {
  const pages = [
    {
      url: '/',
      seo: {},
    },
  ];

  return pages;
};
