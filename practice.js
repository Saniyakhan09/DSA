//  function mostFrequent(arr) {
//     let freq = {};
//     let maxCount = 0;
//     let result = null;

//     // Step 1: count frequency
//     for (let num of arr) {
//         freq[num] = (freq[num] || 0) + 1;

//         // Track highest frequency
//         if (freq[num] > maxCount) {
//             maxCount = freq[num];
//             result = num;
//         }
//     }

//     console.log(result);
// }
// mostFrequent([1,2,2,3,3,3,4,4])














function maxnumber(arr){
    let set = new Set();
    let max = 0;
    for(let num of arr){
        set[num] = (set[num] || 0)
        if(set[arr] > max){
               max = set[num]
               result = num;
        }
    }
}
maxnumber([1,2,3,3,4,4,4])