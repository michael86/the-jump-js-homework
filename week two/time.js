
const awakeAsleep = (awake, asleep, targTime) => {

    let t = new Date(targTime) //Get target time

    let a = new Date() //Generate new instance of date for awake time
    a.setHours(awake, 0, 0) //Set awake hour

    let s = new Date(); //Generate new instance of date for sleep time
    s.setHours(asleep, 0, 0) //Set sleep hour

    s < a && s.setDate(s.getDate() + 1); // Check if the awake time is less than sleep time due to overlapping into next day. If it is, then increase day for sleep by one 
    // console.log("target time", t)
    // console.log("awake time", a)
    // console.log("sleep time", s)

    return t.getTime() >= a.getTime() && t.getTime() < s.getTime() ? "They are awake"
        : t.getTime() < a.getTime() ? "The person is not yet awake"
        : t.getTime() > s.getTime() ? "The person has gone to bed"
        : "I broke Something.";

}

console.log(awakeAsleep(10, 18, (1658971468 * 1000))) //Thu Jul 28 2022 01:24:28 GMT+0000
console.log(awakeAsleep(10, 18, (1659007468 * 1000))) //Thu Jul 28 2022 11:24:28 GMT+0000
console.log(awakeAsleep(10, 18, (1659036268 * 1000))) //Thu Jul 28 2022 19:24:28 GMT+0000
console.log(awakeAsleep(22, 7, (1659072268 * 1000))) //Fri Jul 29 2022 03:24:28 GMT+0000