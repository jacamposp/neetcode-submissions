class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let pairs = {}

        for (let i = 0; i < nums.length; i++) {
            let missingPair = target - nums[i]

            if (pairs.hasOwnProperty(missingPair)) {
                return [pairs[missingPair], i]
            }
            pairs[nums[i]] = i

        }
    }
}
