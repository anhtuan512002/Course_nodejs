module.exports = {
    // chuyển đổi định dạng trong mondodb sang định dạng object
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    //hàm kiểm tra đối tượng truyền vào có phải là object không và trả về
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};