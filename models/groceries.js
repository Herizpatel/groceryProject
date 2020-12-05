db = require('./base').db

// Add grocery
exports.add_grocery = async (groceryName, groceryCost, totalCost) => {
    let stmnt = db.prepare("INSERT INTO grocery(groceryName, groceryCost, totalCost) VALUES (?, ?, ?)")
    let msg
    try {
        msg = await stmnt.run(groceryName, groceryCost, totalCost)
    } catch (e) {
        console.error(e.message)
        return null
    }
    return msg
}
