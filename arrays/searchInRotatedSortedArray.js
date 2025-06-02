class Solution {
    search(arr, key) {
        let start = 0;
        let end = arr.length - 1;

        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2);

            if (arr[mid] === key) {
                return mid;
            }

            // Left half is sorted
            if (arr[start] <= arr[mid]) {
                if (key >= arr[start] && key < arr[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
            // Right half is sorted
            else {
                if (key > arr[mid] && key <= arr[end]) {  // ✅ Corrected here
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }

        return -1; // Not found
    }
}
