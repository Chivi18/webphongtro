export const getNumberFromString=(string)=>{
    let number=0
    if(string.search('dồng/tháng')!==-1){
        number =+string.match(/\d+/)[0]/Math.pow(10,6)
    }else if(string.search('triệu/tháng')!==-1 ){
        number=+string.match(/\d+/)[0]
    }else if(string.match('m')){
        number=+string.match(/\d+/)[0]
    }
    return number
}
export const getNumberFromStringV2=(string)=>{
    let number=0
    if(string.search('dồng/tháng')!==-1){
        number =+string.match(/\d+/)[0]/Math.pow(10,6)
    }else if(string.search('triệu/tháng')!==-1 ){
        number=+string.split(' ')[0]
    }else if(string.match('m')){
        number=+string.match(/\d+/)[0]
    }
    return +number
}