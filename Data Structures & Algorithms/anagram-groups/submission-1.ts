class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const anagrams = new Map<string, string[]>()

        for (const str of strs) {
            const key = str.split('').sort().join('');
            const group = anagrams.get(key)
            if (group) group.push(str)
            else anagrams.set(key, [str])
        }

        return [...anagrams.values()]
    }
}
