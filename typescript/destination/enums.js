"use strict";
(() => {
    let cardinalDirections;
    (function (cardinalDirections) {
        cardinalDirections["North"] = "North";
        cardinalDirections["East"] = "East";
        cardinalDirections["South"] = "south";
        cardinalDirections["West"] = "West";
    })(cardinalDirections || (cardinalDirections = {}));
    ;
    let StatusCodes;
    (function (StatusCodes) {
        StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
        StatusCodes[StatusCodes["Success"] = 200] = "Success";
        StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
        StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    })(StatusCodes || (StatusCodes = {}));
    let myDirection = cardinalDirections.East;
    // myDirection="South";
    console.log(myDirection);
})();
