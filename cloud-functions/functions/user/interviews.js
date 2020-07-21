
const { db } = require('../utils/admin')

exports.interviews = (req, res) => {
    if(!req.user.username) return res.status(400).json({ error: "Unauthorized" }) //Auth is enabled. This is just to make sure of it

    let roleName = "interviewee"
    if(req.user.role == 1) roleName = "interviewer"

    db.collection("interviews").where(roleName, "==", req.user.username).get()
    .then((docs) => {
        let finaldocs = []
        docs.forEach((doc) => {
            finaldocs.push(doc.data())
        })

        return res.json(finaldocs)
    })
    .catch((err) => {
        console.error(err)
        return res.status(500).json({ error: err.code })
    })

}
