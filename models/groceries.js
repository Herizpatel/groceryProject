db = require('./base').db

// Add grocery
exports.add_grocery = async (groceryName, groceryCost) => {
    let stmnt = db.prepare("INSERT INTO grocery(groceryName, groceryCost) VALUES (?, ?)")
    let msg
    try {
        msg = await stmnt.run(groceryName, groceryCost)
    } catch (e) {
        console.error(e.message)
        return null
    }
    return msg
}


// Get all groceries
exports.get_all_groceries = async () => {
    let stmnt = db.prepare('SELECT * FROM grocery')
    let result
    try {
        result = await stmnt.all()
    } catch (e) {
        console.error(e.message)
        return null
    }
    return result
}

// Delete grocery
// exports.del_grocery = async (groceryName) => {
//     let stmnt = db.prepare("DELETE FROM grocery WHERE groceryName = (?)")
//     let msg
//     try {
//         msg = await stmnt.run(groceryName)
//     } catch (e) {
//         console.error(e.message)
//         return null
//     }
//     return msg
// }
