var mostLongerMonths = "Январь, март, май, июль, август, октябрь, декабрь";
var shorterMonths = "февраль, апрель, июнь, сентябрь, ноябрь";
let months = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 30,
    september: 30,
    october: 31,
    november: 30,
    december: 31
};
for(var item in months){
    if(months[item] === 31){
        console.log("months with 31 day -" + item)
    }
}
