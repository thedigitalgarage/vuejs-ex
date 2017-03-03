var mongoServiceName = process.env.DATABASE_SERVICE_NAME,
    mongoDatabase = process.env.MONGODB_DATABASE,
    mongoPassword = process.env.MONGODB_PASSWORD,
    mongoUser = process.env.MONGODB_USER;

if (process.env.DATABASE_SERVICE_NAME) {
  var mongodburl = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoServiceName +':27017/' + mongoDatabase;
} else {
  var mongodburl = 'mongodb://' + mongoUser + ':' + mongoPassword + '@127.0.0.1:27017/' + mongoDatabase;
}

console.log(mongodburl)



module.exports = {
        url : mongodburl
    };
