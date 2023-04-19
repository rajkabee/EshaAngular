(()=>{
    enum cardinalDirections{
        North="North",
        East="East", 
        South="south",
        West="West"
    };
    enum StatusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
      }
    let myDirection = cardinalDirections.East;
   // myDirection="South";
    console.log(myDirection);
})();