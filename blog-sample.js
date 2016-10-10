module.exports = function() {
    var faker = require('faker');
    var _ = require('lodash');
    return {
        blogContent: _.times(10, function(n){
            return {
                id: n,
                title: faker.lorem.sentence(),
                detail: faker.lorem.paragraphs(),
                date: new Date(_.random(2014, 2015), _.random(1, 12), _.random(1, 30)),
                author: faker.name.findName()
            }
        }),
        comment: _.times(50, function(n){
            return {
                id: n,
                blogId: _.random(0, 9),
                name: faker.name.findName(),
                email: faker.internet.email(),
                detail: faker.lorem.sentence(),
                date: new Date(_.random(2014, 2015), _.random(1, 12), _.random(1, 30)),
            }
        })
    }
}