/*
* @Author: beyondouyuan
* @Date:   2019-02-22 16:43:17
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2019-02-23 01:24:24
* @E-mail: beyondouyuan@gmail.com
* @Github: https://beyondouyuan.github.io/
* @description: 写代码就像写诗一样
* @version: 1.0.0
*/

const baseURI = `http://127.0.0.1:8889`

const urls = {
    'login': '/api/user/login',
    'register': '/api/user/register',
    'logout': '/api/user/logout',
    'user': '/api/user',
    'comment': '/api/comment',
    'collect': '/api/collect',
    'like': '/api/like',
    'movie': '/api/movie',
    'upload': '/api/upload',

}

const parseAPI = api => {
    return `${baseURI}${urls[api]}`
}

export default parseAPI
