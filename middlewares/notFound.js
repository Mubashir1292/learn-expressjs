const NotFound=(req,res,next)=>{
    const error=new Error("not Found...");
    error.status=404;
    next(error);
}
export default NotFound;