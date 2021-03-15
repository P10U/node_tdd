const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.SequelizeAdapter()
factory = factoryGirl.factory
factory.setAdapter(adapter)

const Company = require('../../models').Company

factory.define('company', Company, {
    companyId: factory.sequence((n) => `companyId${n}`),
    companyName: factory.sequence((n) => `companyName${n}`),
})