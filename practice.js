 function mostFrequent(arr) {
    let freq = {};
    let maxCount = 0;
    let result = null;

    // Step 1: count frequency
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;

        // Track highest frequency
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            result = num;
        }
    }

    console.log(result);
}
mostFrequent([1,2,2,3,3,3,4,4])