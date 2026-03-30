import type { Pattern } from '../types';

export const patterns: Pattern[] = [
  {
    id: 'two-pointer',
    name: 'Two Pointer',
    icon: '👉👈',
    description: 'Use two pointers to traverse the array from different directions or at different speeds.',
    color: '#6C63FF',
    problems: [
      {
        id: 'tp-1',
        title: 'Two Sum II - Input Array Is Sorted',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
        description: 'Given a 1-indexed array of integers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.',
        language: 'python',
        solution: `class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left, right = 0, len(numbers) - 1
        while left < right:
            curr_sum = numbers[left] + numbers[right]
            if curr_sum == target:
                return [left + 1, right + 1]
            elif curr_sum < target:
                left += 1
            else:
                right -= 1
        return []`
      },
      {
        id: 'tp-2',
        title: '3Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/3sum/',
        description: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.',
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
        id: 'tp-3',
        title: 'Container With Most Water',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/',
        description: 'Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). Find two lines that together with the x-axis form a container that holds the most water.',
        language: 'python',
        solution: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        max_water = 0
        while left < right:
            width = right - left
            h = min(height[left], height[right])
            max_water = max(max_water, width * h)
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return max_water`
      },
      {
        id: 'tp-4',
        title: 'Valid Palindrome',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/',
        description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
        language: 'python',
        solution: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1
        while left < right:
            while left < right and not s[left].isalnum():
                left += 1
            while left < right and not s[right].isalnum():
                right -= 1
            if s[left].lower() != s[right].lower():
                return False
            left += 1
            right -= 1
        return True`
      },
      {
        id: 'tp-5',
        title: 'Trapping Rain Water',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
        description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
        language: 'python',
        solution: `class Solution:
    def trap(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        left_max = right_max = 0
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
        id: 'tp-6',
        title: 'Remove Duplicates from Sorted Array',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
        description: 'Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.',
        language: 'python',
        solution: `class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0
        slow = 0
        for fast in range(1, len(nums)):
            if nums[fast] != nums[slow]:
                slow += 1
                nums[slow] = nums[fast]
        return slow + 1`
      },
      {
        id: 'tp-7',
        title: 'Move Zeroes',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/move-zeroes/',
        description: 'Given an integer array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements. You must do this in-place without making a copy of the array.',
        language: 'python',
        solution: `class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        slow = 0
        for fast in range(len(nums)):
            if nums[fast] != 0:
                nums[slow], nums[fast] = nums[fast], nums[slow]
                slow += 1`
      },
      {
        id: 'tp-8',
        title: 'Squares of a Sorted Array',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/squares-of-a-sorted-array/',
        description: 'Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.',
        language: 'python',
        solution: `class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left, right = 0, len(nums) - 1
        result = [0] * len(nums)
        pos = len(nums) - 1
        while left <= right:
            left_sq = nums[left] ** 2
            right_sq = nums[right] ** 2
            if left_sq > right_sq:
                result[pos] = left_sq
                left += 1
            else:
                result[pos] = right_sq
                right -= 1
            pos -= 1
        return result`
      },
      {
        id: 'tp-9',
        title: '4Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/4sum/',
        description: 'Given an array nums of n integers and an integer target, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that their sum equals target.',
        language: 'python',
        solution: `class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        result = []
        n = len(nums)
        for i in range(n - 3):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            for j in range(i + 1, n - 2):
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue
                left, right = j + 1, n - 1
                while left < right:
                    total = nums[i] + nums[j] + nums[left] + nums[right]
                    if total == target:
                        result.append([nums[i], nums[j], nums[left], nums[right]])
                        while left < right and nums[left] == nums[left + 1]:
                            left += 1
                        while left < right and nums[right] == nums[right - 1]:
                            right -= 1
                        left += 1
                        right -= 1
                    elif total < target:
                        left += 1
                    else:
                        right -= 1
        return result`
      },
      {
        id: 'tp-10',
        title: 'Sort Colors',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/sort-colors/',
        description: 'Given an array nums with n objects colored red, white, or blue (0, 1, 2), sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.',
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
        id: 'tp-11',
        title: 'Minimum Size Subarray Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
        description: 'Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.',
        language: 'python',
        solution: `class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        curr_sum = 0
        min_len = float('inf')
        for right in range(len(nums)):
            curr_sum += nums[right]
            while curr_sum >= target:
                min_len = min(min_len, right - left + 1)
                curr_sum -= nums[left]
                left += 1
        return 0 if min_len == float('inf') else min_len`
      },
      {
        id: 'tp-12',
        title: 'Reverse String',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/reverse-string/',
        description: 'Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.',
        language: 'python',
        solution: `class Solution:
    def reverseString(self, s: List[str]) -> None:
        left, right = 0, len(s) - 1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1`
      },
      {
        id: 'tp-13',
        title: 'Reverse Words in a String III',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/reverse-words-in-a-string-iii/',
        description: 'Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.',
        language: 'python',
        solution: `class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(word[::-1] for word in s.split())`
      },
      {
        id: 'tp-14',
        title: 'Boats to Save People',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/boats-to-save-people/',
        description: 'You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people. Return the minimum number of boats to carry every given person.',
        language: 'python',
        solution: `class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        left, right = 0, len(people) - 1
        boats = 0
        while left <= right:
            if people[left] + people[right] <= limit:
                left += 1
            right -= 1
            boats += 1
        return boats`
      },
      {
        id: 'tp-15',
        title: 'Shortest Unsorted Continuous Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/shortest-unsorted-continuous-subarray/',
        description: 'Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order. Return the shortest such subarray length.',
        language: 'python',
        solution: `class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < len(nums) - 1 and nums[left] <= nums[left + 1]:
            left += 1
        if left == len(nums) - 1:
            return 0
        while right > 0 and nums[right] >= nums[right - 1]:
            right -= 1
        sub_min = min(nums[left:right + 1])
        sub_max = max(nums[left:right + 1])
        while left > 0 and nums[left - 1] > sub_min:
            left -= 1
        while right < len(nums) - 1 and nums[right + 1] < sub_max:
            right += 1
        return right - left + 1`
      },
    ]
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    icon: '🪟',
    description: 'Maintain a window of elements and slide it across the array to find optimal subarrays.',
    color: '#FF6B6B',
    problems: [
      {
        id: 'sw-1',
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
        description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. Maximize your profit by choosing a single day to buy and a single day to sell.',
        language: 'python',
        solution: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            min_price = min(min_price, price)
            max_profit = max(max_profit, price - min_price)
        return max_profit`,
      },
      {
        id: 'sw-2',
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
        return max_len`,
      },
      {
        id: 'sw-3',
        title: 'Minimum Window Substring',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/',
        description: 'Given two strings s and t, return the minimum window substring of s such that every character in t is included in the window.',
        language: 'python',
        solution: `class Solution:
    def minWindow(self, s: str, t: str) -> str:
        from collections import Counter
        need = Counter(t)
        missing = len(t)
        left = start = end = 0
        for right, char in enumerate(s, 1):
            if need[char] > 0:
                missing -= 1
            need[char] -= 1
            if missing == 0:
                while need[s[left]] < 0:
                    need[s[left]] += 1
                    left += 1
                if not end or right - left <= end - start:
                    start, end = left, right
                need[s[left]] += 1
                missing += 1
                left += 1
        return s[start:end]`,
      },
      {
        id: 'sw-4',
        title: 'Longest Repeating Character Replacement',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
        description: 'You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character at most k times.',
        language: 'python',
        solution: `class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        left = max_count = result = 0
        for right in range(len(s)):
            count[s[right]] = count.get(s[right], 0) + 1
            max_count = max(max_count, count[s[right]])
            if (right - left + 1) - max_count > k:
                count[s[left]] -= 1
                left += 1
            result = max(result, right - left + 1)
        return result`,
      },
      {
        id: 'sw-5',
        title: 'Maximum Average Subarray I',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-average-subarray-i/',
        description: 'You are given an integer array nums consisting of n elements, and an integer k. Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.',
        language: 'python',
        solution: `class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        window_sum = sum(nums[:k])
        max_sum = window_sum
        for i in range(k, len(nums)):
            window_sum += nums[i] - nums[i - k]
            max_sum = max(max_sum, window_sum)
        return max_sum / k`,
      },
      {
        id: 'sw-6',
        title: 'Permutation in String',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/permutation-in-string/',
        description: "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. In other words, return true if one of s1's permutations is a substring of s2.",
        language: 'python',
        solution: `class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        from collections import Counter
        if len(s1) > len(s2):
            return False
        need = Counter(s1)
        window = Counter(s2[:len(s1)])
        if window == need:
            return True
        for i in range(len(s1), len(s2)):
            window[s2[i]] += 1
            left_char = s2[i - len(s1)]
            window[left_char] -= 1
            if window[left_char] == 0:
                del window[left_char]
            if window == need:
                return True
        return False`,
      },
      {
        id: 'sw-7',
        title: 'Sliding Window Maximum',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/sliding-window-maximum/',
        description: 'You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. Each time the sliding window moves right by one position, return the max sliding window.',
        language: 'python',
        solution: `class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        from collections import deque
        dq = deque()
        result = []
        for i, num in enumerate(nums):
            while dq and dq[0] < i - k + 1:
                dq.popleft()
            while dq and nums[dq[-1]] < num:
                dq.pop()
            dq.append(i)
            if i >= k - 1:
                result.append(nums[dq[0]])
        return result`,
      },
      {
        id: 'sw-8',
        title: 'Fruits Into Baskets',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/fruit-into-baskets/',
        description: 'You are visiting a farm that has a single row of fruit trees. You only have two baskets, and each basket can only hold a single type of fruit. Return the maximum number of fruits you can pick.',
        language: 'python',
        solution: `class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        from collections import defaultdict
        basket = defaultdict(int)
        left = result = 0
        for right in range(len(fruits)):
            basket[fruits[right]] += 1
            while len(basket) > 2:
                basket[fruits[left]] -= 1
                if basket[fruits[left]] == 0:
                    del basket[fruits[left]]
                left += 1
            result = max(result, right - left + 1)
        return result`,
      },
      {
        id: 'sw-9',
        title: 'Count Number of Nice Subarrays',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/count-number-of-nice-subarrays/',
        description: 'Given an array of integers nums and an integer k, a continuous subarray is called nice if there are exactly k odd numbers in it. Return the number of nice sub-arrays.',
        language: 'python',
        solution: `class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        def atMost(goal: int) -> int:
            count = left = result = 0
            for right in range(len(nums)):
                count += nums[right] % 2
                while count > goal:
                    count -= nums[left] % 2
                    left += 1
                result += right - left + 1
            return result
        return atMost(k) - atMost(k - 1)`,
      },
      {
        id: 'sw-10',
        title: 'Subarray Product Less Than K',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/subarray-product-less-than-k/',
        description: 'Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.',
        language: 'python',
        solution: `class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        product = 1
        left = result = 0
        for right in range(len(nums)):
            product *= nums[right]
            while product >= k:
                product //= nums[left]
                left += 1
            result += right - left + 1
        return result`,
      },
      {
        id: 'sw-11',
        title: 'Longest Subarray of 1s After Deleting One Element',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/',
        description: 'Given a binary array nums, you should delete one element from it. Return the size of the longest non-empty subarray containing only 1s in the resulting array. Return 0 if there is no such subarray.',
        language: 'python',
        solution: `class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        left = zeros = result = 0
        for right in range(len(nums)):
            if nums[right] == 0:
                zeros += 1
            while zeros > 1:
                if nums[left] == 0:
                    zeros -= 1
                left += 1
            result = max(result, right - left)
        return result`,
      },
      {
        id: 'sw-12',
        title: 'Maximum Number of Vowels in a Substring of Given Length',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/',
        description: 'Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.',
        language: 'python',
        solution: `class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set('aeiou')
        count = sum(1 for c in s[:k] if c in vowels)
        max_count = count
        for i in range(k, len(s)):
            count += (s[i] in vowels) - (s[i - k] in vowels)
            max_count = max(max_count, count)
        return max_count`,
      },
      {
        id: 'sw-13',
        title: 'Grumpy Bookstore Owner',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/grumpy-bookstore-owner/',
        description: 'A bookstore owner has customers[i] customers on the i-th minute. The owner knows a secret technique to keep himself not grumpy for minutes consecutive minutes. Return the maximum number of customers that can be satisfied throughout the day.',
        language: 'python',
        solution: `class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        base = sum(c for c, g in zip(customers, grumpy) if g == 0)
        extra = sum(c * g for c, g in zip(customers[:minutes], grumpy[:minutes]))
        max_extra = extra
        for i in range(minutes, len(customers)):
            extra += customers[i] * grumpy[i]
            extra -= customers[i - minutes] * grumpy[i - minutes]
            max_extra = max(max_extra, extra)
        return base + max_extra`,
      },
      {
        id: 'sw-14',
        title: 'Minimum Size Subarray Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
        description: 'Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.',
        language: 'python',
        solution: `class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = current_sum = 0
        min_len = float('inf')
        for right in range(len(nums)):
            current_sum += nums[right]
            while current_sum >= target:
                min_len = min(min_len, right - left + 1)
                current_sum -= nums[left]
                left += 1
        return 0 if min_len == float('inf') else min_len`,
      },
    ],
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    icon: '🔍',
    description: 'Divide the search space in half at each step to efficiently find the target.',
    color: '#4ECDC4',
    problems: [
      {
        id: 'bs-1',
        title: 'Binary Search',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/binary-search/',
        description: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.',
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
        id: 'bs-2',
        title: 'Search in Rotated Sorted Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
        description: 'There is an integer array nums sorted in ascending order (with distinct values). Given the array after rotation, search for a target value.',
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
        id: 'bs-3',
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
        id: 'bs-4',
        title: 'Koko Eating Bananas',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/koko-eating-bananas/',
        description: 'Koko loves to eat bananas. Return the minimum integer k such that she can eat all the bananas within h hours.',
        language: 'python',
        solution: `class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        import math
        left, right = 1, max(piles)
        while left < right:
            mid = (left + right) // 2
            hours = sum(math.ceil(p / mid) for p in piles)
            if hours <= h:
                right = mid
            else:
                left = mid + 1
        return left`
      },
      {
        id: 'bs-5',
        title: 'Find Peak Element',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-peak-element/',
        description: 'A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element and return its index. You must write an algorithm that runs in O(log n) time.',
        language: 'python',
        solution: `class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[mid + 1]:
                right = mid
            else:
                left = mid + 1
        return left`
      },
      {
        id: 'bs-6',
        title: 'Search a 2D Matrix',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/search-a-2d-matrix/',
        description: 'Write an efficient algorithm that searches for a value target in an m x n integer matrix. Each row is sorted left to right, and the first integer of each row is greater than the last integer of the previous row.',
        language: 'python',
        solution: `class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        left, right = 0, m * n - 1
        while left <= right:
            mid = (left + right) // 2
            val = matrix[mid // n][mid % n]
            if val == target:
                return True
            elif val < target:
                left = mid + 1
            else:
                right = mid - 1
        return False`
      },
      {
        id: 'bs-7',
        title: 'First Bad Version',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/first-bad-version/',
        description: 'You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Find the first bad version.',
        language: 'python',
        solution: `class Solution:
    def firstBadVersion(self, n: int) -> int:
        left, right = 1, n
        while left < right:
            mid = (left + right) // 2
            if isBadVersion(mid):
                right = mid
            else:
                left = mid + 1
        return left`
      },
      {
        id: 'bs-8',
        title: 'Search Insert Position',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/search-insert-position/',
        description: 'Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.',
        language: 'python',
        solution: `class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return left`
      },
      {
        id: 'bs-9',
        title: 'Find First and Last Position of Element in Sorted Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
        description: 'Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].',
        language: 'python',
        solution: `class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def find_left(nums, target):
            left, right = 0, len(nums) - 1
            while left <= right:
                mid = (left + right) // 2
                if nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            return left

        def find_right(nums, target):
            left, right = 0, len(nums) - 1
            while left <= right:
                mid = (left + right) // 2
                if nums[mid] <= target:
                    left = mid + 1
                else:
                    right = mid - 1
            return right

        left = find_left(nums, target)
        right = find_right(nums, target)
        if left <= right and right < len(nums) and nums[left] == target:
            return [left, right]
        return [-1, -1]`
      },
      {
        id: 'bs-10',
        title: 'Sqrt(x)',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/sqrtx/',
        description: 'Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator.',
        language: 'python',
        solution: `class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x
        left, right = 1, x // 2
        while left <= right:
            mid = (left + right) // 2
            if mid * mid == x:
                return mid
            elif mid * mid < x:
                left = mid + 1
            else:
                right = mid - 1
        return right`
      },
      {
        id: 'bs-11',
        title: 'Capacity To Ship Packages Within D Days',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/',
        description: 'A conveyor belt has packages that must be shipped from one port to another within days days. Return the least weight capacity of the ship that will result in all the packages being shipped within days days.',
        language: 'python',
        solution: `class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        left, right = max(weights), sum(weights)
        while left < right:
            mid = (left + right) // 2
            day_count, curr_load = 1, 0
            for w in weights:
                if curr_load + w > mid:
                    day_count += 1
                    curr_load = 0
                curr_load += w
            if day_count <= days:
                right = mid
            else:
                left = mid + 1
        return left`
      },
      {
        id: 'bs-12',
        title: 'Time Based Key-Value Store',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/time-based-key-value-store/',
        description: "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.",
        language: 'python',
        solution: `class TimeMap:
    def __init__(self):
        self.store = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.store:
            self.store[key] = []
        self.store[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.store:
            return ""
        pairs = self.store[key]
        left, right = 0, len(pairs) - 1
        result = ""
        while left <= right:
            mid = (left + right) // 2
            if pairs[mid][0] <= timestamp:
                result = pairs[mid][1]
                left = mid + 1
            else:
                right = mid - 1
        return result`
      },
      {
        id: 'bs-13',
        title: 'Find in Mountain Array',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/find-in-mountain-array/',
        description: 'Given a mountain array mountainArr and an integer target, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.',
        language: 'python',
        solution: `class Solution:
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        n = mountain_arr.length()

        left, right = 0, n - 1
        while left < right:
            mid = (left + right) // 2
            if mountain_arr.get(mid) < mountain_arr.get(mid + 1):
                left = mid + 1
            else:
                right = mid
        peak = left

        left, right = 0, peak
        while left <= right:
            mid = (left + right) // 2
            val = mountain_arr.get(mid)
            if val == target:
                return mid
            elif val < target:
                left = mid + 1
            else:
                right = mid - 1

        left, right = peak + 1, n - 1
        while left <= right:
            mid = (left + right) // 2
            val = mountain_arr.get(mid)
            if val == target:
                return mid
            elif val > target:
                left = mid + 1
            else:
                right = mid - 1

        return -1`
      },
      {
        id: 'bs-14',
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
        half = (m + n) // 2
        left, right = 0, m
        while left <= right:
            i = (left + right) // 2
            j = half - i
            left1  = nums1[i - 1] if i > 0 else float('-inf')
            right1 = nums1[i]     if i < m else float('inf')
            left2  = nums2[j - 1] if j > 0 else float('-inf')
            right2 = nums2[j]     if j < n else float('inf')
            if left1 <= right2 and left2 <= right1:
                if (m + n) % 2 == 1:
                    return min(right1, right2)
                return (max(left1, left2) + min(right1, right2)) / 2
            elif left1 > right2:
                right = i - 1
            else:
                left = i + 1`
      },
      {
        id: 'bs-15',
        title: 'Minimum Speed to Arrive on Time',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-speed-to-arrive-on-time/',
        description: 'You are given a floating-point number hour, representing the amount of time you have to reach the office. To commute between the two cities, you must take n trains in sequential order. Return the minimum positive integer speed (in km/h) that all the trains must travel at for you to reach the office on time, or -1 if it is impossible.',
        language: 'python',
        solution: `class Solution:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        import math
        if hour <= len(dist) - 1:
            return -1
        left, right = 1, 10**7
        while left < right:
            mid = (left + right) // 2
            time = sum(math.ceil(d / mid) for d in dist[:-1]) + dist[-1] / mid
            if time <= hour:
                right = mid
            else:
                left = mid + 1
        return left`
      },
      {
        id: 'bs-16',
        title: 'Divide Chocolate',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/divide-chocolate/',
        description: 'You have a chocolate bar consisting of chunks, each with sweetness[i] sweetness. You want to share it with k friends, so you need to cut k times. Return the maximum total sweetness of the piece with the minimum total sweetness.',
        language: 'python',
        solution: `class Solution:
    def maximizeSweetness(self, sweetness: List[int], k: int) -> int:
        left, right = min(sweetness), sum(sweetness) // (k + 1)
        while left < right:
            mid = (left + right + 1) // 2
            cuts = total = 0
            for s in sweetness:
                total += s
                if total >= mid:
                    cuts += 1
                    total = 0
            if cuts >= k + 1:
                left = mid
            else:
                right = mid - 1
        return left`
      },
      {
        id: 'bs-17',
        title: 'Find the Smallest Divisor Given a Threshold',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/',
        description: 'Given an array of integers nums and an integer threshold, find the smallest divisor such that the result of dividing all elements by it and summing them up is less than or equal to threshold.',
        language: 'python',
        solution: `class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        import math
        left, right = 1, max(nums)
        while left < right:
            mid = (left + right) // 2
            total = sum(math.ceil(n / mid) for n in nums)
            if total <= threshold:
                right = mid
            else:
                left = mid + 1
        return left`
      },
      {
        id: 'bs-18',
        title: 'Maximum Value at a Given Index in a Bounded Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/',
        description: 'Given n, index, and maxSum, construct an array such that array[index] is maximized, all values are positive integers, adjacent elements differ by at most 1, and the sum does not exceed maxSum.',
        language: 'python',
        solution: `class Solution:
    def maxValue(self, n: int, index: int, maxSum: int) -> int:
        def calc_sum(val, count):
            if val >= count:
                return (val + val - count + 1) * count // 2
            full = val * (val + 1) // 2
            remainder = count - val
            return full + remainder

        left, right = 1, maxSum
        while left < right:
            mid = (left + right + 1) // 2
            total = calc_sum(mid, index + 1) + calc_sum(mid - 1, n - index - 1)
            if total <= maxSum:
                left = mid
            else:
                right = mid - 1
        return left`
      },
      {
        id: 'bs-19',
        title: 'Split Array Largest Sum',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/split-array-largest-sum/',
        description: 'Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized. Return the minimized largest sum of the split.',
        language: 'python',
        solution: `class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
        left, right = max(nums), sum(nums)
        while left < right:
            mid = (left + right) // 2
            splits = count = 0
            for num in nums:
                count += num
                if count > mid:
                    splits += 1
                    count = num
            if splits + 1 <= k:
                right = mid
            else:
                left = mid + 1
        return left`
      },
    ]
  },
  {
    id: 'fast-slow-pointer',
    name: 'Fast & Slow Pointer',
    icon: '🐢🐇',
    description: 'Use two pointers moving at different speeds to detect cycles or find middle elements.',
    color: '#FFD93D',
    problems: [
      {
        id: 'fsp-1',
        title: 'Linked List Cycle',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/',
        description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it.',
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
        id: 'fsp-2',
        title: 'Middle of the Linked List',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/middle-of-the-linked-list/',
        description: 'Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second middle node.',
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
        id: 'fsp-3',
        title: 'Linked List Cycle II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle-ii/',
        description: 'Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.',
        language: 'python',
        solution: `class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                slow = head
                while slow != fast:
                    slow = slow.next
                    fast = fast.next
                return slow
        return None`
      },
      {
        id: 'fsp-4',
        title: 'Happy Number',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/happy-number/',
        description: 'Write an algorithm to determine if a number n is happy. A happy number eventually reaches 1 when replaced by the sum of the square of each digit.',
        language: 'python',
        solution: `class Solution:
    def isHappy(self, n: int) -> bool:
        def get_next(num):
            total = 0
            while num > 0:
                num, digit = divmod(num, 10)
                total += digit ** 2
            return total
        
        slow, fast = n, get_next(n)
        while fast != 1 and slow != fast:
            slow = get_next(slow)
            fast = get_next(get_next(fast))
        return fast == 1`
      },
      {
        id: 'fsp-5',
        title: 'Find the Duplicate Number',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-duplicate-number/',
        description: 'Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n], there is only one repeated number. Find that number without modifying the array.',
        language: 'python',
        solution: `class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow, fast = nums[0], nums[nums[0]]
        while slow != fast:
            slow = nums[slow]
            fast = nums[nums[fast]]
        slow = 0
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]
        return slow`
      },
      {
        id: 'fsp-6',
        title: 'Palindrome Linked List',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/palindrome-linked-list/',
        description: 'Given the head of a singly linked list, return true if it is a palindrome or false otherwise.',
        language: 'python',
        solution: `class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        prev = None
        while slow:
            slow.next, prev, slow = prev, slow, slow.next

        left, right = head, prev
        while right:
            if left.val != right.val:
                return False
            left, right = left.next, right.next
        return True`
      },
      {
        id: 'fsp-7',
        title: 'Reorder List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/reorder-list/',
        description: 'Given the head of a singly linked list L0 → L1 → … → Ln, reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …',
        language: 'python',
        solution: `class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        second = slow.next
        slow.next = None
        prev = None
        while second:
            second.next, prev, second = prev, second, second.next

        first = head
        while prev:
            first.next, prev.next, first, prev = prev, first.next, first.next, prev.next`
      },
      {
        id: 'fsp-8',
        title: 'Sort List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/sort-list/',
        description: 'Given the head of a linked list, return the list after sorting it in ascending order in O(n log n) time and O(1) space.',
        language: 'python',
        solution: `class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        mid = slow.next
        slow.next = None

        left = self.sortList(head)
        right = self.sortList(mid)

        dummy = ListNode(0)
        cur = dummy
        while left and right:
            if left.val <= right.val:
                cur.next, left = left, left.next
            else:
                cur.next, right = right, right.next
            cur = cur.next
        cur.next = left or right
        return dummy.next`
      },
      {
        id: 'fsp-9',
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
        id: 'fsp-10',
        title: 'Circular Array Loop',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/circular-array-loop/',
        description: 'You are given a circular array nums of positive and negative integers. Return true if there is a cycle with a length greater than 1 following the movement rules.',
        language: 'python',
        solution: `class Solution:
    def circularArrayLoop(self, nums: List[int]) -> bool:
        n = len(nums)

        def next_idx(i):
            return (i + nums[i]) % n

        for i in range(n):
            slow, fast = i, i
            while nums[slow] * nums[next_idx(fast)] > 0 and \
                  nums[slow] * nums[next_idx(next_idx(fast))] > 0:
                slow = next_idx(slow)
                fast = next_idx(next_idx(fast))
                if slow == fast:
                    if slow == next_idx(slow):
                        break
                    return True
        return False`
      },
      {
        id: 'fsp-11',
        title: 'Intersection of Two Linked Lists',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/intersection-of-two-linked-lists/',
        description: 'Given the heads of two singly linked lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.',
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
        id: 'fsp-12',
        title: 'Linked List Components',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/linked-list-components/',
        description: 'Given the head of a linked list and an array nums, return the number of connected components in the list where each component contains nodes whose values exist in nums.',
        language: 'python',
        solution: `class Solution:
    def numComponents(self, head: Optional[ListNode], nums: List[int]) -> int:
        num_set = set(nums)
        slow = fast = head
        count = 0

        while fast:
            while fast and fast.val in num_set:
                fast = fast.next
            if slow != fast:
                count += 1
            slow = fast
            while fast and fast.val not in num_set:
                fast = fast.next
            slow = fast
        return count`
      },
      {
        id: 'fsp-13',
        title: 'Delete the Middle Node of a Linked List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/',
        description: 'Given the head of a linked list, delete the middle node and return the head. The middle node is the ⌊n / 2⌋th node (0-indexed).',
        language: 'python',
        solution: `class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return None

        slow, fast = head, head.next.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        slow.next = slow.next.next
        return head`
      },
      {
        id: 'fsp-14',
        title: 'Maximum Twin Sum of a Linked List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/',
        description: 'In a linked list of even length, the twin of node i is node (n-1-i). Return the maximum twin sum of the linked list.',
        language: 'python',
        solution: `class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        prev = None
        while slow:
            slow.next, prev, slow = prev, slow, slow.next

        max_sum = 0
        left, right = head, prev
        while right:
            max_sum = max(max_sum, left.val + right.val)
            left, right = left.next, right.next
        return max_sum`
      },
      {
        id: 'fsp-15',
        title: 'Rotate List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/rotate-list/',
        description: 'Given the head of a linked list, rotate the list to the right by k places.',
        language: 'python',
        solution: `class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k == 0:
            return head

        length, fast = 1, head
        while fast.next:
            fast = fast.next
            length += 1

        k = k % length
        if k == 0:
            return head

        slow = head
        for _ in range(length - k - 1):
            slow = slow.next

        fast.next = head
        head = slow.next
        slow.next = None
        return head`
      },
      {
        id: 'fsp-16',
        title: 'Length of Longest Cycle in a Graph',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/length-of-longest-cycle-in-a-graph/',
        description: 'You are given a directed graph with n nodes. Find the length of the longest cycle in the graph. If no cycle exists, return -1.',
        language: 'python',
        solution: `class Solution:
    def longestCycle(self, edges: List[int]) -> int:
        visited = [False] * len(edges)
        ans = -1

        for i in range(len(edges)):
            if visited[i]:
                continue
            slow, fast = i, i
            while fast != -1 and edges[fast] != -1:
                slow = edges[slow]
                fast = edges[edges[fast]] if edges[fast] != -1 else -1
                visited[slow] = True
                if fast != -1:
                    visited[fast] = True
                if slow == fast:
                    length, node = 1, edges[slow]
                    while node != slow:
                        length += 1
                        node = edges[node]
                    ans = max(ans, length)
                    break
        return ans`
      },
      {
        id: 'fsp-17',
        title: 'Linked List Random Node',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/linked-list-random-node/',
        description: 'Given a singly linked list, return a random node value. Each node must have equal probability of being chosen using reservoir sampling.',
        language: 'python',
        solution: `class Solution:
    def __init__(self, head: Optional[ListNode]):
        self.head = head

    def getRandom(self) -> int:
        slow, fast = self.head, self.head
        result, idx = slow.val, 1

        while fast.next:
            fast = fast.next
            idx += 1
            if random.randint(1, idx) == 1:
                slow = slow.next
                result = slow.val
        return result`
      },
      {
        id: 'fsp-18',
        title: 'Swap Nodes in Pairs',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/swap-nodes-in-pairs/',
        description: 'Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the nodes.',
        language: 'python',
        solution: `class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        slow, fast = dummy, head

        while fast and fast.next:
            next_pair = fast.next.next

            slow.next = fast.next
            fast.next.next = fast
            fast.next = next_pair

            slow = fast
            fast = next_pair
        return dummy.next`
      },
      {
        id: 'fsp-19',
        title: 'Reverse Nodes in k-Group',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
        description: 'Given the head of a linked list, reverse the nodes of the list k at a time and return the modified list. If nodes are not a multiple of k, leave the remaining nodes as is.',
        language: 'python',
        solution: `class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        group_prev = dummy

        while True:
            fast = group_prev
            for _ in range(k):
                fast = fast.next
                if not fast:
                    return dummy.next

            slow = group_prev.next
            prev = group_prev
            for _ in range(k):
                slow.next, prev, slow = prev, slow, slow.next

            group_prev.next.next = slow
            group_prev.next, group_prev = prev, group_prev.next`
      },
      {
        id: 'fsp-20',
        title: 'Split Linked List in Parts',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/split-linked-list-in-parts/',
        description: 'Given the head of a linked list and an integer k, split the list into k consecutive parts. Part lengths should differ by at most 1 and earlier parts should be longer.',
        language: 'python',
        solution: `class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        length, fast = 0, head
        while fast:
            length += 1
            fast = fast.next

        part_size, extra = divmod(length, k)
        result = []
        slow = head

        for i in range(k):
            result.append(slow)
            size = part_size + (1 if i < extra else 0)
            for _ in range(size - 1):
                if slow:
                    slow = slow.next
            if slow:
                slow.next, slow = None, slow.next
        return result`
      },
      {
        id: 'fsp-21',
        title: 'Odd Even Linked List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/odd-even-linked-list/',
        description: 'Given the head of a singly linked list, group all odd-indexed nodes together followed by even-indexed nodes and return the reordered list.',
        language: 'python',
        solution: `class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        slow, fast = head, head.next
        even_head = fast

        while fast and fast.next:
            slow.next = fast.next
            slow = slow.next
            fast.next = slow.next
            fast = fast.next

        slow.next = even_head
        return head`
      },
      {
        id: 'fsp-22',
        title: 'Find K-th Node From End',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/kth-node-from-end-of-list-lcci/',
        description: 'Implement an algorithm to find the kth to last element of a singly linked list. Return the value of that node.',
        language: 'python',
        solution: `class Solution:
    def kthToLast(self, head: ListNode, k: int) -> int:
        slow, fast = head, head

        for _ in range(k):
            fast = fast.next

        while fast:
            slow = slow.next
            fast = fast.next
        return slow.val`
      },
      {
        id: 'fsp-23',
        title: 'Flatten a Multilevel Doubly Linked List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/',
        description: 'Given a doubly linked list where nodes may have a child pointer to another doubly linked list, flatten the list so all nodes appear in a single-level doubly linked list.',
        language: 'python',
        solution: `class Solution:
    def flatten(self, head: Optional[Node]) -> Optional[Node]:
        slow = head
        while slow:
            if slow.child:
                fast = slow.child

                while fast.next:
                    fast = fast.next

                fast.next = slow.next
                if slow.next:
                    slow.next.prev = fast

                slow.next = slow.child
                slow.child.prev = slow
                slow.child = None

            slow = slow.next
        return head`
      },
      {
        id: 'fsp-24',
        title: 'Convert Binary Number in a Linked List to Integer',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/',
        description: 'Given head which is a reference node to a singly linked list representing a binary number, return the decimal value of the number in the linked list.',
        language: 'python',
        solution: `class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        slow, fast = head, head

        length = 0
        while fast:
            fast = fast.next
            length += 1

        result = 0
        for i in range(length - 1, -1, -1):
            result += slow.val * (2 ** i)
            slow = slow.next
        return result`
      },
      {
        id: 'fsp-25',
        title: 'Reverse Linked List II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list-ii/',
        description: 'Given the head of a singly linked list and two integers left and right, reverse the nodes of the list from position left to position right, and return the reversed list.',
        language: 'python',
        solution: `class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        slow = dummy

        for _ in range(left - 1):
            slow = slow.next

        fast = slow.next
        for _ in range(right - left):
            fast.next, slow.next, fast = slow.next, fast.next, fast.next
            slow.next.next = fast

        return dummy.next`
      },
    ]
  },
  {
    id: 'merge-intervals',
    name: 'Merge Intervals',
    icon: '🔗',
    description: 'Sort intervals and merge overlapping ones to simplify range-based problems.',
    color: '#A8E6CF',
    problems: [
      {
        id: 'mi-1',
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
        id: 'mi-2',
        title: 'Insert Interval',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/insert-interval/',
        description: 'Insert a new interval into a sorted list of non-overlapping intervals and merge if necessary.',
        language: 'python',
        solution: `class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        result = []
        for i, interval in enumerate(intervals):
            if newInterval[1] < interval[0]:
                result.append(newInterval)
                return result + intervals[i:]
            elif newInterval[0] > interval[1]:
                result.append(interval)
            else:
                newInterval = [
                    min(newInterval[0], interval[0]),
                    max(newInterval[1], interval[1])
                ]
        result.append(newInterval)
        return result`
      },
      {
        id: 'mi-3',
        title: 'Non-overlapping Intervals',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/non-overlapping-intervals/',
        description: 'Given an array of intervals, return the minimum number of intervals you need to remove to make the rest non-overlapping.',
        language: 'python',
        solution: `class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[1])
        count = 0
        end = float('-inf')
        for start, finish in intervals:
            if start >= end:
                end = finish
            else:
                count += 1
        return count`
      },
      {
        id: 'mi-4',
        title: 'Meeting Rooms',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms/',
        description: 'Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.',
        language: 'python',
        solution: `class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        intervals.sort(key=lambda x: x[0])
        for i in range(1, len(intervals)):
            if intervals[i][0] < intervals[i - 1][1]:
                return False
        return True`
      },
      {
        id: 'mi-5',
        title: 'Meeting Rooms II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms-ii/',
        description: 'Given an array of meeting time intervals, return the minimum number of conference rooms required.',
        language: 'python',
        solution: `class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        import heapq
        intervals.sort(key=lambda x: x[0])
        heap = []
        for start, end in intervals:
            if heap and heap[0] <= start:
                heapq.heapreplace(heap, end)
            else:
                heapq.heappush(heap, end)
        return len(heap)`
      },
      {
        id: 'mi-6',
        title: 'Minimum Number of Arrows to Burst Balloons',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/',
        description: 'Given an array of balloon intervals on the x-axis, return the minimum number of arrows needed to burst all balloons.',
        language: 'python',
        solution: `class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key=lambda x: x[1])
        arrows = 1
        end = points[0][1]
        for start, finish in points[1:]:
            if start > end:
                arrows += 1
                end = finish
        return arrows`
      },
      {
        id: 'mi-7',
        title: 'Data Stream as Disjoint Intervals',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/data-stream-as-disjoint-intervals/',
        description: 'Design a data structure that maintains a list of disjoint intervals and supports adding new values and retrieving all intervals.',
        language: 'python',
        solution: `class SummaryRanges:
    def __init__(self):
        self.intervals = []

    def addNum(self, value: int) -> None:
        new = [value, value]
        merged = []
        inserted = False
        for interval in self.intervals:
            if interval[1] + 1 < new[0]:
                merged.append(interval)
            elif interval[0] - 1 > new[1]:
                if not inserted:
                    merged.append(new)
                    inserted = True
                merged.append(interval)
            else:
                new[0] = min(new[0], interval[0])
                new[1] = max(new[1], interval[1])
        if not inserted:
            merged.append(new)
        self.intervals = merged

    def getIntervals(self) -> List[List[int]]:
        return self.intervals`
      },
      {
        id: 'mi-8',
        title: 'Remove Covered Intervals',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/remove-covered-intervals/',
        description: 'Given an array of intervals, return the number of intervals that are not covered by any other interval.',
        language: 'python',
        solution: `class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: (x[0], -x[1]))
        count = 0
        max_end = 0
        for start, end in intervals:
            if end > max_end:
                count += 1
                max_end = end
        return count`
      },
      {
        id: 'mi-9',
        title: 'Interval List Intersections',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/interval-list-intersections/',
        description: 'Given two lists of closed intervals, each list of intervals is pairwise disjoint and sorted. Return the intersection of these two interval lists.',
        language: 'python',
        solution: `class Solution:
    def intervalIntersection(
        self,
        firstList: List[List[int]],
        secondList: List[List[int]]
    ) -> List[List[int]]:
        result = []
        i, j = 0, 0
        while i < len(firstList) and j < len(secondList):
            lo = max(firstList[i][0], secondList[j][0])
            hi = min(firstList[i][1], secondList[j][1])
            if lo <= hi:
                result.append([lo, hi])
            if firstList[i][1] < secondList[j][1]:
                i += 1
            else:
                j += 1
        return result`
      },
      {
        id: 'mi-10',
        title: 'Count of Range Sum',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/count-of-range-sum/',
        description: 'Given an integer array nums and two integers lower and upper, return the number of range sums that lie in [lower, upper] inclusive.',
        language: 'python',
        solution: `class Solution:
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
        from sortedcontainers import SortedList
        sl = SortedList([0])
        prefix = 0
        count = 0
        for num in nums:
            prefix += num
            count += sl.bisect_right(prefix - lower) - sl.bisect_left(prefix - upper)
            sl.add(prefix)
        return count`
      },
      {
        id: 'mi-11',
        title: 'My Calendar I',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/my-calendar-i/',
        description: 'Implement a calendar that does not allow double booking. Given start and end times, return true if the event can be added without causing a double booking.',
        language: 'python',
        solution: `class MyCalendar:
    def __init__(self):
        self.calendar = []

    def book(self, start: int, end: int) -> bool:
        for s, e in self.calendar:
            if start < e and end > s:
                return False
        self.calendar.append((start, end))
        return True`
      },
      {
        id: 'mi-12',
        title: 'My Calendar II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/my-calendar-ii/',
        description: 'Implement a calendar that allows double booking but not triple booking. Return true if the event can be added without causing a triple booking.',
        language: 'python',
        solution: `class MyCalendarTwo:
    def __init__(self):
        self.bookings = []
        self.overlaps = []

    def book(self, start: int, end: int) -> bool:
        for s, e in self.overlaps:
            if start < e and end > s:
                return False
        for s, e in self.bookings:
            if start < e and end > s:
                self.overlaps.append((max(start, s), min(end, e)))
        self.bookings.append((start, end))
        return True`
      },
      {
        id: 'mi-13',
        title: 'Range Module',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/range-module/',
        description: 'Design a module that tracks ranges of numbers. Implement addRange, queryRange, and removeRange operations on half-open intervals.',
        language: 'python',
        solution: `class RangeModule:
    def __init__(self):
        self.ranges = []

    def addRange(self, left: int, right: int) -> None:
        merged = []
        inserted = False
        for l, r in self.ranges:
            if r < left:
                merged.append((l, r))
            elif l > right:
                if not inserted:
                    merged.append((left, right))
                    inserted = True
                merged.append((l, r))
            else:
                left = min(left, l)
                right = max(right, r)
        if not inserted:
            merged.append((left, right))
        self.ranges = merged

    def queryRange(self, left: int, right: int) -> bool:
        for l, r in self.ranges:
            if l <= left and right <= r:
                return True
        return False

    def removeRange(self, left: int, right: int) -> None:
        updated = []
        for l, r in self.ranges:
            if r <= left or l >= right:
                updated.append((l, r))
            else:
                if l < left:
                    updated.append((l, left))
                if r > right:
                    updated.append((right, r))
        self.ranges = updated`
      },
      {
        id: 'mi-14',
        title: 'Partition Labels',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/partition-labels/',
        description: 'Given a string s, partition it into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.',
        language: 'python',
        solution: `class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last = {c: i for i, c in enumerate(s)}
        result = []
        start = end = 0
        for i, c in enumerate(s):
            end = max(end, last[c])
            if i == end:
                result.append(end - start + 1)
                start = i + 1
        return result`
      },
      {
        id: 'mi-15',
        title: 'Employee Free Time',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/employee-free-time/',
        description: 'Given a list of schedules of employees, return a list of finite intervals representing the common free time for all employees, sorted.',
        language: 'python',
        solution: `class Solution:
    def employeeFreeTime(self, schedule: List[List[Interval]]) -> List[Interval]:
        intervals = sorted(
            [iv for emp in schedule for iv in emp],
            key=lambda x: x.start
        )
        result = []
        prev_end = intervals[0].end
        for iv in intervals[1:]:
            if iv.start > prev_end:
                result.append(Interval(prev_end, iv.start))
            prev_end = max(prev_end, iv.end)
        return result`
      },
    ]
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    icon: '🔄',
    description: 'Explore all possible solutions by building candidates incrementally and abandoning those that fail.',
    color: '#C44DFF',
    problems: [
      {
        id: 'bt-1',
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
        id: 'bt-2',
        title: 'Permutations',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/permutations/',
        description: 'Given an array nums of distinct integers, return all the possible permutations.',
        language: 'python',
        solution: `class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []
        def backtrack(current, remaining):
            if not remaining:
                result.append(current[:])
                return
            for i in range(len(remaining)):
                current.append(remaining[i])
                backtrack(current, remaining[:i] + remaining[i+1:])
                current.pop()
        backtrack([], nums)
        return result`
      },
      {
        id: 'bt-3',
        title: 'Combination Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/combination-sum/',
        description: 'Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations where the chosen numbers sum to target.',
        language: 'python',
        solution: `class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []
        def backtrack(start, current, total):
            if total == target:
                result.append(current[:])
                return
            if total > target:
                return
            for i in range(start, len(candidates)):
                current.append(candidates[i])
                backtrack(i, current, total + candidates[i])
                current.pop()
        backtrack(0, [], 0)
        return result`
      },
      {
        id: 'bt-4',
        title: 'Word Search',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/word-search/',
        description: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid.',
        language: 'python',
        solution: `class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows, cols = len(board), len(board[0])
        
        def dfs(r, c, idx):
            if idx == len(word):
                return True
            if r < 0 or c < 0 or r >= rows or c >= cols:
                return False
            if board[r][c] != word[idx]:
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
    ]
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    icon: '📊',
    description: 'Break down problems into overlapping sub-problems and store their solutions to avoid redundant computation.',
    color: '#FF8C42',
    problems: [
      {
        id: 'dp-1',
        title: 'Climbing Stairs',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/',
        description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.',
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
        id: 'dp-2',
        title: 'House Robber',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/house-robber/',
        description: 'Given an integer array nums representing money at each house, return the maximum amount you can rob without robbing two adjacent houses.',
        language: 'python',
        solution: `class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        if len(nums) == 1:
            return nums[0]
        prev2, prev1 = 0, 0
        for num in nums:
            current = max(prev1, prev2 + num)
            prev2 = prev1
            prev1 = current
        return prev1`
      },
      {
        id: 'dp-3',
        title: 'Longest Increasing Subsequence',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence/',
        description: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
        language: 'python',
        solution: `class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        from bisect import bisect_left
        tails = []
        for num in nums:
            pos = bisect_left(tails, num)
            if pos == len(tails):
                tails.append(num)
            else:
                tails[pos] = num
        return len(tails)`
      },
      {
  id: 'dp-4',
  title: 'Coin Change',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/coin-change/',
  description: 'Given an array of coins and an amount, return the fewest number of coins needed to make up that amount. Return -1 if not possible.',
  language: 'python',
  solution: `class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        for coin in coins:
            for x in range(coin, amount + 1):
                dp[x] = min(dp[x], dp[x - coin] + 1)
        return dp[amount] if dp[amount] != float('inf') else -1`
},
{
  id: 'dp-5',
  title: 'Unique Paths',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/unique-paths/',
  description: 'A robot is on an m x n grid at the top-left corner. It can only move right or down. Count the number of unique paths to reach the bottom-right corner.',
  language: 'python',
  solution: `class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [1] * n
        for i in range(1, m):
            for j in range(1, n):
                dp[j] += dp[j - 1]
        return dp[n - 1]`
},
{
  id: 'dp-6',
  title: 'Jump Game',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/jump-game/',
  description: 'Given an integer array nums where each element represents your max jump length at that position, return true if you can reach the last index.',
  language: 'python',
  solution: `class Solution:
    def canJump(self, nums: List[int]) -> bool:
        max_reach = 0
        for i, num in enumerate(nums):
            if i > max_reach:
                return False
            max_reach = max(max_reach, i + num)
        return True`
},
{
  id: 'dp-7',
  title: 'Longest Common Subsequence',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-common-subsequence/',
  description: 'Given two strings text1 and text2, return the length of their longest common subsequence. Return 0 if there is none.',
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
  id: 'dp-8',
  title: 'Word Break',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/word-break/',
  description: 'Given a string s and a dictionary wordDict, return true if s can be segmented into a space-separated sequence of dictionary words.',
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
        return dp[len(s)]`
},
{
  id: 'dp-9',
  title: '0/1 Knapsack (Partition Equal Subset Sum)',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/partition-equal-subset-sum/',
  description: 'Given an integer array nums, return true if you can partition it into two subsets such that the sum of elements in both subsets is equal.',
  language: 'python',
  solution: `class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)
        if total % 2 != 0:
            return False
        target = total // 2
        dp = {0}
        for num in nums:
            dp = {s + num for s in dp} | dp
        return target in dp`
},
{
  id: 'dp-10',
  title: 'Edit Distance',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/edit-distance/',
  description: 'Given two strings word1 and word2, return the minimum number of operations (insert, delete, replace) required to convert word1 to word2.',
  language: 'python',
  solution: `class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m, n = len(word1), len(word2)
        dp = list(range(n + 1))
        for i in range(1, m + 1):
            prev = dp[0]
            dp[0] = i
            for j in range(1, n + 1):
                temp = dp[j]
                if word1[i - 1] == word2[j - 1]:
                    dp[j] = prev
                else:
                    dp[j] = 1 + min(prev, dp[j], dp[j - 1])
                prev = temp
        return dp[n]`
},
    ]
  },
  {
    id: 'monotonic-stack',
    name: 'Monotonic Stack',
    icon: '📚',
    description: 'Use a stack that maintains elements in increasing or decreasing order to solve next greater/smaller element problems.',
    color: '#45B7D1',
    problems: [
      {
        id: 'ms-1',
        title: 'Daily Temperatures',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/daily-temperatures/',
        description: 'Given an array of integers temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.',
        language: 'python',
        solution: `class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        answer = [0] * n
        stack = []
        for i in range(n):
            while stack and temperatures[i] > temperatures[stack[-1]]:
                prev = stack.pop()
                answer[prev] = i - prev
            stack.append(i)
        return answer`
      },
      {
        id: 'ms-2',
        title: 'Next Greater Element I',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-i/',
        description: 'Find the next greater element for each element of nums1 in nums2.',
        language: 'python',
        solution: `class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        next_greater = {}
        for num in nums2:
            while stack and stack[-1] < num:
                next_greater[stack.pop()] = num
            stack.append(num)
        return [next_greater.get(num, -1) for num in nums1]`
      },
      {
        id: 'ms-3',
        title: 'Largest Rectangle in Histogram',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
        description: 'Given an array of integers heights representing the histogram bar heights, find the area of the largest rectangle in the histogram.',
        language: 'python',
        solution: `class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = [-1]
        max_area = 0
        for i in range(len(heights)):
            while stack[-1] != -1 and heights[stack[-1]] >= heights[i]:
                h = heights[stack.pop()]
                w = i - stack[-1] - 1
                max_area = max(max_area, h * w)
            stack.append(i)
        while stack[-1] != -1:
            h = heights[stack.pop()]
            w = len(heights) - stack[-1] - 1
            max_area = max(max_area, h * w)
        return max_area`
      }
    ]
  }
];