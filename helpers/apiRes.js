
function apiRes(res,msg,data,statusCode){
    res.status(statusCode).json({
        success:true,
        message:msg,
        data:data,
    })
}


module.exports = apiRes;