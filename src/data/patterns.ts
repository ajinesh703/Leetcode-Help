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
{
  id: 'dp-11',
  title: 'Maximum Product Subarray',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/',
  description: 'Given an integer array nums, find a subarray that has the largest product and return the product.',
  language: 'python',
  solution: `class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = max(nums)
        curMin, curMax = 1, 1
        for n in nums:
            if n == 0:
                curMin, curMax = 1, 1
                continue
            tmp = curMax * n
            curMax = max(n * curMax, n * curMin, n)
            curMin = min(tmp, n * curMin, n)
            res = max(res, curMax)
        return res`
},
{
  id: 'dp-12',
  title: 'Decode Ways',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/decode-ways/',
  description: 'Given a string s containing only digits, return the number of ways to decode it where A=1, B=2, ..., Z=26.',
  language: 'python',
  solution: `class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0
        n = len(s)
        dp = [0] * (n + 1)
        dp[0], dp[1] = 1, 1
        for i in range(2, n + 1):
            if s[i - 1] != '0':
                dp[i] += dp[i - 1]
            two_digit = int(s[i - 2:i])
            if 10 <= two_digit <= 26:
                dp[i] += dp[i - 2]
        return dp[n]`
},
{
  id: 'dp-13',
  title: 'Palindromic Substrings',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/palindromic-substrings/',
  description: 'Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward.',
  language: 'python',
  solution: `class Solution:
    def countSubstrings(self, s: str) -> int:
        count = 0
        for i in range(len(s)):
            for odd in [True, False]:
                l, r = i, i if odd else i + 1
                while l >= 0 and r < len(s) and s[l] == s[r]:
                    count += 1
                    l -= 1
                    r += 1
        return count`
},
{
  id: 'dp-14',
  title: 'Longest Palindromic Substring',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring/',
  description: 'Given a string s, return the longest palindromic substring in s.',
  language: 'python',
  solution: `class Solution:
    def longestPalindrome(self, s: str) -> str:
        res, resLen = "", 0
        for i in range(len(s)):
            for l, r in [(i, i), (i, i + 1)]:
                while l >= 0 and r < len(s) and s[l] == s[r]:
                    if (r - l + 1) > resLen:
                        res = s[l:r + 1]
                        resLen = r - l + 1
                    l -= 1
                    r += 1
        return res`
},
{
  id: 'dp-15',
  title: 'Triangle Minimum Path Sum',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/triangle/',
  description: 'Given a triangle array, return the minimum path sum from top to bottom. At each step you may move to an adjacent number in the row below.',
  language: 'python',
  solution: `class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        dp = triangle[-1][:]
        for row in range(len(triangle) - 2, -1, -1):
            for col in range(len(triangle[row])):
                dp[col] = triangle[row][col] + min(dp[col], dp[col + 1])
        return dp[0]`
},
{
  id: 'dp-16',
  title: 'Best Time to Buy and Sell Stock with Cooldown',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
  description: 'Given stock prices, find the maximum profit with a cooldown of 1 day after selling before you can buy again.',
  language: 'python',
  solution: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        hold, sold, rest = -prices[0], 0, 0
        for price in prices[1:]:
            prev_sold = sold
            sold = hold + price
            hold = max(hold, rest - price)
            rest = max(rest, prev_sold)
        return max(sold, rest)`
},
{
  id: 'dp-17',
  title: 'Minimum Cost Climbing Stairs',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
  description: 'Given an array cost where cost[i] is the cost of the ith step, return the minimum cost to reach the top of the floor.',
  language: 'python',
  solution: `class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        for i in range(2, len(cost)):
            cost[i] += min(cost[i - 1], cost[i - 2])
        return min(cost[-1], cost[-2])`
},
{
  id: 'dp-18',
  title: 'Integer Break',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/integer-break/',
  description: 'Given an integer n, break it into the sum of k positive integers (k >= 2) and maximize the product of those integers.',
  language: 'python',
  solution: `class Solution:
    def integerBreak(self, n: int) -> int:
        dp = [0] * (n + 1)
        dp[1] = 1
        for i in range(2, n + 1):
            for j in range(1, i):
                dp[i] = max(dp[i], j * (i - j), j * dp[i - j])
        return dp[n]`
},
{
  id: 'dp-19',
  title: 'Burst Balloons',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/burst-balloons/',
  description: 'Given n balloons with values, burst them to maximize coins collected. Bursting balloon i gives nums[i-1]*nums[i]*nums[i+1] coins.',
  language: 'python',
  solution: `class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]
        n = len(nums)
        dp = [[0] * n for _ in range(n)]
        for length in range(2, n):
            for left in range(0, n - length):
                right = left + length
                for k in range(left + 1, right):
                    dp[left][right] = max(
                        dp[left][right],
                        nums[left] * nums[k] * nums[right] + dp[left][k] + dp[k][right]
                    )
        return dp[0][n - 1]`
},
{
  id: 'dp-20',
  title: 'Regular Expression Matching',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/regular-expression-matching/',
  description: 'Given an input string s and a pattern p, implement regular expression matching with support for . (any char) and * (zero or more of preceding).',
  language: 'python',
  solution: `class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)
        dp = [[False] * (n + 1) for _ in range(m + 1)]
        dp[0][0] = True
        for j in range(1, n + 1):
            if p[j - 1] == '*':
                dp[0][j] = dp[0][j - 2]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if p[j - 1] == '*':
                    dp[i][j] = dp[i][j - 2]
                    if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                        dp[i][j] |= dp[i - 1][j]
                elif p[j - 1] == '.' or p[j - 1] == s[i - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
        return dp[m][n]`
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
      },
      {
  id: 'ms-4',
  title: 'Next Greater Element II',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/next-greater-element-ii/',
  description: 'Given a circular integer array nums, return the next greater number for every element in nums.',
  language: 'python',
  solution: `class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [-1] * n
        stack = []
        for i in range(2 * n):
            while stack and nums[stack[-1]] < nums[i % n]:
                result[stack.pop()] = nums[i % n]
            if i < n:
                stack.append(i)
        return result`
},
{
  id: 'ms-5',
  title: 'Trapping Rain Water',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
  description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
  language: 'python',
  solution: `class Solution:
    def trap(self, height: List[int]) -> int:
        stack = []
        water = 0
        for i in range(len(height)):
            while stack and height[i] > height[stack[-1]]:
                top = stack.pop()
                if not stack:
                    break
                distance = i - stack[-1] - 1
                bounded_height = min(height[i], height[stack[-1]]) - height[top]
                water += distance * bounded_height
            stack.append(i)
        return water`
},
{
  id: 'ms-6',
  title: 'Sum of Subarray Minimums',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/sum-of-subarray-minimums/',
  description: 'Given an array of integers arr, find the sum of min(b) for every subarray b of arr.',
  language: 'python',
  solution: `class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
        MOD = 10**9 + 7
        stack = []
        result = 0
        for i in range(len(arr) + 1):
            while stack and (i == len(arr) or arr[stack[-1]] >= arr[i]):
                mid = stack.pop()
                left = stack[-1] if stack else -1
                right = i
                count = (mid - left) * (right - mid)
                result += arr[mid] * count
            stack.append(i)
        return result % MOD`
},
{
  id: 'ms-7',
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
        if k:
            stack = stack[:-k]
        return ''.join(stack).lstrip('0') or '0'`
},
{
  id: 'ms-8',
  title: 'Validate Stack Sequences',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/validate-stack-sequences/',
  description: 'Given two integer arrays pushed and popped, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack.',
  language: 'python',
  solution: `class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack = []
        j = 0
        for val in pushed:
            stack.append(val)
            while stack and stack[-1] == popped[j]:
                stack.pop()
                j += 1
        return not stack`
},
{
  id: 'ms-9',
  title: '132 Pattern',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/132-pattern/',
  description: 'Given an array of n integers nums, return true if there is a 132 pattern in nums — indices i < j < k such that nums[i] < nums[k] < nums[j].',
  language: 'python',
  solution: `class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        stack = []
        third = float('-inf')  # This is nums[k] (the "2" in 132)
        for i in range(len(nums) - 1, -1, -1):
            if nums[i] < third:
                return True
            while stack and stack[-1] < nums[i]:
                third = stack.pop()
            stack.append(nums[i])
        return False`
},
{
  id: 'ms-10',
  title: 'Online Stock Span',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/online-stock-span/',
  description: 'Design a class that collects daily price quotes for a stock and returns the span of that stock\'s price for the current day — the number of consecutive days the price was less than or equal to today\'s price.',
  language: 'python',
  solution: `class StockSpanner:
    def __init__(self):
        self.stack = []  # (price, span)

    def next(self, price: int) -> int:
        span = 1
        while self.stack and self.stack[-1][0] <= price:
            span += self.stack.pop()[1]
        self.stack.append((price, span))
        return span`
},
{
  id: 'ms-11',
  title: 'Car Fleet',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/car-fleet/',
  description: 'N cars are going to the same destination. Given arrays position and speed, return the number of car fleets that will arrive at the destination.',
  language: 'python',
  solution: `class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pairs = sorted(zip(position, speed), reverse=True)
        stack = []
        for pos, spd in pairs:
            time = (target - pos) / spd
            if not stack or time > stack[-1]:
                stack.append(time)
        return len(stack)`
},
{
  id: 'ms-12',
  title: 'Asteroid Collision',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/asteroid-collision/',
  description: 'Given an array asteroids of integers representing asteroids in a row, find out the state after all collisions. Positive = moving right, Negative = moving left. Same direction never collide.',
  language: 'python',
  solution: `class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for a in asteroids:
            alive = True
            while alive and a < 0 and stack and stack[-1] > 0:
                if stack[-1] < -a:
                    stack.pop()
                elif stack[-1] == -a:
                    stack.pop()
                    alive = False
                else:
                    alive = False
            if alive:
                stack.append(a)
        return stack`
},
{
  id: 'ms-13',
  title: 'Maximum Width Ramp',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-width-ramp/',
  description: 'Given an integer array nums, a ramp is a pair (i, j) where i < j and nums[i] <= nums[j]. Return the maximum width j - i of such a ramp.',
  language: 'python',
  solution: `class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        n = len(nums)
        stack = []
        for i in range(n):
            if not stack or nums[stack[-1]] > nums[i]:
                stack.append(i)
        result = 0
        for j in range(n - 1, -1, -1):
            while stack and nums[stack[-1]] <= nums[j]:
                result = max(result, j - stack.pop())
        return result`
},
{
  id: 'ms-14',
  title: 'Minimum Number of Visible People to Stand in Queue',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-visible-people-in-a-queue/',
  description: 'There are n people standing in a queue. Return an array answer where answer[i] is the number of people the ith person can see to their right in the queue.',
  language: 'python',
  solution: `class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        n = len(heights)
        result = [0] * n
        stack = []
        for i in range(n - 1, -1, -1):
            count = 0
            while stack and stack[-1] < heights[i]:
                stack.pop()
                count += 1
            if stack:
                count += 1
            result[i] = count
            stack.append(heights[i])
        return result`
},
{
  id: 'ms-15',
  title: 'Maximum Score of a Good Subarray',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-score-of-a-good-subarray/',
  description: 'Given an array nums and index k, find the maximum score of a good subarray where score = min(nums[i],...,nums[j]) * (j - i + 1) and i <= k <= j.',
  language: 'python',
  solution: `class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        n = len(nums)
        stack = []
        result = 0
        for i in range(n + 1):
            while stack and (i == n or nums[stack[-1]] >= nums[i]):
                mid = stack.pop()
                left = stack[-1] if stack else -1
                right = i
                if left < k < right:
                    result = max(result, nums[mid] * (right - left - 1))
            stack.append(i)
        return result`
},
{
  id: 'ms-16',
  title: 'Maximal Rectangle',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/maximal-rectangle/',
  description: 'Given a rows x cols binary matrix filled with 0s and 1s, find the largest rectangle containing only 1s and return its area.',
  language: 'python',
  solution: `class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix:
            return 0
        n = len(matrix[0])
        heights = [0] * n
        max_area = 0

        def largestInHistogram(heights):
            stack = [-1]
            max_a = 0
            for i in range(len(heights)):
                while stack[-1] != -1 and heights[stack[-1]] >= heights[i]:
                    h = heights[stack.pop()]
                    w = i - stack[-1] - 1
                    max_a = max(max_a, h * w)
                stack.append(i)
            while stack[-1] != -1:
                h = heights[stack.pop()]
                w = len(heights) - stack[-1] - 1
                max_a = max(max_a, h * w)
            return max_a

        for row in matrix:
            for j in range(n):
                heights[j] = heights[j] + 1 if row[j] == '1' else 0
            max_area = max(max_area, largestInHistogram(heights))
        return max_area`
},
{
  id: 'ms-17',
  title: 'Previous Smaller Element',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-atoms/',
  description: 'For each element in the array, find the nearest smaller element to its left. Return -1 if no such element exists.',
  language: 'python',
  solution: `class Solution:
    def previousSmallerElement(self, nums: List[int]) -> List[int]:
        stack = []
        result = []
        for num in nums:
            while stack and stack[-1] >= num:
                stack.pop()
            result.append(stack[-1] if stack else -1)
            stack.append(num)
        return result`
},
{
  id: 'ms-18',
  title: 'Final Prices With a Special Discount in a Shop',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/',
  description: 'Given an array prices, for each item find the first item to the right with a price <= current price and subtract it as a discount. Return the final prices.',
  language: 'python',
  solution: `class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        stack = []
        result = prices[:]
        for i in range(len(prices)):
            while stack and prices[stack[-1]] >= prices[i]:
                result[stack.pop()] -= prices[i]
            stack.append(i)
        return result`
},
{
  id: 'ms-19',
  title: 'Longest Well-Performing Interval',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-well-performing-interval/',
  description: 'A day is a tiring day if hours worked > 8. A well-performing interval has more tiring days than non-tiring. Return the length of the longest such interval.',
  language: 'python',
  solution: `class Solution:
    def longestWPI(self, hours: List[int]) -> int:
        score = 0
        seen = {}
        result = 0
        for i, h in enumerate(hours):
            score += 1 if h > 8 else -1
            if score > 0:
                result = i + 1
            else:
                if score - 1 in seen:
                    result = max(result, i - seen[score - 1])
            if score not in seen:
                seen[score] = i
        return result`
},
{
  id: 'ms-20',
  title: 'Steps to Make Array Non-decreasing',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/steps-to-make-array-non-decreasing/',
  description: 'In one step, remove all elements nums[i] where nums[i-1] > nums[i]. Return the number of steps to make the array non-decreasing.',
  language: 'python',
  solution: `class Solution:
    def totalSteps(self, nums: List[int]) -> int:
        stack = []  # (value, steps_to_remove)
        result = 0
        for num in nums:
            steps = 0
            while stack and stack[-1][0] <= num:
                steps = max(steps, stack.pop()[1])
            if stack:
                steps += 1
            else:
                steps = 0
            result = max(result, steps)
            stack.append((num, steps))
        return result`
},
{
  id: 'ms-21',
  title: 'Sum of Subarray Ranges',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/sum-of-subarray-ranges/',
  description: 'The range of a subarray is the difference between the largest and smallest element. Return the sum of all subarray ranges of nums.',
  language: 'python',
  solution: `class Solution:
    def subArrayRanges(self, nums: List[int]) -> int:
        n = len(nums)
        result = 0
        for i in range(n):
            min_val = max_val = nums[i]
            for j in range(i, n):
                min_val = min(min_val, nums[j])
                max_val = max(max_val, nums[j])
                result += max_val - min_val
        return result`
},
{
  id: 'ms-22',
  title: 'Maximum Subarray Min-Product',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray-min-product/',
  description: 'The min-product of an array is equal to the minimum value multiplied by the arrays sum. Return the maximum min-product of any non-empty subarray of nums modulo 1e9+7.',
  language: 'python',
  solution: `class Solution:
    def maxSumMinProduct(self, nums: List[int]) -> int:
        MOD = 10**9 + 7
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]
        
        stack = []
        result = 0
        for i in range(n + 1):
            while stack and (i == n or nums[stack[-1]] >= nums[i]):
                mid = stack.pop()
                left = stack[-1] if stack else -1
                total = prefix[i] - prefix[left + 1]
                result = max(result, nums[mid] * total)
            stack.append(i)
        return result % MOD`
},
{
  id: 'ms-23',
  title: 'Buildings With an Ocean View',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/buildings-with-an-ocean-view/',
  description: 'There are n buildings in a line. Ocean is to the right. A building has an ocean view if all buildings to its right are smaller. Return indices of buildings with ocean view in increasing order.',
  language: 'python',
  solution: `class Solution:
    def findBuildings(self, heights: List[int]) -> List[int]:
        stack = []
        for i in range(len(heights)):
            while stack and heights[stack[-1]] <= heights[i]:
                stack.pop()
            stack.append(i)
        return stack`
},
{
  id: 'ms-24',
  title: 'Maximum Number of Visible Points',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-visible-points/',
  description: 'Given points on a 2D plane and a location, return the maximum number of points visible from the location within a given angle of view.',
  language: 'python',
  solution: `class Solution:
    def visiblePoints(self, points: List[List[int]], angle: int, location: List[int]) -> int:
        import math
        angles = []
        bonus = 0
        for x, y in points:
            dx, dy = x - location[0], y - location[1]
            if dx == 0 and dy == 0:
                bonus += 1
                continue
            angles.append(math.degrees(math.atan2(dy, dx)))
        angles.sort()
        angles += [a + 360 for a in angles]
        max_visible = 0
        left = 0
        for right in range(len(angles)):
            while angles[right] - angles[left] > angle:
                left += 1
            max_visible = max(max_visible, right - left + 1)
        return max_visible + bonus`
},
{
  id: 'ms-25',
  title: 'Decode String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/decode-string/',
  description: 'Given an encoded string like 3[a2[c]], return its decoded version. The encoding rule is k[encoded_string] meaning the encoded_string is repeated exactly k times.',
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
  id: 'ms-26',
  title: 'Minimum Cost Tree From Leaf Values',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/',
  description: 'Given an array arr of positive integers, find the minimum possible sum of all non-leaf node values when building a binary tree where arr represents the leaves left to right.',
  language: 'python',
  solution: `class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
        stack = [float('inf')]
        result = 0
        for num in arr:
            while stack[-1] <= num:
                mid = stack.pop()
                result += mid * min(stack[-1], num)
            stack.append(num)
        while len(stack) > 2:
            result += stack.pop() * stack[-1]
        return result`
},
{
  id: 'ms-27',
  title: 'Remove Duplicate Letters',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/remove-duplicate-letters/',
  description: 'Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.',
  language: 'python',
  solution: `class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        count = {}
        for ch in s:
            count[ch] = count.get(ch, 0) + 1
        stack = []
        seen = set()
        for ch in s:
            count[ch] -= 1
            if ch in seen:
                continue
            while stack and stack[-1] > ch and count[stack[-1]] > 0:
                seen.remove(stack.pop())
            stack.append(ch)
            seen.add(ch)
        return ''.join(stack)`
},
{
  id: 'ms-28',
  title: 'Largest Rectangle in Histogram II',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
  description: 'Given an array of integers heights representing histogram bar heights where width of each bar is 1, return the area of the largest rectangle using left and right boundary tracking.',
  language: 'python',
  solution: `class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)
        left = [0] * n
        right = [n] * n
        stack = []
        for i in range(n):
            while stack and heights[stack[-1]] >= heights[i]:
                stack.pop()
            left[i] = stack[-1] + 1 if stack else 0
            stack.append(i)
        stack = []
        for i in range(n - 1, -1, -1):
            while stack and heights[stack[-1]] >= heights[i]:
                stack.pop()
            right[i] = stack[-1] if stack else n
            stack.append(i)
        return max(heights[i] * (right[i] - left[i]) for i in range(n))`
},
{
  id: 'ms-29',
  title: 'Shortest Unsorted Continuous Subarray',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/shortest-unsorted-continuous-subarray/',
  description: 'Given an integer array nums, find the shortest subarray that if sorted, makes the whole array sorted. Return the length of that subarray.',
  language: 'python',
  solution: `class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        left, right = -1, -2
        stack = []
        for i in range(n):
            while stack and nums[stack[-1]] > nums[i]:
                left = min(left if left != -1 else i, stack.pop())
            stack.append(i)
        stack = []
        for i in range(n - 1, -1, -1):
            while stack and nums[stack[-1]] < nums[i]:
                right = max(right, stack.pop())
            stack.append(i)
        return right - left + 1`
},
{
  id: 'ms-30',
  title: 'Score of Parentheses',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/score-of-parentheses/',
  description: 'Given a balanced parentheses string s, compute the score based on rules: () has score 1, AB has score A+B, (A) has score 2*A.',
  language: 'python',
  solution: `class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        stack = [0]
        for ch in s:
            if ch == '(':
                stack.append(0)
            else:
                top = stack.pop()
                stack[-1] += max(2 * top, 1)
        return stack[0]`
},
{
  id: 'ms-31',
  title: 'Minimum Stack',
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
        min_val = min(val, self.min_stack[-1] if self.min_stack else val)
        self.min_stack.append(min_val)

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]`
},
{
  id: 'ms-32',
  title: 'Largest Rectangle in Matrix of 1s',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/maximal-rectangle/',
  description: 'Given a binary matrix, for each row build a histogram of consecutive 1s and apply the largest rectangle in histogram algorithm to find the maximum area.',
  language: 'python',
  solution: `class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix or not matrix[0]:
            return 0
        cols = len(matrix[0])
        heights = [0] * (cols + 1)
        max_area = 0
        for row in matrix:
            for j in range(cols):
                heights[j] = heights[j] + 1 if row[j] == '1' else 0
            stack = [-1]
            for i in range(cols + 1):
                while stack[-1] != -1 and heights[stack[-1]] >= heights[i]:
                    h = heights[stack.pop()]
                    w = i - stack[-1] - 1
                    max_area = max(max_area, h * w)
                stack.append(i)
        return max_area`
},
{
  id: 'ms-33',
  title: 'Flatten Nested List Iterator',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/flatten-nested-list-iterator/',
  description: 'Implement an iterator to flatten a nested list of integers. Each element is either an integer or a list whose elements may also be integers or other lists.',
  language: 'python',
  solution: `class NestedIterator:
    def __init__(self, nestedList):
        self.stack = []
        self._flatten(nestedList)

    def _flatten(self, lst):
        for item in reversed(lst):
            self.stack.append(item)

    def next(self) -> int:
        return self.stack.pop().getInteger()

    def hasNext(self) -> bool:
        while self.stack:
            top = self.stack[-1]
            if top.isInteger():
                return True
            self.stack.pop()
            self._flatten(top.getList())
        return False`
},
{
  id: 'ms-34',
  title: 'Exclusive Time of Functions',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/exclusive-time-of-functions/',
  description: 'Given the running logs of n functions on a single-threaded CPU, return the exclusive time of each function. Each log is start/end with a timestamp.',
  language: 'python',
  solution: `class Solution:
    def exclusiveTime(self, n: int, logs: List[str]) -> List[int]:
        result = [0] * n
        stack = []
        prev_time = 0
        for log in logs:
            fn_id, typ, time = log.split(':')
            fn_id, time = int(fn_id), int(time)
            if typ == 'start':
                if stack:
                    result[stack[-1]] += time - prev_time
                stack.append(fn_id)
                prev_time = time
            else:
                result[stack.pop()] += time - prev_time + 1
                prev_time = time + 1
        return result`
},
{
  id: 'ms-35',
  title: 'Maximum Binary Tree',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-binary-tree/',
  description: 'Given an array nums with no duplicates, build a maximum binary tree where root is the max element, left subtree is built from left part, right subtree from right part. Return the root.',
  language: 'python',
  solution: `class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> Optional[TreeNode]:
        stack = []
        for num in nums:
            node = TreeNode(num)
            last = None
            while stack and stack[-1].val < num:
                last = stack.pop()
            node.left = last
            if stack:
                stack[-1].right = node
            stack.append(node)
        return stack[0]`
},
{
  id: 'ms-36',
  title: 'Remove All Adjacent Duplicates In String',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/',
  description: 'Given a string s, repeatedly remove adjacent duplicate characters until no more can be removed. Return the final string.',
  language: 'python',
  solution: `class Solution:
    def removeDuplicates(self, s: str) -> str:
        stack = []
        for ch in s:
            if stack and stack[-1] == ch:
                stack.pop()
            else:
                stack.append(ch)
        return ''.join(stack)`
},
{
  id: 'ms-37',
  title: 'Remove All Adjacent Duplicates in String II',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/',
  description: 'Given a string s and integer k, repeatedly remove k adjacent duplicate characters until no more can be removed. Return the final string.',
  language: 'python',
  solution: `class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        stack = []  # (char, count)
        for ch in s:
            if stack and stack[-1][0] == ch:
                stack[-1] = (ch, stack[-1][1] + 1)
                if stack[-1][1] == k:
                    stack.pop()
            else:
                stack.append((ch, 1))
        return ''.join(ch * cnt for ch, cnt in stack)`
},
{
  id: 'ms-38',
  title: 'Minimum Remove to Make Valid Parentheses',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/',
  description: 'Given a string s of parentheses and lowercase letters, remove the minimum number of parentheses to make the string valid. Return any valid result.',
  language: 'python',
  solution: `class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        s = list(s)
        stack = []
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
        return ''.join(s)`
},
{
  id: 'ms-39',
  title: 'Largest Rectangle in Histogram — Left Right Boundaries',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
  description: 'For each bar in a histogram, precompute the left and right boundaries (indices of nearest smaller bars) using two separate monotonic stack passes, then compute max area.',
  language: 'python',
  solution: `class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)
        left_boundary = [0] * n
        right_boundary = [n - 1] * n
        stack = []
        for i in range(n):
            while stack and heights[stack[-1]] >= heights[i]:
                right_boundary[stack.pop()] = i - 1
            left_boundary[i] = stack[-1] + 1 if stack else 0
            stack.append(i)
        max_area = 0
        for i in range(n):
            width = right_boundary[i] - left_boundary[i] + 1
            max_area = max(max_area, heights[i] * width)
        return max_area`
},
{
  id: 'ms-40',
  title: 'Check if Word is Valid After Substitutions',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/',
  description: 'Given a string s, determine if it is valid. A string is valid if it can be formed by repeatedly inserting "abc" into an empty string.',
  language: 'python',
  solution: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for ch in s:
            stack.append(ch)
            if len(stack) >= 3 and stack[-3:] == ['a', 'b', 'c']:
                stack.pop()
                stack.pop()
                stack.pop()
        return not stack`
},
{
  id: 'ms-41',
  title: 'Minimum Add to Make Parentheses Valid',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/',
  description: 'Given a string s of parentheses, return the minimum number of parentheses you must add to make the string valid.',
  language: 'python',
  solution: `class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        stack = []
        unmatched = 0
        for ch in s:
            if ch == '(':
                stack.append(ch)
            elif stack:
                stack.pop()
            else:
                unmatched += 1
        return unmatched + len(stack)`
},
{
  id: 'ms-42',
  title: 'Longest Valid Parentheses',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/longest-valid-parentheses/',
  description: 'Given a string containing just the characters ( and ), return the length of the longest valid (well-formed) parentheses substring.',
  language: 'python',
  solution: `class Solution:
    def longestValidParentheses(self, s: str) -> int:
        stack = [-1]
        max_len = 0
        for i, ch in enumerate(s):
            if ch == '(':
                stack.append(i)
            else:
                stack.pop()
                if not stack:
                    stack.append(i)
                else:
                    max_len = max(max_len, i - stack[-1])
        return max_len`
},
{
  id: 'ms-43',
  title: 'Number of Valid Subarrays',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-valid-subarrays/',
  description: 'Given an integer array nums, return the number of non-empty subarrays where the leftmost element is not larger than any other element in the subarray.',
  language: 'python',
  solution: `class Solution:
    def validSubarrays(self, nums: List[int]) -> int:
        stack = []
        result = 0
        for i in range(len(nums)):
            while stack and nums[stack[-1]] > nums[i]:
                result += i - stack.pop()
            stack.append(i)
        while stack:
            result += len(nums) - stack.pop()
        return result`
},
{
  id: 'ms-44',
  title: 'Count Visible Persons in a Queue',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-visible-people-in-a-queue/',
  description: 'There are n people in a queue each with unique heights. Person i can see person j if everyone between them is shorter than both. Return count of visible people for each person.',
  language: 'python',
  solution: `class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        n = len(heights)
        result = [0] * n
        stack = []
        for i in range(n - 1, -1, -1):
            count = 0
            while stack and heights[i] > stack[-1]:
                stack.pop()
                count += 1
            if stack:
                count += 1
            result[i] = count
            stack.append(heights[i])
        return result`
},
{
  id: 'ms-45',
  title: 'Minimum Cost to Hire K Workers',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-hire-k-workers/',
  description: 'There are n workers each with a quality and minimum wage. Hire exactly k workers such that every worker is paid at least their minimum wage and wages are proportional to quality. Return minimum cost.',
  language: 'python',
  solution: `class Solution:
    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
        import heapq
        workers = sorted((w / q, q) for w, q in zip(wage, quality))
        heap = []
        quality_sum = 0
        result = float('inf')
        for ratio, q in workers:
            heapq.heappush(heap, -q)
            quality_sum += q
            if len(heap) > k:
                quality_sum += heapq.heappop(heap)
            if len(heap) == k:
                result = min(result, ratio * quality_sum)
        return result`
},
{
  id: 'ms-46',
  title: 'Maximum Chunks to Make Sorted',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-chunks-to-make-sorted/',
  description: 'Given an array arr that is a permutation of [0, n-1], split it into the maximum number of chunks such that sorting each chunk individually makes the whole array sorted.',
  language: 'python',
  solution: `class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        stack = []
        for num in arr:
            max_val = num
            while stack and stack[-1] > num:
                max_val = max(max_val, stack.pop())
            stack.append(max_val)
        return len(stack)`
},
{
  id: 'ms-47',
  title: 'Maximum Chunks to Make Sorted II',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/max-chunks-to-make-sorted-ii/',
  description: 'Given an integer array arr (may contain duplicates), return the maximum number of chunks we can split it into such that sorting each chunk and concatenating gives a sorted array.',
  language: 'python',
  solution: `class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        stack = []
        for num in arr:
            max_val = num
            while stack and stack[-1] > num:
                max_val = max(max_val, stack.pop())
            stack.append(max_val)
        return len(stack)`
},
{
  id: 'ms-48',
  title: 'Constrained Subsequence Sum',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/constrained-subsequence-sum/',
  description: 'Given an integer array nums and integer k, return the maximum sum of a non-empty subsequence such that for every two consecutive integers in the subsequence, their indices are at most k apart.',
  language: 'python',
  solution: `class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
        from collections import deque
        dq = deque()
        dp = nums[:]
        for i in range(len(nums)):
            if dq and dq[0] < i - k:
                dq.popleft()
            if dq:
                dp[i] = max(dp[i], dp[dq[0]] + nums[i])
            while dq and dp[dq[-1]] <= dp[i]:
                dq.pop()
            if dp[i] > 0:
                dq.append(i)
        return max(dp)`
},
{
  id: 'ms-49',
  title: 'Jump Game VI',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/jump-game-vi/',
  description: 'You start at index 0 of an integer array nums. In one move you can jump at most k steps forward. You want to reach the last index. Return the maximum score you can get where score is the sum of all nums at visited indices.',
  language: 'python',
  solution: `class Solution:
    def maxResult(self, nums: List[int], k: int) -> int:
        from collections import deque
        n = len(nums)
        dp = [0] * n
        dp[0] = nums[0]
        dq = deque([0])
        for i in range(1, n):
            while dq and dq[0] < i - k:
                dq.popleft()
            dp[i] = nums[i] + dp[dq[0]]
            while dq and dp[dq[-1]] <= dp[i]:
                dq.pop()
            dq.append(i)
        return dp[-1]`
},
{
  id: 'ms-50',
  title: 'Sliding Window Maximum',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/sliding-window-maximum/',
  description: 'Given an integer array nums and a sliding window of size k, return the max value in each window as it slides from left to right.',
  language: 'python',
  solution: `class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        from collections import deque
        dq = deque()
        result = []
        for i in range(len(nums)):
            while dq and dq[0] < i - k + 1:
                dq.popleft()
            while dq and nums[dq[-1]] < nums[i]:
                dq.pop()
            dq.append(i)
            if i >= k - 1:
                result.append(nums[dq[0]])
        return result`
},
{
  id: 'ms-51',
  title: 'Largest Rectangle in Histogram — Divide and Conquer',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
  description: 'Find the largest rectangle in a histogram using a monotonic stack to track indices of bars in increasing order of height.',
  language: 'python',
  solution: `class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        max_area = 0
        heights.append(0)
        for i in range(len(heights)):
            start = i
            while stack and stack[-1][1] >= heights[i]:
                idx, h = stack.pop()
                max_area = max(max_area, h * (i - idx))
                start = idx
            stack.append((start, heights[i]))
        return max_area`
},
{
  id: 'ms-52',
  title: 'Maximum Width of Binary Tree',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-width-of-binary-tree/',
  description: 'Given the root of a binary tree, return the maximum width of the tree. Width of a level is the length between the leftmost and rightmost non-null nodes including nulls in between.',
  language: 'python',
  solution: `class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        from collections import deque
        if not root:
            return 0
        dq = deque([(root, 0)])
        max_width = 0
        while dq:
            level_len = len(dq)
            _, first_pos = dq[0]
            for _ in range(level_len):
                node, pos = dq.popleft()
                if node.left:
                    dq.append((node.left, 2 * pos))
                if node.right:
                    dq.append((node.right, 2 * pos + 1))
            max_width = max(max_width, pos - first_pos + 1)
        return max_width`
},
{
  id: 'ms-53',
  title: 'Next Greater Node in Linked List',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/next-greater-node-in-linked-list/',
  description: 'Given the head of a linked list, return an array of the next greater node values for each node. If no greater node exists, output 0.',
  language: 'python',
  solution: `class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        nums = []
        while head:
            nums.append(head.val)
            head = head.next
        result = [0] * len(nums)
        stack = []
        for i, val in enumerate(nums):
            while stack and nums[stack[-1]] < val:
                result[stack.pop()] = val
            stack.append(i)
        return result`
},
{
  id: 'ms-54',
  title: 'Find the Most Competitive Subsequence',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-the-most-competitive-subsequence/',
  description: 'Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k. A subsequence is more competitive if it is lexicographically smaller.',
  language: 'python',
  solution: `class Solution:
    def mostCompetitive(self, nums: List[int], k: int) -> List[int]:
        stack = []
        n = len(nums)
        for i, num in enumerate(nums):
            while stack and stack[-1] > num and len(stack) + (n - i) > k:
                stack.pop()
            if len(stack) < k:
                stack.append(num)
        return stack`
},
{
  id: 'ms-55',
  title: 'Minimum Number of Swaps to Make String Balanced',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/',
  description: 'Given a string s of brackets that is balanced except for order, return the minimum number of swaps to make it balanced.',
  language: 'python',
  solution: `class Solution:
    def minSwaps(self, s: str) -> int:
        stack = 0
        for ch in s:
            if ch == '[':
                stack += 1
            elif stack > 0:
                stack -= 1
        return (stack + 1) // 2`
},
{
  id: 'ms-56',
  title: 'Reverse Substrings Between Each Pair of Parentheses',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/',
  description: 'Given a string s that consists of letters and parentheses, reverse the substrings in each pair of matching parentheses from innermost to outermost. Return the result with parentheses removed.',
  language: 'python',
  solution: `class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack = []
        curr = []
        for ch in s:
            if ch == '(':
                stack.append(curr)
                curr = []
            elif ch == ')':
                curr = stack.pop() + curr[::-1]
            else:
                curr.append(ch)
        return ''.join(curr)`
},
{
  id: 'ms-57',
  title: 'Number of People That Can Be Seen Seeing Each Other',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-visible-people-in-a-queue/',
  description: 'Each person stands in a row and can see the next person to the right if no one taller stands between them. Use a monotonic decreasing stack to count visible pairs.',
  language: 'python',
  solution: `class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        n = len(heights)
        ans = [0] * n
        stack = []
        for i in range(n - 1, -1, -1):
            while stack and heights[i] > stack[-1]:
                stack.pop()
                ans[i] += 1
            if stack:
                ans[i] += 1
            stack.append(heights[i])
        return ans`
},
{
  id: 'ms-58',
  title: 'Minimum Difficulty of a Job Schedule',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/',
  description: 'You need to schedule jobs over d days. Each day you must do at least one job in order. The difficulty of a day is the max job difficulty that day. Minimize total difficulty across all days.',
  language: 'python',
  solution: `class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        n = len(jobDifficulty)
        if n < d:
            return -1
        dp = [[float('inf')] * n for _ in range(d)]
        dp[0][0] = jobDifficulty[0]
        for i in range(1, n):
            dp[0][i] = max(dp[0][i-1], jobDifficulty[i])
        for day in range(1, d):
            for i in range(day, n):
                stack = []
                for j in range(day - 1, i + 1):
                    cost = dp[day-1][j-1] if j > 0 else 0
                    curr = cost + jobDifficulty[j]
                    while stack and jobDifficulty[stack[-1]] <= jobDifficulty[j]:
                        top = stack.pop()
                        curr = min(curr, dp[day][top] - jobDifficulty[top] + jobDifficulty[j])
                    if stack:
                        curr = min(curr, dp[day][stack[-1]])
                    dp[day][j] = curr
                    stack.append(j)
        return dp[d-1][n-1]`
},
{
  id: 'ms-59',
  title: 'Dinner Plate Stacks',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/dinner-plate-stacks/',
  description: 'Implement a DinnerPlates class with a capacity limit per stack. push() adds to the leftmost non-full stack, pop() removes from the rightmost non-empty stack, popAtStack() removes from a specific stack.',
  language: 'python',
  solution: `class DinnerPlates:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.stacks = []
        self.available = []  # min-heap of available stack indices

    def push(self, val: int) -> None:
        import heapq
        while self.available and self.available[0] < len(self.stacks) and len(self.stacks[self.available[0]]) >= self.cap:
            heapq.heappop(self.available)
        if not self.available or (self.available and self.available[0] >= len(self.stacks)):
            self.stacks.append([])
            heapq.heappush(self.available, len(self.stacks) - 1)
        idx = self.available[0]
        self.stacks[idx].append(val)
        if len(self.stacks[idx]) == self.cap:
            heapq.heappop(self.available)

    def pop(self) -> int:
        while self.stacks and not self.stacks[-1]:
            self.stacks.pop()
        if not self.stacks:
            return -1
        return self.popAtStack(len(self.stacks) - 1)

    def popAtStack(self, index: int) -> int:
        import heapq
        if index >= len(self.stacks) or not self.stacks[index]:
            return -1
        val = self.stacks[index].pop()
        heapq.heappush(self.available, index)
        return val`
},
{
  id: 'ms-60',
  title: 'Maximum Frequency Stack',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-frequency-stack/',
  description: 'Design a stack-like data structure that pushes and pops elements. Pop always removes the most frequent element. If tied, remove the element closest to the top of the stack.',
  language: 'python',
  solution: `class FreqStack:
    def __init__(self):
        self.freq = {}
        self.group = {}
        self.max_freq = 0

    def push(self, val: int) -> None:
        f = self.freq.get(val, 0) + 1
        self.freq[val] = f
        self.max_freq = max(self.max_freq, f)
        if f not in self.group:
            self.group[f] = []
        self.group[f].append(val)

    def pop(self) -> int:
        val = self.group[self.max_freq].pop()
        self.freq[val] -= 1
        if not self.group[self.max_freq]:
            self.max_freq -= 1
        return val`
},
{
  id: 'ms-61',
  title: 'Parsing A Boolean Expression',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/parsing-a-boolean-expression/',
  description: 'Given a boolean expression as a string, evaluate and return its value. Expressions can be t, f, !(expr), &(expr1,expr2,...), |(expr1,expr2,...)',
  language: 'python',
  solution: `class Solution:
    def parseBoolExpr(self, expression: str) -> bool:
        stack = []
        for ch in expression:
            if ch == ',':
                continue
            elif ch != ')':
                stack.append(ch)
            else:
                seen = set()
                while stack[-1] != '(':
                    seen.add(stack.pop())
                stack.pop()  # pop '('
                op = stack.pop()
                if op == '!':
                    stack.append('f' if 't' in seen else 't')
                elif op == '&':
                    stack.append('f' if 'f' in seen else 't')
                elif op == '|':
                    stack.append('t' if 't' in seen else 'f')
        return stack[0] == 't'`
},
{
  id: 'ms-62',
  title: 'Basic Calculator',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/basic-calculator/',
  description: 'Given a string s representing a valid expression with +, -, (, ), and spaces, implement a basic calculator to evaluate it and return its result.',
  language: 'python',
  solution: `class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        result = 0
        num = 0
        sign = 1
        for ch in s:
            if ch.isdigit():
                num = num * 10 + int(ch)
            elif ch == '+':
                result += sign * num
                num = 0
                sign = 1
            elif ch == '-':
                result += sign * num
                num = 0
                sign = -1
            elif ch == '(':
                stack.append(result)
                stack.append(sign)
                result = 0
                sign = 1
            elif ch == ')':
                result += sign * num
                num = 0
                result *= stack.pop()
                result += stack.pop()
        return result + sign * num`
},
{
  id: 'ms-63',
  title: 'Basic Calculator II',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/basic-calculator-ii/',
  description: 'Given a string s representing an expression with +, -, *, / and spaces (no parentheses), evaluate and return the result as an integer.',
  language: 'python',
  solution: `class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        num = 0
        sign = '+'
        for i, ch in enumerate(s):
            if ch.isdigit():
                num = num * 10 + int(ch)
            if (not ch.isdigit() and ch != ' ') or i == len(s) - 1:
                if sign == '+':
                    stack.append(num)
                elif sign == '-':
                    stack.append(-num)
                elif sign == '*':
                    stack.append(stack.pop() * num)
                elif sign == '/':
                    stack.append(int(stack.pop() / num))
                sign = ch
                num = 0
        return sum(stack)`
},
{
  id: 'ms-64',
  title: 'Basic Calculator III',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/basic-calculator-iii/',
  description: 'Implement a basic calculator to evaluate a string expression containing +, -, *, / and parentheses. Return the result as an integer.',
  language: 'python',
  solution: `class Solution:
    def calculate(self, s: str) -> int:
        def helper(it):
            stack = []
            num = 0
            sign = '+'
            while it < len(s):
                ch = s[it]
                if ch.isdigit():
                    num = num * 10 + int(ch)
                if ch == '(':
                    num, it = helper(it + 1)
                if (not ch.isdigit() and ch != ' ') or it == len(s) - 1:
                    if sign == '+': stack.append(num)
                    elif sign == '-': stack.append(-num)
                    elif sign == '*': stack.append(stack.pop() * num)
                    elif sign == '/': stack.append(int(stack.pop() / num))
                    sign = ch
                    num = 0
                if ch == ')':
                    return sum(stack), it
                it += 1
            return sum(stack), it
        return helper(0)[0]`
},
{
  id: 'ms-65',
  title: 'Minimum Cost to Merge Stones',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-merge-stones/',
  description: 'There are n piles of stones. Move exactly k consecutive piles into one pile, costing the sum of those piles. Return the minimum cost to merge all into one pile, or -1 if impossible.',
  language: 'python',
  solution: `class Solution:
    def mergeStones(self, stones: List[int], k: int) -> int:
        n = len(stones)
        if (n - 1) % (k - 1) != 0:
            return -1
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + stones[i]
        from functools import lru_cache
        @lru_cache(None)
        def dp(i, j):
            if j - i + 1 < k:
                return 0
            res = min(dp(i, m) + dp(m + 1, j) for m in range(i, j, k - 1))
            if (j - i) % (k - 1) == 0:
                res += prefix[j + 1] - prefix[i]
            return res
        return dp(0, n - 1)`
},
{
  id: 'ms-66',
  title: 'Robot Collisions',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/robot-collisions/',
  description: 'Given robots on a number line with positions, healths and directions (L/R), robots moving toward each other collide and the weaker one is removed. Return healths of surviving robots in original order.',
  language: 'python',
  solution: `class Solution:
    def survivedRobotsHealths(self, positions: List[int], healths: List[int], directions: str) -> List[int]:
        n = len(positions)
        robots = sorted(range(n), key=lambda i: positions[i])
        stack = []
        for i in robots:
            if directions[i] == 'R':
                stack.append(i)
            else:
                while stack and directions[stack[-1]] == 'R' and healths[i] > 0:
                    top = stack[-1]
                    if healths[top] > healths[i]:
                        healths[top] -= 1
                        healths[i] = 0
                    elif healths[top] < healths[i]:
                        healths[i] -= 1
                        healths[stack.pop()] = 0
                    else:
                        healths[stack.pop()] = 0
                        healths[i] = 0
                if healths[i] > 0 and (not stack or directions[stack[-1]] == 'L'):
                    stack.append(i)
        return [healths[i] for i in range(n) if healths[i] > 0]`
},
{
  id: 'ms-67',
  title: 'Minimum Elements to Remove for Valid Array',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/',
  description: 'A string is good if no two different characters have the same frequency. Given string s, return the minimum number of character deletions to make it good.',
  language: 'python',
  solution: `class Solution:
    def minDeletions(self, s: str) -> int:
        from collections import Counter
        freq = sorted(Counter(s).values(), reverse=True)
        used = set()
        deletions = 0
        for f in freq:
            while f > 0 and f in used:
                f -= 1
                deletions += 1
            if f > 0:
                used.add(f)
        return deletions`
},
{
  id: 'ms-68',
  title: 'Minimum Insertions to Balance Parentheses',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/',
  description: 'Given a string s of ( and ), every ( needs )) to balance. Return the minimum number of insertions to balance the string.',
  language: 'python',
  solution: `class Solution:
    def minInsertions(self, s: str) -> int:
        result = 0
        open_count = 0
        i = 0
        while i < len(s):
            ch = s[i]
            if ch == '(':
                open_count += 1
            else:
                if i + 1 < len(s) and s[i + 1] == ')':
                    i += 1
                else:
                    result += 1
                if open_count > 0:
                    open_count -= 1
                else:
                    result += 1
            i += 1
        return result + open_count * 2`
},
{
  id: 'ms-69',
  title: 'Number of Atoms',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-atoms/',
  description: 'Given a chemical formula string, return the count of each atom in sorted order. Handle nested parentheses with multipliers.',
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
                mult = int(formula[start:i]) if start < i else 1
                top = stack.pop()
                for elem, cnt in top.items():
                    stack[-1][elem] += cnt * mult
            elif formula[i].isupper():
                start = i
                i += 1
                while i < n and formula[i].islower():
                    i += 1
                elem = formula[start:i]
                start = i
                while i < n and formula[i].isdigit():
                    i += 1
                cnt = int(formula[start:i]) if start < i else 1
                stack[-1][elem] += cnt
        total = stack[0]
        return ''.join(f"{elem}{cnt if cnt > 1 else ''}" for elem, cnt in sorted(total.items()))`
},
{
  id: 'ms-70',
  title: 'Largest Rectangle in Histogram — One Pass',
  difficulty: 'Hard',
  leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
  description: 'Find the largest rectangle in a histogram in a single pass using a monotonic increasing stack. When a shorter bar is found, pop and calculate area using the popped bar as the shortest.',
  language: 'python',
  solution: `class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        max_area = 0
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
    ]
  }
];