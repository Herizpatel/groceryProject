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
