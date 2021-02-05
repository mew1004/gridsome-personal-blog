// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const natureDatas = require('./data/nature.js');
    const categoryDatas = require('./data/categories.js');
    const natures = addCollection({ typeName: 'Nature'});
    const categories = addCollection({ typeName: 'Categories'});

    natures.addReference('categories', 'Categories')
    
    for (const data of natureDatas) {
      natures.addNode(data);
    }

    for (const data of categoryDatas) {
      categories.addNode(data);
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
