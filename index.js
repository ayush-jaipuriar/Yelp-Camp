var express = require('express');
var app = express();

var campgrounds = [
    {
        name: " Camp Exotica", image: "https://www.holidify.com/images/cmsuploads/compressed/tent-1208201_1920_20190212172038.jpg"
    },
    {
        name: " Camp Exotica", image: "https://www.holidify.com/images/cmsuploads/compressed/tent-1208201_1920_20190212172038.jpg"
    }
];

app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("landing")
});

app.get("/campgrounds", function (req, res) {
    res.render("campground", {campgrounds:campgrounds});
})

app.listen(3000, function () {
    console.log("Server has started");
});