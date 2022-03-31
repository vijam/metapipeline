const gitmodels = require('../Models/git')
const datahelper = require('../dalhelpers/datahelper')
const githubAPI = require('../../resources/github')




const createPR = async (data) => {
    const format = await datahelper.createPR(data)
    const create = await new gitmodels(format)
    return create.save()
}

const aproverPR = async (data) => {
    let approve = await new gitmodels.findById(data._id)
    approve = await datahelper.approvePR(approve)
    return update.save()
}

const mergePR = async (id) => {
    let detail = await gitmodels.findOne({ '_id': id })
     detail = await datahelper.mergePR(detail)
     return detail.save()
}


const rejectPR = async (data) => {
    let reject = await new gitmodels.findById(data._id)
    reject = datahelper.rejectPR(create)
    return reject.save()
}
module.exports = {
    createPR,
    aproverPR,
    mergePR,
    rejectPR,
}