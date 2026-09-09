class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let anagrams = []

        for (let i = 0; i < strs.length; i++) {
            const sort = strs[i].split("").sort().join("")
            if (anagrams[sort]) {
                anagrams[sort].push(strs[i])
            } else {
                anagrams[sort] = [strs[i]]
            }
        }

        return Object.values(anagrams)
    }
}
