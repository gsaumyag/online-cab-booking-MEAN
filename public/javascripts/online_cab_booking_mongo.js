use online_cab_booking
db.createCollection("driver_db")
db.driver_db.insertMany([{
    "_id" : ObjectId("6040258a142000bdd1671a0e"),
    "driverName" : "Santosh",
    "driverContact" : "8675439870",
    "vicinity" : "Whitefield",
    "routes" : [ 
        {
            "startPoint" : "Whitefield",
            "endPoint" : "HSR",
            "distance" : "16km",
            "fare" : "Rs.160"
        }, 
        {
            "startPoint" : "Whitefield",
            "endPoint" : "BTM",
            "distance" : "20km",
            "fare" : "Rs.200"
        }, 
        {
            "startPoint" : "Whitefield",
            "endPoint" : "Electronic City",
            "distance" : "30km",
            "fare" : "Rs.300"
        }
    ]
},
{
    "_id" : ObjectId("604025a2142000bdd1671a1c"),
    "driverName" : "Vivek",
    "driverContact" : "7564814258",
    "vicinity" : "Electronic City",
    "routes" : [ 
        {
            "startPoint" : "Electronic City",
            "endPoint" : "HSR",
            "distance" : "14km",
            "fare" : "Rs.140"
        }, 
        {
            "startPoint" : "Electronic City",
            "endPoint" : "BTM",
            "distance" : "14km",
            "fare" : "Rs.140"
        }, 
        {
            "startPoint" : "Electronic City",
            "endPoint" : "Whitefield",
            "distance" : "30km",
            "fare" : "Rs.300"
        }
    ]
},
{
    "_id" : ObjectId("604025b5142000bdd1671a22"),
    "driverName" : "Rupam",
    "driverContact" : "9514216785",
    "vicinity" : "HSR",
    "routes" : [ 
        {
            "startPoint" : "HSR",
            "endPoint" : "BTM",
            "distance" : "4km",
            "fare" : "Rs.40"
        }, 
        {
            "startPoint" : "HSR",
            "endPoint" : "Electronic City",
            "distance" : "13km",
            "fare" : "Rs.130"
        }, 
        {
            "startPoint" : "HSR",
            "endPoint" : "Whitefield",
            "distance" : "17km",
            "fare" : "Rs.170"
        }
    ]
}])
show collections