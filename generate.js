module.exports = function(){
    var faker = require('faker');
    var _ = require('lodash');
    return {
        pri: _.times(10, function(n){
            return {
                projRef: n,
                projYear: _.random(2557, 2559),
                projOwnerOrg: faker.company.companyName(),
                projCode: "ID"+_.random(100000, 200000),
                projType: _.random(1, 3),
                projName: faker.lorem.sentence(),
                projOrgName: faker.company.companySuffix(),
                projStartDate: faker.date.past(),
                projStopDate: faker.date.future(),
                projDuration: function(){
                    var duration = _.range(30, 360, 30);
                    return duration[_.random(0, duration.length-1)];
                }(),
                projValue: _.random(1000000.0, 10000000.0),
                preSaleProjCode: faker.lorem.word(),
                projStatus: _.random(1, 3)
            }
        })
    }
}