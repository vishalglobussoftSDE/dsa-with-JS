function findTriplets(arr) {
    let n = arr.length;
    const res = [];

    arr.sort((a, b) => a - b); // ✅ Numeric sort

    for (let i = 0; i < n - 2; i++) {
        // ✅ Skip duplicate values for i
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let start = i + 1;
        let end = n - 1;

        while (start < end) {
            const sum = arr[i] + arr[start] + arr[end];

            if (sum === 0) {
                res.push([arr[i], arr[start], arr[end]]);

                // ✅ Skip duplicates for start and end
                while (start < end && arr[start] === arr[start + 1]) start++;
                while (start < end && arr[end] === arr[end - 1]) end--;

                start++;
                end--;
            } else if (sum > 0) {
                end--;
            } else {
                start++;
            }
        }
    }
    return res;
}
