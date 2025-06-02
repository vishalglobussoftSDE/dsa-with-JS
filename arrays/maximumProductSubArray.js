class Solution {

    maxProduct(arr) {
        let prefix = 1;
        let suffix = 1;
        let res = Number.NEGATIVE_INFINITY;

        const n = arr.length;
        for (let i = 0; i < n; i++) {
            prefix *= arr[i];
            suffix *= arr[n - i - 1];

            res = Math.max(res, prefix, suffix);

            if (arr[i] === 0) prefix = 1;
            if (arr[n - i - 1] === 0) suffix = 1;
        }
        return res;
    }

}
