const path = require("path");
const {log} = require("util");
const {getHeapStatistics} = require("v8");
log(path.basename(__filename));
log(" ^ The name of the current files");
log(getHeapStatistics());