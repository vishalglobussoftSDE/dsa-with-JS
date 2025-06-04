// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxWater(arr) {
        // code here
       let maxFromLeft = 0;
        let maxFromRight = 0;
        let minDiffSoFar = Infinity;
        let ans = 0;
        let n = arr.length;
        let left = 0;
        let right = n - 1;
        while(left <= right){
            maxFromLeft = Math.max(maxFromLeft, arr[left]);
            maxFromRight = Math.max(maxFromRight, arr[right]);
            minDiffSoFar = Math.min(maxFromLeft , maxFromRight);
            if(minDiffSoFar * (right - left) > ans){
                ans = minDiffSoFar *(right-left);
            }
            if(maxFromLeft < maxFromRight){
                left++;
            } else {
                right--;
            }
        }
        return ans;
    }
}