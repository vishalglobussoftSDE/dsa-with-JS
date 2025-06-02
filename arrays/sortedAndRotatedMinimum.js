class Solution {
    findMin(arr) {
        let n = arr.length;
        let start = 0;
        let end = n - 1;
        let res = Infinity;

        while (start <= end) {
            // If subarray is already sorted
            if (arr[start] <= arr[end]) {
                res = Math.min(res, arr[start]);
                break;
            }

            let mid = Math.floor(start + (end - start) / 2);

            // Update result
            res = Math.min(res, arr[mid]);

            // Decide which side to go
            if (arr[mid] >= arr[start]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return res;
    }
}
