const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');

const projects = generateFileList(join(__dirname, 'content/projects')).edges;

module.exports = () => {
  const pages = [
    {
      url: '/',
      seo: {},
    },
  ];
  pages.push({
    url: '/projects',
    data: projects,
  });

  pages.push(
    ...projects.map((project) => {
      const data = fs
        .readFileSync(join('content/projects', project.id), 'utf8')
        .replace(/---(.*\n)*---/, '');
      return {
        url: `/project/${project.id.replace('.md', '')}/`,
        seo: project.details,
        data: {
          details: project.details,
          content: data,
        },
      };
    })
  );

  return pages;
};
