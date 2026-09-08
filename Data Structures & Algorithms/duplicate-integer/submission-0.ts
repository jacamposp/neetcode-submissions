class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for (let i = 0; i < nums.length; i++) {
            for (let a = i + 1; a < nums.length; a++) {
                if (nums[i] == nums[a]) return true 
            }
        }
        return false
    }
}
