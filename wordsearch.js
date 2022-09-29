const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let letterArrs = [];
    for (let i = 0; i < letters[0].length; i++) {
        let letterName = '';
        for (let u = 0; u < letters.length; u++) {
            letterName += letters[u][i];
        }
        letterArrs.push(letterName);
    }
    for (const r of letterArrs) {
        if (r.includes(word)) return true
    }
    return false;
}


module.exports = wordSearch

// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''));
//     //console.log(horizontalJoin);
//     for (l of horizontalJoin) {
//         if (l.includes(word)) { return true } 
//     }
    
//     //let verticleStr = "";

//     for(let i = 0; i < letters[0].length; i++) {
//         let verticleStr = "";
//         for(let j = 0; j < letters.length; j++) {
//             verticleStr += letters[j][i];
//         }
//         //console.log(verticleStr);
//         if(verticleStr.includes(word)){
//             //console.log(VerticleStr);
//             return true;
//         }
//     }


//     //console.log(verticleStr);


//     return false;



// }

// module.exports = wordSearch;