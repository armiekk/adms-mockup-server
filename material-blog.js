module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');

    return {
        content: _.times(10, function(n){
            return {
                id: n,
                url: faker.lorem.word(),
                title: faker.lorem.sentence(),
                description: faker.lorem.sentences(),
                imageCover: faker.image.imageUrl(),
                detail: faker.lorem.paragraphs(),
                author: faker.name.findName(),
                tag: _.times(_.random(1, 6), function(n2){
                    return faker.lorem.word();
                }),
                datePost: new Date()
            }
        })
    }
}