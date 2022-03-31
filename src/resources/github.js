const axios = require('axios')
const token = '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'
const giturl = 'https://api.github.com'


const getgithubrepos = async (user) => {
    try {

        const request = await axios({
            method: 'get',
            url: `${giturl}/users/${user}/repos`,
            //data: data,
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return request
    } catch (err) {
        err.status = err.response.statusCode || err.response.status;
        throw err;
    }

}


const getgitopenpr = async () => {
    try {
        const request = await axios({
            method: 'get',
            url: `${giturl}/repos/${data.user}/${data.reponame}/pulls`,
            //data: data,
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return request
    } catch (ex) {
        err.status = err.response.statusCode || err.response.status;
        throw err;
    }

}

const getprojects = async (user) => {
    try {
        const request = await axios({
            method: 'get',
            url: `${giturl}/users/${user}/projects`,
            //data: data,
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return request
    } catch (ex) {
        err.status = err.response.statusCode || err.response.status;
        throw err;
    }
}

const gitcreatePR = async (input) => {
    try {
        const request = await axios({
            method: 'post',
            url: `${giturl}/repos/${input.prcreatedBy}/${input.reponame}/pulls`,
            data: {
                "head": input.sourceBranch,
                "title": "Update README.md",
                "base": input.targetBranch,
                "body": "This is a pull request for updating README.md , API testing using POSTMAN",
            },
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return request
    } catch (ex) {
        ex.status = ex.response.statusCode || ex.response.status;
        throw ex;
    }
}

const gitapprovePR = async () => {
    try {
        const request = await axios({
            method: 'get',
            url: `${giturl}/users/${user}/projects`,
            //data: data,
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return request
    } catch (ex) {
        err.status = err.response.statusCode || err.response.status;
        throw err;
    }
}

const gitmergePR = async (input) => {
    try {
        const request = await axios({
            method: 'PUT',
            url: `${input}/merge`,
            data: {
                "commit_title": "commit_title"
            },
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return request
    } catch (ex) {
        ex.status = ex.response.statusCode || ex.response.status;
        throw ex;
    }
}

module.exports = {
    getgithubrepos,
    getgitopenpr,
    gitcreatePR,
    getprojects,
    gitapprovePR,
    gitmergePR
}
