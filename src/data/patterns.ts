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
        return max_profit`
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
        return max_len`
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
        return s[start:end]`
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
        return result`
      }
    ]
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
      }
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
      }
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
      }
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
      }
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
      }
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
