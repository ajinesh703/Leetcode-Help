import type { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'array',
    name: 'Array',
    icon: '📦',
    description: 'Problems involving array manipulation, traversal, and optimization techniques.',
    color: '#FF6B6B',
    problems: [
      {
        id: 'arr-1',
        title: 'Two Sum',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/two-sum/',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        language: 'python',
        solution: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []`
      },
      {
        id: 'arr-2',
        title: 'Product of Array Except Self',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/',
        description: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements except nums[i].',
        language: 'python',
        solution: `class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        answer = [1] * n
        prefix = 1
        for i in range(n):
            answer[i] = prefix
            prefix *= nums[i]
        postfix = 1
        for i in range(n - 1, -1, -1):
            answer[i] *= postfix
            postfix *= nums[i]
        return answer`
      },
      {
        id: 'arr-3',
        title: 'Maximum Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/',
        description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
        language: 'python',
        solution: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = nums[0]
        current_sum = nums[0]
        for i in range(1, len(nums)):
            current_sum = max(nums[i], current_sum + nums[i])
            max_sum = max(max_sum, current_sum)
        return max_sum`
      },
      {
        id: 'arr-4',
        title: 'Contains Duplicate',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate/',
        description: 'Given an integer array nums, return true if any value appears at least twice in the array.',
        language: 'python',
        solution: `class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))`
      },
      {
        id: 'arr-5',
        title: 'Rotate Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/rotate-array/',
        description: 'Given an integer array nums, rotate the array to the right by k steps.',
        language: 'python',
        solution: `class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        k = k % len(nums)
        nums.reverse()
        nums[:k] = reversed(nums[:k])
        nums[k:] = reversed(nums[k:])`
      },
      {
        id: 'arr-6',
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
        description: 'Given an array prices where prices[i] is the price of a stock on day i, return the maximum profit you can achieve from a single buy and sell.',
        language: 'python',
        solution: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            if price < min_price:
                min_price = price
            elif price - min_price > max_profit:
                max_profit = price - min_price
        return max_profit`
      },
      {
        id: 'arr-7',
        title: 'Move Zeroes',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/move-zeroes/',
        description: 'Given an integer array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements.',
        language: 'python',
        solution: `class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        insert_pos = 0
        for num in nums:
            if num != 0:
                nums[insert_pos] = num
                insert_pos += 1
        for i in range(insert_pos, len(nums)):
            nums[i] = 0`
      },
      {
        id: 'arr-8',
        title: '3Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/3sum/',
        description: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.',
        language: 'python',
        solution: `class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = []
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            left, right = i + 1, len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total == 0:
                    result.append([nums[i], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
                elif total < 0:
                    left += 1
                else:
                    right -= 1
        return result`
      },
      {
        id: 'arr-9',
        title: 'Find Minimum in Rotated Sorted Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
        description: 'Given the sorted rotated array nums of unique elements, return the minimum element of this array.',
        language: 'python',
        solution: `class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid
        return nums[left]`
      },
      {
        id: 'arr-10',
        title: 'Search in Rotated Sorted Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
        description: 'Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not.',
        language: 'python',
        solution: `class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            if nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1
        return -1`
      },
      {
        id: 'arr-11',
        title: 'Container With Most Water',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/',
        description: 'Given n non-negative integers representing heights of vertical lines, find two lines that together with the x-axis form a container that holds the most water.',
        language: 'python',
        solution: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        max_water = 0
        while left < right:
            water = min(height[left], height[right]) * (right - left)
            max_water = max(max_water, water)
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return max_water`
      },
      {
        id: 'arr-12',
        title: 'Merge Intervals',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/merge-intervals/',
        description: 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.',
        language: 'python',
        solution: `class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])
        merged = [intervals[0]]
        for start, end in intervals[1:]:
            if start <= merged[-1][1]:
                merged[-1][1] = max(merged[-1][1], end)
            else:
                merged.append([start, end])
        return merged`
      },
      {
        id: 'arr-13',
        title: 'Trapping Rain Water',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
        description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
        language: 'python',
        solution: `class Solution:
    def trap(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        left_max, right_max = height[left], height[right]
        water = 0
        while left < right:
            if left_max < right_max:
                left += 1
                left_max = max(left_max, height[left])
                water += left_max - height[left]
            else:
                right -= 1
                right_max = max(right_max, height[right])
                water += right_max - height[right]
        return water`
      },
      {
        id: 'arr-14',
        title: 'Subarray Sum Equals K',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k/',
        description: 'Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.',
        language: 'python',
        solution: `class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        from collections import defaultdict
        count = 0
        prefix_sum = 0
        prefix_counts = defaultdict(int)
        prefix_counts[0] = 1
        for num in nums:
            prefix_sum += num
            count += prefix_counts[prefix_sum - k]
            prefix_counts[prefix_sum] += 1
        return count`
      },
      {
        id: 'arr-15',
        title: 'Next Permutation',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/next-permutation/',
        description: 'Given an array of integers nums, find the next permutation of nums. The replacement must be in place and use only constant extra memory.',
        language: 'python',
        solution: `class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        n = len(nums)
        i = n - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        if i >= 0:
            j = n - 1
            while nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        left, right = i + 1, n - 1
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1`
      },
      {
  id: 'arr-16',
  title: 'Maximum Product Subarray',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/',
  description: 'Given an integer array nums, find a subarray that has the largest product, and return the product.',
  language: 'python',
  solution: `class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        max_prod = min_prod = result = nums[0]
        for num in nums[1:]:
            candidates = (num, max_prod * num, min_prod * num)
            max_prod = max(candidates)
            min_prod = min(candidates)
            result = max(result, max_prod)
        return result`
},
{
  id: 'arr-17',
  title: 'Find All Duplicates in an Array',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-all-duplicates-in-an-array/',
  description: 'Given an integer array nums of length n where all integers are in range [1, n] and each integer appears once or twice, return an array of all integers that appear twice.',
  language: 'python',
  solution: `class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        result = []
        for num in nums:
            idx = abs(num) - 1
            if nums[idx] < 0:
                result.append(abs(num))
            else:
                nums[idx] *= -1
        return result`
},
{
  id: 'arr-18',
  title: 'Longest Consecutive Sequence',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence/',
  description: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.',
  language: 'python',
  solution: `class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        longest = 0
        for num in num_set:
            if num - 1 not in num_set:
                length = 1
                while num + length in num_set:
                    length += 1
                longest = max(longest, length)
        return longest`
},
{
  id: 'arr-19',
  title: 'Jump Game',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/jump-game/',
  description: 'Given an integer array nums where nums[i] is the maximum jump length at position i, return true if you can reach the last index starting from the first index.',
  language: 'python',
  solution: `class Solution:
    def canJump(self, nums: List[int]) -> bool:
        max_reach = 0
        for i, jump in enumerate(nums):
            if i > max_reach:
                return False
            max_reach = max(max_reach, i + jump)
        return True`
},
{
  id: 'arr-20',
  title: 'Sort Colors',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/sort-colors/',
  description: 'Given an array nums with n objects colored red, white, or blue (represented as 0, 1, 2), sort them in-place so that objects of the same color are adjacent, in the order red, white, and blue.',
  language: 'python',
  solution: `class Solution:
    def sortColors(self, nums: List[int]) -> None:
        low, mid, high = 0, 0, len(nums) - 1
        while mid <= high:
            if nums[mid] == 0:
                nums[low], nums[mid] = nums[mid], nums[low]
                low += 1
                mid += 1
            elif nums[mid] == 1:
                mid += 1
            else:
                nums[mid], nums[high] = nums[high], nums[mid]
                high -= 1`
},
{
  id: 'arr-21',
  title: 'Majority Element',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/majority-element/',
  description: 'Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.',
  language: 'python',
  solution: `class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate, count = None, 0
        for num in nums:
            if count == 0:
                candidate = num
            count += (1 if num == candidate else -1)
        return candidate`
},
{
  id: 'arr-22',
  title: 'Gas Station',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/gas-station/',
  description: 'There are n gas stations along a circular route. Given two integer arrays gas and cost, return the starting gas station index if you can travel around the circuit once, or -1 if it is impossible.',
  language: 'python',
  solution: `class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1
        tank, start = 0, 0
        for i in range(len(gas)):
            tank += gas[i] - cost[i]
            if tank < 0:
                tank = 0
                start = i + 1
        return start`
}
    ]
  },
  {
    id: 'string',
    name: 'String',
    icon: '🔤',
    description: 'Problems involving string manipulation, pattern matching, and character operations.',
    color: '#4ECDC4',
    problems: [
      {
  id: 'str-1',
  title: 'Valid Anagram',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/valid-anagram/',
  description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
  language: 'python',
  solution: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        from collections import Counter
        return Counter(s) == Counter(t)`,
  companies: ['Facebook', 'Amazon', 'Microsoft']
},
      {
        id: 'str-2',
        title: 'Longest Palindromic Substring',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring/',
        description: 'Given a string s, return the longest palindromic substring in s.',
        language: 'python',
        solution: `class Solution:
    def longestPalindrome(self, s: str) -> str:
        result = ""
        for i in range(len(s)):
            # Odd length
            left, right = i, i
            while left >= 0 and right < len(s) and s[left] == s[right]:
                if right - left + 1 > len(result):
                    result = s[left:right+1]
                left -= 1
                right += 1
            # Even length
            left, right = i, i + 1
            while left >= 0 and right < len(s) and s[left] == s[right]:
                if right - left + 1 > len(result):
                    result = s[left:right+1]
                left -= 1
                right += 1
        return result`,
        companies: ['Amazon', 'Google', 'Adobe']
      },
      {
        id: 'str-3',
        title: 'Group Anagrams',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/',
        description: 'Given an array of strings strs, group the anagrams together.',
        language: 'python',
        solution: `class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        from collections import defaultdict
        anagram_map = defaultdict(list)
        for s in strs:
            key = ''.join(sorted(s))
            anagram_map[key].append(s)
        return list(anagram_map.values())`,
        companies: ['Amazon', 'Google', 'Microsoft', 'Facebook']
      },
      {
        id: 'str-4',
        title: 'Longest Common Prefix',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/longest-common-prefix/',
        description: 'Write a function to find the longest common prefix string amongst an array of strings.',
        language: 'python',
        solution: `class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        prefix = strs[0]
        for s in strs[1:]:
            while not s.startswith(prefix):
                prefix = prefix[:-1]
                if not prefix:
                    return ""
        return prefix`,
        companies: ['Google', 'Amazon', 'Apple']
      },
      {
  id: 'str-5',
  title: 'Valid Anagram',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/valid-anagram/',
  description: 'Check if two strings are anagrams.',
  language: 'python',
  solution: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        from collections import Counter
        return Counter(s) == Counter(t)`,
        companies: ['Facebook', 'Amazon', 'Microsoft']
},

{
  id: 'str-6',
  title: 'First Unique Character in a String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/first-unique-character-in-a-string/',
  description: 'Find the first non-repeating character index.',
  language: 'python',
  solution: `class Solution:
    def firstUniqChar(self, s: str) -> int:
        from collections import Counter
        count = Counter(s)
        for i, ch in enumerate(s):
            if count[ch] == 1:
                return i
        return -1`,
        companies: ['Amazon', 'Google', 'Bloomberg']
},

{
  id: 'str-7',
  title: 'Valid Palindrome',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/',
  description: 'Check if string is palindrome ignoring non-alphanumeric.',
  language: 'python',
  solution: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered = [c.lower() for c in s if c.isalnum()]
        return filtered == filtered[::-1]`,
        companies: ['Facebook', 'Apple', 'Microsoft']
},

{
  id: 'str-8',
  title: 'Longest Substring Without Repeating Characters',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  description: 'Sliding window to find longest substring with unique characters.',
  language: 'python',
  solution: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = set()
        left = 0
        res = 0
        
        for right in range(len(s)):
            while s[right] in seen:
                seen.remove(s[left])
                left += 1
            seen.add(s[right])
            res = max(res, right - left + 1)
        
        return res`,
        companies: ['Amazon', 'Google', 'Facebook', 'Adobe']
},

{
  id: 'str-9',
  title: 'Group Anagrams',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/',
  description: 'Group strings that are anagrams.',
  language: 'python',
  solution: `class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        from collections import defaultdict
        mp = defaultdict(list)
        
        for s in strs:
            key = tuple(sorted(s))
            mp[key].append(s)
        
        return list(mp.values())`,
        companies: ['Amazon', 'Google', 'Microsoft', 'Facebook']
},

{
  id: 'str-10',
  title: 'Longest Palindromic Substring',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring/',
  description: 'Expand around center to find longest palindrome.',
  language: 'python',
  solution: `class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        
        def expand(l, r):
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
            return s[l+1:r]
        
        for i in range(len(s)):
            res = max(res, expand(i, i), expand(i, i+1), key=len)
        
        return res`,
        companies: ['Amazon', 'Google', 'Adobe']
},

{
  id: 'str-11',
  title: 'Minimum Window Substring',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/',
  description: 'Find minimum substring containing all characters of target.',
  language: 'python',
  solution: `class Solution:
    def minWindow(self, s: str, t: str) -> str:
        from collections import Counter
        need = Counter(t)
        missing = len(t)
        left = start = end = 0
        
        for right, ch in enumerate(s, 1):
            if need[ch] > 0:
                missing -= 1
            need[ch] -= 1
            
            if missing == 0:
                while left < right and need[s[left]] < 0:
                    need[s[left]] += 1
                    left += 1
                if end == 0 or right - left < end - start:
                    start, end = left, right
                need[s[left]] += 1
                missing += 1
                left += 1
        
        return s[start:end]`,
        companies: ['Facebook', 'Google', 'Amazon', 'Microsoft', 'Uber']
},

{
  id: 'str-12',
  title: 'String to Integer (atoi)',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/string-to-integer-atoi/',
  description: 'Convert string to integer following rules.',
  language: 'python',
  solution: `class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()
        if not s:
            return 0
        
        sign = 1
        i = 0
        
        if s[0] in ['-', '+']:
            sign = -1 if s[0] == '-' else 1
            i += 1
        
        num = 0
        while i < len(s) and s[i].isdigit():
            num = num * 10 + int(s[i])
            i += 1
        
        num *= sign
        INT_MAX, INT_MIN = 2**31 - 1, -2**31
        
        return max(min(num, INT_MAX), INT_MIN)`,
        companies: ['Amazon', 'Microsoft', 'Apple', 'Bloomberg', 'Adobe']
},

{
  id: 'str-13',
  title: 'Multiply Strings',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/multiply-strings/',
  description: 'Multiply two numbers represented as strings.',
  language: 'python',
  solution: `class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        if num1 == "0" or num2 == "0":
            return "0"
        
        res = [0] * (len(num1) + len(num2))
        
        for i in reversed(range(len(num1))):
            for j in reversed(range(len(num2))):
                mul = int(num1[i]) * int(num2[j])
                sum_ = mul + res[i + j + 1]
                
                res[i + j + 1] = sum_ % 10
                res[i + j] += sum_ // 10
        
        result = ''.join(map(str, res)).lstrip('0')
        return result`,
        companies: ['Facebook', 'Google', 'Microsoft', 'Twitter', 'Airbnb']
},

{
  id: 'str-14',
  title: 'Zigzag Conversion',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/zigzag-conversion/',
  description: 'Convert string into zigzag pattern.',
  language: 'python',
  solution: `class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        
        rows = [""] * numRows
        curr, step = 0, 1
        
        for char in s:
            rows[curr] += char
            if curr == 0:
                step = 1
            elif curr == numRows - 1:
                step = -1
            curr += step
        
        return "".join(rows)`,
        companies: ['Google', 'Amazon', 'Adobe', 'Bloomberg', 'Uber']
},
{
  id: 'str-15',
  title: 'Encode and Decode Strings',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/encode-and-decode-strings/',
  description: 'Design an algorithm to encode a list of strings to a single string and decode it back.',
  language: 'python',
  solution: `class Solution:
    def encode(self, strs: List[str]) -> str:
        return ''.join(f'{len(s)}#{s}' for s in strs)

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        while i < len(s):
            j = s.index('#', i)
            length = int(s[i:j])
            res.append(s[j+1:j+1+length])
            i = j + 1 + length
        return res`,
        companies: ['Google', 'Facebook', 'Airbnb', 'LinkedIn', 'Palantir']
},
{
  id: 'str-16',
  title: 'Reverse Words in a String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/reverse-words-in-a-string/',
  description: 'Given a string, reverse the order of words.',
  language: 'python',
  solution: `class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(s.split()[::-1])`,
        companies: ['Amazon', 'Google', 'Microsoft', 'Apple', 'Bloomberg']
},
{
  id: 'str-17',
  title: 'Count and Say',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/count-and-say/',
  description: 'Generate the nth term of the count-and-say sequence.',
  language: 'python',
  solution: `class Solution:
    def countAndSay(self, n: int) -> str:
        result = "1"
        for _ in range(n - 1):
            curr = ""
            i = 0
            while i < len(result):
                count = 1
                while i + count < len(result) and result[i] == result[i + count]:
                    count += 1
                curr += str(count) + result[i]
                i += count
            result = curr
        return result`,
        companies: ['Amazon', 'Microsoft', 'Bloomberg', 'Google', 'Uber']
},
{
  id: 'str-18',
  title: 'Longest Repeating Character Replacement',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
  description: 'Find the longest substring with same characters after at most k replacements.',
  language: 'python',
  solution: `class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        left = 0
        max_freq = 0
        res = 0

        for right in range(len(s)):
            count[s[right]] = count.get(s[right], 0) + 1
            max_freq = max(max_freq, count[s[right]])

            while (right - left + 1) - max_freq > k:
                count[s[left]] -= 1
                left += 1

            res = max(res, right - left + 1)

        return res`,
        companies: ['Google', 'Amazon', 'Facebook', 'Microsoft', 'Snapchat']
},
{
  id: 'str-19',
  title: 'Find All Anagrams in a String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
  description: 'Find all starting indices of anagrams of pattern p in string s.',
  language: 'python',
  solution: `class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        from collections import Counter
        p_count = Counter(p)
        s_count = Counter(s[:len(p)])
        res = []

        if s_count == p_count:
            res.append(0)

        for i in range(len(p), len(s)):
            s_count[s[i]] += 1
            s_count[s[i - len(p)]] -= 1
            if s_count[s[i - len(p)]] == 0:
                del s_count[s[i - len(p)]]
            if s_count == p_count:
                res.append(i - len(p) + 1)

        return res`,
        companies: ['Facebook', 'Google', 'Amazon', 'Samsung', 'Adobe']
},
{
  id: 'str-20',
  title: 'Palindrome Partitioning',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/palindrome-partitioning/',
  description: 'Partition a string such that every substring of the partition is a palindrome.',
  language: 'python',
  solution: `class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []

        def isPalin(sub):
            return sub == sub[::-1]

        def backtrack(start, path):
            if start == len(s):
                res.append(path[:])
                return
            for end in range(start + 1, len(s) + 1):
                if isPalin(s[start:end]):
                    path.append(s[start:end])
                    backtrack(end, path)
                    path.pop()

        backtrack(0, [])
        return res`,
        companies: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Uber']
},
{
  id: 'str-21',
  title: 'Word Break',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/word-break/',
  description: 'Determine if a string can be segmented into words from a dictionary.',
  language: 'python',
  solution: `class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        word_set = set(wordDict)
        dp = [False] * (len(s) + 1)
        dp[0] = True

        for i in range(1, len(s) + 1):
            for j in range(i):
                if dp[j] and s[j:i] in word_set:
                    dp[i] = True
                    break

        return dp[len(s)]`,
        companies: ['Google', 'Amazon', 'Facebook', 'Apple', 'Bloomberg']
},
{
  id: 'str-22',
  title: 'Regular Expression Matching',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/regular-expression-matching/',
  description: 'Implement regular expression matching with support for . and *.',
  language: 'python',
  solution: `class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        dp[0][0] = True

        for j in range(1, len(p) + 1):
            if p[j-1] == '*':
                dp[0][j] = dp[0][j-2]

        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if p[j-1] == '*':
                    dp[i][j] = dp[i][j-2]
                    if p[j-2] == '.' or p[j-2] == s[i-1]:
                        dp[i][j] = dp[i][j] or dp[i-1][j]
                elif p[j-1] == '.' or p[j-1] == s[i-1]:
                    dp[i][j] = dp[i-1][j-1]

        return dp[len(s)][len(p)]`,
        companies: ['Google', 'Facebook', 'Amazon', 'Microsoft', 'Uber']
},
{
  id: 'str-23',
  title: 'Decode Ways',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/decode-ways/',
  description: 'Count the number of ways to decode a digit string into letters.',
  language: 'python',
  solution: `class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0

        dp = [0] * (len(s) + 1)
        dp[0] = 1
        dp[1] = 1

        for i in range(2, len(s) + 1):
            one = int(s[i-1])
            two = int(s[i-2:i])

            if one >= 1:
                dp[i] += dp[i-1]
            if 10 <= two <= 26:
                dp[i] += dp[i-2]

        return dp[len(s)]`,
        companies: ['Amazon', 'Microsoft', 'Google', 'Facebook', 'Bloomberg']
},
{
  id: 'str-24',
  title: 'Scramble String',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/scramble-string/',
  description: 'Determine if one string is a scrambled version of another string.',
  language: 'python',
  solution: `class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        from functools import lru_cache

        @lru_cache(None)
        def dp(a, b):
            if a == b:
                return True
            if sorted(a) != sorted(b):
                return False
            n = len(a)
            for i in range(1, n):
                if (dp(a[:i], b[:i]) and dp(a[i:], b[i:])) or \
                   (dp(a[:i], b[n-i:]) and dp(a[i:], b[:n-i])):
                    return True
            return False

        return dp(s1, s2)`,
        companies: ['Google', 'Amazon', 'Bloomberg', 'Uber', 'Palantir']
},
{
  id: 'str-25',
  title: 'Text Justification',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/text-justification/',
  description: 'Format text such that each line has exactly maxWidth characters and is fully justified.',
  language: 'python',
  solution: `class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        res = []
        line = []
        line_len = 0

        for word in words:
            if line_len + len(word) + len(line) > maxWidth:
                for i in range(maxWidth - line_len):
                    line[i % (len(line) - 1 or 1)] += ' '
                res.append(''.join(line))
                line = []
                line_len = 0
            line.append(word)
            line_len += len(word)

        res.append(' '.join(line).ljust(maxWidth))
        return res`,
        companies: ['Google', 'Facebook', 'Airbnb', 'LinkedIn', 'Dropbox']
},
{
  id: 'str-26',
  title: 'Longest Valid Parentheses',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/longest-valid-parentheses/',
  description: 'Find the length of the longest valid parentheses substring.',
  language: 'python',
  solution: `class Solution:
    def longestValidParentheses(self, s: str) -> int:
        stack = [-1]
        res = 0

        for i, ch in enumerate(s):
            if ch == '(':
                stack.append(i)
            else:
                stack.pop()
                if not stack:
                    stack.append(i)
                else:
                    res = max(res, i - stack[-1])

        return res`,
        companies: ['Amazon', 'Google', 'Facebook', 'Microsoft', 'Adobe']
},
{
  id: 'str-27',
  title: 'Integer to Roman',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/integer-to-roman/',
  description: 'Convert an integer to its roman numeral representation.',
  language: 'python',
  solution: `class Solution:
    def intToRoman(self, num: int) -> str:
        val_sym = [
            (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
            (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'),
            (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
        ]
        res = ""

        for val, sym in val_sym:
            while num >= val:
                res += sym
                num -= val

        return res`,
        companies: ['Amazon', 'Bloomberg', 'Adobe', 'Google', 'Uber']
},
{
  id: 'str-28',
  title: 'Roman to Integer',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/roman-to-integer/',
  description: 'Convert a roman numeral string to its integer representation.',
  language: 'python',
  solution: `class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50,
            'C': 100, 'D': 500, 'M': 1000
        }
        res = 0

        for i in range(len(s)):
            if i + 1 < len(s) and roman[s[i]] < roman[s[i+1]]:
                res -= roman[s[i]]
            else:
                res += roman[s[i]]

        return res`,
        companies: ['Amazon', 'Bloomberg', 'Adobe', 'Microsoft', 'Apple']
},
{
  id: 'str-29',
  title: 'Wildcard Matching',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/wildcard-matching/',
  description: 'Implement wildcard pattern matching with support for ? and *.',
  language: 'python',
  solution: `class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        dp[0][0] = True

        for j in range(1, len(p) + 1):
            if p[j-1] == '*':
                dp[0][j] = dp[0][j-1]

        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if p[j-1] == '*':
                    dp[i][j] = dp[i-1][j] or dp[i][j-1]
                elif p[j-1] == '?' or p[j-1] == s[i-1]:
                    dp[i][j] = dp[i-1][j-1]

        return dp[len(s)][len(p)]`,
        companies: ['Google', 'Amazon', 'Facebook', 'Microsoft', 'Twitter']
},
{
  id: 'str-30',
  title: 'Word Search',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/word-search/',
  description: 'Given a 2D board and a word, find if the word exists in the grid.',
  language: 'python',
  solution: `class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows, cols = len(board), len(board[0])

        def dfs(r, c, i):
            if i == len(word):
                return True
            if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != word[i]:
                return False
            temp = board[r][c]
            board[r][c] = '#'
            found = (dfs(r+1, c, i+1) or dfs(r-1, c, i+1) or
                     dfs(r, c+1, i+1) or dfs(r, c-1, i+1))
            board[r][c] = temp
            return found

        for r in range(rows):
            for c in range(cols):
                if dfs(r, c, 0):
                    return True
        return False`,
  companies: ['Amazon', 'Microsoft', 'Facebook', 'Google', 'Adobe']
},
{
  id: 'str-31',
  title: 'Implement strStr()',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/',
  description: 'Return the index of the first occurrence of needle in haystack, or -1 if not found.',
  language: 'python',
  solution: `class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle:
            return 0

        n, m = len(haystack), len(needle)
        for i in range(n - m + 1):
            if haystack[i:i+m] == needle:
                return i

        return -1`,
        companies: ['Facebook', 'Amazon', 'Microsoft', 'Google', 'Apple']
},
{
  id: 'str-32',
  title: 'Longest Common Subsequence',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-common-subsequence/',
  description: 'Find the length of the longest common subsequence between two strings.',
  language: 'python',
  solution: `class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if text1[i-1] == text2[j-1]:
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])

        return dp[m][n]`,
        companies: ['Google', 'Amazon', 'Microsoft', 'Adobe', 'Dropbox']
},
{
  id: 'str-33',
  title: 'Edit Distance',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/edit-distance/',
  description: 'Find the minimum number of operations to convert one string to another.',
  language: 'python',
  solution: `class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]

        for i in range(m + 1):
            dp[i][0] = i
        for j in range(n + 1):
            dp[0][j] = j

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if word1[i-1] == word2[j-1]:
                    dp[i][j] = dp[i-1][j-1]
                else:
                    dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])

        return dp[m][n]`,
        companies: ['Google', 'Amazon', 'Facebook', 'Microsoft', 'Uber']
},
{
  id: 'str-34',
  title: 'Palindrome Pairs',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/palindrome-pairs/',
  description: 'Find all pairs of indices where concatenation of two words forms a palindrome.',
  language: 'python',
  solution: `class Solution:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
        word_map = {word: i for i, word in enumerate(words)}
        res = []

        def isPalin(s):
            return s == s[::-1]

        for i, word in enumerate(words):
            for j in range(len(word) + 1):
                prefix = word[:j]
                suffix = word[j:]

                if isPalin(prefix):
                    rev_suffix = suffix[::-1]
                    if rev_suffix in word_map and word_map[rev_suffix] != i:
                        res.append([word_map[rev_suffix], i])

                if j != len(word) and isPalin(suffix):
                    rev_prefix = prefix[::-1]
                    if rev_prefix in word_map and word_map[rev_prefix] != i:
                        res.append([i, word_map[rev_prefix]])

        return res`,
        companies: ['Google', 'Amazon', 'Airbnb', 'LinkedIn', 'Palantir']
},
{
  id: 'str-35',
  title: 'Short Encoding of Words',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/short-encoding-of-words/',
  description: 'Find the length of the shortest reference string for encoding a list of words.',
  language: 'python',
  solution: `class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
        word_set = set(words)

        for word in words:
            for k in range(1, len(word)):
                word_set.discard(word[k:])

        return sum(len(word) + 1 for word in word_set)`,
        companies: ['Amazon', 'Google', 'Facebook', 'Microsoft', 'Twitter']
},
{
  id: 'str-36',
  title: 'Repeated DNA Sequences',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/repeated-dna-sequences/',
  description: 'Find all 10-letter-long sequences that occur more than once in a DNA string.',
  language: 'python',
  solution: `class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        seen = set()
        repeated = set()

        for i in range(len(s) - 9):
            seq = s[i:i+10]
            if seq in seen:
                repeated.add(seq)
            seen.add(seq)

        return list(repeated)`,
        companies: ['LinkedIn', 'Google', 'Amazon', 'Microsoft', 'Bloomberg']
},
{
  id: 'str-37',
  title: 'Ransom Note',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/ransom-note/',
  description: 'Determine if a ransom note can be constructed from the letters in a magazine.',
  language: 'python',
  solution: `class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        from collections import Counter
        mag_count = Counter(magazine)

        for ch in ransomNote:
            if mag_count[ch] <= 0:
                return False
            mag_count[ch] -= 1

        return True`,
        companies: ['Amazon', 'Google', 'Goldman Sachs', 'Facebook', 'Apple']
},
{
  id: 'str-38',
  title: 'Isomorphic Strings',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/isomorphic-strings/',
  description: 'Determine if two strings are isomorphic, meaning characters can be mapped to each other.',
  language: 'python',
  solution: `class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        s_to_t = {}
        t_to_s = {}

        for cs, ct in zip(s, t):
            if cs in s_to_t and s_to_t[cs] != ct:
                return False
            if ct in t_to_s and t_to_s[ct] != cs:
                return False
            s_to_t[cs] = ct
            t_to_s[ct] = cs

        return True`,
        companies: ['LinkedIn', 'Amazon', 'Google', 'Facebook', 'Twitter']
},
{
  id: 'str-39',
  title: 'Word Pattern',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/word-pattern/',
  description: 'Determine if a string follows the same pattern as a given pattern string.',
  language: 'python',
  solution: `class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split()
        if len(pattern) != len(words):
            return False

        p_to_w = {}
        w_to_p = {}

        for p, w in zip(pattern, words):
            if p in p_to_w and p_to_w[p] != w:
                return False
            if w in w_to_p and w_to_p[w] != p:
                return False
            p_to_w[p] = w
            w_to_p[w] = p

        return True`,
        companies: ['Google', 'Amazon', 'Dropbox', 'Apple', 'Bloomberg']
},
{
  id: 'str-40',
  title: 'Reverse String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/reverse-string/',
  description: 'Reverse a string in-place using two pointers.',
  language: 'python',
  solution: `class Solution:
    def reverseString(self, s: List[str]) -> None:
        left, right = 0, len(s) - 1

        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1`,
            companies: ['Facebook', 'Amazon', 'Google', 'Apple', 'Microsoft']
},
{
  id: 'str-41',
  title: 'Valid Parentheses',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/',
  description: 'Determine if a string of brackets is valid using a stack.',
  language: 'python',
  solution: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}

        for ch in s:
            if ch in mapping:
                top = stack.pop() if stack else '#'
                if mapping[ch] != top:
                    return False
            else:
                stack.append(ch)

        return not stack`,
        companies: ['Amazon', 'Google', 'Facebook', 'Microsoft', 'Bloomberg']
},
{
  id: 'str-42',
  title: 'Longest Substring with At Most Two Distinct Characters',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/',
  description: 'Find the length of the longest substring with at most two distinct characters.',
  language: 'python',
  solution: `class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        left = 0
        res = 0

        for right in range(len(s)):
            count[s[right]] += 1

            while len(count) > 2:
                count[s[left]] -= 1
                if count[s[left]] == 0:
                    del count[s[left]]
                left += 1

            res = max(res, right - left + 1)

        return res`,
        companies: ['Google', 'Amazon', 'Facebook', 'Microsoft', 'Uber']
},
{
  id: 'str-43',
  title: 'Reorganize String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/reorganize-string/',
  description: 'Rearrange characters of a string so no two adjacent characters are the same.',
  language: 'python',
  solution: `class Solution:
    def reorganizeString(self, s: str) -> str:
        from collections import Counter
        import heapq

        count = Counter(s)
        heap = [(-freq, ch) for ch, freq in count.items()]
        heapq.heapify(heap)

        res = []
        while len(heap) >= 2:
            freq1, ch1 = heapq.heappop(heap)
            freq2, ch2 = heapq.heappop(heap)
            res.extend([ch1, ch2])
            if freq1 + 1 < 0:
                heapq.heappush(heap, (freq1 + 1, ch1))
            if freq2 + 1 < 0:
                heapq.heappush(heap, (freq2 + 1, ch2))

        if heap:
            freq, ch = heapq.heappop(heap)
            if -freq > 1:
                return ""
            res.append(ch)

        return "".join(res)`,
        companies: ['Google', 'Amazon', 'Microsoft', 'Bloomberg', 'Apple']
},
{
  id: 'str-44',
  title: 'Minimum Remove to Make Valid Parentheses',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/',
  description: 'Remove minimum number of parentheses to make the string valid.',
  language: 'python',
  solution: `class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        stack = []
        s = list(s)

        for i, ch in enumerate(s):
            if ch == '(':
                stack.append(i)
            elif ch == ')':
                if stack:
                    stack.pop()
                else:
                    s[i] = ''

        for i in stack:
            s[i] = ''

        return ''.join(s)`,
        companies: ['Facebook', 'Amazon', 'LinkedIn', 'Google', 'Uber']
},
{
  id: 'str-45',
  title: 'Check if Two String Arrays are Equivalent',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/',
  description: 'Determine if two string arrays are equivalent when concatenated.',
  language: 'python',
  solution: `class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        return ''.join(word1) == ''.join(word2)`,
        companies: ['Amazon', 'Google', 'Apple', 'Microsoft', 'Samsung']
},
{
  id: 'str-46',
  title: 'Maximum Number of Vowels in a Substring of Given Length',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/',
  description: 'Find the maximum number of vowels in any substring of length k.',
  language: 'python',
  solution: `class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set('aeiou')
        count = sum(1 for c in s[:k] if c in vowels)
        res = count

        for i in range(k, len(s)):
            count += (s[i] in vowels) - (s[i-k] in vowels)
            res = max(res, count)

        return res`,
        companies: ['Google', 'Amazon', 'Facebook', 'Adobe', 'Uber']
},
{
  id: 'str-47',
  title: 'Largest Number',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/largest-number/',
  description: 'Arrange numbers to form the largest possible number.',
  language: 'python',
  solution: `class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        from functools import cmp_to_key

        def compare(a, b):
            if a + b > b + a:
                return -1
            elif a + b < b + a:
                return 1
            return 0

        nums = list(map(str, nums))
        nums.sort(key=cmp_to_key(compare))

        result = ''.join(nums)
        return '0' if result[0] == '0' else result`,
        companies: ['Google', 'Amazon', 'Facebook', 'Bloomberg', 'Airbnb']
},
{
  id: 'str-48',
  title: 'Detect Capital',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/detect-capital/',
  description: 'Determine if the usage of capitals in a word is correct.',
  language: 'python',
  solution: `class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        return word.isupper() or word.islower() or word.istitle()`,
        companies: ['Google', 'Amazon', 'Apple', 'Microsoft', 'Twitter']
},
{
  id: 'str-49',
  title: 'Count Palindromic Substrings',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/palindromic-substrings/',
  description: 'Count the number of palindromic substrings in a given string.',
  language: 'python',
  solution: `class Solution:
    def countSubstrings(self, s: str) -> int:
        res = 0

        def expand(left, right):
            count = 0
            while left >= 0 and right < len(s) and s[left] == s[right]:
                count += 1
                left -= 1
                right += 1
            return count

        for i in range(len(s)):
            res += expand(i, i)
            res += expand(i, i + 1)

        return res`,
        companies: ['Amazon', 'Google', 'Facebook', 'LinkedIn', 'Adobe']
},
{
  id: 'str-50',
  title: 'String Compression',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/string-compression/',
  description: 'Compress a character array in-place using counts of repeated characters.',
  language: 'python',
  solution: `class Solution:
    def compress(self, chars: List[str]) -> int:
        write = 0
        i = 0

        while i < len(chars):
            ch = chars[i]
            count = 0

            while i < len(chars) and chars[i] == ch:
                count += 1
                i += 1

            chars[write] = ch
            write += 1

            if count > 1:
                for c in str(count):
                    chars[write] = c
                    write += 1

        return write`,
        companies: ['Google', 'Amazon', 'Facebook', 'Bloomberg', 'Apple']
},
{
  id: 'str-51',
  title: 'Reverse Vowels of a String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/reverse-vowels-of-a-string/',
  description: 'Reverse only the vowels in a given string.',
  language: 'python',
  solution: `class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = set('aeiouAEIOU')
        s = list(s)
        left, right = 0, len(s) - 1

        while left < right:
            while left < right and s[left] not in vowels:
                left += 1
            while left < right and s[right] not in vowels:
                right -= 1
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1

        return ''.join(s)`,
        companies: ['Google', 'Amazon', 'Facebook', 'Apple', 'Uber']
},
{
  id: 'str-52',
  title: 'Add Binary',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/add-binary/',
  description: 'Given two binary strings, return their sum as a binary string.',
  language: 'python',
  solution: `class Solution:
    def addBinary(self, a: str, b: str) -> str:
        res = []
        carry = 0
        i, j = len(a) - 1, len(b) - 1

        while i >= 0 or j >= 0 or carry:
            total = carry
            if i >= 0:
                total += int(a[i])
                i -= 1
            if j >= 0:
                total += int(b[j])
                j -= 1
            res.append(str(total % 2))
            carry = total // 2

        return ''.join(reversed(res))`,
        companies: ['Facebook', 'Amazon', 'Google', 'Microsoft', 'Apple']
},
{
  id: 'str-53',
  title: 'Longest Word in Dictionary',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-word-in-dictionary/',
  description: 'Find the longest word that can be built one character at a time from other words in the dictionary.',
  language: 'python',
  solution: `class Solution:
    def longestWord(self, words: List[str]) -> str:
        word_set = set(words)
        res = ""

        for word in words:
            if all(word[:k] in word_set for k in range(1, len(word))):
                if len(word) > len(res) or (len(word) == len(res) and word < res):
                    res = word

        return res`,
        companies: ['Google', 'Amazon', 'Microsoft', 'Uber', 'Snapchat']
},
{
  id: 'str-54',
  title: 'Rotate String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/rotate-string/',
  description: 'Determine if one string can become another after some number of rotations.',
  language: 'python',
  solution: `class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        return goal in s + s`,
        companies: ['Amazon', 'Google', 'Apple', 'Facebook', 'Bloomberg']
},
{
  id: 'str-55',
  title: 'Uncommon Words from Two Sentences',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/uncommon-words-from-two-sentences/',
  description: 'Find all uncommon words from two sentences that appear exactly once in one sentence and not in the other.',
  language: 'python',
  solution: `class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        from collections import Counter
        count = Counter((s1 + ' ' + s2).split())
        return [word for word, freq in count.items() if freq == 1]`,
        companies: ['Amazon', 'Google', 'Facebook', 'Twitter', 'Apple']
},
{
  id: 'str-56',
  title: 'Count and Say',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-segments-in-a-string/',
  description: 'Count the number of segments in a string where a segment is a contiguous sequence of non-space characters.',
  language: 'python',
  solution: `class Solution:
    def countSegments(self, s: str) -> int:
        count = 0
        for i in range(len(s)):
            if s[i] != ' ' and (i == 0 or s[i-1] == ' '):
                count += 1
        return count`,
        companies: ['Amazon', 'Google', 'Microsoft', 'Apple', 'Adobe']
},
{
  id: 'str-57',
  title: 'Reverse Only Letters',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/reverse-only-letters/',
  description: 'Reverse only the letters in a string, keeping non-letter characters in place.',
  language: 'python',
  solution: `class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        s = list(s)
        left, right = 0, len(s) - 1

        while left < right:
            while left < right and not s[left].isalpha():
                left += 1
            while left < right and not s[right].isalpha():
                right -= 1
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1

        return ''.join(s)`,
        companies: ['Google', 'Amazon', 'Facebook', 'Microsoft', 'LinkedIn']
},
{
  id: 'str-58',
  title: 'To Lower Case',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/to-lower-case/',
  description: 'Convert all uppercase letters in a string to lowercase.',
  language: 'python',
  solution: `class Solution:
    def toLowerCase(self, s: str) -> str:
        res = []
        for ch in s:
            if 'A' <= ch <= 'Z':
                res.append(chr(ord(ch) + 32))
            else:
                res.append(ch)
        return ''.join(res)`,
        companies: ['Amazon', 'Google', 'Apple', 'Facebook', 'Uber']
},
{
  id: 'str-59',
  title: 'Goal Parser Interpretation',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/goal-parser-interpretation/',
  description: 'Interpret a command string where G means G, () means o, and (al) means al.',
  language: 'python',
  solution: `class Solution:
    def interpret(self, command: str) -> str:
        return command.replace('()', 'o').replace('(al)', 'al')`,
        companies: ['Amazon', 'Google', 'Apple', 'Microsoft', 'Samsung']
},
{
  id: 'str-60',
  title: 'Make The String Great',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/make-the-string-great/',
  description: 'Remove adjacent characters that are same letter but different case to make the string great.',
  language: 'python',
  solution: `class Solution:
    def makeGood(self, s: str) -> str:
        stack = []

        for ch in s:
            if stack and stack[-1] != ch and stack[-1].lower() == ch.lower():
                stack.pop()
            else:
                stack.append(ch)

        return ''.join(stack)`,
        companies: ['Google', 'Amazon', 'Facebook', 'Adobe', 'Bloomberg']
},
{
  id: 'str-61',
  title: 'Longest Common Prefix After Merging',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-the-longest-common-prefix-after-merging/',
  description: 'Find the longest prefix that appears in all strings after merging operations.',
  language: 'python',
  solution: `class Solution:
    def longestCommonPrefix(self, arr1: List[int], arr2: List[int]) -> int:
        prefixes = set()

        for num in arr1:
            while num > 0:
                prefixes.add(num)
                num //= 10

        res = 0
        for num in arr2:
            while num > 0:
                if num in prefixes:
                    res = max(res, len(str(num)))
                    break
                num //= 10

        return res`,
        companies: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Uber']
},
{
  id: 'str-62',
  title: 'Remove Duplicate Letters',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/remove-duplicate-letters/',
  description: 'Remove duplicate letters so that every letter appears once and the result is the smallest lexicographic order.',
  language: 'python',
  solution: `class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        from collections import Counter
        count = Counter(s)
        stack = []
        seen = set()

        for ch in s:
            count[ch] -= 1
            if ch in seen:
                continue
            while stack and ch < stack[-1] and count[stack[-1]] > 0:
                seen.remove(stack.pop())
            stack.append(ch)
            seen.add(ch)

        return ''.join(stack)`,
        companies: ['Google', 'Amazon', 'Facebook', 'Microsoft', 'Bloomberg']
},
{
  id: 'str-63',
  title: 'Sentence Similarity',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/sentence-similarity/',
  description: 'Determine if two sentences are similar given a list of similar word pairs.',
  language: 'python',
  solution: `class Solution:
    def areSentencesSimilar(self, sentence1: List[str], sentence2: List[str], similarPairs: List[List[str]]) -> bool:
        if len(sentence1) != len(sentence2):
            return False

        similar_set = set()
        for a, b in similarPairs:
            similar_set.add((a, b))
            similar_set.add((b, a))

        for w1, w2 in zip(sentence1, sentence2):
            if w1 != w2 and (w1, w2) not in similar_set:
                return False

        return True`,
        companies: ['Google', 'Amazon', 'Facebook', 'LinkedIn', 'Uber']
},
{
  id: 'str-64',
  title: 'Longest Turbulent Subarray',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-turbulent-subarray/',
  description: 'Find the length of the longest turbulent subarray where comparisons alternate between greater and less than.',
  language: 'python',
  solution: `class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        n = len(arr)
        if n < 2:
            return n

        res = 1
        inc = dec = 1

        for i in range(1, n):
            if arr[i] > arr[i-1]:
                inc = dec + 1
                dec = 1
            elif arr[i] < arr[i-1]:
                dec = inc + 1
                inc = 1
            else:
                inc = dec = 1
            res = max(res, inc, dec)

        return res`,
        companies: ['Amazon', 'Google', 'Facebook', 'Bloomberg', 'Adobe']
},
{
  id: 'str-65',
  title: 'Shifting Letters',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/shifting-letters/',
  description: 'Shift each letter of a string by the sum of all shifts from its position to the end.',
  language: 'python',
  solution: `class Solution:
    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
        n = len(s)
        total_shift = 0
        res = list(s)

        for i in range(n - 1, -1, -1):
            total_shift = (total_shift + shifts[i]) % 26
            res[i] = chr((ord(s[i]) - ord('a') + total_shift) % 26 + ord('a'))

        return ''.join(res)`,
        companies: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Twitter']
},
{
  id: 'str-66',
  title: 'Unique Email Addresses',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/unique-email-addresses/',
  description: 'Count the number of unique email addresses after applying local name rules.',
  language: 'python',
  solution: `class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        unique = set()

        for email in emails:
            local, domain = email.split('@')
            local = local.split('+')[0]
            local = local.replace('.', '')
            unique.add(local + '@' + domain)

        return len(unique)`,
        companies: ['Google', 'Facebook', 'Amazon', 'Microsoft', 'Uber']
},
{
  id: 'str-67',
  title: 'License Key Formatting',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/license-key-formatting/',
  description: 'Format a license key string into groups of k characters separated by dashes.',
  language: 'python',
  solution: `class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        s = s.replace('-', '').upper()
        first = len(s) % k
        parts = []

        if first:
            parts.append(s[:first])

        for i in range(first, len(s), k):
            parts.append(s[i:i+k])

        return '-'.join(parts)`,
        companies: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Bloomberg']
},
{
  id: 'str-68',
  title: 'Student Attendance Record I',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/student-attendance-record-i/',
  description: 'Determine if a student is eligible for an attendance award based on their record.',
  language: 'python',
  solution: `class Solution:
    def checkRecord(self, s: str) -> bool:
        if s.count('A') > 1:
            return False
        if 'LLL' in s:
            return False
        return True`,
        companies: ['Amazon', 'Google', 'Apple', 'Microsoft', 'Samsung']
},
{
  id: 'str-69',
  title: 'Expressive Words',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/expressive-words/',
  description: 'Count how many words can be stretched to match a given string by extending groups of characters.',
  language: 'python',
  solution: `class Solution:
    def expressiveWords(self, s: str, words: List[str]) -> int:
        def isStretchy(s, w):
            i, j = 0, 0
            while i < len(s) and j < len(w):
                if s[i] != w[j]:
                    return False
                cnt_s = 1
                cnt_w = 1
                while i + cnt_s < len(s) and s[i + cnt_s] == s[i]:
                    cnt_s += 1
                while j + cnt_w < len(w) and w[j + cnt_w] == w[j]:
                    cnt_w += 1
                if cnt_s < cnt_w or (cnt_s < 3 and cnt_s != cnt_w):
                    return False
                i += cnt_s
                j += cnt_w
            return i == len(s) and j == len(w)

        return sum(isStretchy(s, w) for w in words)`,
        companies: ['Google', 'Amazon', 'Facebook', 'Uber', 'Airbnb']
},
{
  id: 'str-70',
  title: 'Reorder Data in Log Files',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/reorder-data-in-log-files/',
  description: 'Reorder log files so letter logs come before digit logs, with letter logs sorted lexicographically.',
  language: 'python',
  solution: `class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        letter_logs = []
        digit_logs = []

        for log in logs:
            identifier, rest = log.split(' ', 1)
            if rest[0].isdigit():
                digit_logs.append(log)
            else:
                letter_logs.append((rest, identifier, log))

        letter_logs.sort(key=lambda x: (x[0], x[1]))

        return [log for _, _, log in letter_logs] + digit_logs`,
        companies: ['Amazon', 'Google', 'Facebook', 'Bloomberg', 'LinkedIn']
},
{
  id: 'str-71',
  title: 'Most Common Word',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/most-common-word/',
  description: 'Find the most frequent word in a paragraph that is not in the banned list.',
  language: 'python',
  solution: `class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        from collections import Counter
        import re

        banned_set = set(banned)
        words = re.findall(r'[a-z]+', paragraph.lower())
        count = Counter(w for w in words if w not in banned_set)

        return count.most_common(1)[0][0]`,
        companies: ['Amazon', 'Google', 'Facebook', 'Microsoft', 'Apple']
},
{
  id: 'str-72',
  title: 'Custom Sort String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/custom-sort-string/',
  description: 'Sort a string based on the order of characters defined in a custom order string.',
  language: 'python',
  solution: `class Solution:
    def customSortString(self, order: str, s: str) -> str:
        from collections import Counter
        count = Counter(s)
        res = []

        for ch in order:
            if ch in count:
                res.append(ch * count[ch])
                del count[ch]

        for ch, freq in count.items():
            res.append(ch * freq)

        return ''.join(res)`,
        companies: ['Google', 'Amazon', 'Facebook', 'Uber', 'Snapchat']
},
{
  id: 'str-73',
  title: 'Buddy Strings',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/buddy-strings/',
  description: 'Determine if two strings can be made equal by swapping exactly one pair of characters.',
  language: 'python',
  solution: `class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False

        if s == goal:
            return len(set(s)) < len(s)

        diffs = [(a, b) for a, b in zip(s, goal) if a != b]

        return (len(diffs) == 2 and
                diffs[0][0] == diffs[1][1] and
                diffs[0][1] == diffs[1][0])`,
                companies: ['Google', 'Amazon', 'Facebook', 'Apple', 'Twitter']
},
{
  id: 'str-74',
  title: 'Longest Substring with At Most K Distinct Characters',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/',
  description: 'Find the length of the longest substring with at most k distinct characters.',
  language: 'python',
  solution: `class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        left = 0
        res = 0

        for right in range(len(s)):
            count[s[right]] += 1

            while len(count) > k:
                count[s[left]] -= 1
                if count[s[left]] == 0:
                    del count[s[left]]
                left += 1

            res = max(res, right - left + 1)

        return res`,
        companies: ['Google', 'Amazon', 'Facebook', 'Microsoft', 'Uber']
},
{
  id: 'str-75',
  title: 'Break a Palindrome',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/break-a-palindrome/',
  description: 'Replace one character in a palindrome string to make it lexicographically smallest non-palindrome.',
  language: 'python',
  solution: `class Solution:
    def breakPalindrome(self, palindrome: str) -> str:
        n = len(palindrome)
        if n == 1:
            return ""

        s = list(palindrome)

        for i in range(n // 2):
            if s[i] != 'a':
                s[i] = 'a'
                return ''.join(s)

        s[-1] = 'b'
        return ''.join(s)`,
        companies: ['Google', 'Amazon', 'Adobe', 'Bloomberg', 'Apple']
},
{
  id: 'str-76',
  title: 'Number of Good Substrings',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-good-substrings/',
  description: 'Count the number of substrings of length 3 that contain only distinct characters.',
  language: 'python',
  solution: `class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        count = 0
        for i in range(len(s) - 2):
            if s[i] != s[i+1] and s[i+1] != s[i+2] and s[i] != s[i+2]:
                count += 1
        return count`,
        companies: ['Google', 'Amazon', 'Facebook', 'Apple', 'Microsoft']
},
{
  id: 'str-77',
  title: 'Maximum Repeating Substring',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-repeating-substring/',
  description: 'Find the maximum number of times a word can be concatenated to form a substring of a sequence.',
  language: 'python',
  solution: `class Solution:
    def maxRepeating(self, sequence: str, word: str) -> int:
        count = 0
        repeated = word

        while repeated in sequence:
            count += 1
            repeated += word

        return count`,
        companies: ['Amazon', 'Google', 'Microsoft', 'Apple', 'Bloomberg']
},
{
  id: 'str-78',
  title: 'Truncate Sentence',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/truncate-sentence/',
  description: 'Return a sentence with only the first k words.',
  language: 'python',
  solution: `class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        return ' '.join(s.split()[:k])`,
        companies: ['Amazon', 'Google', 'Facebook', 'Apple', 'Uber']
},
{
  id: 'str-79',
  title: 'Check if the Sentence Is Pangram',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/check-if-the-sentence-is-pangram/',
  description: 'Determine if a sentence is a pangram containing every letter of the alphabet at least once.',
  language: 'python',
  solution: `class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        return len(set(sentence)) >= 26`,
        companies: ['Google', 'Amazon', 'Facebook', 'Microsoft', 'Twitter']
},
{
  id: 'str-80',
  title: 'Sorting the Sentence',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/sorting-the-sentence/',
  description: 'Reconstruct the original sentence from shuffled words that have their position appended.',
  language: 'python',
  solution: `class Solution:
    def sortSentence(self, s: str) -> str:
        words = s.split()
        sorted_words = [''] * len(words)

        for word in words:
            sorted_words[int(word[-1]) - 1] = word[:-1]

        return ' '.join(sorted_words)`,
        companies: ['Amazon', 'Google', 'Apple', 'Microsoft', 'Samsung']
},
{
  id: 'str-81',
  title: 'Count Words With a Given Prefix',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/count-words-with-a-given-prefix/',
  description: 'Count the number of words in an array that contain a given prefix.',
  language: 'python',
  solution: `class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        return sum(1 for word in words if word.startswith(pref))`,
        companies: ['Amazon', 'Google', 'Microsoft', 'Apple', 'Adobe']
},
{
  id: 'str-82',
  title: 'Longest Palindrome by Concatenating Two Letter Words',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/',
  description: 'Find the longest palindrome that can be formed by concatenating two letter words from an array.',
  language: 'python',
  solution: `class Solution:
    def longestPalindrome(self, words: List[str]) -> int:
        from collections import Counter
        count = Counter(words)
        res = 0
        center = False

        for word, freq in count.items():
            rev = word[::-1]
            if word == rev:
                res += (freq // 2) * 4
                if freq % 2 == 1:
                    center = True
            elif rev in count and word < rev:
                res += min(freq, count[rev]) * 4

        if center:
            res += 2

        return res`,
        companies: ['Google', 'Amazon', 'Facebook', 'Bloomberg', 'Uber']
},
{
  id: 'str-83',
  title: 'Find the Difference',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/find-the-difference/',
  description: 'Find the letter that was added to string t which is a shuffled version of string s.',
  language: 'python',
  solution: `class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        res = 0
        for ch in s + t:
            res ^= ord(ch)
        return chr(res)`,
        companies: ['Amazon', 'Google', 'Facebook', 'Apple', 'Microsoft']
},
{
  id: 'str-84',
  title: 'Minimum Number of Steps to Make Two Strings Anagram',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/',
  description: 'Find the minimum number of character replacements to make two strings anagrams of each other.',
  language: 'python',
  solution: `class Solution:
    def minSteps(self, s: str, t: str) -> int:
        from collections import Counter
        count_s = Counter(s)
        count_t = Counter(t)
        res = 0

        for ch in count_s:
            if count_s[ch] > count_t[ch]:
                res += count_s[ch] - count_t[ch]

        return res`,
        companies: ['Google', 'Amazon', 'Facebook', 'Microsoft', 'Twitter']
},
{
  id: 'str-85',
  title: 'Largest Odd Number in String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/largest-odd-number-in-string/',
  description: 'Find the largest odd number that is a non-empty substring of a numeric string.',
  language: 'python',
  solution: `class Solution:
    def largestOddNumber(self, num: str) -> str:
        for i in range(len(num) - 1, -1, -1):
            if int(num[i]) % 2 != 0:
                return num[:i + 1]
        return ""`,
        companies: ['Amazon', 'Google', 'Apple', 'Bloomberg', 'Uber']
},
{
  id: 'str-86',
  title: 'Maximum Number of Occurrences of a Substring',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/',
  description: 'Find the maximum number of occurrences of any substring with at most maxLetters distinct characters and length between minSize and maxSize.',
  language: 'python',
  solution: `class Solution:
    def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:
        from collections import Counter
        count = Counter()

        for i in range(len(s) - minSize + 1):
            sub = s[i:i + minSize]
            if len(set(sub)) <= maxLetters:
                count[sub] += 1

        return max(count.values(), default=0)`,
        companies: ['Google', 'Amazon', 'Facebook', 'Microsoft', 'Airbnb']
},
{
  id: 'str-87',
  title: 'Sum of Unique Elements',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/sum-of-unique-elements/',
  description: 'Find the sum of all unique elements in an array that appear exactly once.',
  language: 'python',
  solution: `class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        from collections import Counter
        count = Counter(nums)
        return sum(num for num, freq in count.items() if freq == 1)`,
        companies: ['Amazon', 'Google', 'Apple', 'Facebook', 'Samsung']
},
{
  id: 'str-88',
  title: 'Percentage of Letter in String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/percentage-of-letter-in-string/',
  description: 'Find the percentage of characters in a string that are equal to a given letter.',
  language: 'python',
  solution: `class Solution:
    def percentageLetter(self, s: str, letter: str) -> int:
        return (s.count(letter) * 100) // len(s)`
},
{
  id: 'str-89',
  title: 'Number of Strings That Appear as Substrings in Word',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/',
  description: 'Count how many strings in an array appear as substrings in a given word.',
  language: 'python',
  solution: `class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        return sum(1 for p in patterns if p in word)`
},
{
  id: 'str-90',
  title: 'Find Common Characters',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/find-common-characters/',
  description: 'Find all characters that appear in every string in the array including duplicates.',
  language: 'python',
  solution: `class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        from collections import Counter
        common = Counter(words[0])

        for word in words[1:]:
            common &= Counter(word)

        res = []
        for ch, freq in common.items():
            res.extend([ch] * freq)

        return res`
},
{
  id: 'str-91',
  title: 'Rings and Rods',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/rings-and-rods/',
  description: 'Count the number of rods that have all three colors of rings on them.',
  language: 'python',
  solution: `class Solution:
    def countPoints(self, rings: str) -> int:
        rods = defaultdict(set)

        for i in range(0, len(rings), 2):
            color = rings[i]
            rod = rings[i+1]
            rods[rod].add(color)

        return sum(1 for rod in rods if len(rods[rod]) == 3)`
},
{
  id: 'str-92',
  title: 'Longest Nice Substring',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/longest-nice-substring/',
  description: 'Find the longest substring where every letter appears in both uppercase and lowercase.',
  language: 'python',
  solution: `class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        if len(s) < 2:
            return ""

        for i, ch in enumerate(s):
            if ch.lower() not in s or ch.upper() not in s:
                left = self.longestNiceSubstring(s[:i])
                right = self.longestNiceSubstring(s[i+1:])
                return left if len(left) >= len(right) else right

        return s`
},
{
  id: 'str-93',
  title: 'Check Whether Two Strings are Almost Equivalent',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/',
  description: 'Check if two strings are almost equivalent where each character differs by at most 3.',
  language: 'python',
  solution: `class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        from collections import Counter
        count1 = Counter(word1)
        count2 = Counter(word2)
        all_chars = set(word1 + word2)

        for ch in all_chars:
            if abs(count1[ch] - count2[ch]) > 3:
                return False

        return True`
},
{
  id: 'str-94',
  title: 'Count Number of Texts',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/count-number-of-texts/',
  description: 'Count the total number of possible text messages from a pressed keys string.',
  language: 'python',
  solution: `class Solution:
    def countTexts(self, pressedKeys: str) -> int:
        MOD = 10**9 + 7
        n = len(pressedKeys)
        dp = [0] * (n + 1)
        dp[0] = 1

        for i in range(1, n + 1):
            dp[i] = dp[i-1]
            if i >= 2 and pressedKeys[i-1] == pressedKeys[i-2]:
                dp[i] = (dp[i] + dp[i-2]) % MOD
            if i >= 3 and pressedKeys[i-1] == pressedKeys[i-2] == pressedKeys[i-3]:
                dp[i] = (dp[i] + dp[i-3]) % MOD
            if i >= 4 and pressedKeys[i-1] in '79' and pressedKeys[i-1] == pressedKeys[i-2] == pressedKeys[i-3] == pressedKeys[i-4]:
                dp[i] = (dp[i] + dp[i-4]) % MOD

        return dp[n]`
},
{
  id: 'str-95',
  title: 'Minimum Time to Type Word Using Special Typewriter',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/',
  description: 'Find the minimum time to type a word using a circular typewriter starting at letter a.',
  language: 'python',
  solution: `class Solution:
    def minTimeToType(self, word: str) -> int:
        res = 0
        curr = 'a'

        for ch in word:
            diff = abs(ord(ch) - ord(curr))
            res += min(diff, 26 - diff) + 1
            curr = ch

        return res`
},
{
  id: 'str-96',
  title: 'Longest Substring Of All Vowels in Order',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/',
  description: 'Find the longest beautiful substring where vowels appear in alphabetical order and each vowel appears at least once.',
  language: 'python',
  solution: `class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        res = 0
        length = 1
        unique = 1

        for i in range(1, len(word)):
            if word[i] >= word[i-1]:
                length += 1
                if word[i] > word[i-1]:
                    unique += 1
            else:
                length = 1
                unique = 1

            if unique == 5:
                res = max(res, length)

        return res`
},
{
  id: 'str-97',
  title: 'Minimum Deletions to Make Character Frequencies Unique',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/',
  description: 'Find the minimum number of character deletions to make all character frequencies unique.',
  language: 'python',
  solution: `class Solution:
    def minDeletions(self, s: str) -> int:
        from collections import Counter
        freq = sorted(Counter(s).values(), reverse=True)
        res = 0
        seen = set()

        for f in freq:
            while f > 0 and f in seen:
                f -= 1
                res += 1
            seen.add(f)

        return res`
},
{
  id: 'str-98',
  title: 'Minimum Changes To Make Alternating Binary String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/',
  description: 'Find the minimum number of changes to make a binary string alternating.',
  language: 'python',
  solution: `class Solution:
    def minOperations(self, s: str) -> int:
        count = 0
        for i in range(len(s)):
            if s[i] != str(i % 2):
                count += 1
        return min(count, len(s) - count)`
},
{
  id: 'str-99',
  title: 'Removing Stars From a String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/removing-stars-from-a-string/',
  description: 'Remove stars and their closest non-star character to the left until no stars remain.',
  language: 'python',
  solution: `class Solution:
    def removeStars(self, s: str) -> str:
        stack = []
        for ch in s:
            if ch == '*':
                if stack:
                    stack.pop()
            else:
                stack.append(ch)
        return ''.join(stack)`
},
{
  id: 'str-100',
  title: 'Count Vowel Substrings of a String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/count-vowel-substrings-of-a-string/',
  description: 'Count the number of substrings that contain only vowels and have all five vowels present.',
  language: 'python',
  solution: `class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        vowels = set('aeiou')
        res = 0

        for i in range(len(word)):
            seen = set()
            for j in range(i, len(word)):
                if word[j] not in vowels:
                    break
                seen.add(word[j])
                if len(seen) == 5:
                    res += 1

        return res`
},
{
  id: 'str-101',
  title: 'Optimal Partition of String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/optimal-partition-of-string/',
  description: 'Find the minimum number of substrings the string can be partitioned into such that each substring has all unique characters.',
  language: 'python',
  solution: `class Solution:
    def partitionString(self, s: str) -> int:
        seen = set()
        res = 1

        for ch in s:
            if ch in seen:
                res += 1
                seen = set()
            seen.add(ch)

        return res`
},
{
  id: 'str-102',
  title: 'Capitalize the Title',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/capitalize-the-title/',
  description: 'Capitalize words with length greater than 2 and lowercase words with length at most 2.',
  language: 'python',
  solution: `class Solution:
    def capitalizeTitle(self, title: str) -> str:
        res = []
        for word in title.split():
            if len(word) <= 2:
                res.append(word.lower())
            else:
                res.append(word.capitalize())
        return ' '.join(res)`
},
{
  id: 'str-103',
  title: 'Number of Valid Subarrays',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-valid-subarrays/',
  description: 'Count the number of non-empty subarrays where the leftmost element is not larger than any other element.',
  language: 'python',
  solution: `class Solution:
    def validSubarrays(self, nums: List[int]) -> int:
        stack = []
        res = 0

        for num in nums:
            while stack and stack[-1] > num:
                stack.pop()
            stack.append(num)
            res += len(stack)

        return res`
},
{
  id: 'str-104',
  title: 'Longest Common Suffix Queries',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-common-suffix-queries/',
  description: 'Find the index of the shortest word from wordsContainer that has the longest common suffix with each word in wordsQuery.',
  language: 'python',
  solution: `class Solution:
    def stringIndices(self, wordsContainer: List[str], wordsQuery: List[str]) -> List[int]:
        trie = {}
        
        for i, word in enumerate(wordsContainer):
            node = trie
            for ch in reversed(word):
                if ch not in node:
                    node[ch] = {}
                node = node[ch]
                if 'idx' not in node or len(word) < len(wordsContainer[node['idx']]):
                    node['idx'] = i
            if 'idx' not in node or len(word) < len(wordsContainer[node['idx']]):
                node['idx'] = i

        res = []
        for word in wordsQuery:
            node = trie
            for ch in reversed(word):
                if ch not in node:
                    break
                node = node[ch]
            res.append(node.get('idx', 0))

        return res`
},
{
  id: 'str-105',
  title: 'Minimum Number of Moves to Seat Everyone',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/',
  description: 'Find the minimum number of moves to seat everyone where a move shifts a person or seat by one.',
  language: 'python',
  solution: `class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()
        return sum(abs(a - b) for a, b in zip(seats, students))`
},
{
  id: 'str-106',
  title: 'Longest Continuous Increasing Subsequence',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/longest-continuous-increasing-subsequence/',
  description: 'Find the length of the longest continuous strictly increasing subsequence in an array.',
  language: 'python',
  solution: `class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        if not nums:
            return 0

        res = 1
        length = 1

        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                length += 1
                res = max(res, length)
            else:
                length = 1

        return res`
},
{
  id: 'str-107',
  title: 'Find the Index of the First Occurrence in a String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/',
  description: 'Find the index of the first occurrence of needle in haystack using KMP algorithm.',
  language: 'python',
  solution: `class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        n, m = len(haystack), len(needle)
        if m == 0:
            return 0

        lps = [0] * m
        j = 0
        for i in range(1, m):
            while j > 0 and needle[i] != needle[j]:
                j = lps[j-1]
            if needle[i] == needle[j]:
                j += 1
            lps[i] = j

        j = 0
        for i in range(n):
            while j > 0 and haystack[i] != needle[j]:
                j = lps[j-1]
            if haystack[i] == needle[j]:
                j += 1
            if j == m:
                return i - m + 1

        return -1`
},
{
  id: 'str-108',
  title: 'Maximum Score After Splitting a String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-score-after-splitting-a-string/',
  description: 'Find the maximum score after splitting a binary string into two non-empty substrings where score is count of 0s in left and 1s in right.',
  language: 'python',
  solution: `class Solution:
    def maxScore(self, s: str) -> int:
        res = 0

        for i in range(1, len(s)):
            left = s[:i].count('0')
            right = s[i:].count('1')
            res = max(res, left + right)

        return res`
},
{
  id: 'str-109',
  title: 'Count the Number of Consistent Strings',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/count-the-number-of-consistent-strings/',
  description: 'Count the number of consistent strings where every character appears in the allowed string.',
  language: 'python',
  solution: `class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        allowed_set = set(allowed)
        return sum(1 for word in words if all(ch in allowed_set for ch in word))`
},
{
  id: 'str-110',
  title: 'Determine if String Halves Are Alike',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/determine-if-string-halves-are-alike/',
  description: 'Check if the two halves of a string have the same number of vowels.',
  language: 'python',
  solution: `class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = set('aeiouAEIOU')
        mid = len(s) // 2
        return sum(c in vowels for c in s[:mid]) == sum(c in vowels for c in s[mid:])`
},
{
  id: 'str-111',
  title: 'Minimum Number of Characters to Delete to Make Fancy String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/delete-characters-to-make-fancy-string/',
  description: 'Remove minimum characters so that no three consecutive characters are the same.',
  language: 'python',
  solution: `class Solution:
    def makeFancyString(self, s: str) -> str:
        res = []

        for ch in s:
            if len(res) >= 2 and res[-1] == ch and res[-2] == ch:
                continue
            res.append(ch)

        return ''.join(res)`
},
{
  id: 'str-112',
  title: 'Number of Different Integers in a String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-different-integers-in-a-string/',
  description: 'Count the number of different integers embedded in a string after removing leading zeros.',
  language: 'python',
  solution: `class Solution:
    def numDifferentIntegers(self, word: str) -> int:
        import re
        nums = re.findall(r'\d+', word)
        return len(set(int(n) for n in nums))`
},
{
  id: 'str-113',
  title: 'Merge Strings Alternately',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/merge-strings-alternately/',
  description: 'Merge two strings alternately character by character, appending remaining characters at the end.',
  language: 'python',
  solution: `class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        res = []
        i, j = 0, 0

        while i < len(word1) and j < len(word2):
            res.append(word1[i])
            res.append(word2[j])
            i += 1
            j += 1

        res.append(word1[i:])
        res.append(word2[j:])

        return ''.join(res)`
},
{
  id: 'str-114',
  title: 'Greatest Common Divisor of Strings',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/greatest-common-divisor-of-strings/',
  description: 'Find the largest string that divides both strings evenly.',
  language: 'python',
  solution: `class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        from math import gcd
        if str1 + str2 != str2 + str1:
            return ""
        return str1[:gcd(len(str1), len(str2))]`
},
{
  id: 'str-115',
  title: 'Reverse Prefix of Word',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/reverse-prefix-of-word/',
  description: 'Reverse the segment of a word from index 0 up to and including the first occurrence of a given character.',
  language: 'python',
  solution: `class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        idx = word.find(ch)
        if idx == -1:
            return word
        return word[:idx+1][::-1] + word[idx+1:]`
},
{
  id: 'str-116',
  title: 'Find Longest Special Substring That Occurs Thrice',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/',
  description: 'Find the longest special substring that occurs at least three times where a special substring contains only one distinct character.',
  language: 'python',
  solution: `class Solution:
    def maximumLength(self, s: str) -> int:
        from collections import Counter
        count = Counter()
        n = len(s)

        for i in range(n):
            ch = s[i]
            for j in range(i, n):
                if s[j] != ch:
                    break
                count[(ch, j - i + 1)] += 1

        res = -1
        for (ch, length), freq in count.items():
            if freq >= 3:
                res = max(res, length)

        return res`
},
{
  id: 'str-117',
  title: 'Longest Even Odd Subarray With Threshold',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/',
  description: 'Find the length of the longest subarray where elements alternate between even and odd and are all within a threshold.',
  language: 'python',
  solution: `class Solution:
    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:
        res = 0
        i = 0

        while i < len(nums):
            if nums[i] % 2 == 0 and nums[i] <= threshold:
                j = i
                while j < len(nums) and nums[j] <= threshold and nums[j] % 2 == j % 2 - i % 2 + (i % 2):
                    j += 1
                    if nums[j-1] % 2 != (j - i - 1) % 2:
                        break
                length = 1
                k = i
                while k + 1 < len(nums) and nums[k+1] <= threshold and nums[k] % 2 != nums[k+1] % 2:
                    k += 1
                    length += 1
                res = max(res, length)
                i = k + 1
            else:
                i += 1

        return res`
},
{
  id: 'str-118',
  title: 'Find the Longest Balanced Substring of a Binary String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/',
  description: 'Find the longest balanced substring containing equal number of 0s followed by equal number of 1s.',
  language: 'python',
  solution: `class Solution:
    def findTheLongestBalancedSubstring(self, s: str) -> int:
        res = 0
        n = len(s)

        for i in range(n):
            if s[i] == '0':
                zeros = 0
                ones = 0
                j = i
                while j < n and s[j] == '0':
                    zeros += 1
                    j += 1
                while j < n and s[j] == '1':
                    ones += 1
                    j += 1
                res = max(res, min(zeros, ones) * 2)

        return res`
},
{
  id: 'str-119',
  title: 'Minimum Number of Operations to Make Array Continuous',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/',
  description: 'Find the minimum number of operations to make an array continuous where all elements are unique and max-min equals n-1.',
  language: 'python',
  solution: `class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        nums = sorted(set(nums))
        m = len(nums)
        res = 0
        j = 0

        for i in range(m):
            while j < m and nums[j] < nums[i] + n:
                j += 1
            res = max(res, j - i)

        return n - res`
},
{
  id: 'str-120',
  title: 'Minimum Window Subsequence',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-window-subsequence/',
  description: 'Find the minimum window substring of s where t is a subsequence of that window.',
  language: 'python',
  solution: `class Solution:
    def minWindow(self, s: str, t: str) -> str:
        res = ""
        i = 0

        while i < len(s):
            j = 0
            while i < len(s):
                if s[i] == t[j]:
                    j += 1
                if j == len(t):
                    break
                i += 1

            if j < len(t):
                break

            end = i
            j = len(t) - 1
            while j >= 0:
                if s[i] == t[j]:
                    j -= 1
                i -= 1

            i += 1
            window = s[i:end+1]
            if not res or len(window) < len(res):
                res = window
            i += 1

        return res`
},
{
  id: 'str-121',
  title: 'Lexicographically Smallest String After Applying Operations',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/',
  description: 'Find the lexicographically smallest string after applying add and rotate operations any number of times.',
  language: 'python',
  solution: `class Solution:
    def findLexSmallestString(self, s: str, a: int, b: int) -> str:
        visited = set()
        queue = [s]
        res = s

        while queue:
            curr = queue.pop()
            if curr in visited:
                continue
            visited.add(curr)
            res = min(res, curr)

            # Apply add operation to odd indices
            added = list(curr)
            for i in range(1, len(curr), 2):
                added[i] = str((int(added[i]) + a) % 10)
            queue.append(''.join(added))

            # Apply rotate operation
            rotated = curr[-b:] + curr[:-b]
            queue.append(rotated)

        return res`
},
{
  id: 'str-122',
  title: 'Sum of Scores of Built Strings',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/sum-of-scores-of-built-strings/',
  description: 'Find the sum of Z-scores of all suffixes of a string using the Z-algorithm.',
  language: 'python',
  solution: `class Solution:
    def sumScores(self, s: str) -> int:
        n = len(s)
        z = [0] * n
        z[0] = n
        l, r = 0, 0

        for i in range(1, n):
            if i < r:
                z[i] = min(r - i, z[i - l])
            while i + z[i] < n and s[z[i]] == s[i + z[i]]:
                z[i] += 1
            if i + z[i] > r:
                l, r = i, i + z[i]

        return sum(z)`
},
{
  id: 'str-123',
  title: 'Shortest Palindrome',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/shortest-palindrome/',
  description: 'Find the shortest palindrome by adding characters in front of a given string.',
  language: 'python',
  solution: `class Solution:
    def shortestPalindrome(self, s: str) -> str:
        rev = s[::-1]
        combined = s + '#' + rev
        n = len(combined)
        kmp = [0] * n
        j = 0

        for i in range(1, n):
            while j > 0 and combined[i] != combined[j]:
                j = kmp[j-1]
            if combined[i] == combined[j]:
                j += 1
            kmp[i] = j

        longest_palindrome_prefix = kmp[-1]
        suffix = s[longest_palindrome_prefix:][::-1]
        return suffix + s`
},
{
  id: 'str-124',
  title: 'Repeated Substring Pattern',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/repeated-substring-pattern/',
  description: 'Determine if a string can be constructed by repeating a substring of itself.',
  language: 'python',
  solution: `class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        doubled = s + s
        trimmed = doubled[1:-1]
        return s in trimmed`
},
{
  id: 'str-125',
  title: 'Check if Two Strings Are Equivalent After Swaps',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/',
  description: 'Check if two string arrays are equivalent by comparing their concatenated results.',
  language: 'python',
  solution: `class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        return ''.join(word1) == ''.join(word2)`
},
{
  id: 'str-126',
  title: 'Count Substrings Starting and Ending with Given Character',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/',
  description: 'Count the number of substrings that start and end with a given character.',
  language: 'python',
  solution: `class Solution:
    def countSubstrings(self, s: str, c: str) -> int:
        count = s.count(c)
        return count * (count + 1) // 2`
},
{
  id: 'str-127',
  title: 'Minimum Length of String After Deleting Similar Ends',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/',
  description: 'Find the minimum length of a string after repeatedly deleting equal characters from both ends.',
  language: 'python',
  solution: `class Solution:
    def minimumLength(self, s: str) -> int:
        left, right = 0, len(s) - 1

        while left < right and s[left] == s[right]:
            ch = s[left]
            while left <= right and s[left] == ch:
                left += 1
            while left <= right and s[right] == ch:
                right -= 1

        return right - left + 1`
},
{
  id: 'str-128',
  title: 'Take K of Each Character From Left and Right',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/',
  description: 'Find the minimum number of minutes to take at least k of each character from left and right ends of a string.',
  language: 'python',
  solution: `class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        from collections import Counter
        count = Counter(s)

        if any(count[c] < k for c in 'abc'):
            return -1

        res = float('inf')
        window = Counter()
        left = 0

        for right in range(len(s)):
            window[s[right]] += 1
            while any(count[c] - window[c] < k for c in 'abc'):
                window[s[left]] -= 1
                left += 1
            res = min(res, len(s) - (right - left + 1))

        return res`
},
{
  id: 'str-129',
  title: 'Minimum Add to Make Parentheses Valid',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/',
  description: 'Find the minimum number of parentheses to add to make a string of parentheses valid.',
  language: 'python',
  solution: `class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        open_count = 0
        close_count = 0

        for ch in s:
            if ch == '(':
                open_count += 1
            elif ch == ')':
                if open_count > 0:
                    open_count -= 1
                else:
                    close_count += 1

        return open_count + close_count`
},
{
  id: 'str-130',
  title: 'Score of Parentheses',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/score-of-parentheses/',
  description: 'Calculate the score of a balanced parentheses string based on specific scoring rules.',
  language: 'python',
  solution: `class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        stack = [0]

        for ch in s:
            if ch == '(':
                stack.append(0)
            else:
                v = stack.pop()
                stack[-1] += max(2 * v, 1)

        return stack[0]`
},
{
  id: 'str-131',
  title: 'Decode String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/decode-string/',
  description: 'Decode an encoded string where k[encoded_string] means the encoded_string is repeated k times.',
  language: 'python',
  solution: `class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        curr_str = ""
        curr_num = 0

        for ch in s:
            if ch.isdigit():
                curr_num = curr_num * 10 + int(ch)
            elif ch == '[':
                stack.append((curr_str, curr_num))
                curr_str = ""
                curr_num = 0
            elif ch == ']':
                prev_str, num = stack.pop()
                curr_str = prev_str + num * curr_str
            else:
                curr_str += ch

        return curr_str`
},
{
  id: 'str-132',
  title: 'Number of Atoms',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-atoms/',
  description: 'Parse a chemical formula and return the count of each atom in sorted order.',
  language: 'python',
  solution: `class Solution:
    def countOfAtoms(self, formula: str) -> str:
        from collections import defaultdict
        stack = [defaultdict(int)]
        i = 0
        n = len(formula)

        while i < n:
            if formula[i] == '(':
                stack.append(defaultdict(int))
                i += 1
            elif formula[i] == ')':
                i += 1
                start = i
                while i < n and formula[i].isdigit():
                    i += 1
                mult = int(formula[start:i] or 1)
                top = stack.pop()
                for atom, cnt in top.items():
                    stack[-1][atom] += cnt * mult
            elif formula[i].isupper():
                start = i
                i += 1
                while i < n and formula[i].islower():
                    i += 1
                atom = formula[start:i]
                start = i
                while i < n and formula[i].isdigit():
                    i += 1
                cnt = int(formula[start:i] or 1)
                stack[-1][atom] += cnt

        return ''.join(atom + (str(cnt) if cnt > 1 else '')
                      for atom, cnt in sorted(stack[0].items()))`
},
{
  id: 'str-133',
  title: 'Valid Parenthesis String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/valid-parenthesis-string/',
  description: 'Check if a parenthesis string is valid where asterisk can be empty, open or close parenthesis.',
  language: 'python',
  solution: `class Solution:
    def checkValidString(self, s: str) -> bool:
        min_open = 0
        max_open = 0

        for ch in s:
            if ch == '(':
                min_open += 1
                max_open += 1
            elif ch == ')':
                min_open -= 1
                max_open -= 1
            else:
                min_open -= 1
                max_open += 1

            if max_open < 0:
                return False
            min_open = max(min_open, 0)

        return min_open == 0`
},
{
  id: 'str-134',
  title: 'Minimum Score After Removals on a Tree',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/',
  description: 'Find the maximum nesting depth of valid parentheses in a string.',
  language: 'python',
  solution: `class Solution:
    def maxDepth(self, s: str) -> int:
        res = 0
        depth = 0

        for ch in s:
            if ch == '(':
                depth += 1
                res = max(res, depth)
            elif ch == ')':
                depth -= 1

        return res`
},
{
  id: 'str-135',
  title: 'Longest Happy Prefix',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/longest-happy-prefix/',
  description: 'Find the longest prefix of a string that is also a suffix using KMP failure function.',
  language: 'python',
  solution: `class Solution:
    def longestPrefix(self, s: str) -> str:
        n = len(s)
        kmp = [0] * n
        j = 0

        for i in range(1, n):
            while j > 0 and s[i] != s[j]:
                j = kmp[j-1]
            if s[i] == s[j]:
                j += 1
            kmp[i] = j

        return s[:kmp[-1]]`
},
{
  id: 'str-136',
  title: 'Distinct Echo Substrings',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/distinct-echo-substrings/',
  description: 'Count the number of distinct substrings that can be written as a concatenation of two identical strings.',
  language: 'python',
  solution: `class Solution:
    def distinctEchoSubstrings(self, text: str) -> int:
        n = len(text)
        seen = set()

        for length in range(1, n // 2 + 1):
            count = 0
            for i in range(n - length):
                if text[i] == text[i + length]:
                    count += 1
                else:
                    count = 0
                if count == length:
                    seen.add(text[i + 1 - length: i + 1])
                    count -= 1

        return len(seen)`
},
{
  id: 'str-137',
  title: 'Minimum Number of Swaps to Make the String Balanced',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/',
  description: 'Find the minimum number of swaps to make a bracket string balanced.',
  language: 'python',
  solution: `class Solution:
    def minSwaps(self, s: str) -> int:
        unmatched = 0
        max_unmatched = 0

        for ch in s:
            if ch == '[':
                unmatched += 1
            else:
                unmatched -= 1
            max_unmatched = max(max_unmatched, -unmatched)

        return (max_unmatched + 1) // 2`
},
{
  id: 'str-138',
  title: 'Crawler Log Folder',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/crawler-log-folder/',
  description: 'Find the minimum number of operations to go back to the main folder after a series of folder operations.',
  language: 'python',
  solution: `class Solution:
    def minOperations(self, logs: List[str]) -> int:
        depth = 0

        for log in logs:
            if log == '../':
                depth = max(0, depth - 1)
            elif log == './':
                continue
            else:
                depth += 1

        return depth`
},
{
  id: 'str-139',
  title: 'Simplify Path',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/simplify-path/',
  description: 'Simplify a Unix style absolute path by resolving . and .. and multiple slashes.',
  language: 'python',
  solution: `class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []

        for part in path.split('/'):
            if part == '..':
                if stack:
                    stack.pop()
            elif part and part != '.':
                stack.append(part)

        return '/' + '/'.join(stack)`
},
{
  id: 'str-140',
  title: 'Thousand Separator',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/thousand-separator/',
  description: 'Add a dot as a thousand separator to an integer and return it as a string.',
  language: 'python',
  solution: `class Solution:
    def thousandSeparator(self, n: int) -> str:
        s = str(n)
        res = []

        for i, ch in enumerate(reversed(s)):
            if i > 0 and i % 3 == 0:
                res.append('.')
            res.append(ch)

        return ''.join(reversed(res))`
},
{
  id: 'str-141',
  title: 'Reformat The String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/reformat-the-string/',
  description: 'Reformat a string so that no two adjacent characters are of the same type by alternating digits and letters.',
  language: 'python',
  solution: `class Solution:
    def reformat(self, s: str) -> str:
        digits = [c for c in s if c.isdigit()]
        letters = [c for c in s if c.isalpha()]

        if abs(len(digits) - len(letters)) > 1:
            return ""

        if len(digits) < len(letters):
            digits, letters = letters, digits

        res = []
        for i in range(len(letters)):
            res.append(digits[i])
            res.append(letters[i])

        if len(digits) > len(letters):
            res.append(digits[-1])

        return ''.join(res)`
},
{
  id: 'str-142',
  title: 'Splitting a String Into Descending Consecutive Values',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/',
  description: 'Check if a string can be split into at least 3 parts with consecutive descending values.',
  language: 'python',
  solution: `class Solution:
    def splitString(self, s: str) -> bool:
        def backtrack(idx, prev, count):
            if idx == len(s):
                return count >= 3
            num = 0
            for i in range(idx, len(s)):
                num = num * 10 + int(s[i])
                if prev == -1 or num == prev - 1:
                    if backtrack(i + 1, num, count + 1):
                        return True
                if prev != -1 and num >= prev:
                    break
            return False

        return backtrack(0, -1, 0)`
},
{
  id: 'str-143',
  title: 'Check if a Parentheses String Can Be Valid',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/',
  description: 'Check if a parentheses string can be valid by changing locked positions.',
  language: 'python',
  solution: `class Solution:
    def canBeValid(self, s: str, locked: str) -> bool:
        if len(s) % 2 == 1:
            return False

        open_count = 0
        wild_count = 0

        for i in range(len(s)):
            if locked[i] == '0':
                wild_count += 1
            elif s[i] == '(':
                open_count += 1
            else:
                if open_count > 0:
                    open_count -= 1
                elif wild_count > 0:
                    wild_count -= 1
                else:
                    return False

        balance = 0
        for i in range(len(s) - 1, -1, -1):
            if locked[i] == '0':
                balance -= 1
            elif s[i] == ')':
                balance += 1
            else:
                balance -= 1
            if balance < 0:
                return False

        return True`
},
{
  id: 'str-144',
  title: 'Minimum Cost to Convert String I',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-convert-string-i/',
  description: 'Find the minimum cost to convert a source string to a target string using given character conversions.',
  language: 'python',
  solution: `class Solution:
    def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
        INF = float('inf')
        dist = [[INF] * 26 for _ in range(26)]

        for i in range(26):
            dist[i][i] = 0

        for o, c, w in zip(original, changed, cost):
            u, v = ord(o) - ord('a'), ord(c) - ord('a')
            dist[u][v] = min(dist[u][v], w)

        for k in range(26):
            for i in range(26):
                for j in range(26):
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

        res = 0
        for s, t in zip(source, target):
            u, v = ord(s) - ord('a'), ord(t) - ord('a')
            if dist[u][v] == INF:
                return -1
            res += dist[u][v]

        return res`
},
{
  id: 'str-145',
  title: 'Count Palindromic Subsequences',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/count-palindromic-subsequences/',
  description: 'Count the number of distinct palindromic subsequences of length 5 in a given string.',
  language: 'python',
  solution: `class Solution:
    def countPalindromes(self, s: str) -> int:
        MOD = 10**9 + 7
        n = len(s)
        res = 0

        for c1 in '0123456789':
            for c2 in '0123456789':
                pattern = c1 + c2 + '*' + c2 + c1
                pre = [0] * (n + 1)
                pre2 = [0] * (n + 1)
                suf = [0] * (n + 2)
                suf2 = [0] * (n + 2)

                cnt = 0
                for i in range(n):
                    if s[i] == c1:
                        cnt += 1
                    pre[i+1] = pre[i]
                    pre2[i+1] = pre2[i]
                    if s[i] == c2:
                        pre2[i+1] = (pre2[i] + cnt) % MOD
                    else:
                        pre2[i+1] = pre2[i]
                    if s[i] == c1:
                        pre[i+1] = (pre[i] + 1) % MOD

                cnt = 0
                for i in range(n-1, -1, -1):
                    if s[i] == c1:
                        cnt += 1
                    suf[i] = suf[i+1]
                    suf2[i] = suf2[i+1]
                    if s[i] == c2:
                        suf2[i] = (suf2[i+1] + cnt) % MOD
                    if s[i] == c1:
                        suf[i] = (suf[i+1] + 1) % MOD

                for i in range(2, n-2):
                    res = (res + pre2[i] * suf2[i+1]) % MOD

        return res`
},
{
  id: 'str-146',
  title: 'Find Beautiful Indices in the Given Array I',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/',
  description: 'Find all beautiful indices where pattern a starts and pattern b starts within distance k.',
  language: 'python',
  solution: `class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> List[int]:
        def kmp(text, pattern):
            n, m = len(text), len(pattern)
            lps = [0] * m
            j = 0
            for i in range(1, m):
                while j > 0 and pattern[i] != pattern[j]:
                    j = lps[j-1]
                if pattern[i] == pattern[j]:
                    j += 1
                lps[i] = j
            matches = []
            j = 0
            for i in range(n):
                while j > 0 and text[i] != pattern[j]:
                    j = lps[j-1]
                if text[i] == pattern[j]:
                    j += 1
                if j == m:
                    matches.append(i - m + 1)
                    j = lps[j-1]
            return matches

        a_indices = kmp(s, a)
        b_indices = kmp(s, b)
        res = []
        j = 0

        for i in a_indices:
            while j < len(b_indices) and b_indices[j] < i - k:
                j += 1
            if j < len(b_indices) and abs(b_indices[j] - i) <= k:
                res.append(i)

        return res`
},
{
  id: 'str-147',
  title: 'Longest Subsequence Repeated k Times',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/longest-subsequence-repeated-k-times/',
  description: 'Find the longest subsequence that when repeated k times is still a subsequence of the given string.',
  language: 'python',
  solution: `class Solution:
    def longestSubsequenceRepeatedK(self, s: str, k: int) -> str:
        from collections import Counter
        from itertools import product

        freq = Counter(s)
        chars = sorted([c for c in freq if freq[c] >= k], reverse=True)

        def isSubseq(sub, s, k):
            count = 0
            i = 0
            for ch in s:
                if ch == sub[i % len(sub)]:
                    i += 1
                if i == len(sub) * k:
                    return True
            return False

        res = ""
        queue = [""]

        while queue:
            curr = queue.pop(0)
            for ch in chars:
                candidate = curr + ch
                if isSubseq(candidate, s, k):
                    if len(candidate) > len(res) or (len(candidate) == len(res) and candidate > res):
                        res = candidate
                    queue.append(candidate)

        return res`
},
{
  id: 'str-148',
  title: 'Append Characters to String to Make Subsequence',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/',
  description: 'Find the minimum number of characters to append to string s so that string t becomes a subsequence of s.',
  language: 'python',
  solution: `class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        i = 0
        j = 0

        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                j += 1
            i += 1

        return len(t) - j`
},
{
  id: 'str-149',
  title: 'Count Substrings Without Repeating Character',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/count-substrings-without-repeating-character/',
  description: 'Count the number of substrings that contain no duplicate characters using sliding window.',
  language: 'python',
  solution: `class Solution:
    def numberOfSpecialSubstrings(self, s: str) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        left = 0
        res = 0

        for right in range(len(s)):
            count[s[right]] += 1

            while count[s[right]] > 1:
                count[s[left]] -= 1
                left += 1

            res += right - left + 1

        return res`
},
{
  id: 'str-150',
  title: 'Longest Ideal Subsequence',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-ideal-subsequence/',
  description: 'Find the longest ideal subsequence where adjacent characters differ by at most k in alphabet order.',
  language: 'python',
  solution: `class Solution:
    def longestIdealString(self, s: str, k: int) -> int:
        dp = [0] * 26

        for ch in s:
            i = ord(ch) - ord('a')
            best = 0
            for j in range(max(0, i - k), min(25, i + k) + 1):
                best = max(best, dp[j])
            dp[i] = best + 1

        return max(dp)`
},
{
  id: 'str-151',
  title: 'Check if String Is a Prefix of Array',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/',
  description: 'Check if a string is a prefix of an array by concatenating words in order.',
  language: 'python',
  solution: `class Solution:
    def isPrefixString(self, s: str, words: List[str]) -> bool:
        curr = ""
        for word in words:
            curr += word
            if curr == s:
                return True
            if len(curr) >= len(s):
                break
        return False`
},
{
  id: 'str-152',
  title: 'Longest Word With All Prefixes',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-word-with-all-prefixes/',
  description: 'Find the longest word in an array where every prefix of the word is also in the array.',
  language: 'python',
  solution: `class Solution:
    def longestWord(self, words: List[str]) -> str:
        word_set = set(words)
        res = ""

        for word in words:
            if all(word[:i] in word_set for i in range(1, len(word))):
                if len(word) > len(res) or (len(word) == len(res) and word < res):
                    res = word

        return res`
},
{
  id: 'str-153',
  title: 'Number of Ways to Split a String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-ways-to-split-a-string/',
  description: 'Count the number of ways to split a binary string into three parts with equal number of ones.',
  language: 'python',
  solution: `class Solution:
    def numWays(self, s: str) -> int:
        MOD = 10**9 + 7
        ones = s.count('1')

        if ones % 3 != 0:
            return 0

        if ones == 0:
            n = len(s)
            return (n - 1) * (n - 2) // 2 % MOD

        target = ones // 3
        count = 0
        first_end = second_start = second_end = third_start = 0

        cnt = 0
        for i, ch in enumerate(s):
            if ch == '1':
                cnt += 1
            if cnt == target:
                first_end = i
            if cnt == target + 1:
                second_start = i
                break

        cnt = 0
        for i, ch in enumerate(s):
            if ch == '1':
                cnt += 1
            if cnt == 2 * target:
                second_end = i
            if cnt == 2 * target + 1:
                third_start = i
                break

        return (second_start - first_end) * (third_start - second_end) % MOD`
},
{
  id: 'str-154',
  title: 'Minimum Cuts to Divide a Circle',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/',
  description: 'Find the minimum number of cuts needed to divide a circle into n equal slices.',
  language: 'python',
  solution: `class Solution:
    def numberOfCuts(self, n: int) -> int:
        if n == 1:
            return 0
        if n % 2 == 0:
            return n // 2
        return n`
},
{
  id: 'str-155',
  title: 'Parentheses in Expression',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/check-if-there-is-a-valid-parenthesization/',
  description: 'Determine the minimum number of parentheses needed to make an expression valid.',
  language: 'python',
  solution: `class Solution:
    def checkValidString(self, s: str) -> bool:
        lo = hi = 0

        for ch in s:
            if ch == '(':
                lo += 1
                hi += 1
            elif ch == ')':
                lo -= 1
                hi -= 1
            else:
                lo -= 1
                hi += 1

            if hi < 0:
                return False
            lo = max(lo, 0)

        return lo == 0`
},
{
  id: 'str-156',
  title: 'Sum of Beauty of All Substrings',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/sum-of-beauty-of-all-substrings/',
  description: 'Find the sum of beauty of all substrings where beauty is the difference between max and min frequency of characters.',
  language: 'python',
  solution: `class Solution:
    def beautySum(self, s: str) -> int:
        from collections import Counter
        res = 0

        for i in range(len(s)):
            count = Counter()
            for j in range(i, len(s)):
                count[s[j]] += 1
                res += max(count.values()) - min(count.values())

        return res`
},
{
  id: 'str-157',
  title: 'Maximum Product of Word Lengths',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-product-of-word-lengths/',
  description: 'Find the maximum product of lengths of two words that share no common letters.',
  language: 'python',
  solution: `class Solution:
    def maxProduct(self, words: List[str]) -> int:
        masks = []
        for word in words:
            mask = 0
            for ch in word:
                mask |= 1 << (ord(ch) - ord('a'))
            masks.append(mask)

        res = 0
        for i in range(len(words)):
            for j in range(i + 1, len(words)):
                if masks[i] & masks[j] == 0:
                    res = max(res, len(words[i]) * len(words[j]))

        return res`
},
{
  id: 'str-158',
  title: 'Zigzag String Partition',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/string-without-aaa-or-bbb/',
  description: 'Construct a string without three consecutive same characters given counts of a and b.',
  language: 'python',
  solution: `class Solution:
    def strWithout3a3b(self, a: int, b: int) -> str:
        res = []

        while a > 0 or b > 0:
            if a > b:
                res.append('a')
                a -= 1
                if a > 0:
                    res.append('a')
                    a -= 1
                if b > 0:
                    res.append('b')
                    b -= 1
            elif b > a:
                res.append('b')
                b -= 1
                if b > 0:
                    res.append('b')
                    b -= 1
                if a > 0:
                    res.append('a')
                    a -= 1
            else:
                res.append('a')
                a -= 1
                if b > 0:
                    res.append('b')
                    b -= 1

        return ''.join(res)`
},
{
  id: 'str-159',
  title: 'Concatenated Words',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/concatenated-words/',
  description: 'Find all words that can be formed by concatenating at least two shorter words from the same array.',
  language: 'python',
  solution: `class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        word_set = set(words)

        def canForm(word):
            if not word:
                return False
            dp = [False] * (len(word) + 1)
            dp[0] = True
            for i in range(1, len(word) + 1):
                for j in range(i):
                    if dp[j] and word[j:i] in word_set and (j > 0 or i < len(word)):
                        dp[i] = True
                        break
            return dp[len(word)]

        return [word for word in words if canForm(word)]`
},
{
  id: 'str-160',
  title: 'Longest Substring with Equal Number of 0s and 1s',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/contiguous-array/',
  description: 'Find the maximum length subarray with equal number of 0s and 1s using prefix sum and hashmap.',
  language: 'python',
  solution: `class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        prefix = {0: -1}
        count = 0
        res = 0

        for i, num in enumerate(nums):
            count += 1 if num == 1 else -1

            if count in prefix:
                res = max(res, i - prefix[count])
            else:
                prefix[count] = i

        return res`
},
{
  id: 'str-161',
  title: 'Check if All Characters Have Equal Number of Occurrences',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/',
  description: 'Check if all characters in a string appear the same number of times.',
  language: 'python',
  solution: `class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        from collections import Counter
        count = Counter(s)
        return len(set(count.values())) == 1`
},
{
  id: 'str-162',
  title: 'Minimum Deletions to Make String Balanced',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/',
  description: 'Find the minimum number of deletions to make a string balanced where all as come before all bs.',
  language: 'python',
  solution: `class Solution:
    def minimumDeletions(self, s: str) -> int:
        b_count = 0
        res = 0

        for ch in s:
            if ch == 'b':
                b_count += 1
            else:
                res = min(res + 1, b_count)

        return res`
},
{
  id: 'str-163',
  title: 'Minimum Time Difference',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-time-difference/',
  description: 'Find the minimum time difference between any two time points in a list of 24-hour clock times.',
  language: 'python',
  solution: `class Solution:
    def findMinDifference(self, timePoints: List[str]) -> int:
        minutes = []

        for time in timePoints:
            h, m = map(int, time.split(':'))
            minutes.append(h * 60 + m)

        minutes.sort()
        res = float('inf')

        for i in range(1, len(minutes)):
            res = min(res, minutes[i] - minutes[i-1])

        res = min(res, 1440 - minutes[-1] + minutes[0])

        return res`
},
{
  id: 'str-164',
  title: 'Rearrange Characters to Make Target String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/rearrange-characters-to-make-target-string/',
  description: 'Find the maximum number of copies of target that can be formed using characters from s.',
  language: 'python',
  solution: `class Solution:
    def rearrangeCharacters(self, s: str, target: str) -> int:
        from collections import Counter
        s_count = Counter(s)
        t_count = Counter(target)

        return min(s_count[ch] // t_count[ch] for ch in t_count)`
},
{
  id: 'str-165',
  title: 'Longest Subarray of 1s After Deleting One Element',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/',
  description: 'Find the longest subarray of 1s after deleting exactly one element from a binary array.',
  language: 'python',
  solution: `class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        left = 0
        zeros = 0
        res = 0

        for right in range(len(nums)):
            if nums[right] == 0:
                zeros += 1

            while zeros > 1:
                if nums[left] == 0:
                    zeros -= 1
                left += 1

            res = max(res, right - left)

        return res`
},
{
  id: 'str-166',
  title: 'Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/',
  description: 'Count subarrays of size k whose average is greater than or equal to a given threshold.',
  language: 'python',
  solution: `class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        res = 0
        window_sum = sum(arr[:k])

        if window_sum >= k * threshold:
            res += 1

        for i in range(k, len(arr)):
            window_sum += arr[i] - arr[i - k]
            if window_sum >= k * threshold:
                res += 1

        return res`
},
{
  id: 'str-167',
  title: 'Minimum Consecutive Cards to Pick Up',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/',
  description: 'Find the minimum number of consecutive cards to pick up that contains at least one matching pair.',
  language: 'python',
  solution: `class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        last_seen = {}
        res = float('inf')

        for i, card in enumerate(cards):
            if card in last_seen:
                res = min(res, i - last_seen[card] + 1)
            last_seen[card] = i

        return res if res != float('inf') else -1`
},
{
  id: 'str-168',
  title: 'Maximum Erasure Value',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-erasure-value/',
  description: 'Find the maximum sum of a subarray with all unique elements using sliding window.',
  language: 'python',
  solution: `class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        seen = set()
        left = 0
        curr_sum = 0
        res = 0

        for right in range(len(nums)):
            while nums[right] in seen:
                seen.remove(nums[left])
                curr_sum -= nums[left]
                left += 1
            seen.add(nums[right])
            curr_sum += nums[right]
            res = max(res, curr_sum)

        return res`
},
{
  id: 'str-169',
  title: 'Frequency of the Most Frequent Element',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/frequency-of-the-most-frequent-element/',
  description: 'Find the maximum frequency of any element after performing at most k increment operations.',
  language: 'python',
  solution: `class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()
        left = 0
        curr_sum = 0
        res = 0

        for right in range(len(nums)):
            curr_sum += nums[right]

            while nums[right] * (right - left + 1) - curr_sum > k:
                curr_sum -= nums[left]
                left += 1

            res = max(res, right - left + 1)

        return res`
},
{
  id: 'str-170',
  title: 'Substrings of Size Three with Distinct Characters',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/',
  description: 'Count the number of substrings of size three with all distinct characters.',
  language: 'python',
  solution: `class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        res = 0
        for i in range(len(s) - 2):
            if len(set(s[i:i+3])) == 3:
                res += 1
        return res`
},
{
  id: 'str-171',
  title: 'Longest Turbulent Subarray',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-turbulent-subarray/',
  description: 'Find the length of the longest turbulent subarray where comparisons strictly alternate.',
  language: 'python',
  solution: `class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        left = 0
        res = 1

        for right in range(1, len(arr)):
            if right >= 2:
                if (arr[right-2] < arr[right-1] and arr[right-1] > arr[right]) or \
                   (arr[right-2] > arr[right-1] and arr[right-1] < arr[right]):
                    continue
                elif arr[right-1] == arr[right]:
                    left = right
                else:
                    left = right - 1
            elif arr[right] == arr[right-1]:
                left = right

            res = max(res, right - left + 1)

        return res`
},
{
  id: 'str-172',
  title: 'Minimum Size Subarray Sum',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
  description: 'Find the minimum length subarray whose sum is greater than or equal to target.',
  language: 'python',
  solution: `class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        curr_sum = 0
        res = float('inf')

        for right in range(len(nums)):
            curr_sum += nums[right]

            while curr_sum >= target:
                res = min(res, right - left + 1)
                curr_sum -= nums[left]
                left += 1

        return res if res != float('inf') else 0`
},
{
  id: 'str-173',
  title: 'Maximum Points You Can Obtain from Cards',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/',
  description: 'Find the maximum score by picking exactly k cards from either end of the array.',
  language: 'python',
  solution: `class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        n = len(cardPoints)
        window = n - k
        curr_sum = sum(cardPoints[:window])
        min_sum = curr_sum

        for i in range(window, n):
            curr_sum += cardPoints[i] - cardPoints[i - window]
            min_sum = min(min_sum, curr_sum)

        return sum(cardPoints) - min_sum`
},
{
  id: 'str-174',
  title: 'Number of Equal Count Substrings',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-equal-count-substrings/',
  description: 'Count substrings where every character that appears does so exactly count times.',
  language: 'python',
  solution: `class Solution:
    def equalCountSubstrings(self, s: str, count: int) -> int:
        from collections import Counter
        res = 0

        for unique in range(1, 27):
            k = unique * count
            if k > len(s):
                break
            window = Counter(s[:k])
            if sum(v == count for v in window.values()) == unique:
                res += 1
            for i in range(k, len(s)):
                window[s[i]] += 1
                window[s[i - k]] -= 1
                if window[s[i - k]] == 0:
                    del window[s[i - k]]
                if sum(v == count for v in window.values()) == unique:
                    res += 1

        return res`
},
{
  id: 'str-175',
  title: 'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/',
  description: 'Find the longest subarray where the absolute difference between max and min is at most limit.',
  language: 'python',
  solution: `class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        from collections import deque
        max_dq = deque()
        min_dq = deque()
        left = 0
        res = 0

        for right in range(len(nums)):
            while max_dq and nums[max_dq[-1]] <= nums[right]:
                max_dq.pop()
            while min_dq and nums[min_dq[-1]] >= nums[right]:
                min_dq.pop()

            max_dq.append(right)
            min_dq.append(right)

            while nums[max_dq[0]] - nums[min_dq[0]] > limit:
                left += 1
                if max_dq[0] < left:
                    max_dq.popleft()
                if min_dq[0] < left:
                    min_dq.popleft()

            res = max(res, right - left + 1)

        return res`
},
{
  id: 'str-176',
  title: 'Max Consecutive Ones III',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/max-consecutive-ones-iii/',
  description: 'Find the maximum number of consecutive 1s after flipping at most k zeros.',
  language: 'python',
  solution: `class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        zeros = 0
        res = 0

        for right in range(len(nums)):
            if nums[right] == 0:
                zeros += 1

            while zeros > k:
                if nums[left] == 0:
                    zeros -= 1
                left += 1

            res = max(res, right - left + 1)

        return res`
},
{
  id: 'str-177',
  title: 'Permutation in String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/permutation-in-string/',
  description: 'Check if any permutation of string s1 is a substring of string s2 using sliding window.',
  language: 'python',
  solution: `class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        from collections import Counter
        if len(s1) > len(s2):
            return False

        s1_count = Counter(s1)
        window = Counter(s2[:len(s1)])

        if s1_count == window:
            return True

        for i in range(len(s1), len(s2)):
            window[s2[i]] += 1
            window[s2[i - len(s1)]] -= 1
            if window[s2[i - len(s1)]] == 0:
                del window[s2[i - len(s1)]]
            if window == s1_count:
                return True

        return False`
},
{
  id: 'str-178',
  title: 'Fruit Into Baskets',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/fruit-into-baskets/',
  description: 'Find the maximum number of fruits you can pick using two baskets where each basket holds one type of fruit.',
  language: 'python',
  solution: `class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        from collections import defaultdict
        basket = defaultdict(int)
        left = 0
        res = 0

        for right in range(len(fruits)):
            basket[fruits[right]] += 1

            while len(basket) > 2:
                basket[fruits[left]] -= 1
                if basket[fruits[left]] == 0:
                    del basket[fruits[left]]
                left += 1

            res = max(res, right - left + 1)

        return res`
},
{
  id: 'str-179',
  title: 'Subarrays with K Different Integers',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/subarrays-with-k-different-integers/',
  description: 'Count the number of subarrays with exactly k different integers.',
  language: 'python',
  solution: `class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        from collections import defaultdict

        def atMostK(k):
            count = defaultdict(int)
            left = 0
            res = 0
            for right in range(len(nums)):
                count[nums[right]] += 1
                while len(count) > k:
                    count[nums[left]] -= 1
                    if count[nums[left]] == 0:
                        del count[nums[left]]
                    left += 1
                res += right - left + 1
            return res

        return atMostK(k) - atMostK(k - 1)`
},
{
  id: 'str-180',
  title: 'Count Number of Nice Subarrays',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/count-number-of-nice-subarrays/',
  description: 'Count the number of subarrays with exactly k odd numbers.',
  language: 'python',
  solution: `class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        def atMostK(k):
            left = 0
            res = 0
            odd_count = 0
            for right in range(len(nums)):
                if nums[right] % 2 == 1:
                    odd_count += 1
                while odd_count > k:
                    if nums[left] % 2 == 1:
                        odd_count -= 1
                    left += 1
                res += right - left + 1
            return res

        return atMostK(k) - atMostK(k - 1)`
},
{
  id: 'str-181',
  title: 'Binary Subarrays With Sum',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/binary-subarrays-with-sum/',
  description: 'Count the number of non-empty subarrays with a sum equal to goal.',
  language: 'python',
  solution: `class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        def atMostK(k):
            if k < 0:
                return 0
            left = 0
            curr_sum = 0
            res = 0
            for right in range(len(nums)):
                curr_sum += nums[right]
                while curr_sum > k:
                    curr_sum -= nums[left]
                    left += 1
                res += right - left + 1
            return res

        return atMostK(goal) - atMostK(goal - 1)`
},
{
  id: 'str-182',
  title: 'Number of Substrings Containing All Three Characters',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/',
  description: 'Count the number of substrings containing at least one occurrence of all three characters a, b and c.',
  language: 'python',
  solution: `class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        last = {'a': -1, 'b': -1, 'c': -1}
        res = 0

        for i, ch in enumerate(s):
            last[ch] = i
            res += 1 + min(last.values())

        return res`
},
{
  id: 'str-183',
  title: 'Grumpy Bookstore Owner',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/grumpy-bookstore-owner/',
  description: 'Find the maximum number of satisfied customers using a secret technique for a window of minutes.',
  language: 'python',
  solution: `class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        base = sum(c for c, g in zip(customers, grumpy) if g == 0)
        extra = sum(customers[:minutes][i] * grumpy[:minutes][i] for i in range(minutes))
        max_extra = extra

        for i in range(minutes, len(customers)):
            extra += customers[i] * grumpy[i]
            extra -= customers[i - minutes] * grumpy[i - minutes]
            max_extra = max(max_extra, extra)

        return base + max_extra`
},
{
  id: 'str-184',
  title: 'Maximum Average Subarray I',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-average-subarray-i/',
  description: 'Find the contiguous subarray of length k with the maximum average value.',
  language: 'python',
  solution: `class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        window_sum = sum(nums[:k])
        max_sum = window_sum

        for i in range(k, len(nums)):
            window_sum += nums[i] - nums[i - k]
            max_sum = max(max_sum, window_sum)

        return max_sum / k`
},
{
  id: 'str-185',
  title: 'Maximum Sum of Two Non-Overlapping Subarrays',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/',
  description: 'Find the maximum sum of two non-overlapping subarrays with lengths firstLen and secondLen.',
  language: 'python',
  solution: `class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        def helper(L, M):
            prefix = [0] * (len(nums) + 1)
            for i in range(len(nums)):
                prefix[i+1] = prefix[i] + nums[i]

            res = 0
            max_L = 0

            for i in range(L + M, len(nums) + 1):
                max_L = max(max_L, prefix[i-M] - prefix[i-M-L])
                res = max(res, max_L + prefix[i] - prefix[i-M])

            return res

        return max(helper(firstLen, secondLen), helper(secondLen, firstLen))`
},
{
  id: 'str-186',
  title: 'K Radius Subarray Averages',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/k-radius-subarray-averages/',
  description: 'Find the k-radius averages for each index in an array where average is calculated from k elements on each side.',
  language: 'python',
  solution: `class Solution:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        res = [-1] * n
        window = 2 * k + 1

        if window > n:
            return res

        curr_sum = sum(nums[:window])
        res[k] = curr_sum // window

        for i in range(window, n):
            curr_sum += nums[i] - nums[i - window]
            res[i - k] = curr_sum // window

        return res`
},
{
  id: 'str-187',
  title: 'Diet Plan Performance',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/diet-plan-performance/',
  description: 'Calculate the diet plan performance score based on sliding window sums compared to lower and upper thresholds.',
  language: 'python',
  solution: `class Solution:
    def dietPlanPerformance(self, calories: List[int], k: int, lower: int, upper: int) -> int:
        window_sum = sum(calories[:k])
        res = 0

        if window_sum < lower:
            res -= 1
        elif window_sum > upper:
            res += 1

        for i in range(k, len(calories)):
            window_sum += calories[i] - calories[i - k]
            if window_sum < lower:
                res -= 1
            elif window_sum > upper:
                res += 1

        return res`
},
{
  id: 'str-188',
  title: 'Maximum Number of Vowels in a Substring of Given Length',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/',
  description: 'Find the maximum number of vowels in any substring of length k using sliding window.',
  language: 'python',
  solution: `class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set('aeiou')
        window = sum(1 for c in s[:k] if c in vowels)
        res = window

        for i in range(k, len(s)):
            window += (s[i] in vowels) - (s[i - k] in vowels)
            res = max(res, window)
            if res == k:
                break

        return res`
},
{
  id: 'str-189',
  title: 'Sliding Window Maximum',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/sliding-window-maximum/',
  description: 'Find the maximum value in each sliding window of size k using a monotonic deque.',
  language: 'python',
  solution: `class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        from collections import deque
        dq = deque()
        res = []

        for i in range(len(nums)):
            while dq and dq[0] < i - k + 1:
                dq.popleft()

            while dq and nums[dq[-1]] < nums[i]:
                dq.pop()

            dq.append(i)

            if i >= k - 1:
                res.append(nums[dq[0]])

        return res`
},
{
  id: 'str-190',
  title: 'Longest Subarray With Maximum Bitwise AND',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/',
  description: 'Find the length of the longest subarray with the maximum possible bitwise AND value.',
  language: 'python',
  solution: `class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        max_val = max(nums)
        res = 0
        curr = 0

        for num in nums:
            if num == max_val:
                curr += 1
                res = max(res, curr)
            else:
                curr = 0

        return res`
}


    ]
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    icon: '🔗',
    description: 'Problems involving singly/doubly linked list operations, pointer manipulation.',
    color: '#6C63FF',
    problems: [
      {
        id: 'll-1',
        title: 'Reverse Linked List',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/',
        description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
        language: 'python',
        solution: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        current = head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        return prev`
      },
      {
        id: 'll-2',
        title: 'Merge Two Sorted Lists',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/',
        description: 'Merge two sorted linked lists and return it as a sorted list.',
        language: 'python',
        solution: `class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        current = dummy
        while list1 and list2:
            if list1.val <= list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next
            current = current.next
        current.next = list1 or list2
        return dummy.next`
      },
      {
        id: 'll-3',
        title: 'Remove Nth Node From End of List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
        description: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
        language: 'python',
        solution: `class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        slow = fast = dummy
        for _ in range(n + 1):
            fast = fast.next
        while fast:
            slow = slow.next
            fast = fast.next
        slow.next = slow.next.next
        return dummy.next`
      },
      {
        id: 'll-4',
        title: 'Reorder List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/reorder-list/',
        description: 'Reorder the list to be: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...',
        language: 'python',
        solution: `class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        # Find middle
        slow, fast = head, head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        
        # Reverse second half
        prev, curr = None, slow.next
        slow.next = None
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        
        # Merge two halves
        first, second = head, prev
        while second:
            tmp1, tmp2 = first.next, second.next
            first.next = second
            second.next = tmp1
            first, second = tmp1, tmp2`
      },
        
            {
    id: 'll-6',
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/',
    description: 'Given head, determine if the linked list has a cycle in it.',
    language: 'python',
    solution: `class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False`
},
{
    id: 'll-7',
    title: 'Intersection of Two Linked Lists',
    difficulty: 'Easy',
    leetcodeUrl: 'https://leetcode.com/problems/intersection-of-two-linked-lists/',
    description: 'Find the node at which the two lists intersect.',
    language: 'python',
    solution: `class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        a, b = headA, headB
        while a != b:
            a = a.next if a else headB
            b = b.next if b else headA
        return a`
},
{
    id: 'll-8',
    title: 'Palindrome Linked List',
    difficulty: 'Easy',
    leetcodeUrl: 'https://leetcode.com/problems/palindrome-linked-list/',
    description: 'Given the head of a singly linked list, return true if it is a palindrome.',
    language: 'python',
    solution: `class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        
        # Find middle
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        # Reverse second half
        prev = None
        while slow:
            nxt = slow.next
            slow.next = prev
            prev = slow
            slow = nxt
        
        # Compare both halves
        left, right = head, prev
        while right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
        
        return True`
},
{
    id: 'll-9',
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/add-two-numbers/',
    description: 'Add two numbers represented by linked lists and return the sum as a linked list.',
    language: 'python',
    solution: `class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        curr = dummy
        carry = 0
        
        while l1 or l2 or carry:
            val = carry
            if l1:
                val += l1.val
                l1 = l1.next
            if l2:
                val += l2.val
                l2 = l2.next
            
            carry = val // 10
            curr.next = ListNode(val % 10)
            curr = curr.next
        
        return dummy.next`
},
{
    id: 'll-10',
    title: 'Odd Even Linked List',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/odd-even-linked-list/',
    description: 'Group all odd-indexed nodes together followed by the even-indexed nodes.',
    language: 'python',
    solution: `class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head
        
        odd = head
        even = head.next
        even_head = even
        
        while even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next = odd.next
            even = even.next
        
        odd.next = even_head
        return head`
},
{
    id: 'll-11',
    title: 'Sort List',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/sort-list/',
    description: 'Sort a linked list in O(n log n) time using constant space complexity.',
    language: 'python',
    solution: `class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        
        # Split list
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        mid = slow.next
        slow.next = None
        
        left = self.sortList(head)
        right = self.sortList(mid)
        
        return self.merge(left, right)
    
    def merge(self, l1, l2):
        dummy = ListNode(0)
        tail = dummy
        
        while l1 and l2:
            if l1.val < l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next
            tail = tail.next
        
        tail.next = l1 if l1 else l2
        return dummy.next`
},
{
    id: 'll-12',
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/add-two-numbers/',
    description: 'Add two numbers represented by linked lists and return the sum as a linked list.',
    language: 'python',
    solution: `class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        curr = dummy
        carry = 0
        
        while l1 or l2 or carry:
            val = carry
            if l1:
                val += l1.val
                l1 = l1.next
            if l2:
                val += l2.val
                l2 = l2.next
            
            carry = val // 10
            curr.next = ListNode(val % 10)
            curr = curr.next
        
        return dummy.next`
},
{
    id: 'll-13',
    title: 'Odd Even Linked List',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/odd-even-linked-list/',
    description: 'Group all odd-indexed nodes together followed by the even-indexed nodes.',
    language: 'python',
    solution: `class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head
        
        odd = head
        even = head.next
        even_head = even
        
        while even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next = odd.next
            even = even.next
        
        odd.next = even_head
        return head`
},
{
    id: 'll-12',
    title: 'Rotate List',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/rotate-list/',
    description: 'Rotate the list to the right by k places.',
    language: 'python',
    solution: `class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k == 0:
            return head
        
        # Find length and tail
        length = 1
        tail = head
        while tail.next:
            tail = tail.next
            length += 1
        
        k = k % length
        if k == 0:
            return head
        
        # Make it circular
        tail.next = head
        
        # Find new tail
        steps = length - k
        new_tail = head
        for _ in range(steps - 1):
            new_tail = new_tail.next
        
        new_head = new_tail.next
        new_tail.next = None
        
        return new_head`
},
{
    id: 'll-12',
    title: 'Rotate List',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/rotate-list/',
    description: 'Rotate the list to the right by k places.',
    language: 'python',
    solution: `class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k == 0:
            return head
        
        # Find length and tail
        length = 1
        tail = head
        while tail.next:
            tail = tail.next
            length += 1
        
        k = k % length
        if k == 0:
            return head
        
        # Make it circular
        tail.next = head
        
        # Find new tail
        steps = length - k
        new_tail = head
        for _ in range(steps - 1):
            new_tail = new_tail.next
        
        new_head = new_tail.next
        new_tail.next = None
        
        return new_head`
},
{
    id: 'll-13',
    title: 'Flatten a Multilevel Doubly Linked List',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/',
    description: 'Flatten a multilevel doubly linked list into a single-level linked list.',
    language: 'python',
    solution: `class Solution:
    def flatten(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return head
        
        def dfs(node):
            curr = node
            last = node
            
            while curr:
                nxt = curr.next
                if curr.child:
                    child_last = dfs(curr.child)
                    
                    curr.next = curr.child
                    curr.child.prev = curr
                    curr.child = None
                    
                    if nxt:
                        child_last.next = nxt
                        nxt.prev = child_last
                    
                    last = child_last
                else:
                    last = curr
                
                curr = nxt
            
            return last
        
        dfs(head)
        return head`
},
{
    id: 'll-14',
    title: 'LRU Cache',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/lru-cache/',
    description: 'Design a data structure that follows the Least Recently Used (LRU) cache constraint.',
    language: 'python',
    solution: `class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.head = ListNode(0)
        self.tail = ListNode(0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _insert(self, node):
        node.prev = self.tail.prev
        node.next = self.tail
        self.tail.prev.next = node
        self.tail.prev = node

    def get(self, key: int) -> int:
        if key in self.cache:
            self._remove(self.cache[key])
            self._insert(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self._remove(self.cache[key])
        self.cache[key] = ListNode(value)
        self.cache[key].key = key
        self._insert(self.cache[key])
        if len(self.cache) > self.capacity:
            lru = self.head.next
            self._remove(lru)
            del self.cache[lru.key]`
},
{
    id: 'll-15',
    title: 'Copy List with Random Pointer',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
    description: 'A linked list where each node has a random pointer. Return a deep copy of the list.',
    language: 'python',
    solution: `class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None
        
        old_to_new = {}
        
        curr = head
        while curr:
            old_to_new[curr] = Node(curr.val)
            curr = curr.next
        
        curr = head
        while curr:
            if curr.next:
                old_to_new[curr].next = old_to_new[curr.next]
            if curr.random:
                old_to_new[curr].random = old_to_new[curr.random]
            curr = curr.next
        
        return old_to_new[head]`
},
{
    id: 'll-16',
    title: 'Find the Duplicate Number',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/find-the-duplicate-number/',
    description: 'Given an array of n+1 integers where each integer is between 1 and n, find the duplicate number using linked list cycle detection.',
    language: 'python',
    solution: `class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow = fast = nums[0]
        
        # Phase 1: detect cycle
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break
        
        # Phase 2: find entry point
        slow = nums[0]
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]
        
        return slow`
},
{
    id: 'll-17',
    title: 'Swap Nodes in Pairs',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/swap-nodes-in-pairs/',
    description: 'Given a linked list, swap every two adjacent nodes and return its head.',
    language: 'python',
    solution: `class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        prev = dummy
        
        while prev.next and prev.next.next:
            first = prev.next
            second = prev.next.next
            
            prev.next = second
            first.next = second.next
            second.next = first
            
            prev = first
        
        return dummy.next`
},
{
    id: 'll-18',
    title: 'Middle of the Linked List',
    difficulty: 'Easy',
    leetcodeUrl: 'https://leetcode.com/problems/middle-of-the-linked-list/',
    description: 'Given the head of a singly linked list, return the middle node. If two middle nodes exist, return the second one.',
    language: 'python',
    solution: `class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = fast = head
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        return slow`
},
{
    id: 'll-19',
    title: 'Remove Duplicates from Sorted List',
    difficulty: 'Easy',
    leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/',
    description: 'Given the head of a sorted linked list, delete all duplicates such that each element appears only once.',
    language: 'python',
    solution: `class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        
        while curr and curr.next:
            if curr.val == curr.next.val:
                curr.next = curr.next.next
            else:
                curr = curr.next
        
        return head`
},
{
    id: 'll-20',
    title: 'Delete Node in a Linked List',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/delete-node-in-a-linked-list/',
    description: 'Delete a node in a linked list given only access to that node (not the head).',
    language: 'python',
    solution: `class Solution:
    def deleteNode(self, node):
        node.val = node.next.val
        node.next = node.next.next`
},
{
    id: 'll-21',
    title: 'Reverse Nodes in k-Group',
    difficulty: 'Hard',
    leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
    description: 'Given the head of a linked list, reverse the nodes of the list k at a time and return the modified list.',
    language: 'python',
    solution: `class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        group_prev = dummy

        while True:
            kth = self.getKth(group_prev, k)
            if not kth:
                break

            group_next = kth.next
            prev, curr = kth.next, group_prev.next

            while curr != group_next:
                nxt = curr.next
                curr.next = prev
                prev = curr
                curr = nxt

            tmp = group_prev.next
            group_prev.next = kth
            group_prev = tmp

        return dummy.next

    def getKth(self, curr, k):
        while curr and k > 0:
            curr = curr.next
            k -= 1
        return curr`
},
{
    id: 'll-21',
    title: 'Reverse Nodes in k-Group',
    difficulty: 'Hard',
    leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
    description: 'Given the head of a linked list, reverse the nodes of the list k at a time and return the modified list.',
    language: 'python',
    solution: `class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        group_prev = dummy
        
        while True:
            kth = self.getKth(group_prev, k)
            if not kth:
                break
            
            group_next = kth.next
            prev, curr = kth.next, group_prev.next
            
            while curr != group_next:
                tmp = curr.next
                curr.next = prev
                prev = curr
                curr = tmp
            
            tmp = group_prev.next
            group_prev.next = kth
            group_prev = tmp
        
        return dummy.next
    
    def getKth(self, curr, k):
        while curr and k > 0:
            curr = curr.next
            k -= 1
        return curr`
},
{
    id: 'll-22',
    title: 'Merge K Sorted Lists',
    difficulty: 'Hard',
    leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
    description: 'Merge k sorted linked lists and return it as one sorted list.',
    language: 'python',
    solution: `class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists or len(lists) == 0:
            return None
        
        while len(lists) > 1:
            merged = []
            for i in range(0, len(lists), 2):
                l1 = lists[i]
                l2 = lists[i + 1] if i + 1 < len(lists) else None
                merged.append(self.mergeTwoLists(l1, l2))
            lists = merged
        
        return lists[0]
    
    def mergeTwoLists(self, l1, l2):
        dummy = ListNode(0)
        curr = dummy
        
        while l1 and l2:
            if l1.val <= l2.val:
                curr.next = l1
                l1 = l1.next
            else:
                curr.next = l2
                l2 = l2.next
            curr = curr.next
        
        curr.next = l1 if l1 else l2
        return dummy.next`
},
    ]
  },
  {
    id: 'stack',
    name: 'Stack',
    icon: '📚',
    description: 'Problems using LIFO data structure for expression evaluation, backtracking, and more.',
    color: '#FFD93D',
    problems: [
      {
        id: 'stk-1',
        title: 'Valid Parentheses',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/',
        description: 'Given a string s containing just the characters (, ), {, }, [ and ], determine if the input string is valid.',
        language: 'python',
        solution: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        for char in s:
            if char in mapping:
                top = stack.pop() if stack else '#'
                if mapping[char] != top:
                    return False
            else:
                stack.append(char)
        return not stack`
      },
      {
        id: 'stk-2',
        title: 'Min Stack',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/min-stack/',
        description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
        language: 'python',
        solution: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    
    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.min_stack[-1] if self.min_stack else val)
        self.min_stack.append(val)
    
    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()
    
    def top(self) -> int:
        return self.stack[-1]
    
    def getMin(self) -> int:
        return self.min_stack[-1]`
      },
      {
        id: 'stk-3',
        title: 'Evaluate Reverse Polish Notation',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
        description: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation.',
        language: 'python',
        solution: `class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for token in tokens:
            if token in '+-*/':
                b, a = stack.pop(), stack.pop()
                if token == '+': stack.append(a + b)
                elif token == '-': stack.append(a - b)
                elif token == '*': stack.append(a * b)
                else: stack.append(int(a / b))
            else:
                stack.append(int(token))
        return stack[0]`
      },
      {
        id: 'stk-1',
        title: 'Valid Parentheses',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/',
        description: 'Given a string s containing just the characters (, ), {, }, [ and ], determine if the input string is valid.',
        language: 'python',
        solution: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        for char in s:
            if char in mapping:
                top = stack.pop() if stack else '#'
                if mapping[char] != top:
                    return False
            else:
                stack.append(char)
        return not stack`
      },
      {
        id: 'stk-2',
        title: 'Min Stack',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/min-stack/',
        description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
        language: 'python',
        solution: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    
    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.min_stack[-1] if self.min_stack else val)
        self.min_stack.append(val)
    
    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()
    
    def top(self) -> int:
        return self.stack[-1]
    
    def getMin(self) -> int:
        return self.min_stack[-1]`
      },
      {
        id: 'stk-3',
        title: 'Evaluate Reverse Polish Notation',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
        description: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation.',
        language: 'python',
        solution: `class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for token in tokens:
            if token in '+-*/':
                b, a = stack.pop(), stack.pop()
                if token == '+': stack.append(a + b)
                elif token == '-': stack.append(a - b)
                elif token == '*': stack.append(a * b)
                else: stack.append(int(a / b))
            else:
                stack.append(int(token))
        return stack[0]`
      },
      {
  id: 'stk-4',
  title: 'Daily Temperatures',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/daily-temperatures/',
  description: 'Given an array of integers temperatures representing daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.',
  language: 'python',
  solution: `class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = []  # (temp, index)
        for i, t in enumerate(temperatures):
            while stack and t > stack[-1][0]:
                _, idx = stack.pop()
                res[idx] = i - idx
            stack.append((t, i))
        return res`
},
{
  id: 'stk-5',
  title: 'Car Fleet',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/car-fleet/',
  description: 'There are n cars at given miles away from the starting mile 0, traveling to their destination at target miles. Return the number of car fleets that will arrive at the destination.',
  language: 'python',
  solution: `class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pairs = sorted(zip(position, speed), reverse=True)
        stack = []
        for pos, spd in pairs:
            time = (target - pos) / spd
            stack.append(time)
            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()
        return len(stack)`
},
{
  id: 'stk-6',
  title: 'Largest Rectangle in Histogram',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
  description: 'Given an array of integers heights representing the histogram bar heights where the width of each bar is 1, return the area of the largest rectangle in the histogram.',
  language: 'python',
  solution: `class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        max_area = 0
        stack = []  # (index, height)
        for i, h in enumerate(heights):
            start = i
            while stack and stack[-1][1] > h:
                idx, height = stack.pop()
                max_area = max(max_area, height * (i - idx))
                start = idx
            stack.append((start, h))
        for idx, height in stack:
            max_area = max(max_area, height * (len(heights) - idx))
        return max_area`
},
{
  id: 'stk-7',
  title: 'Generate Parentheses',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/generate-parentheses/',
  description: 'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
  language: 'python',
  solution: `class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        stack = []
        def backtrack(open_count, close_count):
            if open_count == close_count == n:
                res.append(''.join(stack))
                return
            if open_count < n:
                stack.append('(')
                backtrack(open_count + 1, close_count)
                stack.pop()
            if close_count < open_count:
                stack.append(')')
                backtrack(open_count, close_count + 1)
                stack.pop()
        backtrack(0, 0)
        return res`
},
{
  id: 'stk-8',
  title: 'Decode String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/decode-string/',
  description: 'Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.',
  language: 'python',
  solution: `class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        cur_str = ''
        cur_num = 0
        for char in s:
            if char.isdigit():
                cur_num = cur_num * 10 + int(char)
            elif char == '[':
                stack.append((cur_str, cur_num))
                cur_str, cur_num = '', 0
            elif char == ']':
                prev_str, num = stack.pop()
                cur_str = prev_str + num * cur_str
            else:
                cur_str += char
        return cur_str`
},
{
  id: 'stk-9',
  title: 'Next Greater Element I',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-i/',
  description: 'Given two arrays nums1 and nums2, return an array answer such that answer[i] is the next greater number for nums1[i] in nums2. If no greater number exists, return -1.',
  language: 'python',
  solution: `class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        next_greater = {}
        stack = []
        for num in nums2:
            while stack and stack[-1] < num:
                next_greater[stack.pop()] = num
            stack.append(num)
        for num in stack:
            next_greater[num] = -1
        return [next_greater[n] for n in nums1]`
},
{
  id: 'stk-10',
  title: 'Asteroid Collision',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/asteroid-collision/',
  description: 'Given an array asteroids of integers representing asteroids in a row, find out the state after all collisions. Positive = moving right, negative = moving left. Same direction never collide.',
  language: 'python',
  solution: `class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for ast in asteroids:
            alive = True
            while alive and ast < 0 and stack and stack[-1] > 0:
                if stack[-1] < -ast:
                    stack.pop()
                elif stack[-1] == -ast:
                    stack.pop()
                    alive = False
                else:
                    alive = False
            if alive:
                stack.append(ast)
        return stack`
},
{
  id: 'stk-11',
  title: 'Remove K Digits',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/remove-k-digits/',
  description: 'Given string num representing a non-negative integer and an integer k, return the smallest possible integer after removing k digits from num.',
  language: 'python',
  solution: `class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        for digit in num:
            while k and stack and stack[-1] > digit:
                stack.pop()
                k -= 1
            stack.append(digit)
        # Remove remaining k digits from the end
        stack = stack[:-k] if k else stack
        return ''.join(stack).lstrip('0') or '0'`
},
{
  id: 'stk-12',
  title: 'Trapping Rain Water',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
  description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
  language: 'python',
  solution: `class Solution:
    def trap(self, height: List[int]) -> int:
        stack = []
        water = 0
        for i, h in enumerate(height):
            while stack and h > height[stack[-1]]:
                top = stack.pop()
                if not stack:
                    break
                distance = i - stack[-1] - 1
                bounded_height = min(h, height[stack[-1]]) - height[top]
                water += distance * bounded_height
            stack.append(i)
        return water`
},
{
  id: 'stk-13',
  title: 'Basic Calculator II',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/basic-calculator-ii/',
  description: 'Given a string s which represents an expression, evaluate this expression and return its value. The integer division should truncate toward zero.',
  language: 'python',
  solution: `class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        num = 0
        op = '+'
        for i, ch in enumerate(s):
            if ch.isdigit():
                num = num * 10 + int(ch)
            if (not ch.isdigit() and ch != ' ') or i == len(s) - 1:
                if op == '+': stack.append(num)
                elif op == '-': stack.append(-num)
                elif op == '*': stack.append(stack.pop() * num)
                elif op == '/': stack.append(int(stack.pop() / num))
                op = ch
                num = 0
        return sum(stack)`
},
    ]
  },
  {
    id: 'hash-map',
    name: 'Hash Map',
    icon: '🗺️',
    description: 'Problems utilizing hash maps for O(1) lookups, frequency counting, and caching.',
    color: '#A8E6CF',
    problems: [
      {
        id: 'hm-1',
        title: 'Two Sum',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/two-sum/',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        language: 'python',
        solution: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in hashmap:
                return [hashmap[complement], i]
            hashmap[num] = i`
      },
      {
        id: 'hm-2',
        title: 'LRU Cache',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/lru-cache/',
        description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.',
        language: 'python',
        solution: `class LRUCache:
    def __init__(self, capacity: int):
        from collections import OrderedDict
        self.cache = OrderedDict()
        self.capacity = capacity
    
    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`
      },
      {
        id: 'hm-3',
        title: 'Top K Frequent Elements',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/',
        description: 'Given an integer array nums and an integer k, return the k most frequent elements.',
        language: 'python',
        solution: `class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        from collections import Counter
        count = Counter(nums)
        return [x for x, _ in count.most_common(k)]`
      },
      {
  id: 'hm-4',
  title: 'Valid Parentheses',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/',
  description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
  language: 'python',
  solution: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        for char in s:
            if char in mapping:
                top = stack.pop() if stack else '#'
                if mapping[char] != top:
                    return False
            else:
                stack.append(char)
        return not stack`
},
{
  id: 'hm-5',
  title: 'Best Time to Buy and Sell Stock',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
  description: 'Given an array prices where prices[i] is the price of a stock on the ith day, return the maximum profit you can achieve.',
  language: 'python',
  solution: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            if price < min_price:
                min_price = price
            elif price - min_price > max_profit:
                max_profit = price - min_price
        return max_profit`
},
{
  id: 'hm-6',
  title: 'Maximum Subarray',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/',
  description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
  language: 'python',
  solution: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = nums[0]
        curr_sum = nums[0]
        for num in nums[1:]:
            curr_sum = max(num, curr_sum + num)
            max_sum = max(max_sum, curr_sum)
        return max_sum`
},
{
  id: 'hm-7',
  title: 'Climbing Stairs',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/',
  description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
  language: 'python',
  solution: `class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        a, b = 1, 2
        for _ in range(3, n + 1):
            a, b = b, a + b
        return b`
},
{
  id: 'hm-8',
  title: 'Product of Array Except Self',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/',
  description: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].',
  language: 'python',
  solution: `class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [1] * n
        prefix = 1
        for i in range(n):
            result[i] = prefix
            prefix *= nums[i]
        suffix = 1
        for i in range(n - 1, -1, -1):
            result[i] *= suffix
            suffix *= nums[i]
        return result`
},
{
  id: 'hm-9',
  title: 'Merge Two Sorted Lists',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/',
  description: 'Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.',
  language: 'python',
  solution: `class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        curr = dummy
        while l1 and l2:
            if l1.val <= l2.val:
                curr.next = l1
                l1 = l1.next
            else:
                curr.next = l2
                l2 = l2.next
            curr = curr.next
        curr.next = l1 if l1 else l2
        return dummy.next`
},
{
  id: 'hm-10',
  title: 'Number of Islands',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-islands/',
  description: 'Given an m x n 2D binary grid which represents a map of "1"s (land) and "0"s (water), return the number of islands.',
  language: 'python',
  solution: `class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0
        count = 0
        def dfs(i, j):
            if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] != '1':
                return
            grid[i][j] = '0'
            dfs(i+1, j); dfs(i-1, j)
            dfs(i, j+1); dfs(i, j-1)
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    dfs(i, j)
                    count += 1
        return count`
},
{
  id: 'hm-11',
  title: 'Binary Search',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/binary-search/',
  description: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. Return the index if found, else return -1.',
  language: 'python',
  solution: `class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1`
},
{
  id: 'hm-12',
  title: 'Reverse Linked List',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/',
  description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
  language: 'python',
  solution: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        return prev`
},
{
  id: 'hm-13',
  title: 'Longest Substring Without Repeating Characters',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  description: 'Given a string s, find the length of the longest substring without repeating characters.',
  language: 'python',
  solution: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        left = 0
        max_len = 0
        for right in range(len(s)):
            while s[right] in char_set:
                char_set.remove(s[left])
                left += 1
            char_set.add(s[right])
            max_len = max(max_len, right - left + 1)
        return max_len`
},
{
  id: 'hm-14',
  title: '3Sum',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/3sum/',
  description: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.',
  language: 'python',
  solution: `class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = []
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            left, right = i + 1, len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total == 0:
                    result.append([nums[i], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
                elif total < 0:
                    left += 1
                else:
                    right -= 1
        return result`
},
{
  id: 'hm-15',
  title: 'Word Search',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/word-search/',
  description: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells.',
  language: 'python',
  solution: `class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows, cols = len(board), len(board[0])
        def dfs(r, c, idx):
            if idx == len(word):
                return True
            if r < 0 or r >= rows or c < 0 or c >= cols or board[r][c] != word[idx]:
                return False
            temp = board[r][c]
            board[r][c] = '#'
            found = (dfs(r+1, c, idx+1) or dfs(r-1, c, idx+1) or
                     dfs(r, c+1, idx+1) or dfs(r, c-1, idx+1))
            board[r][c] = temp
            return found
        for r in range(rows):
            for c in range(cols):
                if dfs(r, c, 0):
                    return True
        return False`
},
{
  id: 'hm-16',
  title: 'Coin Change',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/coin-change/',
  description: 'Given an array of coins and a total amount, return the fewest number of coins needed to make up that amount. Return -1 if it cannot be achieved.',
  language: 'python',
  solution: `class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        for coin in coins:
            for i in range(coin, amount + 1):
                dp[i] = min(dp[i], dp[i - coin] + 1)
        return dp[amount] if dp[amount] != float('inf') else -1`
},
{
  id: 'hm-17',
  title: 'Rotate Image',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/rotate-image/',
  description: 'Given an n x n 2D matrix representing an image, rotate the image by 90 degrees clockwise in-place.',
  language: 'python',
  solution: `class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)
        # Transpose the matrix
        for i in range(n):
            for j in range(i + 1, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        # Reverse each row
        for i in range(n):
            matrix[i].reverse()`
},
{
  id: 'hm-18',
  title: 'Lowest Common Ancestor of a Binary Search Tree',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
  description: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes p and q in the BST.',
  language: 'python',
  solution: `class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        while root:
            if p.val < root.val and q.val < root.val:
                root = root.left
            elif p.val > root.val and q.val > root.val:
                root = root.right
            else:
                return root`
},
{
  id: 'hm-19',
  title: 'Find Minimum in Rotated Sorted Array',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
  description: 'Given the sorted rotated array nums of unique elements, return the minimum element of this array.',
  language: 'python',
  solution: `class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid
        return nums[left]`
},
{
  id: 'hm-20',
  title: 'Container With Most Water',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/',
  description: 'Given n non-negative integers where each represents a point at coordinate (i, ai), find two lines that together with the x-axis forms a container that holds the most water.',
  language: 'python',
  solution: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        max_water = 0
        while left < right:
            water = min(height[left], height[right]) * (right - left)
            max_water = max(max_water, water)
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return max_water`
},
{
  id: 'hm-21',
  title: 'Subsets',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/subsets/',
  description: 'Given an integer array nums of unique elements, return all possible subsets (the power set).',
  language: 'python',
  solution: `class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        def backtrack(start, current):
            result.append(current[:])
            for i in range(start, len(nums)):
                current.append(nums[i])
                backtrack(i + 1, current)
                current.pop()
        backtrack(0, [])
        return result`
},
{
  id: 'hm-22',
  title: 'Linked List Cycle',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/',
  description: 'Given head of a linked list, determine if the linked list has a cycle in it using Floyd\'s cycle detection algorithm.',
  language: 'python',
  solution: `class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False`
},
{
  id: 'hm-23',
  title: 'Jump Game',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/jump-game/',
  description: 'Given an integer array nums where each element represents max jump length at that position, return true if you can reach the last index.',
  language: 'python',
  solution: `class Solution:
    def canJump(self, nums: List[int]) -> bool:
        max_reach = 0
        for i, jump in enumerate(nums):
            if i > max_reach:
                return False
            max_reach = max(max_reach, i + jump)
        return True`
},
{
  id: 'hm-24',
  title: 'Daily Temperatures',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/daily-temperatures/',
  description: 'Given an array of integers temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.',
  language: 'python',
  solution: `class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = [0] * len(temperatures)
        stack = []
        for i, temp in enumerate(temperatures):
            while stack and temp > temperatures[stack[-1]]:
                idx = stack.pop()
                result[idx] = i - idx
            stack.append(i)
        return result`
},
{
  id: 'hm-25',
  title: 'Longest Common Subsequence',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-common-subsequence/',
  description: 'Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.',
  language: 'python',
  solution: `class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if text1[i - 1] == text2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
        return dp[m][n]`
},
{
  id: 'hm-26',
  title: 'Course Schedule',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/course-schedule/',
  description: 'Given numCourses and prerequisites array, return true if you can finish all courses. This is essentially cycle detection in a directed graph.',
  language: 'python',
  solution: `class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = [[] for _ in range(numCourses)]
        for a, b in prerequisites:
            graph[b].append(a)
        # 0=unvisited, 1=visiting, 2=visited
        state = [0] * numCourses
        def dfs(node):
            if state[node] == 1:
                return False
            if state[node] == 2:
                return True
            state[node] = 1
            for neighbor in graph[node]:
                if not dfs(neighbor):
                    return False
            state[node] = 2
            return True
        for i in range(numCourses):
            if not dfs(i):
                return False
        return True`
},
{
  id: 'hm-27',
  title: 'House Robber',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/house-robber/',
  description: 'Given an integer array nums representing the amount of money of each house, return the maximum amount you can rob without alerting the police (no two adjacent houses).',
  language: 'python',
  solution: `class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        prev2, prev1 = 0, 0
        for num in nums:
            curr = max(prev1, prev2 + num)
            prev2 = prev1
            prev1 = curr
        return prev1`
},
{
  id: 'hm-28',
  title: 'Spiral Matrix',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/spiral-matrix/',
  description: 'Given an m x n matrix, return all elements of the matrix in spiral order.',
  language: 'python',
  solution: `class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        result = []
        top, bottom, left, right = 0, len(matrix)-1, 0, len(matrix[0])-1
        while top <= bottom and left <= right:
            for i in range(left, right + 1):
                result.append(matrix[top][i])
            top += 1
            for i in range(top, bottom + 1):
                result.append(matrix[i][right])
            right -= 1
            if top <= bottom:
                for i in range(right, left - 1, -1):
                    result.append(matrix[bottom][i])
                bottom -= 1
            if left <= right:
                for i in range(bottom, top - 1, -1):
                    result.append(matrix[i][left])
                left += 1
        return result`
},
{
  id: 'hm-29',
  title: 'Trapping Rain Water',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
  description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
  language: 'python',
  solution: `class Solution:
    def trap(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        left_max, right_max = 0, 0
        water = 0
        while left < right:
            if height[left] < height[right]:
                if height[left] >= left_max:
                    left_max = height[left]
                else:
                    water += left_max - height[left]
                left += 1
            else:
                if height[right] >= right_max:
                    right_max = height[right]
                else:
                    water += right_max - height[right]
                right -= 1
        return water`
},
{
  id: 'hm-30',
  title: 'Serialize and Deserialize Binary Tree',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
  description: 'Design an algorithm to serialize and deserialize a binary tree. Serialization is converting a tree to a string, deserialization is the reverse.',
  language: 'python',
  solution: `class Codec:
    def serialize(self, root: Optional[TreeNode]) -> str:
        if not root:
            return 'null'
        from collections import deque
        queue = deque([root])
        result = []
        while queue:
            node = queue.popleft()
            if node:
                result.append(str(node.val))
                queue.append(node.left)
                queue.append(node.right)
            else:
                result.append('null')
        return ','.join(result)

    def deserialize(self, data: str) -> Optional[TreeNode]:
        if data == 'null':
            return None
        from collections import deque
        nodes = data.split(',')
        root = TreeNode(int(nodes[0]))
        queue = deque([root])
        i = 1
        while queue:
            node = queue.popleft()
            if nodes[i] != 'null':
                node.left = TreeNode(int(nodes[i]))
                queue.append(node.left)
            i += 1
            if nodes[i] != 'null':
                node.right = TreeNode(int(nodes[i]))
                queue.append(node.right)
            i += 1
        return root`
},
{
  id: 'hm-31',
  title: 'Median of Two Sorted Arrays',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
  description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).',
  language: 'python',
  solution: `class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        m, n = len(nums1), len(nums2)
        left, right = 0, m
        while left <= right:
            partition1 = (left + right) // 2
            partition2 = (m + n + 1) // 2 - partition1
            maxLeft1 = float('-inf') if partition1 == 0 else nums1[partition1 - 1]
            minRight1 = float('inf') if partition1 == m else nums1[partition1]
            maxLeft2 = float('-inf') if partition2 == 0 else nums2[partition2 - 1]
            minRight2 = float('inf') if partition2 == n else nums2[partition2]
            if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:
                if (m + n) % 2 == 0:
                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0
                else:
                    return float(max(maxLeft1, maxLeft2))
            elif maxLeft1 > minRight2:
                right = partition1 - 1
            else:
                left = partition1 + 1`
},{
  id: 'hm-32',
  title: 'Palindrome Linked List',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/palindrome-linked-list/',
  description: 'Given the head of a singly linked list, return true if it is a palindrome or false otherwise. Must solve in O(n) time and O(1) space.',
  language: 'python',
  solution: `class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        prev = None
        while slow:
            next_node = slow.next
            slow.next = prev
            prev = slow
            slow = next_node
        left, right = head, prev
        while right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
        return True`
},
{
  id: 'hm-33',
  title: 'Maximum Product Subarray',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/',
  description: 'Given an integer array nums, find a subarray that has the largest product, and return the product.',
  language: 'python',
  solution: `class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        max_prod = nums[0]
        min_prod = nums[0]
        result = nums[0]
        for num in nums[1:]:
            candidates = (num, max_prod * num, min_prod * num)
            max_prod = max(candidates)
            min_prod = min(candidates)
            result = max(result, max_prod)
        return result`
},
{
  id: 'hm-34',
  title: 'Generate Parentheses',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/generate-parentheses/',
  description: 'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
  language: 'python',
  solution: `class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result = []
        def backtrack(current, open_count, close_count):
            if len(current) == 2 * n:
                result.append(current)
                return
            if open_count < n:
                backtrack(current + '(', open_count + 1, close_count)
            if close_count < open_count:
                backtrack(current + ')', open_count, close_count + 1)
        backtrack('', 0, 0)
        return result`
},
{
  id: 'hm-35',
  title: 'Decode Ways',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/decode-ways/',
  description: 'Given a string s containing only digits, return the number of ways to decode it. A → 1, B → 2, ..., Z → 26.',
  language: 'python',
  solution: `class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0
        n = len(s)
        dp = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 1
        for i in range(2, n + 1):
            one_digit = int(s[i - 1])
            two_digit = int(s[i - 2:i])
            if one_digit >= 1:
                dp[i] += dp[i - 1]
            if 10 <= two_digit <= 26:
                dp[i] += dp[i - 2]
        return dp[n]`
},
{
  id: 'hm-36',
  title: 'Pacific Atlantic Water Flow',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
  description: 'Given an m x n matrix of heights, return a list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.',
  language: 'python',
  solution: `class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        rows, cols = len(heights), len(heights[0])
        pacific, atlantic = set(), set()
        def dfs(r, c, visited, prev_height):
            if (r, c) in visited or r < 0 or c < 0 or r >= rows or c >= cols:
                return
            if heights[r][c] < prev_height:
                return
            visited.add((r, c))
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                dfs(r + dr, c + dc, visited, heights[r][c])
        for r in range(rows):
            dfs(r, 0, pacific, heights[r][0])
            dfs(r, cols - 1, atlantic, heights[r][cols - 1])
        for c in range(cols):
            dfs(0, c, pacific, heights[0][c])
            dfs(rows - 1, c, atlantic, heights[rows - 1][c])
        return [[r, c] for r, c in pacific & atlantic]`
},
    ]
  },
  {
    id: 'tree',
    name: 'Tree',
    icon: '🌳',
    description: 'Problems involving binary trees, BSTs, traversals, and tree-based algorithms.',
    color: '#C44DFF',
    problems: [
      {
        id: 'tree-1',
        title: 'Maximum Depth of Binary Tree',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
        description: 'Given the root of a binary tree, return its maximum depth.',
        language: 'python',
        solution: `class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))`
      },
      {
        id: 'tree-2',
        title: 'Invert Binary Tree',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/invert-binary-tree/',
        description: 'Given the root of a binary tree, invert the tree, and return its root.',
        language: 'python',
        solution: `class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root`
      },
      {
        id: 'tree-3',
        title: 'Validate Binary Search Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree/',
        description: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST).',
        language: 'python',
        solution: `class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def validate(node, low=float('-inf'), high=float('inf')):
            if not node:
                return True
            if node.val <= low or node.val >= high:
                return False
            return (validate(node.left, low, node.val) and 
                    validate(node.right, node.val, high))
        return validate(root)`
      },
      {
        id: 'tree-4',
        title: 'Lowest Common Ancestor of BST',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
        description: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes.',
        language: 'python',
        solution: `class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        while root:
            if p.val < root.val and q.val < root.val:
                root = root.left
            elif p.val > root.val and q.val > root.val:
                root = root.right
            else:
                return root`
      },
      {
  id: 'tree-5',
  title: 'Binary Tree Level Order Traversal',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
  description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values (i.e., from left to right, level by level).',
  language: 'python',
  solution: `class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        result = []
        queue = deque([root])
        while queue:
            level = []
            for _ in range(len(queue)):
                node = queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level)
        return result`
},
{
        id: 'tree-6',
        title: 'Binary Tree Right Side View',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/binary-tree-right-side-view/',
        description: 'Given the root of a binary tree, imagine yourself standing on the right side of it. Return the values of the nodes you can see ordered from top to bottom.',
        language: 'python',
        solution: `class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        from collections import deque
        if not root:
            return []
        result = []
        queue = deque([root])
        while queue:
            for i in range(len(queue)):
                node = queue.popleft()
                if i == 0:
                    result.append(node.val)
                if node.right:
                    queue.append(node.right)
                if node.left:
                    queue.append(node.left)
        return result`,
      },
      {
        id: 'tree-7',
        title: 'Count Good Nodes in Binary Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/',
        description: 'Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X. Return the number of good nodes in the binary tree.',
        language: 'python',
        solution: `class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node, max_val):
            if not node:
                return 0
            good = 1 if node.val >= max_val else 0
            max_val = max(max_val, node.val)
            good += dfs(node.left, max_val)
            good += dfs(node.right, max_val)
            return good
        return dfs(root, root.val)`,
      },
      {
        id: 'tree-8',
        title: 'Binary Tree Zigzag Level Order Traversal',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
        description: 'Given the root of a binary tree, return the zigzag level order traversal of its nodes values. (i.e., from left to right, then right to left for the next level and alternate between).',
        language: 'python',
        solution: `class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        from collections import deque
        if not root:
            return []
        result = []
        queue = deque([root])
        left_to_right = True
        while queue:
            level = []
            for _ in range(len(queue)):
                node = queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level if left_to_right else level[::-1])
            left_to_right = not left_to_right
        return result`,
      },
      {
        id: 'tree-9',
        title: 'Diameter of Binary Tree',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/diameter-of-binary-tree/',
        description: 'Given the root of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes which may or may not pass through the root.',
        language: 'python',
        solution: `class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        result = 0
        def dfs(node) -> int:
            nonlocal result
            if not node:
                return 0
            left = dfs(node.left)
            right = dfs(node.right)
            result = max(result, left + right)
            return 1 + max(left, right)
        dfs(root)
        return result`,
      },
      {
        id: 'tree-10',
        title: 'Balanced Binary Tree',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/balanced-binary-tree/',
        description: 'Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.',
        language: 'python',
        solution: `class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def dfs(node) -> int:
            if not node:
                return 0
            left = dfs(node.left)
            right = dfs(node.right)
            if left == -1 or right == -1 or abs(left - right) > 1:
                return -1
            return 1 + max(left, right)
        return dfs(root) != -1`,
      },
      {
        id: 'tree-11',
        title: 'Same Tree',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/same-tree/',
        description: 'Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical and the nodes have the same value.',
        language: 'python',
        solution: `class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True
        if not p or not q:
            return False
        if p.val != q.val:
            return False
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)`,
      },
      {
        id: 'tree-12',
        title: 'Subtree of Another Tree',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/subtree-of-another-tree/',
        description: 'Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values as subRoot and false otherwise.',
        language: 'python',
        solution: `class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def isSame(s, t):
            if not s and not t:
                return True
            if not s or not t:
                return False
            return s.val == t.val and isSame(s.left, t.left) and isSame(s.right, t.right)
        if not root:
            return False
        if isSame(root, subRoot):
            return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)`,
      },
      {
        id: 'tree-13',
        title: 'Path Sum',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/path-sum/',
        description: 'Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.',
        language: 'python',
        solution: `class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        if not root.left and not root.right:
            return root.val == targetSum
        return self.hasPathSum(root.left, targetSum - root.val) or \
               self.hasPathSum(root.right, targetSum - root.val)`,
      },
      {
        id: 'tree-14',
        title: 'Binary Tree Maximum Path Sum',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
        description: 'Given the root of a binary tree, return the maximum path sum of any non-empty path. A path is a sequence of nodes where each pair of adjacent nodes has an edge, and no node appears more than once.',
        language: 'python',
        solution: `class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        result = [root.val]
        def dfs(node) -> int:
            if not node:
                return 0
            left = max(dfs(node.left), 0)
            right = max(dfs(node.right), 0)
            result[0] = max(result[0], node.val + left + right)
            return node.val + max(left, right)
        dfs(root)
        return result[0]`,
      },
      {
        id: 'tree-15',
        title: 'Construct Binary Tree from Preorder and Inorder Traversal',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
        description: 'Given two integer arrays preorder and inorder where preorder is the preorder traversal and inorder is the inorder traversal of the same tree, construct and return the binary tree.',
        language: 'python',
        solution: `class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder or not inorder:
            return None
        root = TreeNode(preorder[0])
        mid = inorder.index(preorder[0])
        root.left = self.buildTree(preorder[1:mid+1], inorder[:mid])
        root.right = self.buildTree(preorder[mid+1:], inorder[mid+1:])
        return root`,
      },
      {
        id: 'tree-16',
        title: 'Kth Smallest Element in a BST',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
        description: 'Given the root of a binary search tree and an integer k, return the kth smallest value of all the values of the nodes in the tree.',
        language: 'python',
        solution: `class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        stack = []
        curr = root
        count = 0
        while curr or stack:
            while curr:
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            count += 1
            if count == k:
                return curr.val
            curr = curr.right`,
      },
      {
        id: 'tree-17',
        title: 'Lowest Common Ancestor of a Binary Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
        description: 'Given a binary tree, find the lowest common ancestor (LCA) of two given nodes p and q. The LCA is the lowest node that has both p and q as descendants.',
        language: 'python',
        solution: `class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        if not root or root == p or root == q:
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        if left and right:
            return root
        return left or right`,
      },
      {
        id: 'tree-18',
        title: 'Serialize and Deserialize Binary Tree',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
        description: 'Design an algorithm to serialize and deserialize a binary tree. Serialization is the process of converting a tree to a string, and deserialization is converting a string back to a tree.',
        language: 'python',
        solution: `class Codec:
    def serialize(self, root: Optional[TreeNode]) -> str:
        if not root:
            return 'N'
        return str(root.val) + ',' + self.serialize(root.left) + ',' + self.serialize(root.right)

    def deserialize(self, data: str) -> Optional[TreeNode]:
        vals = iter(data.split(','))
        def dfs():
            val = next(vals)
            if val == 'N':
                return None
            node = TreeNode(int(val))
            node.left = dfs()
            node.right = dfs()
            return node
        return dfs()`,
      },
      {
        id: 'tree-19',
        title: 'Binary Tree Level Order Traversal II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal-ii/',
        description: 'Given the root of a binary tree, return the bottom-up level order traversal of its nodes values (from left to right, level by level from leaf to root).',
        language: 'python',
        solution: `class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
        from collections import deque
        if not root:
            return []
        result = []
        queue = deque([root])
        while queue:
            level = []
            for _ in range(len(queue)):
                node = queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level)
        return result[::-1]`,
      },
      {
        id: 'tree-20',
        title: 'Path Sum II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/path-sum-ii/',
        description: 'Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values equals targetSum.',
        language: 'python',
        solution: `class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        result = []
        def dfs(node, path, remaining):
            if not node:
                return
            path.append(node.val)
            if not node.left and not node.right and remaining == node.val:
                result.append(path[:])
            dfs(node.left, path, remaining - node.val)
            dfs(node.right, path, remaining - node.val)
            path.pop()
        dfs(root, [], targetSum)
        return result`,
      },
      {
        id: 'tree-21',
        title: 'Flatten Binary Tree to Linked List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',
        description: 'Given the root of a binary tree, flatten the tree into a linked list in-place. The linked list should use the same TreeNode class where the right child pointer points to the next node and the left child pointer is always null.',
        language: 'python',
        solution: `class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        curr = root
        while curr:
            if curr.left:
                prev = curr.left
                while prev.right:
                    prev = prev.right
                prev.right = curr.right
                curr.right = curr.left
                curr.left = None
            curr = curr.right`,
      },
      {
        id: 'tree-22',
        title: 'Symmetric Tree',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/symmetric-tree/',
        description: 'Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
        language: 'python',
        solution: `class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def isMirror(left, right) -> bool:
            if not left and not right:
                return True
            if not left or not right:
                return False
            return (left.val == right.val and
                    isMirror(left.left, right.right) and
                    isMirror(left.right, right.left))
        return isMirror(root.left, root.right)`,
      },
      {
        id: 'tree-23',
        title: 'Binary Search Tree Iterator',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/binary-search-tree-iterator/',
        description: 'Implement the BSTIterator class that represents an iterator over the in-order traversal of a BST. next() returns the next smallest number and hasNext() returns true if there is a next number.',
        language: 'python',
        solution: `class BSTIterator:
    def __init__(self, root: Optional[TreeNode]):
        self.stack = []
        self._push_left(root)

    def _push_left(self, node):
        while node:
            self.stack.append(node)
            node = node.left

    def next(self) -> int:
        node = self.stack.pop()
        self._push_left(node.right)
        return node.val

    def hasNext(self) -> bool:
        return len(self.stack) > 0`,
      },
      {
        id: 'tree-24',
        title: 'Populating Next Right Pointers in Each Node',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/',
        description: 'Given a perfect binary tree where all leaves are on the same level, populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.',
        language: 'python',
        solution: `class Solution:
    def connect(self, root: Optional[Node]) -> Optional[Node]:
        if not root:
            return root
        from collections import deque
        queue = deque([root])
        while queue:
            size = len(queue)
            for i in range(size):
                node = queue.popleft()
                if i < size - 1:
                    node.next = queue[0]
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return root`,
      },
      {
        id: 'tree-25',
        title: 'Sum Root to Leaf Numbers',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/sum-root-to-leaf-numbers/',
        description: 'Given a binary tree containing digits from 0-9, each root-to-leaf path represents a number. Return the total sum of all root-to-leaf numbers.',
        language: 'python',
        solution: `class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def dfs(node, curr) -> int:
            if not node:
                return 0
            curr = curr * 10 + node.val
            if not node.left and not node.right:
                return curr
            return dfs(node.left, curr) + dfs(node.right, curr)
        return dfs(root, 0)`,
      },
      {
        id: 'tree-26',
        title: 'House Robber III',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/house-robber-iii/',
        description: 'Given the root of a binary tree where each node contains money, return the maximum amount of money you can rob without alerting the police. You cannot rob directly-linked nodes.',
        language: 'python',
        solution: `class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node:
                return (0, 0)
            left_rob, left_skip = dfs(node.left)
            right_rob, right_skip = dfs(node.right)
            rob = node.val + left_skip + right_skip
            skip = max(left_rob, left_skip) + max(right_rob, right_skip)
            return (rob, skip)
        return max(dfs(root))`,
      },
      {
        id: 'tree-27',
        title: 'Delete Node in a BST',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/delete-node-in-a-bst/',
        description: 'Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference of the BST.',
        language: 'python',
        solution: `class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        if not root:
            return None
        if key < root.val:
            root.left = self.deleteNode(root.left, key)
        elif key > root.val:
            root.right = self.deleteNode(root.right, key)
        else:
            if not root.left:
                return root.right
            if not root.right:
                return root.left
            curr = root.right
            while curr.left:
                curr = curr.left
            root.val = curr.val
            root.right = self.deleteNode(root.right, root.val)
        return root`,
      },
      {
        id: 'tree-28',
        title: 'Convert Sorted Array to Binary Search Tree',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/',
        description: 'Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.',
        language: 'python',
        solution: `class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if not nums:
            return None
        mid = len(nums) // 2
        root = TreeNode(nums[mid])
        root.left = self.sortedArrayToBST(nums[:mid])
        root.right = self.sortedArrayToBST(nums[mid+1:])
        return root`,
      },
      {
        id: 'tree-29',
        title: 'Recover Binary Search Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/recover-binary-search-tree/',
        description: 'You are given the root of a binary search tree where exactly two nodes were swapped by mistake. Recover the tree without changing its structure.',
        language: 'python',
        solution: `class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        first = second = prev = None
        def inorder(node):
            nonlocal first, second, prev
            if not node:
                return
            inorder(node.left)
            if prev and prev.val > node.val:
                if not first:
                    first = prev
                second = node
            prev = node
            inorder(node.right)
        inorder(root)
        first.val, second.val = second.val, first.val`,
      },
      {
        id: 'tree-30',
        title: 'Maximum Width of Binary Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-width-of-binary-tree/',
        description: 'Given the root of a binary tree, return the maximum width of the given tree. The maximum width is the maximum width among all levels. The width of one level is the length between the end-nodes.',
        language: 'python',
        solution: `class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        from collections import deque
        if not root:
            return 0
        result = 0
        queue = deque([(root, 0)])
        while queue:
            size = len(queue)
            _, first_idx = queue[0]
            for _ in range(size):
                node, idx = queue.popleft()
                if node.left:
                    queue.append((node.left, 2 * idx))
                if node.right:
                    queue.append((node.right, 2 * idx + 1))
            result = max(result, idx - first_idx + 1)
        return result`,
      },
      {
        id: 'tree-31',
        title: 'Vertical Order Traversal of a Binary Tree',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/',
        description: 'Given the root of a binary tree, calculate the vertical order traversal. For each node at position (row, col), its left child is at (row+1, col-1) and right child is at (row+1, col+1). Return the node values column by column.',
        language: 'python',
        solution: `class Solution:
    def verticalTraversal(self, root: Optional[TreeNode]) -> List[List[int]]:
        from collections import defaultdict
        nodes = []
        def dfs(node, row, col):
            if not node:
                return
            nodes.append((col, row, node.val))
            dfs(node.left, row + 1, col - 1)
            dfs(node.right, row + 1, col + 1)
        dfs(root, 0, 0)
        nodes.sort()
        result = []
        groups = defaultdict(list)
        for col, row, val in nodes:
            groups[col].append(val)
        for col in sorted(groups):
            result.append(groups[col])
        return result`,
      },
      {
        id: 'tree-32',
        title: 'Binary Tree Cameras',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/binary-tree-cameras/',
        description: 'Given a binary tree, place cameras on some nodes such that every node is monitored. A camera at a node monitors its parent, itself, and its children. Return the minimum number of cameras needed.',
        language: 'python',
        solution: `class Solution:
    def minCameraCover(self, root: Optional[TreeNode]) -> int:
        result = 0
        def dfs(node) -> int:
            nonlocal result
            if not node:
                return 2
            left = dfs(node.left)
            right = dfs(node.right)
            if left == 0 or right == 0:
                result += 1
                return 1
            if left == 1 or right == 1:
                return 2
            return 0
        if dfs(root) == 0:
            result += 1
        return result`,
      },
      {
        id: 'tree-33',
        title: 'All Nodes Distance K in Binary Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/',
        description: 'Given the root of a binary tree, a target node, and an integer k, return an array of the values of all nodes that have a distance k from the target node.',
        language: 'python',
        solution: `class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        def dfs(node, parent):
            if not node:
                return
            if parent:
                graph[node.val].append(parent.val)
                graph[parent.val].append(node.val)
            dfs(node.left, node)
            dfs(node.right, node)
        dfs(root, None)
        visited = {target.val}
        queue = deque([(target.val, 0)])
        result = []
        while queue:
            node, dist = queue.popleft()
            if dist == k:
                result.append(node)
            for neighbor in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, dist + 1))
        return result`,
      },
      {
        id: 'tree-34',
        title: 'Find Duplicate Subtrees',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-duplicate-subtrees/',
        description: 'Given the root of a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them.',
        language: 'python',
        solution: `class Solution:
    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        from collections import defaultdict
        count = defaultdict(int)
        result = []
        def serialize(node) -> str:
            if not node:
                return '#'
            serial = str(node.val) + ',' + serialize(node.left) + ',' + serialize(node.right)
            count[serial] += 1
            if count[serial] == 2:
                result.append(node)
            return serial
        serialize(root)
        return result`,
      },
      {
        id: 'tree-35',
        title: 'Cousins in Binary Tree',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/cousins-in-binary-tree/',
        description: 'Given the root of a binary tree with unique values and two nodes x and y, return true if the nodes are cousins. Two nodes are cousins if they are at the same depth with different parents.',
        language: 'python',
        solution: `class Solution:
    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
        from collections import deque
        queue = deque([(root, None, 0)])
        x_info = y_info = None
        while queue:
            node, parent, depth = queue.popleft()
            if node.val == x:
                x_info = (parent, depth)
            if node.val == y:
                y_info = (parent, depth)
            if x_info and y_info:
                break
            if node.left:
                queue.append((node.left, node.val, depth + 1))
            if node.right:
                queue.append((node.right, node.val, depth + 1))
        return x_info[1] == y_info[1] and x_info[0] != y_info[0]`,
      },
      {
        id: 'tree-36',
        title: 'Amount of Time for Binary Tree to Be Infected',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/',
        description: 'Given the root of a binary tree and an integer start, return the number of minutes needed for the entire tree to be infected starting from the node with value start.',
        language: 'python',
        solution: `class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        def dfs(node, parent):
            if not node:
                return
            if parent:
                graph[node.val].append(parent)
                graph[parent].append(node.val)
            dfs(node.left, node.val)
            dfs(node.right, node.val)
        dfs(root, None)
        visited = {start}
        queue = deque([start])
        time = -1
        while queue:
            time += 1
            for _ in range(len(queue)):
                node = queue.popleft()
                for neighbor in graph[node]:
                    if neighbor not in visited:
                        visited.add(neighbor)
                        queue.append(neighbor)
        return time`,
      },
      {
        id: 'tree-37',
        title: 'Longest ZigZag Path in a Binary Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/',
        description: 'Given the root of a binary tree, return the length of the longest ZigZag path contained in that tree. A ZigZag path alternates between left and right child nodes.',
        language: 'python',
        solution: `class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        result = 0
        def dfs(node, direction, length):
            nonlocal result
            if not node:
                return
            result = max(result, length)
            if direction == 'left':
                dfs(node.left, 'right', 1)
                dfs(node.right, 'left', length + 1)
            else:
                dfs(node.right, 'left', 1)
                dfs(node.left, 'right', length + 1)
        dfs(root.left, 'right', 1)
        dfs(root.right, 'left', 1)
        return result`,
      },
      {
        id: 'tree-38',
        title: 'Maximum Difference Between Node and Ancestor',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/',
        description: 'Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.',
        language: 'python',
        solution: `class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        result = 0
        def dfs(node, curr_min, curr_max):
            nonlocal result
            if not node:
                result = max(result, curr_max - curr_min)
                return
            curr_min = min(curr_min, node.val)
            curr_max = max(curr_max, node.val)
            dfs(node.left, curr_min, curr_max)
            dfs(node.right, curr_min, curr_max)
        dfs(root, root.val, root.val)
        return result`,
      },
      {
        id: 'tree-39',
        title: 'Check Completeness of a Binary Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/check-completeness-of-a-binary-tree/',
        description: 'Given the root of a binary tree, determine if it is a complete binary tree. A complete binary tree has all levels filled except possibly the last, which is filled from left to right.',
        language: 'python',
        solution: `class Solution:
    def isCompleteTree(self, root: Optional[TreeNode]) -> bool:
        from collections import deque
        queue = deque([root])
        found_none = False
        while queue:
            node = queue.popleft()
            if not node:
                found_none = True
            else:
                if found_none:
                    return False
                queue.append(node.left)
                queue.append(node.right)
        return True`,
      },
      {
        id: 'tree-40',
        title: 'Insert into a Binary Search Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/insert-into-a-binary-search-tree/',
        description: 'Given the root node of a binary search tree and a value to insert, insert the value into the BST and return the root node. It is guaranteed the new value does not exist in the original BST.',
        language: 'python',
        solution: `class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if not root:
            return TreeNode(val)
        if val < root.val:
            root.left = self.insertIntoBST(root.left, val)
        else:
            root.right = self.insertIntoBST(root.right, val)
        return root`,
      },
      {
        id: 'tree-41',
        title: 'Search in a Binary Search Tree',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/search-in-a-binary-search-tree/',
        description: 'Given the root of a BST and an integer val, find the node in the BST that has a value equal to val and return the subtree rooted at that node. If no such node exists, return null.',
        language: 'python',
        solution: `class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        while root:
            if val == root.val:
                return root
            elif val < root.val:
                root = root.left
            else:
                root = root.right
        return None`,
      },
      {
        id: 'tree-42',
        title: 'Range Sum of BST',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/range-sum-of-bst/',
        description: 'Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].',
        language: 'python',
        solution: `class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        if not root:
            return 0
        total = 0
        if low <= root.val <= high:
            total += root.val
        if root.val > low:
            total += self.rangeSumBST(root.left, low, high)
        if root.val < high:
            total += self.rangeSumBST(root.right, low, high)
        return total`,
      },
      {
        id: 'tree-43',
        title: 'Trim a Binary Search Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/trim-a-binary-search-tree/',
        description: 'Given the root of a binary search tree and the values low and high, trim the tree so that all its values are in the range [low, high]. Return the root of the trimmed binary search tree.',
        language: 'python',
        solution: `class Solution:
    def trimBST(self, root: Optional[TreeNode], low: int, high: int) -> Optional[TreeNode]:
        if not root:
            return None
        if root.val < low:
            return self.trimBST(root.right, low, high)
        if root.val > high:
            return self.trimBST(root.left, low, high)
        root.left = self.trimBST(root.left, low, high)
        root.right = self.trimBST(root.right, low, high)
        return root`,
      },
      {
        id: 'tree-44',
        title: 'N-ary Tree Level Order Traversal',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/n-ary-tree-level-order-traversal/',
        description: 'Given an n-ary tree, return the level order traversal of its nodes values.',
        language: 'python',
        solution: `class Solution:
    def levelOrder(self, root: Optional[Node]) -> List[List[int]]:
        from collections import deque
        if not root:
            return []
        result = []
        queue = deque([root])
        while queue:
            level = []
            for _ in range(len(queue)):
                node = queue.popleft()
                level.append(node.val)
                for child in node.children:
                    queue.append(child)
            result.append(level)
        return result`,
      },
      {
        id: 'tree-45',
        title: 'Maximum Level Sum of a Binary Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/',
        description: 'Given the root of a binary tree, return the smallest level x such that the sum of all the values of nodes at level x is maximal.',
        language: 'python',
        solution: `class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        from collections import deque
        queue = deque([root])
        max_sum = float('-inf')
        result = 1
        level = 0
        while queue:
            level += 1
            level_sum = 0
            for _ in range(len(queue)):
                node = queue.popleft()
                level_sum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            if level_sum > max_sum:
                max_sum = level_sum
                result = level
        return result`,
      },
      {
        id: 'tree-46',
        title: 'Deepest Leaves Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/deepest-leaves-sum/',
        description: 'Given the root of a binary tree, return the sum of values of its deepest leaves.',
        language: 'python',
        solution: `class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        from collections import deque
        queue = deque([root])
        while queue:
            level_sum = 0
            for _ in range(len(queue)):
                node = queue.popleft()
                level_sum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return level_sum`,
      },
      {
        id: 'tree-47',
        title: 'Even Odd Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/even-odd-tree/',
        description: 'A binary tree is named Even-Odd if it follows certain rules about even/odd values at each level. Return true if the binary tree is Even-Odd, false otherwise.',
        language: 'python',
        solution: `class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        from collections import deque
        queue = deque([root])
        level = 0
        while queue:
            prev = None
            for _ in range(len(queue)):
                node = queue.popleft()
                if level % 2 == 0:
                    if node.val % 2 == 0:
                        return False
                    if prev is not None and node.val <= prev:
                        return False
                else:
                    if node.val % 2 == 1:
                        return False
                    if prev is not None and node.val >= prev:
                        return False
                prev = node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            level += 1
        return True`,
      },
    ]
  },
  {
    id: 'graph',
    name: 'Graph',
    icon: '🕸️',
    description: 'Problems involving graph traversal, shortest paths, connected components, and more.',
    color: '#45B7D1',
    problems: [
      {
        id: 'graph-1',
        title: 'Number of Islands',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-islands/',
        description: 'Given an m x n 2D binary grid which represents a map of 1s (land) and 0s (water), return the number of islands.',
        language: 'python',
        solution: `class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    self.dfs(grid, i, j)
                    count += 1
        return count
    
    def dfs(self, grid, i, j):
        if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] != '1':
            return
        grid[i][j] = '0'
        self.dfs(grid, i+1, j)
        self.dfs(grid, i-1, j)
        self.dfs(grid, i, j+1)
        self.dfs(grid, i, j-1)`
      },
      {
        id: 'graph-2',
        title: 'Clone Graph',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/clone-graph/',
        description: 'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.',
        language: 'python',
        solution: `class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None
        visited = {}
        
        def dfs(node):
            if node in visited:
                return visited[node]
            clone = Node(node.val)
            visited[node] = clone
            for neighbor in node.neighbors:
                clone.neighbors.append(dfs(neighbor))
            return clone
        
        return dfs(node)`
      },
      {
        id: 'graph-3',
        title: 'Course Schedule',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/course-schedule/',
        description: 'There are a total of numCourses courses you have to take. Determine if it is possible to finish all courses.',
        language: 'python',
        solution: `class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        in_degree = [0] * numCourses
        for course, prereq in prerequisites:
            graph[prereq].append(course)
            in_degree[course] += 1
        queue = deque([i for i in range(numCourses) if in_degree[i] == 0])
        count = 0
        while queue:
            node = queue.popleft()
            count += 1
            for neighbor in graph[node]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)
        return count == numCourses`
      },
      {
        id: 'graph-4',
        title: 'Pacific Atlantic Water Flow',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
        description: 'Given an m x n matrix of heights, return a list of coordinates where water can flow to both the Pacific and Atlantic oceans.',
        language: 'python',
        solution: `class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        if not heights:
            return []
        rows, cols = len(heights), len(heights[0])
        pacific, atlantic = set(), set()

        def dfs(r, c, visited, prev_height):
            if (r, c) in visited or r < 0 or c < 0 or r >= rows or c >= cols:
                return
            if heights[r][c] < prev_height:
                return
            visited.add((r, c))
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                dfs(r+dr, c+dc, visited, heights[r][c])

        for r in range(rows):
            dfs(r, 0, pacific, heights[r][0])
            dfs(r, cols-1, atlantic, heights[r][cols-1])
        for c in range(cols):
            dfs(0, c, pacific, heights[0][c])
            dfs(rows-1, c, atlantic, heights[rows-1][c])

        return [[r, c] for r, c in pacific & atlantic]`
      },
      {
        id: 'graph-5',
        title: 'Rotting Oranges',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/rotting-oranges/',
        description: 'Given a grid where 0=empty, 1=fresh orange, 2=rotten orange, return the minimum minutes until no fresh orange remains, or -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        from collections import deque
        rows, cols = len(grid), len(grid[0])
        queue = deque()
        fresh = 0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 2:
                    queue.append((r, c, 0))
                elif grid[r][c] == 1:
                    fresh += 1

        minutes = 0
        while queue:
            r, c, mins = queue.popleft()
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r+dr, c+dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    minutes = mins + 1
                    queue.append((nr, nc, mins+1))

        return minutes if fresh == 0 else -1`
      },
      {
        id: 'graph-6',
        title: 'Word Ladder',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/word-ladder/',
        description: 'Given beginWord, endWord, and a wordList, return the number of words in the shortest transformation sequence, or 0 if no such sequence exists.',
        language: 'python',
        solution: `class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        from collections import deque, defaultdict
        if endWord not in wordList:
            return 0

        L = len(beginWord)
        pattern_map = defaultdict(list)
        for word in wordList:
            for i in range(L):
                pattern = word[:i] + '*' + word[i+1:]
                pattern_map[pattern].append(word)

        queue = deque([(beginWord, 1)])
        visited = {beginWord}

        while queue:
            word, length = queue.popleft()
            for i in range(L):
                pattern = word[:i] + '*' + word[i+1:]
                for neighbor in pattern_map[pattern]:
                    if neighbor == endWord:
                        return length + 1
                    if neighbor not in visited:
                        visited.add(neighbor)
                        queue.append((neighbor, length + 1))
        return 0`
      },
      {
        id: 'graph-7',
        title: 'Number of Connected Components in an Undirected Graph',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/',
        description: 'Given n nodes and a list of edges, return the number of connected components in the undirected graph.',
        language: 'python',
        solution: `class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        parent = list(range(n))
        rank = [0] * n

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return 0
            if rank[px] < rank[py]:
                px, py = py, px
            parent[py] = px
            if rank[px] == rank[py]:
                rank[px] += 1
            return 1

        return n - sum(union(x, y) for x, y in edges)`
      },
      {
        id: 'graph-8',
        title: 'Graph Valid Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/graph-valid-tree/',
        description: 'Given n nodes labeled 0 to n-1 and a list of undirected edges, return true if these edges form a valid tree.',
        language: 'python',
        solution: `class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) != n - 1:
            return False

        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        visited = set()

        def dfs(node, prev):
            if node in visited:
                return False
            visited.add(node)
            for neighbor in adj[node]:
                if neighbor == prev:
                    continue
                if not dfs(neighbor, node):
                    return False
            return True

        return dfs(0, -1) and len(visited) == n`
      },
      {
        id: 'graph-9',
        title: 'Redundant Connection',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/redundant-connection/',
        description: 'Given a graph that started as a tree with n nodes and one additional edge added, return the redundant edge that can be removed to make it a tree again.',
        language: 'python',
        solution: `class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        parent = list(range(len(edges) + 1))
        rank = [0] * (len(edges) + 1)

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return False
            if rank[px] < rank[py]:
                px, py = py, px
            parent[py] = px
            if rank[px] == rank[py]:
                rank[px] += 1
            return True

        for u, v in edges:
            if not union(u, v):
                return [u, v]`
      },
      {
        id: 'graph-10',
        title: 'Walls and Gates',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/walls-and-gates/',
        description: 'Given an m x n grid with -1 (walls), 0 (gates), and INF (empty rooms), fill each empty room with the distance to its nearest gate.',
        language: 'python',
        solution: `class Solution:
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        from collections import deque
        INF = 2147483647
        rows, cols = len(rooms), len(rooms[0])
        queue = deque()

        for r in range(rows):
            for c in range(cols):
                if rooms[r][c] == 0:
                    queue.append((r, c))

        while queue:
            r, c = queue.popleft()
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r+dr, c+dc
                if 0 <= nr < rows and 0 <= nc < cols and rooms[nr][nc] == INF:
                    rooms[nr][nc] = rooms[r][c] + 1
                    queue.append((nr, nc))`
      },
      {
        id: 'graph-11',
        title: 'Alien Dictionary',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/alien-dictionary/',
        description: 'Given a sorted list of words from an alien language, derive the order of characters in the alien alphabet. Return the characters in topological order, or empty string if invalid.',
        language: 'python',
        solution: `class Solution:
    def alienOrder(self, words: List[str]) -> str:
        from collections import defaultdict, deque
        adj = defaultdict(set)
        in_degree = {c: 0 for word in words for c in word}

        for i in range(len(words) - 1):
            w1, w2 = words[i], words[i+1]
            min_len = min(len(w1), len(w2))
            if len(w1) > len(w2) and w1[:min_len] == w2[:min_len]:
                return ""
            for j in range(min_len):
                if w1[j] != w2[j]:
                    if w2[j] not in adj[w1[j]]:
                        adj[w1[j]].add(w2[j])
                        in_degree[w2[j]] += 1
                    break

        queue = deque([c for c in in_degree if in_degree[c] == 0])
        result = []
        while queue:
            c = queue.popleft()
            result.append(c)
            for neighbor in adj[c]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

        return "".join(result) if len(result) == len(in_degree) else ""`
      },
      {
        id: 'graph-12',
        title: 'Minimum Spanning Tree (Kruskal\'s Algorithm)',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/min-cost-to-connect-all-points/',
        description: 'Given an array of points, return the minimum cost to connect all points where cost is the Manhattan distance between two points.',
        language: 'python',
        solution: `class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        parent = list(range(n))
        rank = [0] * n

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return False
            if rank[px] < rank[py]:
                px, py = py, px
            parent[py] = px
            if rank[px] == rank[py]:
                rank[px] += 1
            return True

        edges = []
        for i in range(n):
            for j in range(i + 1, n):
                dist = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])
                edges.append((dist, i, j))

        edges.sort()
        total, count = 0, 0
        for dist, u, v in edges:
            if union(u, v):
                total += dist
                count += 1
                if count == n - 1:
                    break

        return total`
      },
      {
        id: 'graph-13',
        title: 'Network Delay Time',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/network-delay-time/',
        description: 'Given a network of n nodes and travel times for directed edges, return the minimum time for all nodes to receive a signal sent from node k, or -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        from collections import defaultdict
        import heapq

        adj = defaultdict(list)
        for u, v, w in times:
            adj[u].append((v, w))

        dist = {i: float('inf') for i in range(1, n + 1)}
        dist[k] = 0
        heap = [(0, k)]

        while heap:
            time, node = heapq.heappop(heap)
            if time > dist[node]:
                continue
            for neighbor, weight in adj[node]:
                new_dist = time + weight
                if new_dist < dist[neighbor]:
                    dist[neighbor] = new_dist
                    heapq.heappush(heap, (new_dist, neighbor))

        max_dist = max(dist.values())
        return max_dist if max_dist < float('inf') else -1`
      },
      {
        id: 'graph-14',
        title: 'Cheapest Flights Within K Stops',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
        description: 'Given n cities, flights with costs, source src, destination dst, and max stops k, return the cheapest price from src to dst with at most k stops, or -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        prices = [float('inf')] * n
        prices[src] = 0

        for i in range(k + 1):
            temp = prices.copy()
            for u, v, w in flights:
                if prices[u] == float('inf'):
                    continue
                if prices[u] + w < temp[v]:
                    temp[v] = prices[u] + w
            prices = temp

        return prices[dst] if prices[dst] != float('inf') else -1`
      },
      {
        id: 'graph-15',
        title: 'Find if Path Exists in Graph',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/find-if-path-exists-in-graph/',
        description: 'Given n nodes, a list of undirected edges, a source and destination, return true if there is a valid path from source to destination.',
        language: 'python',
        solution: `class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        if source == destination:
            return True

        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        visited = set()
        stack = [source]

        while stack:
            node = stack.pop()
            if node == destination:
                return True
            if node in visited:
                continue
            visited.add(node)
            for neighbor in adj[node]:
                if neighbor not in visited:
                    stack.append(neighbor)

        return False`
      },
      {
        id: 'graph-16',
        title: 'Surrounded Regions',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/surrounded-regions/',
        description: 'Given an m x n matrix board containing X and O, capture all regions that are surrounded by X. A region is captured by flipping all Os into Xs in that surrounded region.',
        language: 'python',
        solution: `class Solution:
    def solve(self, board: List[List[str]]) -> None:
        rows, cols = len(board), len(board[0])

        def dfs(r, c):
            if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != 'O':
                return
            board[r][c] = 'T'
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                dfs(r + dr, c + dc)

        for r in range(rows):
            dfs(r, 0)
            dfs(r, cols - 1)
        for c in range(cols):
            dfs(0, c)
            dfs(rows - 1, c)

        for r in range(rows):
            for c in range(cols):
                if board[r][c] == 'O':
                    board[r][c] = 'X'
                elif board[r][c] == 'T':
                    board[r][c] = 'O'`,
      },
      {
        id: 'graph-17',
        title: 'Course Schedule II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/course-schedule-ii/',
        description: 'Given numCourses and prerequisites, return the ordering of courses you should take to finish all courses. If impossible, return an empty array.',
        language: 'python',
        solution: `class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        in_degree = [0] * numCourses

        for course, prereq in prerequisites:
            graph[prereq].append(course)
            in_degree[course] += 1

        queue = deque([i for i in range(numCourses) if in_degree[i] == 0])
        result = []

        while queue:
            node = queue.popleft()
            result.append(node)
            for neighbor in graph[node]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

        return result if len(result) == numCourses else []`,
      },
      {
        id: 'graph-18',
        title: 'Swim in Rising Water',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/swim-in-rising-water/',
        description: 'Given an n x n grid where grid[i][j] is the elevation, return the least time until you can reach bottom right from top left, where you can swim to adjacent cells if the elevation is at most t.',
        language: 'python',
        solution: `class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        import heapq
        n = len(grid)
        visited = set()
        heap = [(grid[0][0], 0, 0)]
        visited.add((0, 0))

        while heap:
            t, r, c = heapq.heappop(heap)
            if r == n - 1 and c == n - 1:
                return t
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in visited:
                    visited.add((nr, nc))
                    heapq.heappush(heap, (max(t, grid[nr][nc]), nr, nc))

        return -1`
      },
      {
        id: 'graph-19',
        title: 'Reconstruct Itinerary',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/reconstruct-itinerary/',
        description: 'Given a list of airline tickets represented by pairs of departure and arrival airports, reconstruct the itinerary in order. All tickets must be used and the itinerary must begin with JFK.',
        language: 'python',
        solution: `class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        from collections import defaultdict
        graph = defaultdict(list)

        for src, dst in sorted(tickets, reverse=True):
            graph[src].append(dst)

        result = []

        def dfs(airport):
            while graph[airport]:
                dfs(graph[airport].pop())
            result.append(airport)

        dfs("JFK")
        return result[::-1]`
      },
      {
        id: 'graph-20',
        title: 'Word Search II',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/word-search-ii/',
        description: 'Given an m x n board of characters and a list of strings words, return all words on the board. Each word must be constructed from sequentially adjacent cells.',
        language: 'python',
        solution: `class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        class TrieNode:
            def __init__(self):
                self.children = {}
                self.word = None

        root = TrieNode()
        for word in words:
            node = root
            for c in word:
                node = node.children.setdefault(c, TrieNode())
            node.word = word

        rows, cols = len(board), len(board[0])
        result = set()

        def dfs(r, c, node):
            ch = board[r][c]
            if ch not in node.children:
                return
            next_node = node.children[ch]
            if next_node.word:
                result.add(next_node.word)
            board[r][c] = '#'
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] != '#':
                    dfs(nr, nc, next_node)
            board[r][c] = ch

        for r in range(rows):
            for c in range(cols):
                dfs(r, c, root)

        return list(result)`,
      },
      {
        id: 'graph-21',
        title: 'Minimum Height Trees',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-height-trees/',
        description: 'Given a tree of n nodes labeled 0 to n-1 and a list of edges, return a list of all nodes that can be the root of a minimum height tree.',
        language: 'python',
        solution: `class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        if n == 1:
            return [0]
        from collections import deque
        adj = [set() for _ in range(n)]
        for u, v in edges:
            adj[u].add(v)
            adj[v].add(u)
        leaves = deque([i for i in range(n) if len(adj[i]) == 1])
        remaining = n
        while remaining > 2:
            remaining -= len(leaves)
            new_leaves = deque()
            while leaves:
                leaf = leaves.popleft()
                neighbor = adj[leaf].pop()
                adj[neighbor].remove(leaf)
                if len(adj[neighbor]) == 1:
                    new_leaves.append(neighbor)
            leaves = new_leaves
        return list(leaves)`,
      },
      {
        id: 'graph-22',
        title: 'Evaluate Division',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/evaluate-division/',
        description: 'Given equations and values representing a/b = k, and queries, return the results of the queries. Return -1.0 if the answer does not exist.',
        language: 'python',
        solution: `class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        from collections import defaultdict, deque
        graph = defaultdict(dict)
        for (a, b), val in zip(equations, values):
            graph[a][b] = val
            graph[b][a] = 1 / val

        def bfs(src, dst):
            if src not in graph or dst not in graph:
                return -1.0
            if src == dst:
                return 1.0
            visited = set()
            queue = deque([(src, 1.0)])
            while queue:
                node, prod = queue.popleft()
                if node == dst:
                    return prod
                visited.add(node)
                for neighbor, val in graph[node].items():
                    if neighbor not in visited:
                        queue.append((neighbor, prod * val))
            return -1.0

        return [bfs(s, d) for s, d in queries]`,
      },
      {
        id: 'graph-23',
        title: 'All Paths From Source to Target',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/all-paths-from-source-to-target/',
        description: 'Given a directed acyclic graph of n nodes, return all possible paths from node 0 to node n-1. The answer can be returned in any order.',
        language: 'python',
        solution: `class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        result = []
        def dfs(node, path):
            if node == len(graph) - 1:
                result.append(path[:])
                return
            for neighbor in graph[node]:
                path.append(neighbor)
                dfs(neighbor, path)
                path.pop()
        dfs(0, [0])
        return result`,
      },
      {
        id: 'graph-24',
        title: 'Is Graph Bipartite?',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/is-graph-bipartite/',
        description: 'Given an undirected graph, return true if it is bipartite. A graph is bipartite if we can split its nodes into two independent subsets such that every edge connects a node in one set to a node in the other.',
        language: 'python',
        solution: `class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        color = {}
        for start in range(len(graph)):
            if start in color:
                continue
            stack = [start]
            color[start] = 0
            while stack:
                node = stack.pop()
                for neighbor in graph[node]:
                    if neighbor not in color:
                        color[neighbor] = 1 - color[node]
                        stack.append(neighbor)
                    elif color[neighbor] == color[node]:
                        return False
        return True`,
      },
      {
        id: 'graph-25',
        title: 'Snakes and Ladders',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/snakes-and-ladders/',
        description: 'Given an n x n board with snakes and ladders, return the minimum number of moves to reach square n^2 starting from square 1. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        from collections import deque
        n = len(board)
        def get_pos(s):
            r, c = divmod(s - 1, n)
            if r % 2 == 0:
                return (n - 1 - r, c)
            return (n - 1 - r, n - 1 - c)
        visited = set()
        queue = deque([(1, 0)])
        while queue:
            s, moves = queue.popleft()
            for dice in range(1, 7):
                next_s = s + dice
                if next_s > n * n:
                    break
                r, c = get_pos(next_s)
                if board[r][c] != -1:
                    next_s = board[r][c]
                if next_s == n * n:
                    return moves + 1
                if next_s not in visited:
                    visited.add(next_s)
                    queue.append((next_s, moves + 1))
        return -1`,
      },
      {
        id: 'graph-26',
        title: 'Jump Game III',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/jump-game-iii/',
        description: 'Given an array of non-negative integers arr and start index, return true if you can reach any index with value 0. From index i you can jump to i + arr[i] or i - arr[i].',
        language: 'python',
        solution: `class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        from collections import deque
        n = len(arr)
        visited = set()
        queue = deque([start])
        while queue:
            i = queue.popleft()
            if arr[i] == 0:
                return True
            if i in visited:
                continue
            visited.add(i)
            for j in [i + arr[i], i - arr[i]]:
                if 0 <= j < n and j not in visited:
                    queue.append(j)
        return False`,
      },
      {
        id: 'graph-27',
        title: 'Open the Lock',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/open-the-lock/',
        description: 'Given a list of deadends and a target combination, return the minimum number of turns to open the lock starting from 0000. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        from collections import deque
        dead = set(deadends)
        if '0000' in dead:
            return -1
        if target == '0000':
            return 0
        visited = {'0000'}
        queue = deque([('0000', 0)])
        while queue:
            state, turns = queue.popleft()
            for i in range(4):
                for d in [1, -1]:
                    new_digit = (int(state[i]) + d) % 10
                    new_state = state[:i] + str(new_digit) + state[i+1:]
                    if new_state == target:
                        return turns + 1
                    if new_state not in visited and new_state not in dead:
                        visited.add(new_state)
                        queue.append((new_state, turns + 1))
        return -1`,
      },
      {
        id: 'graph-28',
        title: 'Shortest Path in Binary Matrix',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/',
        description: 'Given an n x n binary matrix grid, return the length of the shortest clear path from top-left to bottom-right. A clear path only goes through 0 cells. Return -1 if no such path exists.',
        language: 'python',
        solution: `class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        from collections import deque
        n = len(grid)
        if grid[0][0] == 1 or grid[n-1][n-1] == 1:
            return -1
        queue = deque([(0, 0, 1)])
        grid[0][0] = 1
        while queue:
            r, c, dist = queue.popleft()
            if r == n - 1 and c == n - 1:
                return dist
            for dr in [-1, 0, 1]:
                for dc in [-1, 0, 1]:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 0:
                        grid[nr][nc] = 1
                        queue.append((nr, nc, dist + 1))
        return -1`,
      },
      {
        id: 'graph-29',
        title: 'Max Area of Island',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/max-area-of-island/',
        description: 'Given a binary matrix grid, return the maximum area of an island. An island is a group of 1s connected 4-directionally. The area is the number of cells with value 1.',
        language: 'python',
        solution: `class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        def dfs(r, c):
            if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == 0:
                return 0
            grid[r][c] = 0
            return 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1)
        return max(dfs(r, c) for r in range(rows) for c in range(cols))`,
      },
      {
        id: 'graph-30',
        title: 'Count Sub Islands',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/count-sub-islands/',
        description: 'Given two binary matrices grid1 and grid2, return the number of islands in grid2 that are sub-islands of grid1. An island in grid2 is a sub-island if all cells are also land in grid1.',
        language: 'python',
        solution: `class Solution:
    def countSubIslands(self, grid1: List[List[int]], grid2: List[List[int]]) -> int:
        rows, cols = len(grid2), len(grid2[0])
        def dfs(r, c) -> bool:
            if r < 0 or c < 0 or r >= rows or c >= cols or grid2[r][c] == 0:
                return True
            grid2[r][c] = 0
            is_sub = grid1[r][c] == 1
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                if not dfs(r + dr, c + dc):
                    is_sub = False
            return is_sub
        return sum(dfs(r, c) for r in range(rows) for c in range(cols) if grid2[r][c] == 1)`,
      },
      {
        id: 'graph-31',
        title: 'Reorder Routes to Make All Paths Lead to the City Zero',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/',
        description: 'Given n cities and directed roads connections, return the minimum number of edges that need to be reversed so that every city can reach city 0.',
        language: 'python',
        solution: `class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        for a, b in connections:
            graph[a].append((b, 1))
            graph[b].append((a, 0))
        visited = set([0])
        queue = deque([0])
        result = 0
        while queue:
            node = queue.popleft()
            for neighbor, cost in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    result += cost
                    queue.append(neighbor)
        return result`,
      },
      {
        id: 'graph-32',
        title: 'Keys and Rooms',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/keys-and-rooms/',
        description: 'Given n rooms where rooms[i] contains a list of keys to other rooms, return true if you can visit all rooms starting from room 0.',
        language: 'python',
        solution: `class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = set()
        stack = [0]
        while stack:
            room = stack.pop()
            if room in visited:
                continue
            visited.add(room)
            for key in rooms[room]:
                if key not in visited:
                    stack.append(key)
        return len(visited) == len(rooms)`,
      },
      {
        id: 'graph-33',
        title: 'Number of Provinces',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-provinces/',
        description: 'Given an n x n matrix isConnected where isConnected[i][j] = 1 if city i and city j are directly connected, return the total number of provinces.',
        language: 'python',
        solution: `class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        visited = set()
        def dfs(i):
            for j in range(n):
                if isConnected[i][j] == 1 and j not in visited:
                    visited.add(j)
                    dfs(j)
        provinces = 0
        for i in range(n):
            if i not in visited:
                visited.add(i)
                dfs(i)
                provinces += 1
        return provinces`,
      },
      {
        id: 'graph-34',
        title: 'Find Eventual Safe States',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-eventual-safe-states/',
        description: 'Given a directed graph, return all eventual safe nodes in sorted order. A node is safe if every possible path from that node leads to a terminal node or another safe node.',
        language: 'python',
        solution: `class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        n = len(graph)
        state = [0] * n  # 0=unvisited, 1=visiting, 2=safe
        def dfs(node) -> bool:
            if state[node] == 1:
                return False
            if state[node] == 2:
                return True
            state[node] = 1
            for neighbor in graph[node]:
                if not dfs(neighbor):
                    return False
            state[node] = 2
            return True
        return [i for i in range(n) if dfs(i)]`,
      },
      {
        id: 'graph-35',
        title: 'Longest Cycle in a Graph',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/longest-cycle-in-a-graph/',
        description: 'Given a directed graph where each node has at most one outgoing edge, return the length of the longest cycle. If no cycle exists, return -1.',
        language: 'python',
        solution: `class Solution:
    def longestCycle(self, edges: List[int]) -> int:
        n = len(edges)
        visited = [0] * n
        result = -1
        time = 1
        for i in range(n):
            if visited[i]:
                continue
            start = time
            node = i
            while node != -1 and not visited[node]:
                visited[node] = time
                time += 1
                node = edges[node]
            if node != -1 and visited[node] >= start:
                result = max(result, time - visited[node])
        return result`,
      },
      {
        id: 'graph-36',
        title: 'Detonate the Maximum Bombs',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/detonate-the-maximum-bombs/',
        description: 'Given a list of bombs where bombs[i] = [xi, yi, ri], return the maximum number of bombs that can be detonated if you detonate one bomb. A bomb detonates another if it is within its blast radius.',
        language: 'python',
        solution: `class Solution:
    def maximumDetonation(self, bombs: List[List[int]]) -> int:
        from collections import defaultdict, deque
        n = len(bombs)
        graph = defaultdict(list)
        for i in range(n):
            for j in range(n):
                if i == j:
                    continue
                x1, y1, r1 = bombs[i]
                x2, y2, _ = bombs[j]
                if (x2 - x1) ** 2 + (y2 - y1) ** 2 <= r1 ** 2:
                    graph[i].append(j)
        def bfs(start):
            visited = set([start])
            queue = deque([start])
            while queue:
                node = queue.popleft()
                for neighbor in graph[node]:
                    if neighbor not in visited:
                        visited.add(neighbor)
                        queue.append(neighbor)
            return len(visited)
        return max(bfs(i) for i in range(n))`,
      },
      {
        id: 'graph-37',
        title: 'Path With Minimum Effort',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/path-with-minimum-effort/',
        description: 'Given a 2D array heights, return the minimum effort required to travel from top-left to bottom-right. Effort is the maximum absolute difference between adjacent cells on the path.',
        language: 'python',
        solution: `class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        import heapq
        rows, cols = len(heights), len(heights[0])
        dist = [[float('inf')] * cols for _ in range(rows)]
        dist[0][0] = 0
        heap = [(0, 0, 0)]
        while heap:
            effort, r, c = heapq.heappop(heap)
            if r == rows - 1 and c == cols - 1:
                return effort
            if effort > dist[r][c]:
                continue
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols:
                    new_effort = max(effort, abs(heights[nr][nc] - heights[r][c]))
                    if new_effort < dist[nr][nc]:
                        dist[nr][nc] = new_effort
                        heapq.heappush(heap, (new_effort, nr, nc))
        return 0`,
      },
      {
        id: 'graph-38',
        title: 'Number of Ways to Arrive at Destination',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/',
        description: 'Given n intersections and roads with travel times, return the number of ways to reach intersection n-1 from 0 in the shortest time. Return the answer modulo 10^9 + 7.',
        language: 'python',
        solution: `class Solution:
    def countPaths(self, n: int, roads: List[List[int]]) -> int:
        import heapq
        from collections import defaultdict
        MOD = 10**9 + 7
        graph = defaultdict(list)
        for u, v, w in roads:
            graph[u].append((v, w))
            graph[v].append((u, w))
        dist = [float('inf')] * n
        ways = [0] * n
        dist[0] = 0
        ways[0] = 1
        heap = [(0, 0)]
        while heap:
            d, node = heapq.heappop(heap)
            if d > dist[node]:
                continue
            for neighbor, w in graph[node]:
                new_dist = d + w
                if new_dist < dist[neighbor]:
                    dist[neighbor] = new_dist
                    ways[neighbor] = ways[node]
                    heapq.heappush(heap, (new_dist, neighbor))
                elif new_dist == dist[neighbor]:
                    ways[neighbor] = (ways[neighbor] + ways[node]) % MOD
        return ways[n - 1]`,
      },
      {
        id: 'graph-39',
        title: 'Bus Routes',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/bus-routes/',
        description: 'Given an array routes where routes[i] is a bus route, and source and target stops, return the minimum number of buses to take to reach target from source. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def numBusesToDestination(self, routes: List[List[int]], source: int, target: int) -> int:
        from collections import defaultdict, deque
        if source == target:
            return 0
        stop_to_routes = defaultdict(set)
        for i, route in enumerate(routes):
            for stop in route:
                stop_to_routes[stop].add(i)
        visited_stops = {source}
        visited_routes = set()
        queue = deque([(source, 0)])
        while queue:
            stop, buses = queue.popleft()
            for route_id in stop_to_routes[stop]:
                if route_id in visited_routes:
                    continue
                visited_routes.add(route_id)
                for next_stop in routes[route_id]:
                    if next_stop == target:
                        return buses + 1
                    if next_stop not in visited_stops:
                        visited_stops.add(next_stop)
                        queue.append((next_stop, buses + 1))
        return -1`,
      },
      {
        id: 'graph-40',
        title: 'Swim in Rising Water',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/swim-in-rising-water/',
        description: 'Given an n x n grid where grid[i][j] is the elevation at position (i,j), return the minimum time to swim from top-left to bottom-right. At time t you can swim to adjacent cells with elevation <= t.',
        language: 'python',
        solution: `class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        import heapq
        n = len(grid)
        visited = set()
        heap = [(grid[0][0], 0, 0)]
        while heap:
            t, r, c = heapq.heappop(heap)
            if r == n - 1 and c == n - 1:
                return t
            if (r, c) in visited:
                continue
            visited.add((r, c))
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in visited:
                    heapq.heappush(heap, (max(t, grid[nr][nc]), nr, nc))
        return -1`,
      },
      {
        id: 'graph-41',
        title: 'Shortest Bridge',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/shortest-bridge/',
        description: 'Given an n x n binary matrix grid containing exactly two islands, return the minimum number of 0s you must flip to connect the two islands.',
        language: 'python',
        solution: `class Solution:
    def shortestBridge(self, grid: List[List[int]]) -> int:
        from collections import deque
        n = len(grid)
        visited = set()
        queue = deque()

        def dfs(r, c):
            if r < 0 or c < 0 or r >= n or c >= n or (r,c) in visited or grid[r][c] == 0:
                return
            visited.add((r, c))
            queue.append((r, c, 0))
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                dfs(r + dr, c + dc)

        found = False
        for r in range(n):
            if found:
                break
            for c in range(n):
                if grid[r][c] == 1:
                    dfs(r, c)
                    found = True
                    break

        while queue:
            r, c, dist = queue.popleft()
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in visited:
                    if grid[nr][nc] == 1:
                        return dist
                    visited.add((nr, nc))
                    queue.append((nr, nc, dist + 1))
        return -1`,
      },
      {
        id: 'graph-42',
        title: 'As Far from Land as Possible',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/as-far-from-land-as-possible/',
        description: 'Given an n x n grid containing 0s (water) and 1s (land), find the water cell with the maximum Manhattan distance to the nearest land cell. Return -1 if no land or water exists.',
        language: 'python',
        solution: `class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        from collections import deque
        n = len(grid)
        queue = deque()
        for r in range(n):
            for c in range(n):
                if grid[r][c] == 1:
                    queue.append((r, c))
        if len(queue) == 0 or len(queue) == n * n:
            return -1
        result = -1
        while queue:
            r, c = queue.popleft()
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 0:
                    grid[nr][nc] = grid[r][c] + 1
                    result = max(result, grid[nr][nc] - 1)
                    queue.append((nr, nc))
        return result`,
      },
      {
        id: 'graph-43',
        title: 'Making a Large Island',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/making-a-large-island/',
        description: 'Given an n x n binary matrix grid, you can change at most one 0 to 1. Return the size of the largest island after applying this operation.',
        language: 'python',
        solution: `class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        n = len(grid)
        island_id = 2
        island_size = {}

        def dfs(r, c, iid):
            if r < 0 or c < 0 or r >= n or c >= n or grid[r][c] != 1:
                return 0
            grid[r][c] = iid
            return 1 + dfs(r+1,c,iid) + dfs(r-1,c,iid) + dfs(r,c+1,iid) + dfs(r,c-1,iid)

        for r in range(n):
            for c in range(n):
                if grid[r][c] == 1:
                    island_size[island_id] = dfs(r, c, island_id)
                    island_id += 1

        result = max(island_size.values(), default=0)

        for r in range(n):
            for c in range(n):
                if grid[r][c] == 0:
                    seen = set()
                    size = 1
                    for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                        nr, nc = r + dr, c + dc
                        if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] > 1:
                            iid = grid[nr][nc]
                            if iid not in seen:
                                seen.add(iid)
                                size += island_size[iid]
                    result = max(result, size)

        return result`,
      },
      {
        id: 'graph-44',
        title: 'Topological Sort',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/course-schedule-ii/',
        description: 'Given numCourses and prerequisites, return a valid topological ordering of all courses. If it is impossible to finish all courses, return an empty array.',
        language: 'python',
        solution: `class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        from collections import defaultdict
        adj = defaultdict(list)
        for course, prereq in prerequisites:
            adj[prereq].append(course)
        state = [0] * numCourses
        result = []
        def dfs(node) -> bool:
            if state[node] == 1:
                return False
            if state[node] == 2:
                return True
            state[node] = 1
            for neighbor in adj[node]:
                if not dfs(neighbor):
                    return False
            state[node] = 2
            result.append(node)
            return True
        for i in range(numCourses):
            if not dfs(i):
                return []
        return result[::-1]`,
      },
      {
        id: 'graph-45',
        title: 'Possible Bipartition',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/possible-bipartition/',
        description: 'Given n people and a list of dislikes pairs, return true if it is possible to split everyone into two groups such that no two people in the same group dislike each other.',
        language: 'python',
        solution: `class Solution:
    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        for a, b in dislikes:
            graph[a].append(b)
            graph[b].append(a)
        color = {}
        for start in range(1, n + 1):
            if start in color:
                continue
            queue = deque([start])
            color[start] = 0
            while queue:
                node = queue.popleft()
                for neighbor in graph[node]:
                    if neighbor not in color:
                        color[neighbor] = 1 - color[node]
                        queue.append(neighbor)
                    elif color[neighbor] == color[node]:
                        return False
        return True`,
      },
      {
        id: 'graph-46',
        title: 'Similar String Groups',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/similar-string-groups/',
        description: 'Given an array of strings strs, return the number of groups of similar strings. Two strings are similar if they are equal or differ in exactly two positions where the characters are swapped.',
        language: 'python',
        solution: `class Solution:
    def numSimilarGroups(self, strs: List[str]) -> int:
        n = len(strs)
        parent = list(range(n))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            px, py = find(x), find(y)
            if px != py:
                parent[px] = py

        def isSimilar(a, b):
            diff = 0
            for c1, c2 in zip(a, b):
                if c1 != c2:
                    diff += 1
                if diff > 2:
                    return False
            return diff == 0 or diff == 2

        for i in range(n):
            for j in range(i + 1, n):
                if isSimilar(strs[i], strs[j]):
                    union(i, j)

        return len(set(find(i) for i in range(n)))`,
      },
      {
        id: 'graph-47',
        title: 'Accounts Merge',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/accounts-merge/',
        description: 'Given a list of accounts where each account is a list of strings (name followed by emails), merge accounts that share at least one email. Return the merged accounts with emails sorted.',
        language: 'python',
        solution: `class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        from collections import defaultdict
        parent = {}

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            parent[find(x)] = find(y)

        email_to_name = {}
        for account in accounts:
            name = account[0]
            for email in account[1:]:
                if email not in parent:
                    parent[email] = email
                email_to_name[email] = name
                union(account[1], email)

        groups = defaultdict(list)
        for email in parent:
            groups[find(email)].append(email)

        return [[email_to_name[root]] + sorted(emails)
                for root, emails in groups.items()]`,
      },
      {
        id: 'graph-48',
        title: 'Satisfiability of Equality Equations',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/satisfiability-of-equality-equations/',
        description: 'Given an array of strings equations representing relationships between variables, return true if all equations are satisfiable. Each equation is either "a==b" or "a!=b".',
        language: 'python',
        solution: `class Solution:
    def equationsPossible(self, equations: List[str]) -> bool:
        parent = list(range(26))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            parent[find(x)] = find(y)

        for eq in equations:
            if eq[1] == '=':
                union(ord(eq[0]) - ord('a'), ord(eq[3]) - ord('a'))

        for eq in equations:
            if eq[1] == '!':
                if find(ord(eq[0]) - ord('a')) == find(ord(eq[3]) - ord('a')):
                    return False

        return True`,
      },
      {
        id: 'graph-49',
        title: 'Number of Operations to Make Network Connected',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-operations-to-make-network-connected/',
        description: 'Given n computers and a list of connections, return the minimum number of cable operations to make all computers connected. Return -1 if not possible.',
        language: 'python',
        solution: `class Solution:
    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
        if len(connections) < n - 1:
            return -1
        parent = list(range(n))
        rank = [0] * n

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return 0
            if rank[px] < rank[py]:
                px, py = py, px
            parent[py] = px
            if rank[px] == rank[py]:
                rank[px] += 1
            return 1

        components = n - sum(union(u, v) for u, v in connections)
        return components - 1`,
      },
      {
        id: 'graph-50',
        title: 'Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/',
        description: 'Given a weighted undirected graph, find all critical and pseudo-critical edges in the minimum spanning tree. A critical edge is one whose removal increases the MST weight.',
        language: 'python',
        solution: `class Solution:
    def findCriticalAndPseudoCriticalEdges(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        edges = [(w, u, v, i) for i, (u, v, w) in enumerate(edges)]
        edges.sort()

        def find(parent, x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(parent, rank, x, y):
            px, py = find(parent, x), find(parent, y)
            if px == py:
                return 0
            if rank[px] < rank[py]:
                px, py = py, px
            parent[py] = px
            if rank[px] == rank[py]:
                rank[px] += 1
            return 1

        def mst_weight(skip=-1, include=-1):
            parent = list(range(n))
            rank = [0] * n
            weight = 0
            components = n
            if include != -1:
                w, u, v, _ = edges[include]
                union(parent, rank, u, v)
                weight += w
                components -= 1
            for i, (w, u, v, _) in enumerate(edges):
                if i == skip:
                    continue
                if union(parent, rank, u, v):
                    weight += w
                    components -= 1
            return weight if components == 1 else float('inf')

        base = mst_weight()
        critical, pseudo = [], []
        for i in range(len(edges)):
            if mst_weight(skip=i) > base:
                critical.append(edges[i][3])
            elif mst_weight(include=i) == base:
                pseudo.append(edges[i][3])
        return [critical, pseudo]`,
      },
      {
        id: 'graph-51',
        title: 'Second Minimum Time to Reach Destination',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/second-minimum-time-to-reach-destination/',
        description: 'Given a graph of n nodes, edges, time per edge, and change interval for traffic lights, return the second minimum time to travel from node 1 to node n.',
        language: 'python',
        solution: `class Solution:
    def secondMinimum(self, n: int, edges: List[List[int]], time: int, change: int) -> int:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        dist1 = [-1] * (n + 1)
        dist2 = [-1] * (n + 1)
        dist1[1] = 0
        queue = deque([(1, 1)])
        while queue:
            node, freq = queue.popleft()
            d = dist1[node] if freq == 1 else dist2[node]
            if (d // change) % 2 == 1:
                d += change - (d % change)
            d += time
            for neighbor in graph[node]:
                if dist1[neighbor] == -1:
                    dist1[neighbor] = d
                    queue.append((neighbor, 1))
                elif dist2[neighbor] == -1 and dist1[neighbor] != d:
                    dist2[neighbor] = d
                    if neighbor == n:
                        return d
                    queue.append((neighbor, 2))
        return dist2[n]`,
      },
      {
        id: 'graph-52',
        title: 'Minimum Fuel Cost to Report to the Capital',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/',
        description: 'Given a tree of n cities and integer seats, return the minimum liters of fuel to move all representatives to the capital city 0. Each car has seats capacity and fuel cost is 1 per road.',
        language: 'python',
        solution: `class Solution:
    def minimumFuelCost(self, roads: List[List[int]], seats: int) -> int:
        from collections import defaultdict
        import math
        graph = defaultdict(list)
        for u, v in roads:
            graph[u].append(v)
            graph[v].append(u)
        fuel = 0
        def dfs(node, parent):
            nonlocal fuel
            people = 1
            for neighbor in graph[node]:
                if neighbor == parent:
                    continue
                people += dfs(neighbor, node)
            if node != 0:
                fuel += math.ceil(people / seats)
            return people
        dfs(0, -1)
        return fuel`,
      },
      {
        id: 'graph-53',
        title: 'Restore the Array From Adjacent Pairs',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/',
        description: 'Given a 2D array adjacentPairs where adjacentPairs[i] = [ui, vi] means ui and vi are adjacent in the original array, reconstruct and return the original array.',
        language: 'python',
        solution: `class Solution:
    def restoreArray(self, adjacentPairs: List[List[int]]) -> List[int]:
        from collections import defaultdict
        graph = defaultdict(list)
        for u, v in adjacentPairs:
            graph[u].append(v)
            graph[v].append(u)
        start = next(node for node in graph if len(graph[node]) == 1)
        result = [start]
        prev, curr = None, start
        while len(result) < len(adjacentPairs) + 1:
            for neighbor in graph[curr]:
                if neighbor != prev:
                    result.append(neighbor)
                    prev, curr = curr, neighbor
                    break
        return result`,
      },
      {
        id: 'graph-54',
        title: 'Check if Move is Legal',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/check-if-move-is-legal/',
        description: 'Given an 8x8 board of a Reversi-like game, a position to place a piece of given color, return true if the move is legal. A move is legal if it captures at least one opponent piece in any direction.',
        language: 'python',
        solution: `class Solution:
    def checkMove(self, board: List[List[str]], rMove: int, cMove: int, color: str) -> bool:
        opponent = 'B' if color == 'W' else 'W'
        directions = [(0,1),(0,-1),(1,0),(-1,0),(1,1),(1,-1),(-1,1),(-1,-1)]
        for dr, dc in directions:
            r, c = rMove + dr, cMove + dc
            length = 1
            while 0 <= r < 8 and 0 <= c < 8 and board[r][c] == opponent:
                r += dr
                c += dc
                length += 1
            if length > 1 and 0 <= r < 8 and 0 <= c < 8 and board[r][c] == color:
                return True
        return False`,
      },
      {
        id: 'graph-55',
        title: 'Most Stones Removed with Same Row or Column',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/',
        description: 'Given stones on a 2D plane, a stone can be removed if it shares a row or column with another stone. Return the maximum number of stones that can be removed.',
        language: 'python',
        solution: `class Solution:
    def removeStones(self, stones: List[List[int]]) -> int:
        parent = {}

        def find(x):
            if x not in parent:
                parent[x] = x
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            parent[find(x)] = find(y)

        for r, c in stones:
            union(r, ~c)

        return len(stones) - len({find(r) for r, c in stones})`,
      },
      {
        id: 'graph-56',
        title: 'Largest Component Size by Common Factor',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/largest-component-size-by-common-factor/',
        description: 'Given an integer array nums, consider a graph where there is an edge between nums[i] and nums[j] if they share a common factor greater than 1. Return the size of the largest connected component.',
        language: 'python',
        solution: `class Solution:
    def largestComponentSize(self, nums: List[int]) -> int:
        from collections import Counter
        parent = list(range(max(nums) + 1))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            parent[find(x)] = find(y)

        for num in nums:
            i = 2
            while i * i <= num:
                if num % i == 0:
                    union(num, i)
                    union(num, num // i)
                i += 1

        count = Counter(find(num) for num in nums)
        return max(count.values())`,
      },
      {
        id: 'graph-57',
        title: 'Minimum Score of a Path Between Two Cities',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/',
        description: 'Given n cities, roads with distances, find the minimum score of a path between city 1 and city n. The score is the minimum edge distance on the path. The path can visit cities multiple times.',
        language: 'python',
        solution: `class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        for u, v, d in roads:
            graph[u].append((v, d))
            graph[v].append((u, d))
        visited = set()
        queue = deque([1])
        visited.add(1)
        result = float('inf')
        while queue:
            node = queue.popleft()
            for neighbor, dist in graph[node]:
                result = min(result, dist)
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        return result`,
      },
      {
        id: 'graph-58',
        title: 'Remove Max Number of Edges to Keep Graph Fully Traversable',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/',
        description: 'Given a graph with 3 types of edges (Alice only, Bob only, both), return the maximum number of edges that can be removed while keeping the graph fully traversable by both Alice and Bob.',
        language: 'python',
        solution: `class Solution:
    def maxNumEdgesToRemove(self, n: int, edges: List[List[int]]) -> int:
        def make_uf(n):
            parent = list(range(n + 1))
            rank = [0] * (n + 1)
            def find(x):
                while parent[x] != x:
                    parent[x] = parent[parent[x]]
                    x = parent[x]
                return x
            def union(x, y):
                px, py = find(x), find(y)
                if px == py:
                    return 0
                if rank[px] < rank[py]:
                    px, py = py, px
                parent[py] = px
                if rank[px] == rank[py]:
                    rank[px] += 1
                return 1
            return union, find

        ua, fa = make_uf(n)
        ub, fb = make_uf(n)
        added = removed = 0

        for t, u, v in edges:
            if t == 3:
                r1 = ua(u, v)
                r2 = ub(u, v)
                if r1 or r2:
                    added += max(r1, r2)
                    if r1: ua(u, v)
                    if r2: ub(u, v)
                else:
                    removed += 1

        ua2, fa2 = make_uf(n)
        ub2, fb2 = make_uf(n)
        for t, u, v in edges:
            if t == 3:
                ua2(u, v)
                ub2(u, v)

        for t, u, v in edges:
            if t == 1:
                if not ua2(u, v):
                    removed += 1
            elif t == 2:
                if not ub2(u, v):
                    removed += 1

        if len({fa2(i) for i in range(1, n+1)}) > 1:
            return -1
        if len({fb2(i) for i in range(1, n+1)}) > 1:
            return -1
        return removed`,
      },
      {
        id: 'graph-59',
        title: 'Couples Holding Hands',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/couples-holding-hands/',
        description: 'Given n couples sitting in 2n seats in a row, return the minimum number of swaps so that every couple sits side by side. A swap consists of choosing any two people and swapping their seats.',
        language: 'python',
        solution: `class Solution:
    def minSwapsCouples(self, row: List[int]) -> int:
        parent = list(range(len(row) // 2))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            px, py = find(x), find(y)
            if px != py:
                parent[px] = py
                return 1
            return 0

        swaps = 0
        for i in range(0, len(row), 2):
            swaps += union(row[i] // 2, row[i + 1] // 2)
        return swaps`,
      },
      {
        id: 'graph-60',
        title: 'Frog Position After T Seconds',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/frog-position-after-t-seconds/',
        description: 'Given a tree of n vertices, a frog starts at vertex 1 and jumps to an unvisited adjacent vertex each second with equal probability. Return the probability that the frog is at vertex target after t seconds.',
        language: 'python',
        solution: `class Solution:
    def frogPosition(self, n: int, edges: List[List[int]], t: int, target: int) -> float:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        visited = set([1])
        queue = deque([(1, 1.0, t)])
        while queue:
            node, prob, time = queue.popleft()
            neighbors = [nb for nb in graph[node] if nb not in visited]
            if node == target:
                if time == 0 or len(neighbors) == 0:
                    return prob
                return 0.0
            if time == 0 or len(neighbors) == 0:
                continue
            for nb in neighbors:
                visited.add(nb)
                queue.append((nb, prob / len(neighbors), time - 1))
        return 0.0`,
      },
      {
        id: 'graph-61',
        title: 'Count Nodes Equal to Average of Subtree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/',
        description: 'Given the root of a binary tree, return the number of nodes where the value equals the average of all values in its subtree (rounded down).',
        language: 'python',
        solution: `class Solution:
    def averageOfSubtree(self, root) -> int:
        result = 0
        def dfs(node):
            nonlocal result
            if not node:
                return 0, 0
            left_sum, left_count = dfs(node.left)
            right_sum, right_count = dfs(node.right)
            total_sum = left_sum + right_sum + node.val
            total_count = left_count + right_count + 1
            if total_sum // total_count == node.val:
                result += 1
            return total_sum, total_count
        dfs(root)
        return result`,
      },
      {
        id: 'graph-62',
        title: 'Design Graph With Shortest Path Calculator',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/design-graph-with-shortest-path-calculator/',
        description: 'Design a graph with n nodes, directed weighted edges, ability to add edges, and query the shortest path between two nodes using Dijkstra.',
        language: 'python',
        solution: `class Graph:
    def __init__(self, n: int, edges: List[List[int]]):
        from collections import defaultdict
        self.graph = defaultdict(list)
        for u, v, w in edges:
            self.graph[u].append((v, w))

    def addEdge(self, edge: List[int]) -> None:
        u, v, w = edge
        self.graph[u].append((v, w))

    def shortestPath(self, node1: int, node2: int) -> int:
        import heapq
        dist = {node1: 0}
        heap = [(0, node1)]
        while heap:
            d, node = heapq.heappop(heap)
            if node == node2:
                return d
            if d > dist.get(node, float('inf')):
                continue
            for neighbor, w in self.graph[node]:
                new_dist = d + w
                if new_dist < dist.get(neighbor, float('inf')):
                    dist[neighbor] = new_dist
                    heapq.heappush(heap, (new_dist, neighbor))
        return -1`,
      },
      {
        id: 'graph-63',
        title: 'Maximize the Number of Target Nodes After Connecting Trees I',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/',
        description: 'Given two trees with edges1 and edges2, and integer k, return an array where answer[i] is the maximum number of nodes reachable within k edges from node i in tree1 after connecting it optimally to tree2.',
        language: 'python',
        solution: `class Solution:
    def maxTargetNodes(self, edges1: List[List[int]], edges2: List[List[int]], k: int) -> List[int]:
        from collections import defaultdict, deque
        def build(edges):
            graph = defaultdict(list)
            for u, v in edges:
                graph[u].append(v)
                graph[v].append(u)
            return graph

        def count_reachable(graph, start, max_dist):
            visited = {start}
            queue = deque([(start, 0)])
            count = 0
            while queue:
                node, dist = queue.popleft()
                if dist > max_dist:
                    break
                count += 1
                for nb in graph[node]:
                    if nb not in visited:
                        visited.add(nb)
                        queue.append((nb, dist + 1))
            return count

        g1 = build(edges1)
        g2 = build(edges2)
        n1 = len(edges1) + 1
        n2 = len(edges2) + 1

        best2 = max(count_reachable(g2, j, k - 1) for j in range(n2)) if k > 0 else 0
        return [count_reachable(g1, i, k) + best2 for i in range(n1)]`,
      },
      {
        id: 'graph-64',
        title: 'Count the Number of Complete Components',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/count-the-number-of-complete-components/',
        description: 'Given an undirected graph with n vertices and edges, return the number of complete connected components. A complete component is a subgraph where every pair of vertices is connected by an edge.',
        language: 'python',
        solution: `class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        from collections import defaultdict
        parent = list(range(n))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            parent[find(x)] = find(y)

        for u, v in edges:
            union(u, v)

        from collections import Counter
        comp_nodes = Counter(find(i) for i in range(n))
        comp_edges = Counter(find(u) for u, v in edges)

        result = 0
        for root, node_count in comp_nodes.items():
            edge_count = comp_edges.get(root, 0)
            if edge_count == node_count * (node_count - 1) // 2:
                result += 1
        return result`,
      },
      {
        id: 'graph-65',
        title: 'Find Closest Node to Given Two Nodes',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-closest-node-to-given-two-nodes/',
        description: 'Given a directed graph where each node has at most one outgoing edge, and two nodes node1 and node2, return the index of the node that can be reached from both with minimum max distance. Return -1 if no such node exists.',
        language: 'python',
        solution: `class Solution:
    def closestMeetingNode(self, edges: List[int], node1: int, node2: int) -> int:
        def get_dist(start):
            dist = {}
            node, d = start, 0
            while node != -1 and node not in dist:
                dist[node] = d
                node = edges[node]
                d += 1
            return dist

        dist1 = get_dist(node1)
        dist2 = get_dist(node2)

        result = -1
        min_dist = float('inf')
        for node in range(len(edges)):
            if node in dist1 and node in dist2:
                max_d = max(dist1[node], dist2[node])
                if max_d < min_dist:
                    min_dist = max_d
                    result = node
        return result`,
      },
      {
        id: 'graph-66',
        title: 'Minimum Number of Vertices to Reach All Nodes',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/',
        description: 'Given a directed acyclic graph with n vertices and edges, return the smallest set of vertices from which all nodes in the graph are reachable.',
        language: 'python',
        solution: `class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        has_incoming = set()
        for _, v in edges:
            has_incoming.add(v)
        return [i for i in range(n) if i not in has_incoming]`,
      },
      {
        id: 'graph-67',
        title: 'Time Needed to Inform All Employees',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/time-needed-to-inform-all-employees/',
        description: 'Given n employees, a head manager, manager array, and informTime array, return the total time needed to inform all employees. Each manager informs all direct subordinates simultaneously.',
        language: 'python',
        solution: `class Solution:
    def numOfMinutes(self, n: int, headID: int, manager: List[int], informTime: List[int]) -> int:
        from collections import defaultdict
        graph = defaultdict(list)
        for i in range(n):
            if manager[i] != -1:
                graph[manager[i]].append(i)
        def dfs(node):
            if not graph[node]:
                return 0
            return informTime[node] + max(dfs(sub) for sub in graph[node])
        return dfs(headID)`,
      },
      {
        id: 'graph-68',
        title: 'Dijkstra\'s Algorithm - Shortest Path',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/path-with-maximum-probability/',
        description: 'Given an undirected weighted graph, a start and end node, and edge probabilities, return the maximum probability of reaching end from start. Return 0 if no path exists.',
        language: 'python',
        solution: `class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
        from collections import defaultdict
        import heapq
        graph = defaultdict(list)
        for i, (u, v) in enumerate(edges):
            graph[u].append((v, succProb[i]))
            graph[v].append((u, succProb[i]))
        prob = [0.0] * n
        prob[start] = 1.0
        heap = [(-1.0, start)]
        while heap:
            p, node = heapq.heappop(heap)
            p = -p
            if node == end:
                return p
            if p < prob[node]:
                continue
            for neighbor, edge_prob in graph[node]:
                new_prob = p * edge_prob
                if new_prob > prob[neighbor]:
                    prob[neighbor] = new_prob
                    heapq.heappush(heap, (-new_prob, neighbor))
        return 0.0`,
      },
      {
        id: 'graph-69',
        title: 'Shortest Path to Get All Keys',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/shortest-path-to-get-all-keys/',
        description: 'Given a grid with keys (a-f), locks (A-F), start (@), and walls (#), return the minimum number of moves to collect all keys. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def shortestPathAllKeys(self, grid: List[str]) -> int:
        from collections import deque
        rows, cols = len(grid), len(grid[0])
        start = None
        all_keys = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '@':
                    start = (r, c)
                elif grid[r][c].islower():
                    all_keys |= (1 << (ord(grid[r][c]) - ord('a')))
        queue = deque([(start[0], start[1], 0, 0)])
        visited = {(start[0], start[1], 0)}
        while queue:
            r, c, keys, moves = queue.popleft()
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if not (0 <= nr < rows and 0 <= nc < cols):
                    continue
                cell = grid[nr][nc]
                if cell == '#':
                    continue
                if cell.isupper() and not (keys & (1 << (ord(cell.lower()) - ord('a')))):
                    continue
                new_keys = keys
                if cell.islower():
                    new_keys |= (1 << (ord(cell) - ord('a')))
                if new_keys == all_keys:
                    return moves + 1
                if (nr, nc, new_keys) not in visited:
                    visited.add((nr, nc, new_keys))
                    queue.append((nr, nc, new_keys, moves + 1))
        return -1`,
      },
      {
        id: 'graph-70',
        title: 'Parallel Courses III',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/parallel-courses-iii/',
        description: 'Given n courses, prerequisites, and time array, return the minimum number of months to complete all courses. Courses with no prerequisites can be taken simultaneously.',
        language: 'python',
        solution: `class Solution:
    def minimumTime(self, n: int, relations: List[List[int]], time: List[int]) -> int:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        in_degree = [0] * (n + 1)
        for u, v in relations:
            graph[u].append(v)
            in_degree[v] += 1
        dp = [0] * (n + 1)
        queue = deque()
        for i in range(1, n + 1):
            if in_degree[i] == 0:
                queue.append(i)
                dp[i] = time[i - 1]
        while queue:
            node = queue.popleft()
            for neighbor in graph[node]:
                dp[neighbor] = max(dp[neighbor], dp[node] + time[neighbor - 1])
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)
        return max(dp)`,
      },
      {
        id: 'graph-71',
        title: 'Longest Path With Different Adjacent Characters',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/longest-path-with-different-adjacent-characters/',
        description: 'Given a tree rooted at node 0 with a string s of characters, return the length of the longest path where no two adjacent nodes have the same character.',
        language: 'python',
        solution: `class Solution:
    def longestPath(self, parent: List[int], s: str) -> int:
        from collections import defaultdict
        n = len(parent)
        graph = defaultdict(list)
        for i in range(1, n):
            graph[parent[i]].append(i)
        result = 1
        def dfs(node) -> int:
            nonlocal result
            top2 = [0, 0]
            for child in graph[node]:
                child_len = dfs(child)
                if s[child] != s[node]:
                    if child_len > top2[0]:
                        top2[1] = top2[0]
                        top2[0] = child_len
                    elif child_len > top2[1]:
                        top2[1] = child_len
            result = max(result, top2[0] + top2[1] + 1)
            return top2[0] + 1
        dfs(0)
        return result`,
      },
      {
        id: 'graph-72',
        title: 'Number of Good Paths',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-good-paths/',
        description: 'Given a tree with node values, return the number of good paths. A good path has the same value at start and end nodes, and all intermediate nodes have values less than or equal to the start/end value.',
        language: 'python',
        solution: `class Solution:
    def numberOfGoodPaths(self, vals: List[int], edges: List[List[int]]) -> int:
        from collections import defaultdict
        n = len(vals)
        parent = list(range(n))
        size = defaultdict(lambda: defaultdict(int))
        for i in range(n):
            size[i][vals[i]] = 1

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        result = n
        edges_by_val = sorted((max(vals[u], vals[v]), u, v) for u, v in edges)

        for _, u, v in edges_by_val:
            pu, pv = find(u), find(v)
            val_u, val_v = max(vals[pu], vals[pv]), max(vals[pv], vals[pu])
            cnt_u = size[pu].get(max(vals[pu], vals[pv]), 0)
            cnt_v = size[pv].get(max(vals[pu], vals[pv]), 0)
            result += cnt_u * cnt_v
            parent[pu] = pv
            size[pv][max(vals[pu], vals[pv])] = cnt_u + cnt_v

        return result`,
      },
      {
        id: 'graph-73',
        title: 'Minimum Cost to Convert String I',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-convert-string-i/',
        description: 'Given strings source and target, arrays original, changed, and cost, return the minimum cost to convert source to target by changing characters. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
        import heapq
        from collections import defaultdict
        graph = defaultdict(list)
        for o, c, w in zip(original, changed, cost):
            graph[ord(o) - ord('a')].append((ord(c) - ord('a'), w))

        def dijkstra(start):
            dist = [float('inf')] * 26
            dist[start] = 0
            heap = [(0, start)]
            while heap:
                d, node = heapq.heappop(heap)
                if d > dist[node]:
                    continue
                for neighbor, w in graph[node]:
                    if dist[node] + w < dist[neighbor]:
                        dist[neighbor] = dist[node] + w
                        heapq.heappush(heap, (dist[neighbor], neighbor))
            return dist

        all_dist = [dijkstra(i) for i in range(26)]
        result = 0
        for s, t in zip(source, target):
            if s == t:
                continue
            d = all_dist[ord(s) - ord('a')][ord(t) - ord('a')]
            if d == float('inf'):
                return -1
            result += d
        return result`,
      },
      {
        id: 'graph-74',
        title: 'Floyd Warshall Algorithm',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/',
        description: 'Given n cities, edges with weights, and a distance threshold, return the city with the smallest number of reachable cities within the threshold. If tie, return the city with the largest index.',
        language: 'python',
        solution: `class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        dist = [[float('inf')] * n for _ in range(n)]
        for i in range(n):
            dist[i][i] = 0
        for u, v, w in edges:
            dist[u][v] = w
            dist[v][u] = w
        for k in range(n):
            for i in range(n):
                for j in range(n):
                    if dist[i][k] + dist[k][j] < dist[i][j]:
                        dist[i][j] = dist[i][k] + dist[k][j]
        result = -1
        min_count = float('inf')
        for i in range(n):
            count = sum(1 for j in range(n) if i != j and dist[i][j] <= distanceThreshold)
            if count <= min_count:
                min_count = count
                result = i
        return result`,
      },
      {
        id: 'graph-75',
        title: 'Bellman Ford Algorithm',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
        description: 'Given n cities, flights with costs, source src, destination dst, and max stops k, return the cheapest price using Bellman-Ford algorithm. Return -1 if no such route exists.',
        language: 'python',
        solution: `class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        prices = [float('inf')] * n
        prices[src] = 0
        for i in range(k + 1):
            temp = prices.copy()
            for u, v, w in flights:
                if prices[u] == float('inf'):
                    continue
                if prices[u] + w < temp[v]:
                    temp[v] = prices[u] + w
            prices = temp
        return prices[dst] if prices[dst] != float('inf') else -1`,
      },
      {
        id: 'graph-76',
        title: 'Longest Increasing Path in a Matrix',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/',
        description: 'Given an m x n integers matrix, return the length of the longest increasing path. From each cell you can move in 4 directions, and you may not move diagonally or outside the boundary.',
        language: 'python',
        solution: `class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        rows, cols = len(matrix), len(matrix[0])
        memo = {}
        def dfs(r, c):
            if (r, c) in memo:
                return memo[(r, c)]
            best = 1
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and matrix[nr][nc] > matrix[r][c]:
                    best = max(best, 1 + dfs(nr, nc))
            memo[(r, c)] = best
            return best
        return max(dfs(r, c) for r in range(rows) for c in range(cols))`,
      },
      {
        id: 'graph-77',
        title: 'Word Ladder II',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/word-ladder-ii/',
        description: 'Given beginWord, endWord, and a wordList, return all shortest transformation sequences from beginWord to endWord. Each transformed word must exist in the wordList.',
        language: 'python',
        solution: `class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        from collections import defaultdict, deque
        word_set = set(wordList)
        if endWord not in word_set:
            return []
        layer = {beginWord: [[beginWord]]}
        while layer:
            word_set -= set(layer.keys())
            next_layer = defaultdict(list)
            for word, paths in layer.items():
                for i in range(len(word)):
                    for c in 'abcdefghijklmnopqrstuvwxyz':
                        new_word = word[:i] + c + word[i+1:]
                        if new_word in word_set:
                            next_layer[new_word] += [path + [new_word] for path in paths]
            if endWord in next_layer:
                return next_layer[endWord]
            layer = next_layer
        return []`,
      },
      {
        id: 'graph-78',
        title: 'Pseudo-Palindromic Paths in a Binary Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/',
        description: 'Given a binary tree where node values are digits 1-9, return the number of pseudo-palindromic paths from root to leaf. A path is pseudo-palindromic if at least one permutation of the node values is a palindrome.',
        language: 'python',
        solution: `class Solution:
    def pseudoPalindromicPaths(self, root) -> int:
        result = 0
        def dfs(node, mask):
            nonlocal result
            if not node:
                return
            mask ^= (1 << node.val)
            if not node.left and not node.right:
                if mask & (mask - 1) == 0:
                    result += 1
                return
            dfs(node.left, mask)
            dfs(node.right, mask)
        dfs(root, 0)
        return result`,
      },
      {
        id: 'graph-79',
        title: 'Sum of Distances in Tree',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/sum-of-distances-in-tree/',
        description: 'Given a tree with n nodes, return an array answer where answer[i] is the sum of distances between node i and all other nodes.',
        language: 'python',
        solution: `class Solution:
    def sumOfDistancesInTree(self, n: int, edges: List[List[int]]) -> List[int]:
        from collections import defaultdict
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        count = [1] * n
        result = [0] * n
        def dfs1(node, parent):
            for child in graph[node]:
                if child != parent:
                    dfs1(child, node)
                    count[node] += count[child]
                    result[node] += result[child] + count[child]
        def dfs2(node, parent):
            for child in graph[node]:
                if child != parent:
                    result[child] = result[node] - count[child] + (n - count[child])
                    dfs2(child, node)
        dfs1(0, -1)
        dfs2(0, -1)
        return result`,
      },
      {
        id: 'graph-80',
        title: 'Maximum Star Sum of a Graph',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-star-sum-of-a-graph/',
        description: 'Given a graph with node values and edges, and integer k, return the maximum star sum of a star graph with at most k edges. A star graph is a subgraph with one center node connected to neighbors.',
        language: 'python',
        solution: `class Solution:
    def maxStarSum(self, vals: List[int], edges: List[List[int]], k: int) -> int:
        from collections import defaultdict
        graph = defaultdict(list)
        for u, v in edges:
            if vals[v] > 0:
                graph[u].append(vals[v])
            if vals[u] > 0:
                graph[v].append(vals[u])
        result = max(vals)
        for node in range(len(vals)):
            neighbors = sorted(graph[node], reverse=True)[:k]
            result = max(result, vals[node] + sum(neighbors))
        return result`,
      },
      {
        id: 'graph-81',
        title: 'Stepping Numbers',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/stepping-numbers/',
        description: 'Given two integers low and high, return a sorted list of all stepping numbers in the range [low, high]. A stepping number has adjacent digits that differ by exactly 1.',
        language: 'python',
        solution: `class Solution:
    def countSteppingNumbers(self, low: int, high: int) -> List[int]:
        from collections import deque
        result = []
        queue = deque(range(1, 10))
        if low == 0:
            result.append(0)
        while queue:
            num = queue.popleft()
            if num > high:
                continue
            if num >= low:
                result.append(num)
            last = num % 10
            if last > 0:
                queue.append(num * 10 + last - 1)
            if last < 9:
                queue.append(num * 10 + last + 1)
        return sorted(result)`,
      },
      {
        id: 'graph-82',
        title: 'Minimum Genetic Mutation',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-genetic-mutation/',
        description: 'Given a start gene string, end gene string, and a gene bank, return the minimum number of mutations to mutate from start to end. Each mutation changes one character to A, C, G, or T and must exist in the bank.',
        language: 'python',
        solution: `class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        from collections import deque
        bank_set = set(bank)
        if endGene not in bank_set:
            return -1
        queue = deque([(startGene, 0)])
        visited = {startGene}
        while queue:
            gene, mutations = queue.popleft()
            if gene == endGene:
                return mutations
            for i in range(len(gene)):
                for c in 'ACGT':
                    new_gene = gene[:i] + c + gene[i+1:]
                    if new_gene in bank_set and new_gene not in visited:
                        visited.add(new_gene)
                        queue.append((new_gene, mutations + 1))
        return -1`,
      },
      {
        id: 'graph-83',
        title: 'Closest Meeting Node',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-closest-node-to-given-two-nodes/',
        description: 'Given a directed graph where each node has at most one outgoing edge, and two source nodes, return the node reachable from both with the minimum maximum distance. Return -1 if no such node.',
        language: 'python',
        solution: `class Solution:
    def closestMeetingNode(self, edges: List[int], node1: int, node2: int) -> int:
        def bfs(start):
            dist = [-1] * len(edges)
            node, d = start, 0
            while node != -1 and dist[node] == -1:
                dist[node] = d
                node = edges[node]
                d += 1
            return dist
        dist1 = bfs(node1)
        dist2 = bfs(node2)
        result = -1
        min_dist = float('inf')
        for i in range(len(edges)):
            if dist1[i] != -1 and dist2[i] != -1:
                max_d = max(dist1[i], dist2[i])
                if max_d < min_dist:
                    min_dist = max_d
                    result = i
        return result`,
      },
      {
        id: 'graph-84',
        title: 'Throne Inheritance',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/throne-inheritance/',
        description: 'Design a throne inheritance system with birth and death operations. Implement getInheritanceOrder to return the current order of inheritance excluding dead people.',
        language: 'python',
        solution: `class ThroneInheritance:
    def __init__(self, kingName: str):
        from collections import defaultdict
        self.king = kingName
        self.children = defaultdict(list)
        self.dead = set()

    def birth(self, parentName: str, childName: str) -> None:
        self.children[parentName].append(childName)

    def death(self, name: str) -> None:
        self.dead.add(name)

    def getInheritanceOrder(self) -> List[str]:
        result = []
        def dfs(node):
            if node not in self.dead:
                result.append(node)
            for child in self.children[node]:
                dfs(child)
        dfs(self.king)
        return result`,
      },
      {
        id: 'graph-85',
        title: 'Minimum Number of Days to Disconnect Island',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/',
        description: 'Given a binary grid, return the minimum number of days to disconnect the island by changing 1s to 0s. An island is disconnected if there are 0 or more than 1 islands.',
        language: 'python',
        solution: `class Solution:
    def minDays(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])

        def count_islands():
            visited = set()
            count = 0
            def dfs(r, c):
                if (r,c) in visited or r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == 0:
                    return
                visited.add((r, c))
                for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                    dfs(r+dr, c+dc)
            for r in range(rows):
                for c in range(cols):
                    if grid[r][c] == 1 and (r,c) not in visited:
                        dfs(r, c)
                        count += 1
            return count

        if count_islands() != 1:
            return 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    grid[r][c] = 0
                    if count_islands() != 1:
                        return 1
                    grid[r][c] = 1
        return 2`,
      },
      {
        id: 'graph-86',
        title: 'Number of Increasing Paths in a Grid',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/',
        description: 'Given an m x n integer grid, return the number of strictly increasing paths. You can move in 4 directions and the answer should be modulo 10^9 + 7.',
        language: 'python',
        solution: `class Solution:
    def countPaths(self, grid: List[List[int]]) -> int:
        MOD = 10**9 + 7
        rows, cols = len(grid), len(grid[0])
        memo = {}
        def dfs(r, c):
            if (r, c) in memo:
                return memo[(r, c)]
            result = 1
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] > grid[r][c]:
                    result = (result + dfs(nr, nc)) % MOD
            memo[(r, c)] = result
            return result
        return sum(dfs(r, c) for r in range(rows) for c in range(cols)) % MOD`,
      },
      {
        id: 'graph-87',
        title: 'Shortest Path in a Grid with Obstacles Elimination',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/',
        description: 'Given an m x n grid with 0s (empty) and 1s (obstacles), and integer k, return the minimum steps to walk from top-left to bottom-right with at most k obstacle eliminations. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def shortestPath(self, grid: List[List[int]], k: int) -> int:
        from collections import deque
        rows, cols = len(grid), len(grid[0])
        if rows == 1 and cols == 1:
            return 0
        queue = deque([(0, 0, k, 0)])
        visited = {(0, 0, k)}
        while queue:
            r, c, elim, steps = queue.popleft()
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if not (0 <= nr < rows and 0 <= nc < cols):
                    continue
                if nr == rows - 1 and nc == cols - 1:
                    return steps + 1
                new_elim = elim - grid[nr][nc]
                if new_elim >= 0 and (nr, nc, new_elim) not in visited:
                    visited.add((nr, nc, new_elim))
                    queue.append((nr, nc, new_elim, steps + 1))
        return -1`,
      },
      {
        id: 'graph-88',
        title: 'Robot Room Cleaner',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/robot-room-cleaner/',
        description: 'Given a robot cleaner API with move, turnLeft, turnRight, and clean methods, clean the entire room without knowing the room layout. The robot starts at an unknown position.',
        language: 'python',
        solution: `class Solution:
    def cleanRoom(self, robot):
        visited = set()
        directions = [(-1,0),(0,1),(1,0),(0,-1)]

        def go_back():
            robot.turnRight()
            robot.turnRight()
            robot.move()
            robot.turnRight()
            robot.turnRight()

        def dfs(r, c, d):
            robot.clean()
            visited.add((r, c))
            for i in range(4):
                nd = (d + i) % 4
                nr, nc = r + directions[nd][0], c + directions[nd][1]
                if (nr, nc) not in visited and robot.move():
                    dfs(nr, nc, nd)
                    go_back()
                robot.turnRight()

        dfs(0, 0, 0)`,
      },
      {
        id: 'graph-89',
        title: 'Minimum Cost to Reach City With Discounts',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/',
        description: 'Given n cities, highways with tolls, and k discounts that halve a toll, return the minimum cost to travel from city 0 to city n-1 using at most k discounts.',
        language: 'python',
        solution: `class Solution:
    def minimumCost(self, n: int, highways: List[List[int]], discounts: int) -> int:
        import heapq
        from collections import defaultdict
        graph = defaultdict(list)
        for u, v, w in highways:
            graph[u].append((v, w))
            graph[v].append((u, w))
        dist = [[float('inf')] * (discounts + 1) for _ in range(n)]
        dist[0][0] = 0
        heap = [(0, 0, 0)]
        while heap:
            cost, node, used = heapq.heappop(heap)
            if cost > dist[node][used]:
                continue
            if node == n - 1:
                return cost
            for neighbor, w in graph[node]:
                if cost + w < dist[neighbor][used]:
                    dist[neighbor][used] = cost + w
                    heapq.heappush(heap, (cost + w, neighbor, used))
                if used < discounts and cost + w // 2 < dist[neighbor][used + 1]:
                    dist[neighbor][used + 1] = cost + w // 2
                    heapq.heappush(heap, (cost + w // 2, neighbor, used + 1))
        return -1`,
      },
      {
        id: 'graph-90',
        title: 'Kth Largest Sum in a Binary Tree',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/',
        description: 'Given the root of a binary tree and integer k, return the kth largest level sum. The level sum is the sum of all node values at that level.',
        language: 'python',
        solution: `class Solution:
    def kthLargestLevelSum(self, root, k: int) -> int:
        from collections import deque
        import heapq
        if not root:
            return -1
        level_sums = []
        queue = deque([root])
        while queue:
            level_sum = 0
            for _ in range(len(queue)):
                node = queue.popleft()
                level_sum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            level_sums.append(level_sum)
        if k > len(level_sums):
            return -1
        return sorted(level_sums, reverse=True)[k - 1]`,
      },
      {
        id: 'graph-91',
        title: 'Map of Highest Peak',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/map-of-highest-peak/',
        description: 'Given an m x n binary matrix isWater where 1 is water and 0 is land, assign heights to each cell such that water cells have height 0 and adjacent cells differ by at most 1. Return the matrix with maximum height.',
        language: 'python',
        solution: `class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        from collections import deque
        rows, cols = len(isWater), len(isWater[0])
        height = [[-1] * cols for _ in range(rows)]
        queue = deque()
        for r in range(rows):
            for c in range(cols):
                if isWater[r][c] == 1:
                    height[r][c] = 0
                    queue.append((r, c))
        while queue:
            r, c = queue.popleft()
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and height[nr][nc] == -1:
                    height[nr][nc] = height[r][c] + 1
                    queue.append((nr, nc))
        return height`,
      },
      {
        id: 'graph-92',
        title: 'Difference Between Maximum and Minimum Price Sum',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/',
        description: 'Given a tree with n nodes and price array, return the maximum difference between the sum of prices along any path and the minimum price in that path.',
        language: 'python',
        solution: `class Solution:
    def maxOutput(self, n: int, edges: List[List[int]], price: List[int]) -> int:
        from collections import defaultdict
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        result = 0
        def dfs(node, parent):
            nonlocal result
            max_with = price[node]
            max_without = 0
            for child in graph[node]:
                if child == parent:
                    continue
                child_with, child_without = dfs(child, node)
                result = max(result,
                    max_with + child_without,
                    max_without + child_with)
                max_with = max(max_with, price[node] + child_with)
                max_without = max(max_without, price[node] + child_without - price[node], child_without)
            return max_with, max_without
        dfs(0, -1)
        return result`,
      },
      {
        id: 'graph-93',
        title: 'Minimum Weighted Subgraph With the Required Paths',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/',
        description: 'Given a directed weighted graph and three nodes src1, src2, dest, return the minimum weight of a subgraph such that there is a path from src1 to dest and src2 to dest. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def minimumWeight(self, n: int, edges: List[List[int]], src1: int, src2: int, dest: int) -> int:
        import heapq
        from collections import defaultdict
        def dijkstra(graph, start):
            dist = [float('inf')] * n
            dist[start] = 0
            heap = [(0, start)]
            while heap:
                d, node = heapq.heappop(heap)
                if d > dist[node]:
                    continue
                for neighbor, w in graph[node]:
                    if dist[node] + w < dist[neighbor]:
                        dist[neighbor] = dist[node] + w
                        heapq.heappush(heap, (dist[neighbor], neighbor))
            return dist
        forward = defaultdict(list)
        backward = defaultdict(list)
        for u, v, w in edges:
            forward[u].append((v, w))
            backward[v].append((u, w))
        d1 = dijkstra(forward, src1)
        d2 = dijkstra(forward, src2)
        d3 = dijkstra(backward, dest)
        result = float('inf')
        for i in range(n):
            result = min(result, d1[i] + d2[i] + d3[i])
        return result if result != float('inf') else -1`,
      },
      {
        id: 'graph-94',
        title: 'Shortest Cycle in a Graph',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/shortest-cycle-in-a-graph/',
        description: 'Given a directed graph with n nodes and edges, return the length of the shortest cycle. If no cycle exists, return -1.',
        language: 'python',
        solution: `class Solution:
    def findShortestCycle(self, n: int, edges: List[List[int]]) -> int:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        def bfs(start):
            dist = [-1] * n
            dist[start] = 0
            queue = deque([start])
            while queue:
                node = queue.popleft()
                for neighbor in graph[node]:
                    if dist[neighbor] == -1:
                        dist[neighbor] = dist[node] + 1
                        queue.append(neighbor)
                    elif dist[neighbor] >= dist[node]:
                        return dist[node] + dist[neighbor] + 1
            return float('inf')
        result = min(bfs(i) for i in range(n))
        return result if result != float('inf') else -1`,
      },
      {
        id: 'graph-95',
        title: 'Count Pairs of Connectable Servers in a Weighted Tree Network',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/',
        description: 'Given a tree with n servers and weighted edges, and integer signalSpeed, return an array where answer[i] is the number of pairs of servers that can communicate through server i with equal distance divisible by signalSpeed.',
        language: 'python',
        solution: `class Solution:
    def countPairsOfConnectableServers(self, edges: List[List[int]], signalSpeed: int) -> List[int]:
        from collections import defaultdict
        n = len(edges) + 1
        graph = defaultdict(list)
        for u, v, w in edges:
            graph[u].append((v, w))
            graph[v].append((u, w))
        def dfs(node, parent, dist):
            count = 1 if dist % signalSpeed == 0 else 0
            for neighbor, w in graph[node]:
                if neighbor != parent:
                    count += dfs(neighbor, node, dist + w)
            return count
        result = [0] * n
        for i in range(n):
            prev = 0
            for neighbor, w in graph[i]:
                curr = dfs(neighbor, i, w)
                result[i] += prev * curr
                prev += curr
        return result`,
      },
      {
        id: 'graph-96',
        title: 'Collect Coins in a Tree',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/collect-coins-in-a-tree/',
        description: 'Given a tree with n nodes and a coins array, return the minimum number of edges to traverse to collect all coins. You can collect coins within distance 2 from visited nodes.',
        language: 'python',
        solution: `class Solution:
    def collectTheCoins(self, coins: List[int], edges: List[List[int]]) -> int:
        from collections import defaultdict, deque
        n = len(coins)
        graph = defaultdict(set)
        for u, v in edges:
            graph[u].add(v)
            graph[v].add(u)
        leaves = deque([i for i in range(n) if len(graph[i]) == 1 and coins[i] == 0])
        while leaves:
            node = leaves.popleft()
            for neighbor in list(graph[node]):
                graph[neighbor].remove(node)
                if len(graph[neighbor]) == 1 and coins[neighbor] == 0:
                    leaves.append(neighbor)
            graph[node].clear()
        for _ in range(2):
            leaves = [i for i in range(n) if len(graph[i]) == 1]
            for node in leaves:
                for neighbor in list(graph[node]):
                    graph[neighbor].remove(node)
                graph[node].clear()
        return max(0, sum(len(graph[i]) > 0 for i in range(n)) - 1) * 2`,
      },
      
      
    ]
  },
  {
    id: 'heap',
    name: 'Heap / Priority Queue',
    icon: '⛰️',
    description: 'Problems using min/max heaps for efficient priority-based operations.',
    color: '#FF8C42',
    problems: [
      {
        id: 'heap-1',
        title: 'Kth Largest Element in an Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
        description: 'Given an integer array nums and an integer k, return the kth largest element in the array.',
        language: 'python',
        solution: `class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        import heapq
        return heapq.nlargest(k, nums)[-1]`
      },
      {
        id: 'heap-2',
        title: 'Find Median from Data Stream',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/find-median-from-data-stream/',
        description: 'Design a data structure that supports adding integers and finding the median of all elements.',
        language: 'python',
        solution: `class MedianFinder:
    def __init__(self):
        import heapq
        self.small = []  # max heap (inverted)
        self.large = []  # min heap
    
    def addNum(self, num: int) -> None:
        import heapq
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))
    
    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2.0`
      },
      {
        id: 'heap-3',
        title: 'Merge K Sorted Lists',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
        description: 'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list.',
        language: 'python',
        solution: `class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        import heapq
        heap = []
        for i, l in enumerate(lists):
            if l:
                heapq.heappush(heap, (l.val, i, l))
        dummy = ListNode(0)
        current = dummy
        while heap:
            val, i, node = heapq.heappop(heap)
            current.next = node
            current = current.next
            if node.next:
                heapq.heappush(heap, (node.next.val, i, node.next))
        return dummy.next`
      },
      {
  id: 'heap-4',
  title: 'Top K Frequent Elements',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/',
  description: 'Given an integer array nums and an integer k, return the k most frequent elements.',
  language: 'python',
  solution: `class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        import heapq
        from collections import Counter
        count = Counter(nums)
        return heapq.nlargest(k, count.keys(), key=lambda x: count[x])`
},
{
  id: 'heap-5',
  title: 'K Closest Points to Origin',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/k-closest-points-to-origin/',
  description: 'Given an array of points, return the k closest points to the origin (0, 0).',
  language: 'python',
  solution: `class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        import heapq
        heap = []
        for x, y in points:
            dist = x*x + y*y
            heapq.heappush(heap, (dist, x, y))
        return [[x, y] for dist, x, y in heapq.nsmallest(k, heap)]`
},
{
  id: 'heap-6',
  title: 'Task Scheduler',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/task-scheduler/',
  description: 'Given a list of tasks and a cooldown n, return the minimum number of intervals needed to finish all tasks.',
  language: 'python',
  solution: `class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        import heapq
        from collections import Counter, deque
        count = Counter(tasks)
        maxHeap = [-cnt for cnt in count.values()]
        heapq.heapify(maxHeap)
        time = 0
        queue = deque()  # [-cnt, availableAt]
        while maxHeap or queue:
            time += 1
            if maxHeap:
                cnt = 1 + heapq.heappop(maxHeap)
                if cnt:
                    queue.append([cnt, time + n])
            if queue and queue[0][1] == time:
                heapq.heappush(maxHeap, queue.popleft()[0])
        return time`
},
{
  id: 'heap-7',
  title: 'Find K Pairs with Smallest Sums',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/',
  description: 'Given two sorted arrays nums1 and nums2, return the k pairs (u, v) with the smallest sums.',
  language: 'python',
  solution: `class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        import heapq
        if not nums1 or not nums2:
            return []
        heap = [(nums1[i] + nums2[0], i, 0) for i in range(min(k, len(nums1)))]
        heapq.heapify(heap)
        result = []
        while heap and len(result) < k:
            s, i, j = heapq.heappop(heap)
            result.append([nums1[i], nums2[j]])
            if j + 1 < len(nums2):
                heapq.heappush(heap, (nums1[i] + nums2[j+1], i, j+1))
        return result`
},
{
  id: 'heap-8',
  title: 'Reorganize String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/reorganize-string/',
  description: 'Rearrange characters of string s so that no two adjacent characters are the same. Return empty string if impossible.',
  language: 'python',
  solution: `class Solution:
    def reorganizeString(self, s: str) -> str:
        import heapq
        from collections import Counter
        count = Counter(s)
        maxHeap = [(-cnt, ch) for ch, cnt in count.items()]
        heapq.heapify(maxHeap)
        result = []
        prev = None
        while maxHeap or prev:
            if prev and not maxHeap:
                return ""
            cnt, ch = heapq.heappop(maxHeap)
            result.append(ch)
            if prev:
                heapq.heappush(maxHeap, prev)
                prev = None
            if cnt + 1 != 0:
                prev = (cnt + 1, ch)
        return "".join(result)`
},

{
  id: 'heap-9',
  title: 'Find K Pairs with Smallest Sums',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/',
  description: 'Given two integer arrays nums1 and nums2 sorted in ascending order and an integer k, return the k pairs (u, v) with the smallest sums.',
  language: 'python',
  solution: `class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        import heapq
        heap = [(nums1[i] + nums2[0], i, 0) for i in range(min(k, len(nums1)))]
        heapq.heapify(heap)
        result = []
        while heap and len(result) < k:
            val, i, j = heapq.heappop(heap)
            result.append([nums1[i], nums2[j]])
            if j + 1 < len(nums2):
                heapq.heappush(heap, (nums1[i] + nums2[j + 1], i, j + 1))
        return result`
},

{
  id: 'heap-10',
  title: 'Smallest Range Covering Elements from K Lists',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/',
  description: 'Given k sorted lists of integers, find the smallest range that includes at least one number from each list.',
  language: 'python',
  solution: `class Solution:
    def smallestRange(self, nums: List[List[int]]) -> List[int]:
        import heapq
        heap = [(row[0], i, 0) for i, row in enumerate(nums)]
        heapq.heapify(heap)
        curMax = max(row[0] for row in nums)
        resLeft, resRight = -10**5, 10**5
        while heap:
            curMin, i, j = heapq.heappop(heap)
            if curMax - curMin < resRight - resLeft:
                resLeft, resRight = curMin, curMax
            if j + 1 == len(nums[i]):
                break
            nextVal = nums[i][j + 1]
            heapq.heappush(heap, (nextVal, i, j + 1))
            curMax = max(curMax, nextVal)
        return [resLeft, resRight]`
},

{
  id: 'heap-11',
  title: 'IPO',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/ipo/',
  description: 'Given k projects you can complete and initial capital w, maximize capital by picking at most k projects. Each project has a profit and minimum capital requirement.',
  language: 'python',
  solution: `class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        import heapq
        minCapital = [(c, p) for c, p in zip(capital, profits)]
        heapq.heapify(minCapital)
        maxProfit = []
        for _ in range(k):
            while minCapital and minCapital[0][0] <= w:
                c, p = heapq.heappop(minCapital)
                heapq.heappush(maxProfit, -p)
            if not maxProfit:
                break
            w += -heapq.heappop(maxProfit)
        return w`
},

{
  id: 'heap-12',
  title: 'Design Twitter',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/design-twitter/',
  description: 'Design a simplified Twitter where users can post tweets, follow/unfollow others, and see the 10 most recent tweets in their news feed.',
  language: 'python',
  solution: `class Twitter:
    def __init__(self):
        import heapq
        from collections import defaultdict
        self.count = 0
        self.tweetMap = defaultdict(list)
        self.followMap = defaultdict(set)

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweetMap[userId].append((self.count, tweetId))
        self.count -= 1

    def getNewsFeed(self, userId: int) -> List[int]:
        import heapq
        result = []
        heap = []
        self.followMap[userId].add(userId)
        for followeeId in self.followMap[userId]:
            if followeeId in self.tweetMap:
                idx = len(self.tweetMap[followeeId]) - 1
                cnt, tweetId = self.tweetMap[followeeId][idx]
                heap.append((cnt, tweetId, followeeId, idx - 1))
        heapq.heapify(heap)
        while heap and len(result) < 10:
            cnt, tweetId, followeeId, idx = heapq.heappop(heap)
            result.append(tweetId)
            if idx >= 0:
                cnt, tweetId = self.tweetMap[followeeId][idx]
                heapq.heappush(heap, (cnt, tweetId, followeeId, idx - 1))
        return result

    def follow(self, followerId: int, followeeId: int) -> None:
        self.followMap[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.followMap[followerId]:
            self.followMap[followerId].remove(followeeId)`
},

{
  id: 'heap-13',
  title: 'Seat Reservation Manager',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/seat-reservation-manager/',
  description: 'Design a seat reservation manager that manages n seats numbered 1 to n. Support reserving the smallest available seat and unreserving a specific seat.',
  language: 'python',
  solution: `class SeatManager:
    def __init__(self, n: int):
        import heapq
        self.available = list(range(1, n + 1))
        heapq.heapify(self.available)

    def reserve(self) -> int:
        import heapq
        return heapq.heappop(self.available)

    def unreserve(self, seatNumber: int) -> None:
        import heapq
        heapq.heappush(self.available, seatNumber)`
},
{
  id: 'heap-14',
  title: 'Kth Largest Element in a Stream',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
  description: 'Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.',
  language: 'python',
  solution: `class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        import heapq
        self.k = k
        self.heap = nums
        heapq.heapify(self.heap)
        while len(self.heap) > k:
            heapq.heappop(self.heap)

    def add(self, val: int) -> int:
        import heapq
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.k:
            heapq.heappop(self.heap)
        return self.heap[0]`
},

{
  id: 'heap-15',
  title: 'Last Stone Weight',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/last-stone-weight/',
  description: 'Given an array of stones where stones[i] is the weight of the ith stone, smash the two heaviest stones each turn. Return the weight of the last remaining stone or 0.',
  language: 'python',
  solution: `class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        import heapq
        heap = [-s for s in stones]
        heapq.heapify(heap)
        while len(heap) > 1:
            first = heapq.heappop(heap)
            second = heapq.heappop(heap)
            if first != second:
                heapq.heappush(heap, first - second)
        return -heap[0] if heap else 0`
},

{
  id: 'heap-16',
  title: 'K Closest Points to Origin',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/k-closest-points-to-origin/',
  description: 'Given an array of points on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).',
  language: 'python',
  solution: `class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        import heapq
        heap = []
        for x, y in points:
            dist = x**2 + y**2
            heapq.heappush(heap, (dist, x, y))
        result = []
        for _ in range(k):
            dist, x, y = heapq.heappop(heap)
            result.append([x, y])
        return result`
},

{
  id: 'heap-17',
  title: 'Task Scheduler',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/task-scheduler/',
  description: 'Given a list of tasks and a cooldown interval n, return the minimum number of intervals needed to finish all tasks with the same task needing n intervals of cooldown.',
  language: 'python',
  solution: `class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        import heapq
        from collections import Counter, deque
        count = Counter(tasks)
        maxHeap = [-cnt for cnt in count.values()]
        heapq.heapify(maxHeap)
        time = 0
        queue = deque()
        while maxHeap or queue:
            time += 1
            if maxHeap:
                cnt = heapq.heappop(maxHeap) + 1
                if cnt:
                    queue.append((cnt, time + n))
            if queue and queue[0][1] == time:
                heapq.heappush(maxHeap, queue.popleft()[0])
        return time`
},

{
  id: 'heap-18',
  title: 'Find Median from Data Stream',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/find-median-from-data-stream/',
  description: 'Design a data structure that supports adding integers from a data stream and finding the median of all elements so far.',
  language: 'python',
  solution: `class MedianFinder:
    def __init__(self):
        import heapq
        self.small = []  # max heap (negated)
        self.large = []  # min heap

    def addNum(self, num: int) -> None:
        import heapq
        heapq.heappush(self.small, -num)
        if self.small and self.large and (-self.small[0] > self.large[0]):
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.small) > len(self.large) + 1:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.large) > len(self.small):
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -val)

    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`
},

{
  id: 'heap-19',
  title: 'Merge K Sorted Lists',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
  description: 'Given an array of k linked-lists, each sorted in ascending order, merge all the linked-lists into one sorted linked-list and return it.',
  language: 'python',
  solution: `class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        import heapq
        heap = []
        for i, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, i, node))
        dummy = ListNode(0)
        curr = dummy
        while heap:
            val, i, node = heapq.heappop(heap)
            curr.next = node
            curr = curr.next
            if node.next:
                heapq.heappush(heap, (node.next.val, i, node.next))
        return dummy.next`
},

{
  id: 'heap-20',
  title: 'Single-Threaded CPU',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/single-threaded-cpu/',
  description: 'Given tasks with enqueue times and processing times, simulate a single-threaded CPU that picks the available task with shortest processing time. Return the order tasks are processed.',
  language: 'python',
  solution: `class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        import heapq
        indexed = sorted([(t[0], t[1], i) for i, t in enumerate(tasks)])
        heap = []
        result = []
        time = 0
        idx = 0
        while len(result) < len(tasks):
            while idx < len(indexed) and indexed[idx][0] <= time:
                enqueue, process, i = indexed[idx]
                heapq.heappush(heap, (process, i))
                idx += 1
            if heap:
                process, i = heapq.heappop(heap)
                time += process
                result.append(i)
            elif idx < len(indexed):
                time = indexed[idx][0]
        return result`
},

{
  id: 'heap-21',
  title: 'Minimum Cost to Connect Sticks',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-connect-sticks/',
  description: 'Given n sticks, combine any two sticks into one at a cost equal to their sum. Return the minimum cost to connect all sticks into one.',
  language: 'python',
  solution: `class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        import heapq
        heapq.heapify(sticks)
        total_cost = 0
        while len(sticks) > 1:
            first = heapq.heappop(sticks)
            second = heapq.heappop(sticks)
            cost = first + second
            total_cost += cost
            heapq.heappush(sticks, cost)
        return total_cost`
},

{
  id: 'heap-22',
  title: 'Maximum Subsequence Score',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-subsequence-score/',
  description: 'Given two integer arrays nums1 and nums2 of equal length and an integer k, pick k indices to maximize the sum of selected nums1 elements multiplied by the minimum of selected nums2 elements.',
  language: 'python',
  solution: `class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        import heapq
        pairs = sorted(zip(nums1, nums2), key=lambda p: -p[1])
        minHeap = []
        result = 0
        total = 0
        for n1, n2 in pairs:
            heapq.heappush(minHeap, n1)
            total += n1
            if len(minHeap) > k:
                total -= heapq.heappop(minHeap)
            if len(minHeap) == k:
                result = max(result, total * n2)
        return result`
},

{
  id: 'heap-23',
  title: 'Total Cost to Hire K Workers',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/total-cost-to-hire-k-workers/',
  description: 'Given a costs array and integers k and candidates, hire k workers with minimum total cost by always picking the cheapest from the first or last candidates workers.',
  language: 'python',
  solution: `class Solution:
    def totalCost(self, costs: List[int], k: int, candidates: int) -> int:
        import heapq
        heap = []
        left, right = 0, len(costs) - 1
        for i in range(candidates):
            if left <= right:
                heapq.heappush(heap, (costs[left], left))
                left += 1
        for i in range(right, max(right - candidates, left - 1), -1):
            if left <= i:
                heapq.heappush(heap, (costs[i], i))
                right -= 1
        total = 0
        for _ in range(k):
            cost, idx = heapq.heappop(heap)
            total += cost
            if left <= right:
                if idx < left:
                    heapq.heappush(heap, (costs[left], left))
                    left += 1
                else:
                    heapq.heappush(heap, (costs[right], right))
                    right -= 1
        return total`
},

{
  id: 'heap-24',
  title: 'Kth Largest Element in an Array',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
  description: 'Find the kth largest element using a min-heap of size k.',
  language: 'python',
  solution: `class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        import heapq
        heap = []
        for num in nums:
            heapq.heappush(heap, num)
            if len(heap) > k:
                heapq.heappop(heap)
        return heap[0]`
},

{
  id: 'heap-25',
  title: 'Top K Frequent Elements',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/',
  description: 'Return k most frequent elements using heap.',
  language: 'python',
  solution: `class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        from collections import Counter
        import heapq
        count = Counter(nums)
        return heapq.nlargest(k, count.keys(), key=count.get)`
},

{
  id: 'heap-26',
  title: 'Find Median from Data Stream',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/find-median-from-data-stream/',
  description: 'Maintain two heaps to get median in O(log n).',
  language: 'python',
  solution: `import heapq

class MedianFinder:

    def __init__(self):
        self.small = []
        self.large = []

    def addNum(self, num: int) -> None:
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`
},

{
  id: 'heap-27',
  title: 'Last Stone Weight',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/last-stone-weight/',
  description: 'Use max heap to simulate smashing stones.',
  language: 'python',
  solution: `class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        import heapq
        stones = [-s for s in stones]
        heapq.heapify(stones)
        while len(stones) > 1:
            a = -heapq.heappop(stones)
            b = -heapq.heappop(stones)
            if a != b:
                heapq.heappush(stones, -(a - b))
        return -stones[0] if stones else 0`
},

{
  id: 'heap-28',
  title: 'K Closest Points to Origin',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/k-closest-points-to-origin/',
  description: 'Use heap based on distance.',
  language: 'python',
  solution: `class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        import heapq
        heap = []
        for x, y in points:
            dist = x*x + y*y
            heapq.heappush(heap, (dist, x, y))
        return [[x, y] for (_, x, y) in heapq.nsmallest(k, heap)]`
},

{
  id: 'heap-29',
  title: 'Task Scheduler',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/task-scheduler/',
  description: 'Schedule tasks with cooling time using max heap.',
  language: 'python',
  solution: `class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        from collections import Counter
        import heapq
        count = Counter(tasks)
        heap = [-c for c in count.values()]
        heapq.heapify(heap)
        time = 0
        queue = []
        
        while heap or queue:
            time += 1
            if heap:
                cnt = heapq.heappop(heap) + 1
                if cnt:
                    queue.append((cnt, time + n))
            if queue and queue[0][1] == time:
                heapq.heappush(heap, queue.pop(0)[0])
        return time`
},

{
  id: 'heap-30',
  title: 'Merge K Sorted Lists',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
  description: 'Merge k sorted linked lists using heap.',
  language: 'python',
  solution: `class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        import heapq
        heap = []
        for i, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, i, node))
        
        dummy = ListNode(0)
        curr = dummy
        
        while heap:
            val, i, node = heapq.heappop(heap)
            curr.next = node
            curr = curr.next
            if node.next:
                heapq.heappush(heap, (node.next.val, i, node.next))
        
        return dummy.next`
},

{
  id: 'heap-31',
  title: 'Smallest Number in Infinite Set',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/smallest-number-in-infinite-set/',
  description: 'Use min heap to track added-back elements.',
  language: 'python',
  solution: `import heapq

class SmallestInfiniteSet:

    def __init__(self):
        self.curr = 1
        self.heap = set()
        self.minHeap = []

    def popSmallest(self) -> int:
        if self.minHeap:
            val = heapq.heappop(self.minHeap)
            self.heap.remove(val)
            return val
        self.curr += 1
        return self.curr - 1

    def addBack(self, num: int) -> None:
        if num < self.curr and num not in self.heap:
            heapq.heappush(self.minHeap, num)
            self.heap.add(num)`
},

{
  id: 'heap-32',
  title: 'Reorganize String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/reorganize-string/',
  description: 'Rearrange string so no adjacent chars are same using heap.',
  language: 'python',
  solution: `class Solution:
    def reorganizeString(self, s: str) -> str:
        from collections import Counter
        import heapq
        
        count = Counter(s)
        heap = [(-freq, char) for char, freq in count.items()]
        heapq.heapify(heap)
        
        prev = (0, '')
        result = []
        
        while heap:
            freq, char = heapq.heappop(heap)
            result.append(char)
            
            if prev[0] < 0:
                heapq.heappush(heap, prev)
            
            freq += 1
            prev = (freq, char)
        
        res = ''.join(result)
        return res if len(res) == len(s) else ""`
},

{
  id: 'heap-33',
  title: 'Ugly Number II',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/ugly-number-ii/',
  description: 'Generate nth ugly number using heap.',
  language: 'python',
  solution: `class Solution:
    def nthUglyNumber(self, n: int) -> int:
        import heapq
        
        heap = [1]
        seen = {1}
        
        for _ in range(n):
            val = heapq.heappop(heap)
            for mul in [2, 3, 5]:
                nxt = val * mul
                if nxt not in seen:
                    seen.add(nxt)
                    heapq.heappush(heap, nxt)
        
        return val`
},

{
  id: 'heap-34',
  title: 'Furthest Building You Can Reach',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/furthest-building-you-can-reach/',
  description: 'Use min-heap to optimally use bricks and ladders.',
  language: 'python',
  solution: `class Solution:
    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
        import heapq
        heap = []
        
        for i in range(len(heights) - 1):
            diff = heights[i+1] - heights[i]
            if diff > 0:
                heapq.heappush(heap, diff)
                if len(heap) > ladders:
                    bricks -= heapq.heappop(heap)
                if bricks < 0:
                    return i
        return len(heights) - 1`
},

{
  id: 'heap-35',
  title: 'Minimum Cost to Connect Sticks',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-connect-sticks/',
  description: 'Combine smallest sticks first using min-heap.',
  language: 'python',
  solution: `class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        import heapq
        heapq.heapify(sticks)
        cost = 0
        
        while len(sticks) > 1:
            a = heapq.heappop(sticks)
            b = heapq.heappop(sticks)
            total = a + b
            cost += total
            heapq.heappush(sticks, total)
        
        return cost`
},

{
  id: 'heap-36',
  title: 'Maximum Frequency Stack',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-frequency-stack/',
  description: 'Simulate stack with frequency using heap.',
  language: 'python',
  solution: `import heapq

class FreqStack:

    def __init__(self):
        self.freq = {}
        self.heap = []
        self.time = 0

    def push(self, val: int) -> None:
        self.freq[val] = self.freq.get(val, 0) + 1
        heapq.heappush(self.heap, (-self.freq[val], -self.time, val))
        self.time += 1

    def pop(self) -> int:
        freq, time, val = heapq.heappop(self.heap)
        self.freq[val] -= 1
        return val`
},

{
  id: 'heap-37',
  title: 'K Pairs with Smallest Sums',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/',
  description: 'Use heap to track smallest sum pairs.',
  language: 'python',
  solution: `class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        import heapq
        heap = []
        
        for i in range(min(k, len(nums1))):
            heapq.heappush(heap, (nums1[i] + nums2[0], i, 0))
        
        result = []
        
        while heap and len(result) < k:
            total, i, j = heapq.heappop(heap)
            result.append([nums1[i], nums2[j]])
            
            if j + 1 < len(nums2):
                heapq.heappush(heap, (nums1[i] + nums2[j+1], i, j+1))
        
        return result`
},

{
  id: 'heap-38',
  title: 'Sort Characters By Frequency',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/sort-characters-by-frequency/',
  description: 'Sort characters using max heap by frequency.',
  language: 'python',
  solution: `class Solution:
    def frequencySort(self, s: str) -> str:
        from collections import Counter
        import heapq
        
        count = Counter(s)
        heap = [(-freq, char) for char, freq in count.items()]
        heapq.heapify(heap)
        
        result = []
        while heap:
            freq, char = heapq.heappop(heap)
            result.append(char * (-freq))
        
        return ''.join(result)`
},

{
  id: 'heap-39',
  title: 'Minimum Number of Refueling Stops',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-refueling-stops/',
  description: 'Use max heap to greedily refuel.',
  language: 'python',
  solution: `class Solution:
    def minRefuelStops(self, target: int, startFuel: int, stations: List[List[int]]) -> int:
        import heapq
        heap = []
        stations.append([target, 0])
        fuel = startFuel
        prev = 0
        res = 0
        
        for location, capacity in stations:
            fuel -= location - prev
            while heap and fuel < 0:
                fuel += -heapq.heappop(heap)
                res += 1
            if fuel < 0:
                return -1
            heapq.heappush(heap, -capacity)
            prev = location
        
        return res`
},

{
  id: 'heap-40',
  title: 'Sliding Window Maximum',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/sliding-window-maximum/',
  description: 'Use heap to track maximum in window.',
  language: 'python',
  solution: `class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        import heapq
        heap = []
        result = []
        
        for i in range(len(nums)):
            heapq.heappush(heap, (-nums[i], i))
            
            while heap[0][1] <= i - k:
                heapq.heappop(heap)
            
            if i >= k - 1:
                result.append(-heap[0][0])
        
        return result`
}

]

    
  }
];
