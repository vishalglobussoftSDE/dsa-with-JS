class Solution {
    // Function to find the trapped water between the blocks.
    maxWater(arr) {
        // code here
        let n = arr.length;
        let prefix = new Array(n);
        let suffix = new Array(n);
        let res = 0;
        prefix[0] = arr[0];
        for(let i = 1; i < n; i++){
            prefix[i] = Math.max(prefix[i-1], arr[i]);
        }
        suffix[n-1] = arr[n-1];
        for(let i = n-2; i >= 0; i--){
            suffix[i] = Math.max(suffix[i+1], arr[i]);
        }

        for(let i = 0; i < n; i++){
            res += Math.min(prefix[i], suffix[i]) - arr[i];
        }
        return res;
        
    }
}
/*
Brute-force approach:
For each element, find the maximum height to its left and right.
The water trapped at that element is min(left_max, right_max) - arr[i].
Sum this for all elements.
*/
// let n = arr.length;
// let res = 0;
// for (let i = 1; i < n - 1; i++) {
//     let left_max = arr[i];
//     for (let j = 0; j < i; j++) {
//         left_max = Math.max(left_max, arr[j]);
//     }
//     let right_max = arr[i];
//     for (let j = i + 1; j < n; j++) {
//         right_max = Math.max(right_max, arr[j]);
//     }
//     res += Math.min(left_max, right_max) - arr[i];
// }
// return res;