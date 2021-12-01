// const xss = require('xss')
const { exec } = require('../db/mysql')
 
const getList = (author, keyword) => {
    let sql = `select * from blogs where 1 = 1`
    if (author) {
      sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += ` order by createtime desc;`
  return exec(sql)
}

const getDetail = (id) =>{
    return[
        {
          id: 1,
          name:'详情A',
          content:'详情内容1',
          author:'zzp'
        }
    ]
}

const newBlog = (blogData = {})=>{
       return{
         id :3,
       }
  }

  const updataBlog = (id , blogData ={} ) =>{
    console.log('updata blog' , id ,blogData);
     return true
  } 

  const delBlog = (id) => {
      console.log('del blog' , id );
     return true
  }

module.exports = {
    getList,
    getDetail,
    newBlog,
    updataBlog,
    delBlog
}