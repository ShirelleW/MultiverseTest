
// const checkGrade = (score) =>{

//     if(isNaN(score) === true){
//         return ("Please enter a valid number")
//     } else if(score > 100){
//         return ("Please enter a number less than 100")
//     } else if(score >=90 && score <= 100){
//         return ("A")
//     } else if(score >=80 && score < 90){
//         return ("B")
//     } else if(score >=70 && score < 80){
//         return ("C")
//     } else if(score < 70){
//         return ("F")
//     }
// }

// console.log(checkGrade("theirlwwnjl"))


//-----------------------------------------------------------------

// const description = "Engine Light On"
// const hours = 7
// const status1 = "moderate" 


// const work = (status1, hours, description) => {

//     let charge;

//     if (status1 === "minor" && hours <= 6) {
//         charge = (hours * 50)
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "minor" && hours > 6 && hours <= 23) {
//         charge = (hours * 50) + 20;
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "minor" && hours >= 24 && hours <= 47) {
//         charge = (hours * 50) + 40;
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "minor" && hours >= 48 && hours <= 71) {
//         charge = (hours * 50) + 60;
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "moderate" && hours <= 6) {
//         charge = (hours * 50) 
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "moderate" && hours > 6 && hours <= 23) {
//         charge = (hours * 65) + 20;
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "moderate" && hours >= 24 && hours <= 47) {
//         charge = (hours * 65) + 40;
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "moderate" && hours >= 48 && hours <= 71) {
//         charge = (hours * 65) + 60;
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "critical" && hours <= 6) {
//         charge = (hours * 90)
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "critical" && hours > 6 && hours <= 23) {
//         charge = (hours * 90) + 20;
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "critical" && hours >= 24 && hours <= 47) {
//         charge = (hours * 90) + 40;
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else if (status1 === "critical" && hours >= 48 && hours <= 71) {
//         charge = (hours * 90) + 60;
//         console.log(
//             `Repair Invoice----------- \nIssue Identified: ${description}\nStatus: ${status1}\nHours Needed: ${hours}\nQuoted Cost: $${charge}`
//         )
//     } else {
//         console.log("This job is too big our small shop")
//     }
// }


// work("critical", 24, "Engine Light On")

//-----------------------------------------------------------------
//   const findCents = (pennies) =>{
//       let quarters = Math.floor(pennies /25)
//       console.log(`Youll have ${quarters} quaters`)
//       quartersLeftovers = pennies % 25
//       let dimes = Math.floor((quarters % pennies) /10)
//       console.log(`Youll have ${dimes} dimes`)

//   }

//   findCents(67)

//--------------------------------------------------------------------

