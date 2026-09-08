class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();
        for (let i = 0, n = nums.length; i < n; i++) {
            const value = nums[i];
            const j = seen.get(target - value);
            if (j !== undefined) return [j, i];
            seen.set(value, i);
        }
        return [];
    }
}
