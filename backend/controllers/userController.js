let users = [
    { id: 1, name: "niraj" },
    { id: 2, name: "alice" },
    { id: 3, name: "bob" }
];

function getAllUsers (req, res) {
    res.send(users)
};
 function getSingleUser(req,res){

 }
module.exports = {
    getAllUsers,
    getSingleUser
}
