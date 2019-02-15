const fetchData = require("express")();
const path = require("path")
fetchData.set('views', path.resolve('views'));
fetchData.set('view engine', 'ejs');


const jsonData = [
    {
        "id": "5c66aa340d9567989207f0c2",
        "index": 0,
        "guid": "a73887af-028b-452d-b90c-d54a822a19f1"
    },
    {
        "id": "5c66aa34275b558e689e9b86",
        "index": 1,
        "guid": "ac531a82-1871-424e-a51d-5a3b7bb60fae"
    },
    {
        "id": "5c66aa3475fae9a513f4e57d",
        "index": 2,
        "guid": "d04a599f-d157-4aeb-a94c-45c8b1637329"
    },
    {
        "id": "5c66aa3476d78b3e443a153a",
        "index": 3,
        "guid": "67c6f551-5688-480f-9133-b6bb241ab08b"
    },
    {
        "id": "5c66aa349158c892b55ef511",
        "index": 4,
        "guid": "157d5d5b-d0a1-4c2b-b34a-0944f50c605c"
    },
    {
        "id": "5c66aa34488635b9dba5fcf2",
        "index": 5,
        "guid": "06e4d9ae-b485-4655-9271-8f5115178ea5"
    },
    {
        "id": "5c66aa34dc886973dc14ac95",
        "index": 6,
        "guid": "f170dd9f-a621-465a-ac67-d382e833dd89"
    }
]

fetchData.get('/getDatas', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../views/index.html'))
})

fetchData.get("/getData" , function(req, res)
{
    res.send(jsonData)
})

module.exports = fetchData;