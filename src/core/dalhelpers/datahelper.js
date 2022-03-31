const githubAPI = require('../../resources/github')


const createPR = async (data) => {
    const creategitPR = await githubAPI.gitcreatePR(data)
    const request = {
        'prcreatedBy': data.prcreatedBy,
        'prcreatorEmail': data.prcreatorEmail,
        'sourceBranch': data.sourceBranch,
        'targetBranch': data.targetBranch,
        'prnumber' : creategitPR.data.url,
        'prmergeisScheduled' : data.prmergeisScheduled,
        'prmergedBy' : 'Not Intialised',
        'prapprovedBy' : 'Not Intialised',
        "reponame" : data.reponame
    }

    return request
}



const approvePR = (data) => {
    const request = {
        'pipelineStatus': 'PR Approved',
        'prapprovedBy': data.prapprover,
        'prapprovedDate': Date
    }

    return request
}

const mergePR = async (data) => {
    //const gitresponse = await githubAPI.gitmergePR(data.prnumber)
        data.pipelineStatus = 'PR Merged',
        data.prmergedBy = data.prapprovedBy,
        data.prmergeDate = Date
    return data
}


const rejectPR = (data) => {
    const request = {
        'pipelineStatus': 'PR Rejected',
        'prmergedBy': data.prapprover,
        'prapprovedDate': Date
    }

    return request
}



module.exports = {
    createPR,
    approvePR,
    mergePR,
    rejectPR
}