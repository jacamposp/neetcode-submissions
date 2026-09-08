class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let notDuplicatedArr = new Set()

        for (let i = 0; i < nums.length; i++) {
            if (notDuplicatedArr.has(nums[i])) {
                return true
            }
            else { notDuplicatedArr.add(nums[i]) }
        }
        return false
    }
}
