const base = require('./Base')
const Post = base.sequelize.define('postagens', {
    titulo: {
        type: base.Sequelize.STRING
    },
    conteudo: {
        type: base.Sequelize.TEXT
    }
})

//Post.sync({force: true})

module.exports = Post