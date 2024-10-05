const loggedin = true

if (loggedin) {
    console.log('Welcome, user')
}

let products = ["fish", "strawberries", "garbanzo"]

for (let i = 0; i < products.length; i++){
    console.log(products[i])
}

let cartprices = [50.99, 30.99, 24.99]

const calc = (cartprices) => {
    total = 0

    for (let i=0; i< cartprices.length; i++){
        total += cartprices[i]
    }

    return total
}

const price = calc(cartprices)
console.log(price)

/*-------------------------------------------------------------------- */

let depositamount = 145.00

const deposit = (depamt) => {
    total = 0
    total += depamt
    return total
}

let newtotal = deposit(depositamount)
console.log(newtotal)

let withdrawalamount = 100

const withdrawal = (withamt) =>{
    if (withamt < total){
        total -= withamt
        return total
    } else {
        console.log("Insufficient Funds")
    }
}

let newtotal2 = withdrawal(withdrawalamount)
console.log(newtotal2)

let addtransactions = 0

const checkbalance = (addt) => {
    total += addt
    return total
}

let check = checkbalance(addtransactions)
console.log(check)