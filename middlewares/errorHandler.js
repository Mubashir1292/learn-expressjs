const errorHandler=(err,req,res,next)=>{
    let status=err.status || 500;
    res.status(status).json({message:err.message});
}
export default errorHandler;