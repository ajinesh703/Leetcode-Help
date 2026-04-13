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
      {
        id: 'tp-16',
        title: 'Valid Palindrome II',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome-ii/',
        description: 'Given a string s, return true if the string can be a palindrome after deleting at most one character from it.',
        language: 'python',
        solution: `class Solution:
    def validPalindrome(self, s: str) -> bool:
        def isPalin(l, r):
            while l < r:
                if s[l] != s[r]:
                    return False
                l += 1
                r -= 1
            return True
        left, right = 0, len(s) - 1
        while left < right:
            if s[left] != s[right]:
                return isPalin(left + 1, right) or isPalin(left, right - 1)
            left += 1
            right -= 1
        return True`,
      },
      {
        id: 'tp-17',
        title: 'Backspace String Compare',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/backspace-string-compare/',
        description: 'Given two strings s and t, return true if they are equal when both are typed into empty text editors. # means a backspace character.',
        language: 'python',
        solution: `class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        i, j = len(s) - 1, len(t) - 1
        skip_s = skip_t = 0
        while i >= 0 or j >= 0:
            while i >= 0:
                if s[i] == '#':
                    skip_s += 1
                    i -= 1
                elif skip_s > 0:
                    skip_s -= 1
                    i -= 1
                else:
                    break
            while j >= 0:
                if t[j] == '#':
                    skip_t += 1
                    j -= 1
                elif skip_t > 0:
                    skip_t -= 1
                    j -= 1
                else:
                    break
            if i >= 0 and j >= 0 and s[i] != t[j]:
                return False
            if (i >= 0) != (j >= 0):
                return False
            i -= 1
            j -= 1
        return True`,
      },
      {
        id: 'tp-18',
        title: 'Number of Subsequences That Satisfy the Given Sum Condition',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/',
        description: 'Given an integer array nums and an integer target, return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element is less than or equal to target.',
        language: 'python',
        solution: `class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        MOD = 10**9 + 7
        nums.sort()
        n = len(nums)
        power = [1] * n
        for i in range(1, n):
            power[i] = power[i - 1] * 2 % MOD
        left, right = 0, n - 1
        result = 0
        while left <= right:
            if nums[left] + nums[right] <= target:
                result = (result + power[right - left]) % MOD
                left += 1
            else:
                right -= 1
        return result`,
      },
      {
        id: 'tp-19',
        title: 'Minimum Length of String After Deleting Similar Ends',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/',
        description: 'Given a string s, repeatedly delete the longest prefix and suffix that share the same character. Return the minimum length of the remaining string.',
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
        return right - left + 1`,
      },
      {
        id: 'tp-20',
        title: 'Maximize Distance to Closest Person',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximize-distance-to-closest-person/',
        description: 'Given a binary array seats where 1 represents a person sitting and 0 represents an empty seat, return the maximum distance to the closest person if you sit in an empty seat.',
        language: 'python',
        solution: `class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
        left = -1
        result = 0
        n = len(seats)
        for right in range(n):
            if seats[right] == 1:
                if left == -1:
                    result = right
                else:
                    result = max(result, (right - left) // 2)
                left = right
        result = max(result, n - 1 - left)
        return result`,
      },
      {
        id: 'tp-21',
        title: 'Largest Container',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/',
        description: 'Given n non-negative integers representing vertical lines at positions 0 to n-1, find two lines that together with the x-axis forms a container holding the most water.',
        language: 'python',
        solution: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        result = 0
        while left < right:
            area = min(height[left], height[right]) * (right - left)
            result = max(result, area)
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return result`,
      },
      {
        id: 'tp-22',
        title: '3Sum Closest',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/3sum-closest/',
        description: 'Given an integer array nums and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers.',
        language: 'python',
        solution: `class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        closest = float('inf')
        for i in range(len(nums) - 2):
            left, right = i + 1, len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if abs(total - target) < abs(closest - target):
                    closest = total
                if total < target:
                    left += 1
                elif total > target:
                    right -= 1
                else:
                    return total
        return closest`,
      },
      {
        id: 'tp-23',
        title: 'Bag of Tokens',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/bag-of-tokens/',
        description: 'Given an array tokens and integer power, maximize your score by playing tokens face-up (spend power, gain score) or face-down (spend score, gain power).',
        language: 'python',
        solution: `class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        tokens.sort()
        left, right = 0, len(tokens) - 1
        score = result = 0
        while left <= right:
            if power >= tokens[left]:
                power -= tokens[left]
                score += 1
                left += 1
                result = max(result, score)
            elif score > 0:
                power += tokens[right]
                score -= 1
                right -= 1
            else:
                break
        return result`,
      },
      {
        id: 'tp-24',
        title: 'Sum of Square Numbers',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/sum-of-square-numbers/',
        description: 'Given a non-negative integer c, decide whether there are two integers a and b such that a^2 + b^2 = c.',
        language: 'python',
        solution: `class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        import math
        left, right = 0, int(math.sqrt(c))
        while left <= right:
            total = left * left + right * right
            if total == c:
                return True
            elif total < c:
                left += 1
            else:
                right -= 1
        return False`,
      },
      {
        id: 'tp-25',
        title: 'Count Pairs Whose Sum is Less than Target',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/',
        description: 'Given an integer array nums and integer target, return the number of pairs (i, j) where i < j and nums[i] + nums[j] < target.',
        language: 'python',
        solution: `class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        nums.sort()
        left, right = 0, len(nums) - 1
        result = 0
        while left < right:
            if nums[left] + nums[right] < target:
                result += right - left
                left += 1
            else:
                right -= 1
        return result`,
      },
      {
        id: 'tp-26',
        title: 'Minimize Maximum Pair Sum in Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/',
        description: 'Given an array nums of even length n, pair up the elements and return the minimized maximum pair sum.',
        language: 'python',
        solution: `class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums.sort()
        left, right = 0, len(nums) - 1
        result = 0
        while left < right:
            result = max(result, nums[left] + nums[right])
            left += 1
            right -= 1
        return result`,
      },
      {
        id: 'tp-27',
        title: 'Find K Closest Elements',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-k-closest-elements/',
        description: 'Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array sorted in ascending order.',
        language: 'python',
        solution: `class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        left, right = 0, len(arr) - k
        while left < right:
            mid = (left + right) // 2
            if x - arr[mid] > arr[mid + k] - x:
                left = mid + 1
            else:
                right = mid
        return arr[left:left + k]`,
      },
      {
        id: 'tp-28',
        title: 'Assign Cookies',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/assign-cookies/',
        description: 'Given arrays g (greed factors of children) and s (cookie sizes), return the maximum number of content children. A child is content if their greed factor is at most the cookie size.',
        language: 'python',
        solution: `class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        child = cookie = 0
        while child < len(g) and cookie < len(s):
            if s[cookie] >= g[child]:
                child += 1
            cookie += 1
        return child`,
      },
      {
        id: 'tp-29',
        title: 'Merge Sorted Array',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/merge-sorted-array/',
        description: 'Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array in-place.',
        language: 'python',
        solution: `class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        left, right = m - 1, n - 1
        pos = m + n - 1
        while left >= 0 and right >= 0:
            if nums1[left] > nums2[right]:
                nums1[pos] = nums1[left]
                left -= 1
            else:
                nums1[pos] = nums2[right]
                right -= 1
            pos -= 1
        while right >= 0:
            nums1[pos] = nums2[right]
            right -= 1
            pos -= 1`,
      },
      {
        id: 'tp-30',
        title: 'Long Pressed Name',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/long-pressed-name/',
        description: 'Given strings name and typed, return true if typed is a long-pressed version of name, where some characters may be repeated.',
        language: 'python',
        solution: `class Solution:
    def isLongPressedName(self, name: str, typed: str) -> bool:
        i = j = 0
        while j < len(typed):
            if i < len(name) and name[i] == typed[j]:
                i += 1
                j += 1
            elif j > 0 and typed[j] == typed[j - 1]:
                j += 1
            else:
                return False
        return i == len(name)`,
      },
      {
        id: 'tp-31',
        title: 'Remove Duplicates from Sorted Array II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/',
        description: 'Given an integer array nums sorted in non-decreasing order, remove duplicates in-place such that each unique element appears at most twice. Return the number of elements.',
        language: 'python',
        solution: `class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        slow = 0
        for fast in range(len(nums)):
            if slow < 2 or nums[fast] != nums[slow - 2]:
                nums[slow] = nums[fast]
                slow += 1
        return slow`,
      },
      {
        id: 'tp-32',
        title: 'Remove Element',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/remove-element/',
        description: 'Given an integer array nums and an integer val, remove all occurrences of val in-place. Return the number of elements not equal to val.',
        language: 'python',
        solution: `class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        slow = 0
        for fast in range(len(nums)):
            if nums[fast] != val:
                nums[slow] = nums[fast]
                slow += 1
        return slow`,
      },
      {
        id: 'tp-33',
        title: 'Rotate Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/rotate-array/',
        description: 'Given an integer array nums, rotate the array to the right by k steps in-place.',
        language: 'python',
        solution: `class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        def reverse(left, right):
            while left < right:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1
        n = len(nums)
        k %= n
        reverse(0, n - 1)
        reverse(0, k - 1)
        reverse(k, n - 1)`,
      },
      {
        id: 'tp-34',
        title: 'Is Subsequence',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/is-subsequence/',
        description: 'Given two strings s and t, return true if s is a subsequence of t, or false otherwise.',
        language: 'python',
        solution: `class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = j = 0
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1
            j += 1
        return i == len(s)`,
      },
      {
        id: 'tp-35',
        title: 'Sentence Similarity III',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/sentence-similarity-iii/',
        description: 'Given two sentences sentence1 and sentence2, return true if one sentence can be inserted into the other to make them equal.',
        language: 'python',
        solution: `class Solution:
    def areSentencesSimilar(self, sentence1: str, sentence2: str) -> bool:
        w1, w2 = sentence1.split(), sentence2.split()
        l1, l2 = len(w1), len(w2)
        if l1 < l2:
            w1, w2 = w2, w1
            l1, l2 = l2, l1
        left = right = 0
        while left < l2 and w1[left] == w2[left]:
            left += 1
        while right < l2 and w1[l1 - 1 - right] == w2[l2 - 1 - right]:
            right += 1
        return left + right >= l2`,
      },
      {
        id: 'tp-36',
        title: 'Reverse Words in a String',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/reverse-words-in-a-string/',
        description: 'Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters.',
        language: 'python',
        solution: `class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split()
        left, right = 0, len(words) - 1
        while left < right:
            words[left], words[right] = words[right], words[left]
            left += 1
            right -= 1
        return ' '.join(words)`,
      },
      {
        id: 'tp-37',
        title: 'Partition Array According to Given Pivot',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/partition-array-according-to-given-pivot/',
        description: 'Given an integer array nums and integer pivot, rearrange nums so elements less than pivot appear first, elements equal to pivot appear next, and elements greater appear last.',
        language: 'python',
        solution: `class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        less = [x for x in nums if x < pivot]
        equal = [x for x in nums if x == pivot]
        greater = [x for x in nums if x > pivot]
        return less + equal + greater`,
      },
      {
        id: 'tp-38',
        title: 'Rearrange Array Elements by Sign',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/rearrange-array-elements-by-sign/',
        description: 'Given an array nums of equal positive and negative integers, rearrange so positives and negatives alternate starting with a positive.',
        language: 'python',
        solution: `class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        result = [0] * len(nums)
        pos, neg = 0, 1
        for num in nums:
            if num > 0:
                result[pos] = num
                pos += 2
            else:
                result[neg] = num
                neg += 2
        return result`,
      },
      {
        id: 'tp-39',
        title: 'Find the Index of the First Occurrence in a String',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/',
        description: 'Given two strings haystack and needle, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.',
        language: 'python',
        solution: `class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        n, m = len(haystack), len(needle)
        left = right = 0
        while right < n:
            if haystack[right] == needle[right - left]:
                if right - left == m - 1:
                    return left
                right += 1
            else:
                left += 1
                right = left
        return -1`,
      },
      {
        id: 'tp-40',
        title: 'Wiggle Sort',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/wiggle-sort/',
        description: 'Given an integer array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]...',
        language: 'python',
        solution: `class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        for i in range(1, len(nums)):
            if (i % 2 == 1 and nums[i] < nums[i - 1]) or \
               (i % 2 == 0 and nums[i] > nums[i - 1]):
                nums[i], nums[i - 1] = nums[i - 1], nums[i]`,
      },
      {
        id: 'tp-41',
        title: 'Minimum Number of Swaps to Make the String Balanced',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/',
        description: 'Given a 0-indexed string s of even length consisting of [ and ] brackets, return the minimum number of swaps to make the string balanced.',
        language: 'python',
        solution: `class Solution:
    def minSwaps(self, s: str) -> int:
        left, right = 0, len(s) - 1
        unmatched = 0
        swaps = 0
        while left < right:
            if s[left] == ']':
                while left < right and s[right] == ']':
                    right -= 1
                if left < right:
                    swaps += 1
                    right -= 1
            left += 1
        return swaps`,
      },
      {
        id: 'tp-42',
        title: 'Interval List Intersections',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/interval-list-intersections/',
        description: 'Given two lists of closed intervals firstList and secondList, each list of intervals is pairwise disjoint and in sorted order. Return the intersection of these two interval lists.',
        language: 'python',
        solution: `class Solution:
    def intervalIntersection(self, firstList: List[List[int]], secondList: List[List[int]]) -> List[List[int]]:
        left, right = 0, 0
        result = []
        while left < len(firstList) and right < len(secondList):
            lo = max(firstList[left][0], secondList[right][0])
            hi = min(firstList[left][1], secondList[right][1])
            if lo <= hi:
                result.append([lo, hi])
            if firstList[left][1] < secondList[right][1]:
                left += 1
            else:
                right += 1
        return result`,
      },
      {
        id: 'tp-43',
        title: 'Minimum Common Value',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-common-value/',
        description: 'Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If no common integer exists, return -1.',
        language: 'python',
        solution: `class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        left, right = 0, 0
        while left < len(nums1) and right < len(nums2):
            if nums1[left] == nums2[right]:
                return nums1[left]
            elif nums1[left] < nums2[right]:
                left += 1
            else:
                right += 1
        return -1`,
      },
      {
        id: 'tp-44',
        title: 'Intersection of Two Arrays II',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/',
        description: 'Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays.',
        language: 'python',
        solution: `class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        nums2.sort()
        left, right = 0, 0
        result = []
        while left < len(nums1) and right < len(nums2):
            if nums1[left] == nums2[right]:
                result.append(nums1[left])
                left += 1
                right += 1
            elif nums1[left] < nums2[right]:
                left += 1
            else:
                right += 1
        return result`,
      },
      {
        id: 'tp-45',
        title: 'Push Dominoes',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/push-dominoes/',
        description: 'Given a string dominoes representing the initial state of dominoes (L, R, or .), return the final state after all dominoes have fallen.',
        language: 'python',
        solution: `class Solution:
    def pushDominoes(self, dominoes: str) -> str:
        s = 'L' + dominoes + 'R'
        result = []
        left = 0
        for right in range(1, len(s)):
            if s[right] == '.':
                continue
            gap = right - left - 1
            if left > 0:
                result.append(s[left])
            if s[left] == s[right]:
                result.append(s[left] * gap)
            elif s[left] == 'L' and s[right] == 'R':
                result.append('.' * gap)
            else:
                result.append('R' * (gap // 2) + ('.' if gap % 2 else '') + 'L' * (gap // 2))
            left = right
        return ''.join(result)`,
      },
      {
        id: 'tp-46',
        title: 'Number of Zero-Filled Subarrays',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-zero-filled-subarrays/',
        description: 'Given an integer array nums, return the number of subarrays filled with 0.',
        language: 'python',
        solution: `class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        left = result = 0
        for right in range(len(nums)):
            if nums[right] != 0:
                left = right + 1
            result += right - left + 1 if nums[right] == 0 else 0
        return result`,
      },
      {
        id: 'tp-47',
        title: 'Maximum Sum of Two Non-Overlapping Subarrays',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/',
        description: 'Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.',
        language: 'python',
        solution: `class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        def solve(L: int, M: int) -> int:
            n = len(nums)
            prefix = [0] * (n + 1)
            for i in range(n):
                prefix[i + 1] = prefix[i] + nums[i]
            result = max_L = 0
            for i in range(L + M, n + 1):
                max_L = max(max_L, prefix[i - M] - prefix[i - M - L])
                result = max(result, max_L + prefix[i] - prefix[i - M])
            return result
        return max(solve(firstLen, secondLen), solve(secondLen, firstLen))`,
      },
      {
        id: 'tp-48',
        title: 'Comparing Strings Containing Backspaces',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/backspace-string-compare/',
        description: 'Given two strings s and t that may contain backspace characters #, compare them using two pointers from the end without extra space.',
        language: 'python',
        solution: `class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        i, j = len(s) - 1, len(t) - 1
        skip_s = skip_t = 0
        while i >= 0 or j >= 0:
            while i >= 0:
                if s[i] == '#':
                    skip_s += 1
                    i -= 1
                elif skip_s > 0:
                    skip_s -= 1
                    i -= 1
                else:
                    break
            while j >= 0:
                if t[j] == '#':
                    skip_t += 1
                    j -= 1
                elif skip_t > 0:
                    skip_t -= 1
                    j -= 1
                else:
                    break
            if i >= 0 and j >= 0 and s[i] != t[j]:
                return False
            if (i >= 0) != (j >= 0):
                return False
            i -= 1
            j -= 1
        return True`,
      },
      {
        id: 'tp-49',
        title: 'Largest Merge Of Two Strings',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/largest-merge-of-two-strings/',
        description: 'Given two strings word1 and word2, construct the largest merge by repeatedly choosing the lexicographically larger first character from either string.',
        language: 'python',
        solution: `class Solution:
    def largestMerge(self, word1: str, word2: str) -> str:
        left, right = 0, 0
        result = []
        while left < len(word1) and right < len(word2):
            if word1[left:] >= word2[right:]:
                result.append(word1[left])
                left += 1
            else:
                result.append(word2[right])
                right += 1
        result.append(word1[left:])
        result.append(word2[right:])
        return ''.join(result)`,
      },
      {
        id: 'tp-50',
        title: 'Shortest Distance to a Character',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/shortest-distance-to-a-character/',
        description: 'Given a string s and a character c, return an array of integers representing the shortest distance from each index in s to the character c.',
        language: 'python',
        solution: `class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        n = len(s)
        result = [n] * n
        left = -n
        for i in range(n):
            if s[i] == c:
                left = i
            result[i] = min(result[i], abs(i - left))
        right = 2 * n
        for i in range(n - 1, -1, -1):
            if s[i] == c:
                right = i
            result[i] = min(result[i], abs(i - right))
        return result`,
      },
      {
        id: 'tp-51',
        title: 'Partition Labels',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/partition-labels/',
        description: 'Given a string s, partition it into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.',
        language: 'python',
        solution: `class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last = {c: i for i, c in enumerate(s)}
        left = right = 0
        result = []
        for i, c in enumerate(s):
            right = max(right, last[c])
            if i == right:
                result.append(right - left + 1)
                left = right + 1
        return result`,
      },
      {
        id: 'tp-52',
        title: 'Expressive Words',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/expressive-words/',
        description: 'Given a string s and an array of query words, return the number of words that are stretchy. A word is stretchy if it can be made equal to s by extending groups of letters to have length 3 or more.',
        language: 'python',
        solution: `class Solution:
    def expressiveWords(self, s: str, words: List[str]) -> int:
        def isStretchy(s: str, w: str) -> bool:
            i, j = 0, 0
            while i < len(s) and j < len(w):
                if s[i] != w[j]:
                    return False
                left_s, left_w = i, j
                while i < len(s) and s[i] == s[left_s]:
                    i += 1
                while j < len(w) and w[j] == w[left_w]:
                    j += 1
                cnt_s = i - left_s
                cnt_w = j - left_w
                if cnt_s < cnt_w or (cnt_s < 3 and cnt_s != cnt_w):
                    return False
            return i == len(s) and j == len(w)
        return sum(isStretchy(s, w) for w in words)`,
      },
      {
        id: 'tp-53',
        title: 'Find the Closest Palindrome',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-closest-palindrome/',
        description: 'Given a string n representing an integer, return the closest integer that is a palindrome. If there is a tie, return the smaller one.',
        language: 'python',
        solution: `class Solution:
    def nearestPalindromic(self, n: str) -> str:
        length = len(n)
        candidates = set()
        candidates.add('9' * (length - 1))
        candidates.add('1' + '0' * (length - 1) + '1')
        prefix = int(n[:(length + 1) // 2])
        for diff in [-1, 0, 1]:
            p = str(prefix + diff)
            if length % 2 == 0:
                candidate = p + p[::-1]
            else:
                candidate = p + p[-2::-1]
            candidates.add(candidate)
        candidates.discard(n)
        num = int(n)
        return min(candidates, key=lambda x: (abs(int(x) - num), int(x)))`,
      },
      {
        id: 'tp-54',
        title: 'Missing Ranges',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/missing-ranges/',
        description: 'Given a sorted integer array nums and two integers lower and upper, return the shortest list of ranges that exactly covers all the missing numbers in the range [lower, upper].',
        language: 'python',
        solution: `class Solution:
    def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[List[int]]:
        result = []
        left = lower
        for i in range(len(nums) + 1):
            right = nums[i] if i < len(nums) else upper + 1
            if left < right:
                result.append([left, right - 1])
            left = right + 1
        return result`,
      },
      {
        id: 'tp-55',
        title: 'Count Vowel Substrings of a String',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/count-vowel-substrings-of-a-string/',
        description: 'Given a string word, return the number of vowel substrings in word. A substring is a vowel substring if it only consists of vowels (a, e, i, o, u) and all five vowels appear in it.',
        language: 'python',
        solution: `class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        vowels = set('aeiou')
        result = 0
        n = len(word)
        for i in range(n):
            seen = set()
            for j in range(i, n):
                if word[j] not in vowels:
                    break
                seen.add(word[j])
                if len(seen) == 5:
                    result += 1
        return result`,
      },
      {
        id: 'tp-56',
        title: 'Reverse Only Letters',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/reverse-only-letters/',
        description: 'Given a string s, reverse the string according to the following rules: all characters that are not English letters remain in the same position, and all English letters reverse their positions.',
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
      },
      {
        id: 'tp-57',
        title: 'Array With Elements Not Equal to Average of Neighbors',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/',
        description: 'Given a 0-indexed array nums of distinct integers, rearrange the elements so that no element is equal to the average of its neighbors.',
        language: 'python',
        solution: `class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        nums.sort()
        left, right = 0, len(nums) - 1
        result = []
        while left <= right:
            result.append(nums[left])
            if left != right:
                result.append(nums[right])
            left += 1
            right -= 1
        return result`,
      },
      {
        id: 'tp-58',
        title: 'Sort Array By Parity',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/sort-array-by-parity/',
        description: 'Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers. Return any array that satisfies this condition.',
        language: 'python',
        solution: `class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        left, right = 0, len(nums) - 1
        while left < right:
            while left < right and nums[left] % 2 == 0:
                left += 1
            while left < right and nums[right] % 2 == 1:
                right -= 1
            if left < right:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1
        return nums`,
      },
      {
        id: 'tp-59',
        title: 'Sort Array By Parity II',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/sort-array-by-parity-ii/',
        description: 'Given an array nums of integers where half are odd and half are even, sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.',
        language: 'python',
        solution: `class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        left, right = 0, 1
        n = len(nums)
        while left < n and right < n:
            while left < n and nums[left] % 2 == 0:
                left += 2
            while right < n and nums[right] % 2 == 1:
                right += 2
            if left < n and right < n:
                nums[left], nums[right] = nums[right], nums[left]
                left += 2
                right += 2
        return nums`,
      },
      {
        id: 'tp-60',
        title: 'Flipping an Image',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/flipping-an-image/',
        description: 'Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.',
        language: 'python',
        solution: `class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        for row in image:
            left, right = 0, len(row) - 1
            while left <= right:
                if row[left] == row[right]:
                    row[left] ^= 1
                    row[right] ^= 1
                left += 1
                right -= 1
        return image`,
      },
      {
        id: 'tp-61',
        title: 'Reverse Vowels of a String',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/reverse-vowels-of-a-string/',
        description: 'Given a string s, reverse only all the vowels in the string and return it.',
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
            if left < right:
                s[left], s[right] = s[right], s[left]
                left += 1
                right -= 1
        return ''.join(s)`,
      },
      {
        id: 'tp-62',
        title: 'Three Way Partition',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/sort-colors/',
        description: 'Given an array nums and a value pivot, partition the array into three sections: elements less than pivot, elements equal to pivot, and elements greater than pivot using Dutch National Flag algorithm.',
        language: 'python',
        solution: `class Solution:
    def threeWayPartition(self, nums: List[int], pivot: int) -> List[int]:
        low, mid, high = 0, 0, len(nums) - 1
        while mid <= high:
            if nums[mid] < pivot:
                nums[low], nums[mid] = nums[mid], nums[low]
                low += 1
                mid += 1
            elif nums[mid] == pivot:
                mid += 1
            else:
                nums[mid], nums[high] = nums[high], nums[mid]
                high -= 1
        return nums`,
      },
      {
        id: 'tp-63',
        title: 'Palindrome II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome-iii/',
        description: 'Given a string s and an integer k, return true if s is a k-palindrome. A k-palindrome transforms into a palindrome by removing at most k characters.',
        language: 'python',
        solution: `class Solution:
    def isValidPalindrome(self, s: str, k: int) -> bool:
        n = len(s)
        dp = [[0] * n for _ in range(n)]
        for i in range(n - 2, -1, -1):
            for j in range(i + 1, n):
                if s[i] == s[j]:
                    dp[i][j] = dp[i + 1][j - 1]
                else:
                    dp[i][j] = min(dp[i + 1][j], dp[i][j - 1]) + 1
        return dp[0][n - 1] <= k`,
      },
      {
        id: 'tp-64',
        title: 'Swap Adjacent in LR String',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/swap-adjacent-in-lr-string/',
        description: 'Given two strings start and end of equal length containing L, R, and X, return true if start can be transformed into end by swapping LX to XL or XR to RX any number of times.',
        language: 'python',
        solution: `class Solution:
    def canTransform(self, start: str, end: str) -> bool:
        n = len(start)
        i = j = 0
        while i < n and j < n:
            while i < n and start[i] == 'X':
                i += 1
            while j < n and end[j] == 'X':
                j += 1
            if i == n and j == n:
                return True
            if i == n or j == n:
                return False
            if start[i] != end[j]:
                return False
            if start[i] == 'L' and i < j:
                return False
            if start[i] == 'R' and i > j:
                return False
            i += 1
            j += 1
        return True`,
      },
      {
        id: 'tp-65',
        title: 'Number of Pairs of Interchangeable Rectangles',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/',
        description: 'Given a 2D array rectangles where rectangles[i] = [widthi, heighti], return the number of pairs of interchangeable rectangles. Two rectangles are interchangeable if they have the same width-to-height ratio.',
        language: 'python',
        solution: `class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        from math import gcd
        from collections import defaultdict
        ratio_count = defaultdict(int)
        result = 0
        for w, h in rectangles:
            g = gcd(w, h)
            ratio = (w // g, h // g)
            result += ratio_count[ratio]
            ratio_count[ratio] += 1
        return result`,
      },
      {
        id: 'tp-66',
        title: 'Find K-th Smallest Pair Distance',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/find-k-th-smallest-pair-distance/',
        description: 'Given an integer array nums and integer k, return the kth smallest distance among all pairs nums[i] and nums[j] where i < j.',
        language: 'python',
        solution: `class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        nums.sort()
        def countPairs(mid: int) -> int:
            left = result = 0
            for right in range(len(nums)):
                while nums[right] - nums[left] > mid:
                    left += 1
                result += right - left
            return result
        left, right = 0, nums[-1] - nums[0]
        while left < right:
            mid = (left + right) // 2
            if countPairs(mid) >= k:
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'tp-67',
        title: 'Merge Intervals',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/merge-intervals/',
        description: 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals.',
        language: 'python',
        solution: `class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])
        result = [intervals[0]]
        for start, end in intervals[1:]:
            if start <= result[-1][1]:
                result[-1][1] = max(result[-1][1], end)
            else:
                result.append([start, end])
        return result`,
      },
      {
        id: 'tp-68',
        title: 'Insert Interval',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/insert-interval/',
        description: 'Given an array of non-overlapping intervals sorted by start time and a new interval, insert the new interval and merge if necessary. Return the resulting array of intervals.',
        language: 'python',
        solution: `class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        result = []
        i = 0
        n = len(intervals)
        while i < n and intervals[i][1] < newInterval[0]:
            result.append(intervals[i])
            i += 1
        while i < n and intervals[i][0] <= newInterval[1]:
            newInterval[0] = min(newInterval[0], intervals[i][0])
            newInterval[1] = max(newInterval[1], intervals[i][1])
            i += 1
        result.append(newInterval)
        while i < n:
            result.append(intervals[i])
            i += 1
        return result`,
      },
      {
        id: 'tp-69',
        title: 'Non-overlapping Intervals',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/non-overlapping-intervals/',
        description: 'Given an array of intervals, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.',
        language: 'python',
        solution: `class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[1])
        result = 0
        prev_end = float('-inf')
        for start, end in intervals:
            if start >= prev_end:
                prev_end = end
            else:
                result += 1
        return result`,
      },
      {
        id: 'tp-70',
        title: 'Meeting Rooms II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms-ii/',
        description: 'Given an array of meeting time intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.',
        language: 'python',
        solution: `class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        starts = sorted(i[0] for i in intervals)
        ends = sorted(i[1] for i in intervals)
        left, right = 0, 0
        rooms = result = 0
        while left < len(intervals):
            if starts[left] < ends[right]:
                rooms += 1
                left += 1
            else:
                rooms -= 1
                right += 1
            result = max(result, rooms)
        return result`,
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
        description: 'Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k. Vowel letters in English are a, e, i, o, and u.',
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
        description: 'A bookstore owner has customers[i] customers on the i-th minute. The owner knows a secret technique to keep himself not grumpy for minutes consecutive minutes, but can only use it once. Return the maximum number of customers that can be satisfied throughout the day.',
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
      {
  id: 'sw-15',
  title: 'Find All Anagrams in a String',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
  description: 'Given two strings s and p, return an array of all the start indices of p\'s anagrams in s.',
  language: 'python',
  solution: `class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        from collections import Counter
        need = Counter(p)
        window = Counter(s[:len(p)])
        result = []
        if window == need:
            result.append(0)
        for i in range(len(p), len(s)):
            window[s[i]] += 1
            left_char = s[i - len(p)]
            window[left_char] -= 1
            if window[left_char] == 0:
                del window[left_char]
            if window == need:
                result.append(i - len(p) + 1)
        return result`,
},
{
  id: 'sw-16',
  title: 'Maximum Points You Can Obtain from Cards',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/',
  description: 'There are several cards arranged in a row. In each step you can take one card from the beginning or the end. You want to take exactly k cards. Return the maximum score.',
  language: 'python',
  solution: `class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        n = len(cardPoints)
        window = n - k
        curr = sum(cardPoints[:window])
        min_sum = curr
        for i in range(window, n):
            curr += cardPoints[i] - cardPoints[i - window]
            min_sum = min(min_sum, curr)
        return sum(cardPoints) - min_sum`,
},
{
  id: 'sw-17',
  title: 'Number of Subarrays of Size K and Average >= Threshold',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/',
  description: 'Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average >= threshold.',
  language: 'python',
  solution: `class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        window_sum = sum(arr[:k])
        result = 0
        if window_sum >= k * threshold:
            result += 1
        for i in range(k, len(arr)):
            window_sum += arr[i] - arr[i - k]
            if window_sum >= k * threshold:
                result += 1
        return result`,
},
{
  id: 'sw-18',
  title: 'Longest Continuous Subarray With Absolute Diff <= Limit',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/',
  description: 'Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements is <= limit.',
  language: 'python',
  solution: `class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        from collections import deque
        max_dq, min_dq = deque(), deque()
        left = result = 0
        for right, num in enumerate(nums):
            while max_dq and nums[max_dq[-1]] <= num:
                max_dq.pop()
            while min_dq and nums[min_dq[-1]] >= num:
                min_dq.pop()
            max_dq.append(right)
            min_dq.append(right)
            while nums[max_dq[0]] - nums[min_dq[0]] > limit:
                if max_dq[0] == left: max_dq.popleft()
                if min_dq[0] == left: min_dq.popleft()
                left += 1
            result = max(result, right - left + 1)
        return result`,
},
{
  id: 'sw-19',
  title: 'Diet Plan Performance',
  difficulty: 'Easy',
  leetcodeUrl: 'https://leetcode.com/problems/diet-plan-performance/',
  description: 'Given calories array and integers k, lower, upper, count the number of diet plan performance points based on sliding window sums.',
  language: 'python',
  solution: `class Solution:
    def dietPlanPerformance(self, calories: List[int], k: int, lower: int, upper: int) -> int:
        window_sum = sum(calories[:k])
        result = 0
        def check(s):
            if s < lower: return -1
            if s > upper: return 1
            return 0
        result += check(window_sum)
        for i in range(k, len(calories)):
            window_sum += calories[i] - calories[i - k]
            result += check(window_sum)
        return result`,
},
{
  id: 'sw-20',
  title: 'Frequency of the Most Frequent Element',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/frequency-of-the-most-frequent-element/',
  description: 'Given an integer array nums and an integer k, return the maximum possible frequency of an element after performing at most k increments on the array.',
  language: 'python',
  solution: `class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()
        left = result = 0
        window_sum = 0
        for right in range(len(nums)):
            window_sum += nums[right]
            while nums[right] * (right - left + 1) - window_sum > k:
                window_sum -= nums[left]
                left += 1
            result = max(result, right - left + 1)
        return result`,
},
{
  id: 'sw-21',
  title: 'Max Consecutive Ones III',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/max-consecutive-ones-iii/',
  description: 'Given a binary array nums and an integer k, return the maximum number of consecutive 1s if you can flip at most k 0s.',
  language: 'python',
  solution: `class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = zeros = result = 0
        for right in range(len(nums)):
            if nums[right] == 0:
                zeros += 1
            while zeros > k:
                if nums[left] == 0:
                    zeros -= 1
                left += 1
            result = max(result, right - left + 1)
        return result`,
},
{
  id: 'sw-22',
  title: 'Minimum Operations to Reduce X to Zero',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/',
  description: 'Given an integer array nums and integer x, return the minimum number of operations to reduce x to exactly 0, or -1 if not possible. Each operation removes the leftmost or rightmost element.',
  language: 'python',
  solution: `class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        target = sum(nums) - x
        if target < 0: return -1
        if target == 0: return len(nums)
        left = curr = max_len = 0
        result = -1
        for right in range(len(nums)):
            curr += nums[right]
            while curr > target and left <= right:
                curr -= nums[left]
                left += 1
            if curr == target:
                result = max(result, right - left + 1)
        return len(nums) - result if result != -1 else -1`,
},
{
  id: 'sw-23',
  title: 'K Radius Subarray Averages',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/k-radius-subarray-averages/',
  description: 'Given a 0-indexed array nums and an integer k, build and return an array avgs where avgs[i] is the average of the subarray centered at index i with radius k.',
  language: 'python',
  solution: `class Solution:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        avgs = [-1] * n
        window = 2 * k + 1
        if window > n:
            return avgs
        curr = sum(nums[:window])
        avgs[k] = curr // window
        for i in range(window, n):
            curr += nums[i] - nums[i - window]
            avgs[i - k] = curr // window
        return avgs`,
},
{
  id: 'sw-24',
  title: 'Minimum Number of Flips to Make Binary String Alternating',
  difficulty: 'Medium',
  leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/',
  description: 'Given a binary string s, return the minimum number of character flips to make it alternating, using one cyclic shift and any number of flips.',
  language: 'python',
  solution: `class Solution:
    def minFlips(self, s: str) -> int:
        n = len(s)
        s = s + s
        alt1 = ''.join('01'[i % 2] for i in range(len(s)))
        alt2 = ''.join('10'[i % 2] for i in range(len(s)))
        diff1 = diff2 = 0
        result = float('inf')
        for i in range(len(s)):
            if s[i] != alt1[i]: diff1 += 1
            if s[i] != alt2[i]: diff2 += 1
            if i >= n:
                if s[i - n] != alt1[i - n]: diff1 -= 1
                if s[i - n] != alt2[i - n]: diff2 -= 1
            if i >= n - 1:
                result = min(result, diff1, diff2)
        return result`,
},
{
        id: 'sw-25',
        title: 'Longest Turbulent Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-turbulent-subarray/',
        description: 'Given an integer array arr, return the length of a maximum size turbulent subarray of arr. A subarray is turbulent if the comparison sign flips between each adjacent pair of elements.',
        language: 'python',
        solution: `class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        left = result = 1
        for right in range(1, len(arr)):
            if right == 1:
                if arr[right] != arr[right - 1]:
                    result = 2
                left = right if arr[right] == arr[right - 1] else left
            else:
                if (arr[right] > arr[right-1]) == (arr[right-1] > arr[right-2]):
                    left = right
                elif arr[right] == arr[right - 1]:
                    left = right
                result = max(result, right - left + 1)
        return result`,
      },
      {
        id: 'sw-26',
        title: 'Binary Subarrays With Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/binary-subarrays-with-sum/',
        description: 'Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum equal to goal.',
        language: 'python',
        solution: `class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        def atMost(k: int) -> int:
            if k < 0: return 0
            left = curr = result = 0
            for right in range(len(nums)):
                curr += nums[right]
                while curr > k:
                    curr -= nums[left]
                    left += 1
                result += right - left + 1
            return result
        return atMost(goal) - atMost(goal - 1)`,
      },
      {
        id: 'sw-27',
        title: 'Number of Substrings Containing All Three Characters',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/',
        description: 'Given a string s consisting only of characters a, b and c, return the number of substrings containing at least one occurrence of all these characters.',
        language: 'python',
        solution: `class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        count = {'a': 0, 'b': 0, 'c': 0}
        left = result = 0
        for right in range(len(s)):
            count[s[right]] += 1
            while all(count[c] > 0 for c in 'abc'):
                result += len(s) - right
                count[s[left]] -= 1
                left += 1
        return result`,
      },
      {
        id: 'sw-28',
        title: 'Replace the Substring for Balanced String',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/replace-the-substring-for-balanced-string/',
        description: 'Given a string s of length n containing only Q, W, E, R, find the minimum length of a substring that can be replaced to make each character appear exactly n/4 times.',
        language: 'python',
        solution: `class Solution:
    def balancedString(self, s: str) -> int:
        from collections import Counter
        count = Counter(s)
        n = len(s)
        k = n // 4
        result = n
        left = 0
        for right in range(n):
            count[s[right]] -= 1
            while left <= right and all(count[c] <= k for c in 'QWER'):
                result = min(result, right - left + 1)
                count[s[left]] += 1
                left += 1
        return result`,
      },
      {
        id: 'sw-29',
        title: 'Subarrays with K Different Integers',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/subarrays-with-k-different-integers/',
        description: 'Given an integer array nums and an integer k, return the number of good subarrays of nums. A good array is an array where the number of different integers is exactly k.',
        language: 'python',
        solution: `class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        from collections import defaultdict
        def atMost(k: int) -> int:
            count = defaultdict(int)
            left = result = 0
            for right in range(len(nums)):
                count[nums[right]] += 1
                while len(count) > k:
                    count[nums[left]] -= 1
                    if count[nums[left]] == 0:
                        del count[nums[left]]
                    left += 1
                result += right - left + 1
            return result
        return atMost(k) - atMost(k - 1)`,
      },
      {
        id: 'sw-30',
        title: 'Longest Substring with At Most Two Distinct Characters',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/',
        description: 'Given a string s, return the length of the longest substring that contains at most two distinct characters.',
        language: 'python',
        solution: `class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        left = result = 0
        for right in range(len(s)):
            count[s[right]] += 1
            while len(count) > 2:
                count[s[left]] -= 1
                if count[s[left]] == 0:
                    del count[s[left]]
                left += 1
            result = max(result, right - left + 1)
        return result`,
      },
      {
        id: 'sw-31',
        title: 'Longest Substring with At Most K Distinct Characters',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/',
        description: 'Given a string s and an integer k, return the length of the longest substring that contains at most k distinct characters.',
        language: 'python',
        solution: `class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        left = result = 0
        for right in range(len(s)):
            count[s[right]] += 1
            while len(count) > k:
                count[s[left]] -= 1
                if count[s[left]] == 0:
                    del count[s[left]]
                left += 1
            result = max(result, right - left + 1)
        return result`,
      },
      {
        id: 'sw-32',
        title: 'Maximum Erasure Value',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-erasure-value/',
        description: 'Given an array of positive integers nums, return the maximum sum of a subarray with all unique elements.',
        language: 'python',
        solution: `class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        seen = set()
        left = curr = result = 0
        for right in range(len(nums)):
            while nums[right] in seen:
                seen.remove(nums[left])
                curr -= nums[left]
                left += 1
            seen.add(nums[right])
            curr += nums[right]
            result = max(result, curr)
        return result`,
      },
      {
        id: 'sw-33',
        title: 'Count Subarrays Where Max Element Appears at Least K Times',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/',
        description: 'Given an integer array nums and a positive integer k, return the number of subarrays where the maximum element of nums appears at least k times in that subarray.',
        language: 'python',
        solution: `class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        max_val = max(nums)
        left = freq = result = 0
        for right in range(len(nums)):
            if nums[right] == max_val:
                freq += 1
            while freq >= k:
                result += len(nums) - right
                if nums[left] == max_val:
                    freq -= 1
                left += 1
        return result`,
      },
      {
        id: 'sw-34',
        title: 'Minimum Window Substring II (Minimum Window Containing All Characters)',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/',
        description: 'Given an integer array cards, find the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible, return -1.',
        language: 'python',
        solution: `class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        last_seen = {}
        result = float('inf')
        for i, card in enumerate(cards):
            if card in last_seen:
                result = min(result, i - last_seen[card] + 1)
            last_seen[card] = i
        return result if result != float('inf') else -1`,
      },
      {
        id: 'sw-35',
        title: 'Minimum Difference Between Highest and Lowest of K Scores',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/',
        description: 'Given a 0-indexed integer array nums and an integer k, return the minimum difference between the highest and lowest of any k scores. You must choose exactly k students.',
        language: 'python',
        solution: `class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        nums.sort()
        result = float('inf')
        for i in range(len(nums) - k + 1):
            result = min(result, nums[i + k - 1] - nums[i])
        return result`,
      },
      {
        id: 'sw-36',
        title: 'Maximum Sum of Almost Unique Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/',
        description: 'Given an integer array nums and integers m and k, return the maximum sum of a subarray of length k that contains at least m distinct elements.',
        language: 'python',
        solution: `class Solution:
    def maxSum(self, nums: List[int], m: int, k: int) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        window_sum = 0
        result = 0
        for i in range(len(nums)):
            count[nums[i]] += 1
            window_sum += nums[i]
            if i >= k:
                count[nums[i - k]] -= 1
                if count[nums[i - k]] == 0:
                    del count[nums[i - k]]
                window_sum -= nums[i - k]
            if i >= k - 1 and len(count) >= m:
                result = max(result, window_sum)
        return result`,
      },
      {
        id: 'sw-37',
        title: 'Defuse the Bomb',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/defuse-the-bomb/',
        description: 'Given a circular array code and an integer k, replace every code[i] with the sum of the next k values if k > 0, previous k values if k < 0, or 0 if k == 0.',
        language: 'python',
        solution: `class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        n = len(code)
        result = [0] * n
        if k == 0:
            return result
        code = code + code
        start = 1 if k > 0 else n + k
        window = sum(code[start:start + abs(k)])
        for i in range(n):
            result[i] = window
            window += code[start + abs(k) + i] - code[start + i]
        return result`,
      },
      {
        id: 'sw-38',
        title: 'Maximum Average Subarray II',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-average-subarray-ii/',
        description: 'Given an integer array nums and an integer k, return the maximum possible average value of a subarray with length at least k.',
        language: 'python',
        solution: `class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        def canAchieve(mid: float) -> bool:
            adjusted = [x - mid for x in nums]
            window = sum(adjusted[:k])
            if window >= 0:
                return True
            min_prefix = 0
            prev_sum = 0
            for i in range(k, len(nums)):
                window += adjusted[i]
                prev_sum += adjusted[i - k]
                min_prefix = min(min_prefix, prev_sum)
                if window - min_prefix >= 0:
                    return True
            return False
        lo, hi = min(nums), max(nums)
        while hi - lo > 1e-5:
            mid = (lo + hi) / 2
            if canAchieve(mid):
                lo = mid
            else:
                hi = mid
        return lo`,
      },
      {
        id: 'sw-39',
        title: 'Sliding Subarray Beauty',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/sliding-subarray-beauty/',
        description: 'Given an integer array nums and integers k and x, return an array of the beauty of each subarray of size k, where beauty is the xth smallest negative integer or 0 if none exists.',
        language: 'python',
        solution: `class Solution:
    def getSubarrayBeauty(self, nums: List[int], k: int, x: int) -> List[int]:
        from sortedcontainers import SortedList
        sl = SortedList()
        result = []
        for i in range(len(nums)):
            sl.add(nums[i])
            if i >= k:
                sl.remove(nums[i - k])
            if i >= k - 1:
                val = sl[x - 1]
                result.append(val if val < 0 else 0)
        return result`,
      },
      {
        id: 'sw-40',
        title: 'Number of Subarrays with Bounded Maximum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/',
        description: 'Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the value of the maximum array element is in the range [left, right].',
        language: 'python',
        solution: `class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        def countAtMost(bound: int) -> int:
            result = count = 0
            for num in nums:
                if num <= bound:
                    count += 1
                else:
                    count = 0
                result += count
            return result
        return countAtMost(right) - countAtMost(left - 1)`,
      },
      {
        id: 'sw-41',
        title: 'Longest Nice Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-nice-subarray/',
        description: 'Given an array of positive integers nums, return the length of the longest nice subarray. A subarray is nice if the bitwise AND of every pair of elements is 0.',
        language: 'python',
        solution: `class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        used_bits = 0
        left = result = 0
        for right in range(len(nums)):
            while used_bits & nums[right]:
                used_bits ^= nums[left]
                left += 1
            used_bits |= nums[right]
            result = max(result, right - left + 1)
        return result`,
      },
      {
        id: 'sw-42',
        title: 'Count Subarrays With Fixed Bounds',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/count-subarrays-with-fixed-bounds/',
        description: 'Given an integer array nums and two integers minK and maxK, return the number of fixed-bound subarrays. A fixed-bound subarray has minimum equal to minK and maximum equal to maxK.',
        language: 'python',
        solution: `class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        result = 0
        min_pos = max_pos = bad_pos = -1
        for i, num in enumerate(nums):
            if num < minK or num > maxK:
                bad_pos = i
            if num == minK:
                min_pos = i
            if num == maxK:
                max_pos = i
            result += max(0, min(min_pos, max_pos) - bad_pos)
        return result`,
      },
      {
        id: 'sw-43',
        title: 'Minimum Swaps to Group All 1s Together II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/',
        description: 'Given a circular binary array nums, return the minimum number of swaps required to group all 1s present in the array together at any location.',
        language: 'python',
        solution: `class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        k = sum(nums)
        if k == 0 or k == len(nums):
            return 0
        n = len(nums)
        nums = nums + nums
        window_ones = sum(nums[:k])
        max_ones = window_ones
        for i in range(k, len(nums)):
            window_ones += nums[i] - nums[i - k]
            max_ones = max(max_ones, window_ones)
        return k - max_ones`,
      },
      {
        id: 'sw-44',
        title: 'Take K of Each Character From Left and Right',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/',
        description: 'Given a string s consisting of a, b, c and an integer k, return the minimum number of minutes to take at least k of each character, taking from left or right each minute. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        from collections import Counter
        total = Counter(s)
        if any(total[c] < k for c in 'abc'):
            return -1
        need = {c: total[c] - k for c in 'abc'}
        window = Counter()
        left = max_len = 0
        for right in range(len(s)):
            window[s[right]] += 1
            while window[s[right]] > need[s[right]]:
                window[s[left]] -= 1
                left += 1
            max_len = max(max_len, right - left + 1)
        return len(s) - max_len`,
      },
      {
        id: 'sw-45',
        title: 'Maximum Number of Occurrences of a Substring',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/',
        description: 'Given a string s, return the maximum number of occurrences of any substring under the constraints: substring size is between minSize and maxSize, and substring has at most maxLetters distinct characters.',
        language: 'python',
        solution: `class Solution:
    def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:
        from collections import Counter, defaultdict
        freq = defaultdict(int)
        for i in range(len(s) - minSize + 1):
            sub = s[i:i + minSize]
            if len(set(sub)) <= maxLetters:
                freq[sub] += 1
        return max(freq.values(), default=0)`,
      },
      {
        id: 'sw-46',
        title: 'Maximum Sum of Two Non-Overlapping Subarrays',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/',
        description: 'Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays of lengths firstLen and secondLen.',
        language: 'python',
        solution: `class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        def solve(L: int, M: int) -> int:
            prefix = [0] * (len(nums) + 1)
            for i in range(len(nums)):
                prefix[i + 1] = prefix[i] + nums[i]
            result = max_L = 0
            for i in range(L + M, len(nums) + 1):
                max_L = max(max_L, prefix[i - M] - prefix[i - M - L])
                result = max(result, max_L + prefix[i] - prefix[i - M])
            return result
        return max(solve(firstLen, secondLen), solve(secondLen, firstLen))`,
      },
      {
        id: 'sw-47',
        title: 'Minimum Number of K Consecutive Bit Flips',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/',
        description: 'Given a binary array nums and an integer k, return the minimum number of k-bit flips required to make all bits 1. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def minKBitFlips(self, nums: List[int], k: int) -> int:
        n = len(nums)
        flipped = [0] * n
        flips = result = 0
        for i in range(n):
            if i >= k:
                flips ^= flipped[i - k]
            if nums[i] ^ flips == 0:
                if i + k > n:
                    return -1
                flipped[i] = 1
                flips ^= 1
                result += 1
        return result`,
      },
      {
        id: 'sw-48',
        title: 'Shortest Subarray with Sum at Least K',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/',
        description: 'Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. Return -1 if there is no such subarray.',
        language: 'python',
        solution: `class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        from collections import deque
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]
        result = float('inf')
        dq = deque()
        for i in range(n + 1):
            while dq and prefix[i] - prefix[dq[0]] >= k:
                result = min(result, i - dq.popleft())
            while dq and prefix[i] <= prefix[dq[-1]]:
                dq.pop()
            dq.append(i)
        return result if result != float('inf') else -1`,
      },
      {
        id: 'sw-49',
        title: 'Maximum Width Ramp',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-width-ramp/',
        description: 'Given an integer array nums, return the maximum width of a ramp in nums. A ramp is a pair (i, j) where i < j and nums[i] <= nums[j]. The width is j - i.',
        language: 'python',
        solution: `class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        n = len(nums)
        stack = []
        for i in range(n):
            if not stack or nums[i] < nums[stack[-1]]:
                stack.append(i)
        result = 0
        for j in range(n - 1, -1, -1):
            while stack and nums[j] >= nums[stack[-1]]:
                result = max(result, j - stack.pop())
        return result`,
      },
      {
        id: 'sw-50',
        title: 'Longest Subarray With Maximum Bitwise AND',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/',
        description: 'Given an integer array nums, return the length of the longest subarray with maximum possible bitwise AND value.',
        language: 'python',
        solution: `class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        max_val = max(nums)
        result = curr = 0
        for num in nums:
            if num == max_val:
                curr += 1
                result = max(result, curr)
            else:
                curr = 0
        return result`,
      },
      {
        id: 'sw-51',
        title: 'Number of Subarrays Having Even Product',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-subarrays-with-even-product/',
        description: 'Given an integer array nums, return the number of subarrays that have an even product.',
        language: 'python',
        solution: `class Solution:
    def evenProduct(self, nums: List[int]) -> int:
        result = 0
        last_even = -1
        for i in range(len(nums)):
            if nums[i] % 2 == 0:
                last_even = i
            result += last_even + 1
        return result`,
      },
      {
        id: 'sw-52',
        title: 'Maximize the Confusion of an Exam',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximize-the-confusion-of-an-exam/',
        description: 'Given a string answerKey and an integer k, return the maximum number of consecutive T or F in the answer key after flipping at most k characters.',
        language: 'python',
        solution: `class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        def maxWindow(ch: str) -> int:
            left = count = result = 0
            for right in range(len(answerKey)):
                if answerKey[right] == ch:
                    count += 1
                while count > k:
                    if answerKey[left] == ch:
                        count -= 1
                    left += 1
                result = max(result, right - left + 1)
            return result
        return max(maxWindow('T'), maxWindow('F'))`,
      },
      {
        id: 'sw-53',
        title: 'Minimum Consecutive Cards to Pick Up',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/',
        description: 'Given an integer array cards, find the minimum number of consecutive cards you have to pick up to have a pair of matching cards. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        from collections import defaultdict
        last = defaultdict(lambda: -1)
        result = float('inf')
        for i, card in enumerate(cards):
            if last[card] != -1:
                result = min(result, i - last[card] + 1)
            last[card] = i
        return result if result != float('inf') else -1`,
      },
      {
        id: 'sw-54',
        title: 'Minimum Amount of Time to Collect Garbage',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/',
        description: 'Given a string array garbage and integer array travel, return the minimum total time to collect all garbage. Each truck collects one type: M, P, or G, and must travel sequentially.',
        language: 'python',
        solution: `class Solution:
    def garbageCollection(self, garbage: List[str], travel: List[int]) -> int:
        result = 0
        for g_type in 'MPG':
            last = 0
            for i, g in enumerate(garbage):
                if g_type in g:
                    last = i
            result += sum(len(g) for g in garbage[:last + 1] if g_type in ''.join(garbage))
            result += sum(travel[:last])
        return sum(len(g) for g in garbage) + sum(
            travel[i] for g_type in 'MPG'
            for i in range(len(garbage) - 1)
            if any(g_type in garbage[j] for j in range(i + 1, len(garbage)))
        )`,
      },
      {
        id: 'sw-55',
        title: 'Maximum Product Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/',
        description: 'Given an integer array nums, find a subarray that has the largest product, and return the product.',
        language: 'python',
        solution: `class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        result = max(nums)
        curr_min = curr_max = 1
        for num in nums:
            if num == 0:
                curr_min = curr_max = 1
                continue
            candidates = (num, curr_max * num, curr_min * num)
            curr_max = max(candidates)
            curr_min = min(candidates)
            result = max(result, curr_max)
        return result`,
      },
      {
        id: 'sw-56',
        title: 'Minimum Size Subarray in Infinite Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/',
        description: 'Given an integer array nums and an integer target, return the minimum length subarray of the infinite repetition of nums whose sum equals target. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def minSizeSubarray(self, nums: List[int], target: int) -> int:
        n = len(nums)
        total = sum(nums)
        extra = target % total
        base = (target // total) * n
        if extra == 0:
            return base
        doubled = nums + nums
        left = curr = 0
        result = float('inf')
        for right in range(len(doubled)):
            curr += doubled[right]
            while curr > extra:
                curr -= doubled[left]
                left += 1
            if curr == extra:
                result = min(result, right - left + 1)
        return base + result if result != float('inf') else -1`,
      },
      {
        id: 'sw-57',
        title: 'Count Complete Subarrays in an Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/count-complete-subarrays-in-an-array/',
        description: 'Given an array nums, return the number of complete subarrays. A subarray is complete if the number of distinct elements equals the number of distinct elements in the whole array.',
        language: 'python',
        solution: `class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        from collections import defaultdict
        total = len(set(nums))
        count = defaultdict(int)
        left = result = 0
        for right in range(len(nums)):
            count[nums[right]] += 1
            while len(count) == total:
                result += len(nums) - right
                count[nums[left]] -= 1
                if count[nums[left]] == 0:
                    del count[nums[left]]
                left += 1
        return result`,
      },
      {
        id: 'sw-58',
        title: 'Number of Equal Count Substrings',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-equal-count-substrings/',
        description: 'Given a string s and integer count, return the number of substrings where every character that appears does so exactly count times.',
        language: 'python',
        solution: `class Solution:
    def equalCountSubstrings(self, s: str, count: int) -> int:
        from collections import Counter
        result = 0
        for unique in range(1, 27):
            k = unique * count
            if k > len(s):
                break
            window = Counter(s[:k])
            if len(window) == unique and all(v == count for v in window.values()):
                result += 1
            for i in range(k, len(s)):
                window[s[i]] += 1
                window[s[i - k]] -= 1
                if window[s[i - k]] == 0:
                    del window[s[i - k]]
                if len(window) == unique and all(v == count for v in window.values()):
                    result += 1
        return result`,
      },
      {
        id: 'sw-59',
        title: 'Longest Palindromic Substring (Expand Around Center)',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring/',
        description: 'Given a string s, return the longest palindromic substring in s.',
        language: 'python',
        solution: `class Solution:
    def longestPalindrome(self, s: str) -> str:
        result = ''
        for i in range(len(s)):
            for odd, even in [(i, i), (i, i + 1)]:
                l, r = odd, even
                while l >= 0 and r < len(s) and s[l] == s[r]:
                    if r - l + 1 > len(result):
                        result = s[l:r + 1]
                    l -= 1
                    r += 1
        return result`,
      },
      {
        id: 'sw-60',
        title: 'Get Equal Substrings Within Budget',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/get-equal-substrings-within-budget/',
        description: 'Given two strings s and t of the same length and an integer maxCost, return the maximum length of a substring of s that can be changed to the same substring of t with cost at most maxCost.',
        language: 'python',
        solution: `class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        left = curr_cost = result = 0
        for right in range(len(s)):
            curr_cost += abs(ord(s[right]) - ord(t[right]))
            while curr_cost > maxCost:
                curr_cost -= abs(ord(s[left]) - ord(t[left]))
                left += 1
            result = max(result, right - left + 1)
        return result`,
      },
      {
        id: 'sw-61',
        title: 'Maximum Points You Can Obtain from Cards (Variant)',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-circular-subarray/',
        description: 'Given a circular integer array nums, return the maximum possible sum of a non-empty subarray of nums.',
        language: 'python',
        solution: `class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        total = sum(nums)
        curr_max = curr_min = nums[0]
        max_sum = min_sum = nums[0]
        for num in nums[1:]:
            curr_max = max(num, curr_max + num)
            max_sum = max(max_sum, curr_max)
            curr_min = min(num, curr_min + num)
            min_sum = min(min_sum, curr_min)
        return max_sum if max_sum < 0 else max(max_sum, total - min_sum)`,
      },
      {
        id: 'sw-62',
        title: 'Constrained Subsequence Sum',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/constrained-subsequence-sum/',
        description: 'Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence such that for every two consecutive integers, their indices differ by at most k.',
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
        return max(dp)`,
      },
      {
        id: 'sw-63',
        title: 'Minimum Swaps to Make Strings Equal',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/',
        description: 'Given two strings s1 and s2 of equal length consisting of x and y only, return the minimum number of swaps to make them equal. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def minimumSwap(self, s1: str, s2: str) -> int:
        xy = yx = 0
        for a, b in zip(s1, s2):
            if a != b:
                if a == 'x':
                    xy += 1
                else:
                    yx += 1
        if (xy + yx) % 2 != 0:
            return -1
        return xy // 2 + yx // 2 + (2 if xy % 2 else 0)`,
      },
      {
        id: 'sw-64',
        title: 'Minimum Number of Operations to Make Array Continuous',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/',
        description: 'Given an integer array nums, return the minimum number of operations to make nums continuous. An array is continuous if all elements are distinct and max - min == n - 1.',
        language: 'python',
        solution: `class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        nums = sorted(set(nums))
        result = 0
        right = 0
        for left in range(len(nums)):
            while right < len(nums) and nums[right] < nums[left] + n:
                right += 1
            result = max(result, right - left)
        return n - result`,
      },
      {
        id: 'sw-65',
        title: 'Maximum Sum of Distinct Subarrays With Length K',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/',
        description: 'Given an integer array nums and an integer k, return the maximum subarray sum of all subarrays of length k that contain only distinct elements. Return 0 if no such subarray exists.',
        language: 'python',
        solution: `class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        window_sum = 0
        result = 0
        for i in range(len(nums)):
            count[nums[i]] += 1
            window_sum += nums[i]
            if i >= k:
                count[nums[i - k]] -= 1
                if count[nums[i - k]] == 0:
                    del count[nums[i - k]]
                window_sum -= nums[i - k]
            if i >= k - 1 and len(count) == k:
                result = max(result, window_sum)
        return result`,
      },
      {
        id: 'sw-66',
        title: 'Minimum Recolors to Get K Consecutive Black Blocks',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/',
        description: 'Given a string blocks of W and B characters and an integer k, return the minimum number of recolor operations to get k consecutive B blocks.',
        language: 'python',
        solution: `class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        white = blocks[:k].count('W')
        result = white
        for i in range(k, len(blocks)):
            white += (blocks[i] == 'W') - (blocks[i - k] == 'W')
            result = min(result, white)
        return result`,
      },
      {
        id: 'sw-67',
        title: 'Longest Substring Of All Vowels in Order',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/',
        description: 'Given a string word, return the length of the longest beautiful substring. A beautiful substring contains all 5 vowels in alphabetical order with each vowel appearing at least once.',
        language: 'python',
        solution: `class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        result = length = unique = 1
        for i in range(1, len(word)):
            if word[i] >= word[i - 1]:
                length += 1
                if word[i] != word[i - 1]:
                    unique += 1
            else:
                length = unique = 1
            if unique == 5:
                result = max(result, length)
        return result`,
      },
      {
        id: 'sw-68',
        title: 'Max Consecutive Ones',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/max-consecutive-ones/',
        description: 'Given a binary array nums, return the maximum number of consecutive 1s in the array.',
        language: 'python',
        solution: `class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        result = curr = 0
        for num in nums:
            if num == 1:
                curr += 1
                result = max(result, curr)
            else:
                curr = 0
        return result`,
      },
      {
        id: 'sw-69',
        title: 'Number of Substrings with Only 1s',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-substrings-with-only-1s/',
        description: 'Given a binary string s, return the number of substrings with all characters 1s. Since the answer may be too large, return it modulo 10^9 + 7.',
        language: 'python',
        solution: `class Solution:
    def numSub(self, s: str) -> int:
        MOD = 10**9 + 7
        result = curr = 0
        for c in s:
            if c == '1':
                curr += 1
            else:
                curr = 0
            result = (result + curr) % MOD
        return result`,
      },
      {
        id: 'sw-70',
        title: 'Sum of Beauty of All Substrings',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/sum-of-beauty-of-all-substrings/',
        description: 'Given a string s, return the sum of beauty of all its substrings. The beauty of a string is the difference between the frequency of the most and least frequent character.',
        language: 'python',
        solution: `class Solution:
    def beautySum(self, s: str) -> int:
        from collections import defaultdict
        result = 0
        for i in range(len(s)):
            count = defaultdict(int)
            for j in range(i, len(s)):
                count[s[j]] += 1
                result += max(count.values()) - min(count.values())
        return result`,
      },
      {
        id: 'sw-71',
        title: 'Find the K-Beauty of a Number',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-k-beauty-of-a-number/',
        description: 'Given integers num and k, return the number of k-beauty substrings of num. A k-beauty substring is a substring of length k that divides num and is not 0.',
        language: 'python',
        solution: `class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        s = str(num)
        result = 0
        for i in range(len(s) - k + 1):
            sub = int(s[i:i + k])
            if sub != 0 and num % sub == 0:
                result += 1
        return result`,
      },
      {
        id: 'sw-72',
        title: 'Minimum Number of Flips to Make Binary Grid Palindrome',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindrome/',
        description: 'Given an m x n binary grid, return the minimum number of flips to make every row and column a palindrome, and the total number of 1s divisible by 4.',
        language: 'python',
        solution: `class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        result = 0
        for i in range(m):
            for j in range(n // 2):
                if grid[i][j] != grid[i][n - j - 1]:
                    result += 1
        for j in range(n):
            for i in range(m // 2):
                if grid[i][j] != grid[m - i - 1][j]:
                    result += 1
        if m % 2 == 1 and n % 2 == 1:
            result += grid[m // 2][n // 2] % 2
        return result`,
      },
      {
        id: 'sw-73',
        title: 'Maximum Number of Vowels in a Substring',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/',
        description: 'Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.',
        language: 'python',
        solution: `class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set('aeiou')
        count = sum(1 for c in s[:k] if c in vowels)
        result = count
        for i in range(k, len(s)):
            count += (s[i] in vowels) - (s[i - k] in vowels)
            result = max(result, count)
        return result`,
      },
      {
        id: 'sw-74',
        title: 'Subarray Sums Divisible by K',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/subarray-sums-divisible-by-k/',
        description: 'Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.',
        language: 'python',
        solution: `class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        count[0] = 1
        prefix = result = 0
        for num in nums:
            prefix = (prefix + num) % k
            result += count[prefix]
            count[prefix] += 1
        return result`,
      },
      {
        id: 'sw-75',
        title: 'Maximum Length of Repeated Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-length-of-repeated-subarray/',
        description: 'Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.',
        language: 'python',
        solution: `class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        m, n = len(nums1), len(nums2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        result = 0
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if nums1[i - 1] == nums2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                    result = max(result, dp[i][j])
        return result`,
      },
      {
        id: 'sw-76',
        title: 'Longest Continuous Increasing Subsequence',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/longest-continuous-increasing-subsequence/',
        description: 'Given an unsorted array of integers nums, return the length of the longest continuous strictly increasing subsequence.',
        language: 'python',
        solution: `class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        result = curr = 1
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                curr += 1
                result = max(result, curr)
            else:
                curr = 1
        return result`,
      },
      {
        id: 'sw-77',
        title: 'Number of Zero-Filled Subarrays',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-zero-filled-subarrays/',
        description: 'Given an integer array nums, return the number of subarrays filled with 0.',
        language: 'python',
        solution: `class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        result = curr = 0
        for num in nums:
            if num == 0:
                curr += 1
            else:
                curr = 0
            result += curr
        return result`,
      },
      {
        id: 'sw-78',
        title: 'Minimum Operations to Reduce to Zero (Sliding Window)',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/',
        description: 'Given integer array nums and integer x, return the minimum number of operations to reduce x to 0, where each operation removes leftmost or rightmost element.',
        language: 'python',
        solution: `class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        target = sum(nums) - x
        if target == 0:
            return len(nums)
        left = curr = 0
        result = -1
        for right in range(len(nums)):
            curr += nums[right]
            while curr > target and left <= right:
                curr -= nums[left]
                left += 1
            if curr == target:
                result = max(result, right - left + 1)
        return len(nums) - result if result != -1 else -1`,
      },
      {
        id: 'sw-79',
        title: 'Maximum Score of a Good Subarray',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-score-of-a-good-subarray/',
        description: 'Given an array nums and an integer k, return the maximum score of a good subarray. A good subarray is one where i <= k <= j. The score is min(nums[i..j]) * (j - i + 1).',
        language: 'python',
        solution: `class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        n = len(nums)
        left = right = k
        min_val = nums[k]
        result = min_val
        while left > 0 or right < n - 1:
            if left == 0:
                right += 1
            elif right == n - 1:
                left -= 1
            elif nums[left - 1] >= nums[right + 1]:
                left -= 1
            else:
                right += 1
            min_val = min(min_val, nums[left], nums[right])
            result = max(result, min_val * (right - left + 1))
        return result`,
      },
      {
        id: 'sw-80',
        title: 'Minimum Length of String After Deleting Similar Ends',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/',
        description: 'Given a string s, repeatedly delete the longest prefix and suffix that share the same character. Return the minimum length of the remaining string.',
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
        return right - left + 1`,
      },
      {
        id: 'sw-81',
        title: 'Maximum Absolute Sum of Any Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/',
        description: 'Given an integer array nums, return the maximum absolute sum of any subarray of nums.',
        language: 'python',
        solution: `class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        max_sum = min_sum = 0
        curr_max = curr_min = 0
        for num in nums:
            curr_max = max(num, curr_max + num)
            curr_min = min(num, curr_min + num)
            max_sum = max(max_sum, curr_max)
            min_sum = min(min_sum, curr_min)
        return max(max_sum, abs(min_sum))`,
      },
      {
        id: 'sw-82',
        title: 'Minimum Difference Between Largest and Smallest Value in Three Moves',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/',
        description: 'Given an integer array nums, return the minimum difference between the largest and smallest value of nums after performing at most 3 moves.',
        language: 'python',
        solution: `class Solution:
    def minDifference(self, nums: List[int]) -> int:
        if len(nums) <= 4:
            return 0
        nums.sort()
        return min(
            nums[-1] - nums[3],
            nums[-2] - nums[2],
            nums[-3] - nums[1],
            nums[-4] - nums[0]
        )`,
      },
      {
        id: 'sw-83',
        title: 'Number of Arithmetic Triplets',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-arithmetic-triplets/',
        description: 'Given a strictly increasing integer array nums and a positive integer diff, return the number of unique arithmetic triplets where nums[j] - nums[i] == diff and nums[k] - nums[j] == diff.',
        language: 'python',
        solution: `class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        seen = set(nums)
        result = 0
        for num in nums:
            if num + diff in seen and num + 2 * diff in seen:
                result += 1
        return result`,
      },
      {
        id: 'sw-84',
        title: 'Continuous Subarray Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/continuous-subarray-sum/',
        description: 'Given an integer array nums and an integer k, return true if nums has a good subarray — a subarray of length at least 2 whose sum is a multiple of k.',
        language: 'python',
        solution: `class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        remainder_map = {0: -1}
        prefix = 0
        for i, num in enumerate(nums):
            prefix = (prefix + num) % k
            if prefix in remainder_map:
                if i - remainder_map[prefix] >= 2:
                    return True
            else:
                remainder_map[prefix] = i
        return False`,
      },
      {
        id: 'sw-85',
        title: 'Subarray Sum Equals K',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/subarray-sum-equals-k/',
        description: 'Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.',
        language: 'python',
        solution: `class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        count[0] = 1
        prefix = result = 0
        for num in nums:
            prefix += num
            result += count[prefix - k]
            count[prefix] += 1
        return result`,
      },
      {
        id: 'sw-86',
        title: 'Longest Subarray of 1s After Deleting One Element',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/',
        description: 'Given a binary array nums, delete one element and return the size of the longest non-empty subarray containing only 1s.',
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
        id: 'sw-87',
        title: 'Maximum Number of Non-Overlapping Subarrays With Sum Equals Target',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/',
        description: 'Given an array nums and an integer target, return the maximum number of non-empty non-overlapping subarrays such that the sum of values equals target.',
        language: 'python',
        solution: `class Solution:
    def maxNonOverlapping(self, nums: List[int], target: int) -> int:
        seen = {0}
        prefix = result = 0
        last_end = -1
        prefix_map = {0: -1}
        for i, num in enumerate(nums):
            prefix += num
            if prefix - target in prefix_map and prefix_map[prefix - target] >= last_end:
                result += 1
                last_end = i
                prefix_map = {prefix: i}
            else:
                prefix_map[prefix] = i
        return result`,
      },
      {
        id: 'sw-88',
        title: 'Count Subarrays with Score Less Than K',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/count-subarrays-with-score-less-than-k/',
        description: 'Given an integer array nums and a long integer k, return the number of non-empty subarrays whose score is strictly less than k. Score is defined as sum * length.',
        language: 'python',
        solution: `class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        left = curr_sum = result = 0
        for right in range(len(nums)):
            curr_sum += nums[right]
            while curr_sum * (right - left + 1) >= k:
                curr_sum -= nums[left]
                left += 1
            result += right - left + 1
        return result`,
      },
      {
        id: 'sw-89',
        title: 'Maximum Strength of a Group',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-strength-of-a-group/',
        description: 'Given an integer array nums, return the maximum strength of a non-empty group of students. Strength is the product of all elements in the selected subsequence.',
        language: 'python',
        solution: `class Solution:
    def maxStrength(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        nums.sort()
        result = 1
        i = 0
        while i < len(nums) - 1:
            if nums[i] < 0 and nums[i + 1] < 0:
                result *= nums[i] * nums[i + 1]
                i += 2
            else:
                i += 1
        for num in nums:
            if num > 1:
                result *= num
        return result if result != 1 else max(nums)`,
      },
      {
        id: 'sw-90',
        title: 'Maximum Tastiness of Candy Basket',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-tastiness-of-candy-basket/',
        description: 'Given an array price and integer k, return the maximum tastiness of a candy basket. Tastiness is the minimum absolute difference between prices of any two candies in the basket.',
        language: 'python',
        solution: `class Solution:
    def maximumTastiness(self, price: List[int], k: int) -> int:
        price.sort()
        def canAchieve(mid: int) -> bool:
            count = 1
            last = price[0]
            for i in range(1, len(price)):
                if price[i] - last >= mid:
                    count += 1
                    last = price[i]
                    if count >= k:
                        return True
            return False
        lo, hi = 0, price[-1] - price[0]
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if canAchieve(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo`,
      },
      {
        id: 'sw-91',
        title: 'Longest Even Odd Subarray With Threshold',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/',
        description: 'Given an integer array nums and integer threshold, return the length of the longest subarray that satisfies: starts with even number, alternates even/odd, all elements <= threshold.',
        language: 'python',
        solution: `class Solution:
    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:
        result = 0
        i = 0
        while i < len(nums):
            if nums[i] % 2 == 0 and nums[i] <= threshold:
                j = i + 1
                while j < len(nums) and nums[j] <= threshold and nums[j] % 2 != nums[j-1] % 2:
                    j += 1
                result = max(result, j - i)
                i = j
            else:
                i += 1
        return result`,
      },
      {
        id: 'sw-92',
        title: 'Maximum Sum of Subarray Less Than or Equal to K',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/',
        description: 'Given an m x n matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.',
        language: 'python',
        solution: `class Solution:
    def maxSumSubmatrix(self, matrix: List[List[int]], k: int) -> int:
        from sortedcontainers import SortedList
        m, n = len(matrix), len(matrix[0])
        result = float('-inf')
        for left in range(n):
            row_sum = [0] * m
            for right in range(left, n):
                for i in range(m):
                    row_sum[i] += matrix[i][right]
                sl = SortedList([0])
                prefix = 0
                for s in row_sum:
                    prefix += s
                    idx = sl.bisect_left(prefix - k)
                    if idx < len(sl):
                        result = max(result, prefix - sl[idx])
                    sl.add(prefix)
        return result`,
      },
      {
        id: 'sw-93',
        title: 'Find the Longest Semi-Repetitive Substring',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/',
        description: 'Given a digit string s, return the length of the longest semi-repetitive substring. A semi-repetitive substring has at most one consecutive pair of equal digits.',
        language: 'python',
        solution: `class Solution:
    def longestSemiRepetitiveSubstring(self, s: str) -> int:
        left = result = 1
        pairs = 0
        for right in range(1, len(s)):
            if s[right] == s[right - 1]:
                pairs += 1
            while pairs > 1:
                if s[left] == s[left + 1]:
                    pairs -= 1
                left += 1
            result = max(result, right - left + 1)
        return result`,
      },
      {
        id: 'sw-94',
        title: 'Minimum Window Subsequence',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-window-subsequence/',
        description: 'Given strings s1 and s2, return the minimum contiguous substring of s1 that contains s2 as a subsequence. If no such window exists, return empty string.',
        language: 'python',
        solution: `class Solution:
    def minWindow(self, s1: str, s2: str) -> str:
        result = ''
        i = 0
        while i < len(s1):
            j = 0
            while i < len(s1) and j < len(s2):
                if s1[i] == s2[j]:
                    j += 1
                i += 1
            if j == len(s2):
                end = i
                i -= 1
                j -= 1
                while j >= 0:
                    if s1[i] == s2[j]:
                        j -= 1
                    i -= 1
                i += 1
                if not result or end - i < len(result):
                    result = s1[i:end]
                i += 1
        return result`,
      },
      {
        id: 'sw-95',
        title: 'Longest Subarray with Sum Divisible by K',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-subarray-with-sum-divisible-by-k/',
        description: 'Given an integer array nums and integer k, return the length of the longest subarray with sum divisible by k.',
        language: 'python',
        solution: `class Solution:
    def longestSubarray(self, nums: List[int], k: int) -> int:
        remainder_map = {0: -1}
        prefix = result = 0
        for i, num in enumerate(nums):
            prefix = (prefix + num) % k
            if prefix in remainder_map:
                result = max(result, i - remainder_map[prefix])
            else:
                remainder_map[prefix] = i
        return result`,
      },
      {
        id: 'sw-96',
        title: 'Maximum Difference Between Increasing Elements',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-difference-between-increasing-elements/',
        description: 'Given an integer array nums, return the maximum difference nums[j] - nums[i] such that 0 <= i < j <= n-1 and nums[i] < nums[j]. Return -1 if no such pair exists.',
        language: 'python',
        solution: `class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        min_val = nums[0]
        result = -1
        for i in range(1, len(nums)):
            if nums[i] > min_val:
                result = max(result, nums[i] - min_val)
            else:
                min_val = nums[i]
        return result`,
      },
      {
        id: 'sw-97',
        title: 'Count Number of Texts',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/count-number-of-texts/',
        description: 'Given a string pressedKeys of digits, return the number of possible text messages Alice could have sent. Keys 2-6 and 8 map to 3 letters, keys 7 and 9 map to 4 letters.',
        language: 'python',
        solution: `class Solution:
    def countTexts(self, pressedKeys: str) -> int:
        MOD = 10**9 + 7
        n = len(pressedKeys)
        dp = [0] * (n + 1)
        dp[0] = 1
        for i in range(1, n + 1):
            dp[i] = dp[i - 1]
            if i >= 2 and pressedKeys[i-1] == pressedKeys[i-2]:
                dp[i] = (dp[i] + dp[i-2]) % MOD
            if i >= 3 and pressedKeys[i-1] == pressedKeys[i-2] == pressedKeys[i-3]:
                dp[i] = (dp[i] + dp[i-3]) % MOD
            if i >= 4 and pressedKeys[i-1] in '79' and pressedKeys[i-1] == pressedKeys[i-2] == pressedKeys[i-3] == pressedKeys[i-4]:
                dp[i] = (dp[i] + dp[i-4]) % MOD
        return dp[n]`,
      },
      {
        id: 'sw-98',
        title: 'Maximum Profit in Job Scheduling',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/',
        description: 'Given start, end, and profit arrays for n jobs, return the maximum profit you can take such that there are no two jobs with overlapping time ranges.',
        language: 'python',
        solution: `class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        from bisect import bisect_left
        jobs = sorted(zip(endTime, startTime, profit))
        dp = [[0, 0]]
        for end, start, pro in jobs:
            idx = bisect_left(dp, [start + 1]) - 1
            if dp[idx][1] + pro > dp[-1][1]:
                dp.append([end, dp[idx][1] + pro])
        return dp[-1][1]`,
      },
      {
        id: 'sw-99',
        title: 'Maximum Beats Per Minute Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-of-subarray-less-than-or-equal-to-k/',
        description: 'Given an integer array nums and integer k, return the maximum sum of a contiguous subarray whose sum is less than or equal to k.',
        language: 'python',
        solution: `class Solution:
    def maxSumSubarray(self, nums: List[int], k: int) -> int:
        from sortedcontainers import SortedList
        sl = SortedList([0])
        prefix = result = 0
        for num in nums:
            prefix += num
            idx = sl.bisect_left(prefix - k)
            if idx < len(sl):
                result = max(result, prefix - sl[idx])
            sl.add(prefix)
        return result`,
      },
      {
        id: 'sw-100',
        title: 'Maximum Number of Balls in a Box',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-balls-in-a-box/',
        description: 'Given lowLimit and highLimit, return the maximum number of balls in a box. Ball i goes into box with number equal to sum of digits of i.',
        language: 'python',
        solution: `class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        from collections import defaultdict
        boxes = defaultdict(int)
        for i in range(lowLimit, highLimit + 1):
            boxes[sum(int(d) for d in str(i))] += 1
        return max(boxes.values())`,
      },
      {
        id: 'sw-101',
        title: 'Minimum Adjacent Swaps for K Consecutive Ones',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/',
        description: 'Given a binary array nums and integer k, return the minimum number of adjacent swaps to make k consecutive 1s in the array.',
        language: 'python',
        solution: `class Solution:
    def minMoves(self, nums: List[int], k: int) -> int:
        ones = [i for i, x in enumerate(nums) if x == 1]
        n = len(ones)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + ones[i]
        result = float('inf')
        for i in range(n - k + 1):
            mid = i + k // 2
            median = ones[mid]
            left_sum = median * (mid - i) - (prefix[mid] - prefix[i])
            right_sum = (prefix[i + k] - prefix[mid + 1]) - median * (i + k - mid - 1)
            result = min(result, left_sum + right_sum)
        return result`,
      },
      {
        id: 'sw-102',
        title: 'Maximum White Tiles Covered by a Carpet',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/',
        description: 'Given a 2D array tiles of white tile ranges and integer carpetLen, return the maximum number of white tiles covered by placing one carpet of length carpetLen.',
        language: 'python',
        solution: `class Solution:
    def maximumWhiteTiles(self, tiles: List[List[int]], carpetLen: int) -> int:
        from bisect import bisect_right
        tiles.sort()
        n = len(tiles)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + tiles[i][1] - tiles[i][0] + 1
        result = 0
        for i in range(n):
            end = tiles[i][0] + carpetLen - 1
            j = bisect_right(tiles, [end, float('inf')]) - 1
            covered = prefix[j + 1] - prefix[i]
            if tiles[j][1] > end:
                covered -= tiles[j][1] - end
            result = max(result, covered)
        return result`,
      },
      {
        id: 'sw-103',
        title: 'Number of Subarrays with GCD Equal to K',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/',
        description: 'Given an integer array nums and integer k, return the number of subarrays whose GCD equals k.',
        language: 'python',
        solution: `class Solution:
    def subarrayGCD(self, nums: List[int], k: int) -> int:
        from math import gcd
        result = 0
        for i in range(len(nums)):
            curr_gcd = 0
            for j in range(i, len(nums)):
                curr_gcd = gcd(curr_gcd, nums[j])
                if curr_gcd == k:
                    result += 1
                elif curr_gcd < k:
                    break
        return result`,
      },
      {
        id: 'sw-104',
        title: 'Minimum Operations to Make All Array Elements Equal',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/',
        description: 'Given an integer array nums and queries array, for each query find the minimum operations to make all elements equal to query value, where one operation increments or decrements an element by 1.',
        language: 'python',
        solution: `class Solution:
    def minOperations(self, nums: List[int], queries: List[int]) -> List[int]:
        from bisect import bisect_left
        nums.sort()
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]
        result = []
        for q in queries:
            idx = bisect_left(nums, q)
            left_cost = q * idx - prefix[idx]
            right_cost = (prefix[n] - prefix[idx]) - q * (n - idx)
            result.append(left_cost + right_cost)
        return result`,
      },
      {
        id: 'sw-105',
        title: 'Longest Subarray with Absolute Difference At Most Limit',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/',
        description: 'Given an integer array nums and an integer limit, return the size of the longest subarray such that the absolute difference between any two elements is less than or equal to limit.',
        language: 'python',
        solution: `class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        from collections import deque
        max_dq, min_dq = deque(), deque()
        left = result = 0
        for right in range(len(nums)):
            while max_dq and nums[max_dq[-1]] <= nums[right]:
                max_dq.pop()
            while min_dq and nums[min_dq[-1]] >= nums[right]:
                min_dq.pop()
            max_dq.append(right)
            min_dq.append(right)
            while nums[max_dq[0]] - nums[min_dq[0]] > limit:
                if max_dq[0] == left: max_dq.popleft()
                if min_dq[0] == left: min_dq.popleft()
                left += 1
            result = max(result, right - left + 1)
        return result`,
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
      {
        id: 'bs-20',
        title: 'Minimum Number of Days to Make m Bouquets',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/',
        description: 'Given an integer array bloomDay, integers m and k, return the minimum number of days to make m bouquets. Each bouquet requires k adjacent bloomed flowers. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        if m * k > len(bloomDay):
            return -1
        def canMake(day: int) -> bool:
            bouquets = flowers = 0
            for b in bloomDay:
                if b <= day:
                    flowers += 1
                    if flowers == k:
                        bouquets += 1
                        flowers = 0
                else:
                    flowers = 0
            return bouquets >= m
        left, right = min(bloomDay), max(bloomDay)
        while left < right:
            mid = (left + right) // 2
            if canMake(mid):
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-21',
        title: 'Nth Root of a Number',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/nth-root-of-a-number/',
        description: 'Given two integers n and m, find the nth root of m. If the nth root is not an integer, return -1.',
        language: 'python',
        solution: `class Solution:
    def NthRoot(self, n: int, m: int) -> int:
        left, right = 1, m
        while left <= right:
            mid = (left + right) // 2
            val = mid ** n
            if val == m:
                return mid
            elif val < m:
                left = mid + 1
            else:
                right = mid - 1
        return -1`,
      },
      {
        id: 'bs-22',
        title: 'Find the Duplicate Number',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-duplicate-number/',
        description: 'Given an array of integers nums containing n+1 integers where each integer is in the range [1, n], return the one repeated number. You must solve it without modifying the array and using only constant extra space.',
        language: 'python',
        solution: `class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        left, right = 1, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            count = sum(1 for n in nums if n <= mid)
            if count > mid:
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-23',
        title: 'Count Negative Numbers in a Sorted Matrix',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/',
        description: 'Given an m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.',
        language: 'python',
        solution: `class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        from bisect import bisect_left
        result = 0
        for row in grid:
            neg_start = bisect_left([-x for x in row], 1)
            result += len(row) - neg_start
        return result`,
      },
      {
        id: 'bs-24',
        title: 'Successful Pairs of Spells and Potions',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/successful-pairs-of-spells-and-potions/',
        description: 'Given two arrays spells and potions and a long integer success, return an array where each element is the number of potions that will form a successful pair with the corresponding spell. A pair is successful if spell * potion >= success.',
        language: 'python',
        solution: `class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        from bisect import bisect_left
        import math
        potions.sort()
        result = []
        n = len(potions)
        for spell in spells:
            min_potion = math.ceil(success / spell)
            idx = bisect_left(potions, min_potion)
            result.append(n - idx)
        return result`,
      },
      {
        id: 'bs-25',
        title: 'Random Pick with Weight',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/random-pick-with-weight/',
        description: 'Given an array w of positive integers where w[i] describes the weight of index i, implement pickIndex() which randomly picks an index in proportion to its weight.',
        language: 'python',
        solution: `class Solution:
    def __init__(self, w: List[int]):
        from itertools import accumulate
        self.prefix = list(accumulate(w))
        self.total = self.prefix[-1]

    def pickIndex(self) -> int:
        import random
        from bisect import bisect_left
        target = random.randint(1, self.total)
        return bisect_left(self.prefix, target)`,
      },
      {
        id: 'bs-26',
        title: 'Magnetic Force Between Two Balls',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/magnetic-force-between-two-balls/',
        description: 'Given an array position of n baskets and integer m balls, return the maximum minimum magnetic force between any two balls placed in the baskets.',
        language: 'python',
        solution: `class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        position.sort()
        def canPlace(force: int) -> bool:
            count = 1
            last = position[0]
            for i in range(1, len(position)):
                if position[i] - last >= force:
                    count += 1
                    last = position[i]
                    if count == m:
                        return True
            return False
        left, right = 1, position[-1] - position[0]
        while left < right:
            mid = (left + right + 1) // 2
            if canPlace(mid):
                left = mid
            else:
                right = mid - 1
        return left`,
      },
      {
        id: 'bs-27',
        title: 'Minimum Limit of Balls in a Bag',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/',
        description: 'Given an integer array nums and integer maxOperations, split any bag of balls into two bags using at most maxOperations operations. Return the minimum possible penalty (maximum balls in a bag).',
        language: 'python',
        solution: `class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        import math
        left, right = 1, max(nums)
        while left < right:
            mid = (left + right) // 2
            ops = sum(math.ceil(n / mid) - 1 for n in nums)
            if ops <= maxOperations:
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-28',
        title: 'Kth Smallest Element in a Sorted Matrix',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/',
        description: 'Given an n x n matrix where each row and column is sorted in ascending order, return the kth smallest element in the matrix.',
        language: 'python',
        solution: `class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        n = len(matrix)
        def countLessEqual(mid: int) -> int:
            count = 0
            row, col = n - 1, 0
            while row >= 0 and col < n:
                if matrix[row][col] <= mid:
                    count += row + 1
                    col += 1
                else:
                    row -= 1
            return count
        left, right = matrix[0][0], matrix[n-1][n-1]
        while left < right:
            mid = (left + right) // 2
            if countLessEqual(mid) >= k:
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-29',
        title: 'Maximum Running Time of N Computers',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-running-time-of-n-computers/',
        description: 'Given an integer n and a battery array, return the maximum number of minutes you can run n computers simultaneously using the batteries.',
        language: 'python',
        solution: `class Solution:
    def maxRunTime(self, n: int, batteries: List[int]) -> int:
        def canRun(minutes: int) -> bool:
            total = sum(min(b, minutes) for b in batteries)
            return total >= n * minutes
        left, right = 1, sum(batteries) // n
        while left < right:
            mid = (left + right + 1) // 2
            if canRun(mid):
                left = mid
            else:
                right = mid - 1
        return left`,
      },
      {
        id: 'bs-30',
        title: 'Find K Closest Elements',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-k-closest-elements/',
        description: 'Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.',
        language: 'python',
        solution: `class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        left, right = 0, len(arr) - k
        while left < right:
            mid = (left + right) // 2
            if x - arr[mid] > arr[mid + k] - x:
                left = mid + 1
            else:
                right = mid
        return arr[left:left + k]`,
      },
      {
        id: 'bs-31',
        title: 'Single Element in a Sorted Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/single-element-in-a-sorted-array/',
        description: 'Given a sorted array where every element appears exactly twice except one element which appears once, find and return the single element. Your solution must run in O(log n) time.',
        language: 'python',
        solution: `class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if mid % 2 == 1:
                mid -= 1
            if nums[mid] == nums[mid + 1]:
                left = mid + 2
            else:
                right = mid
        return nums[left]`,
      },
      {
        id: 'bs-32',
        title: 'Minimum Time to Complete Trips',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-time-to-complete-trips/',
        description: 'Given an array time where time[i] is the time taken by the ith bus to complete one trip, and integer totalTrips, return the minimum time required to complete at least totalTrips trips.',
        language: 'python',
        solution: `class Solution:
    def minimumTime(self, time: List[int], totalTrips: int) -> int:
        left, right = 1, min(time) * totalTrips
        while left < right:
            mid = (left + right) // 2
            trips = sum(mid // t for t in time)
            if trips >= totalTrips:
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-33',
        title: 'Kth Missing Positive Number',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/kth-missing-positive-number/',
        description: 'Given an array arr of positive integers sorted in strictly increasing order, and an integer k, return the kth positive integer that is missing from this array.',
        language: 'python',
        solution: `class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        left, right = 0, len(arr)
        while left < right:
            mid = (left + right) // 2
            if arr[mid] - (mid + 1) >= k:
                right = mid
            else:
                left = mid + 1
        return left + k`,
      },
      {
        id: 'bs-34',
        title: 'Peak Index in a Mountain Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/peak-index-in-a-mountain-array/',
        description: 'Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i] > arr[i+1] > ... > arr[arr.length - 1]. Solve it in O(log n) time.',
        language: 'python',
        solution: `class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        left, right = 0, len(arr) - 1
        while left < right:
            mid = (left + right) // 2
            if arr[mid] < arr[mid + 1]:
                left = mid + 1
            else:
                right = mid
        return left`,
      },
      {
        id: 'bs-35',
        title: 'Search in Rotated Sorted Array II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/',
        description: 'Given a rotated sorted array nums which may contain duplicates and an integer target, return true if target is in nums, or false otherwise.',
        language: 'python',
        solution: `class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return True
            if nums[left] == nums[mid] == nums[right]:
                left += 1
                right -= 1
            elif nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1
        return False`,
      },
      {
        id: 'bs-36',
        title: 'Find Minimum in Rotated Sorted Array II',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/',
        description: 'Given a sorted rotated array nums that may contain duplicates, return the minimum element. You must decrease the overall operation steps as much as possible.',
        language: 'python',
        solution: `class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            elif nums[mid] < nums[right]:
                right = mid
            else:
                right -= 1
        return nums[left]`,
      },
      {
        id: 'bs-37',
        title: 'Count of Range Sum',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/count-of-range-sum/',
        description: 'Given an integer array nums and two integers lower and upper, return the number of range sums that lie in [lower, upper] inclusive.',
        language: 'python',
        solution: `class Solution:
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
        from sortedcontainers import SortedList
        sl = SortedList([0])
        prefix = result = 0
        for num in nums:
            prefix += num
            result += sl.bisect_right(prefix - lower) - sl.bisect_left(prefix - upper)
            sl.add(prefix)
        return result`,
      },
      {
        id: 'bs-38',
        title: 'Find Right Interval',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-right-interval/',
        description: 'Given an array of intervals, for each interval find the minimum start point of an interval such that the start point is greater than or equal to the end point of the given interval.',
        language: 'python',
        solution: `class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        from bisect import bisect_left
        start_map = {s: i for i, (s, e) in enumerate(intervals)}
        starts = sorted(start_map.keys())
        result = []
        for s, e in intervals:
            idx = bisect_left(starts, e)
            if idx < len(starts):
                result.append(start_map[starts[idx]])
            else:
                result.append(-1)
        return result`,
      },
      {
        id: 'bs-39',
        title: 'Minimum Time to Repair Cars',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-time-to-repair-cars/',
        description: 'Given an integer array ranks of mechanics and an integer cars, return the minimum time to repair all cars. A mechanic with rank r takes r * n^2 minutes to repair n cars.',
        language: 'python',
        solution: `class Solution:
    def repairCars(self, ranks: List[int], cars: int) -> int:
        import math
        left, right = 1, min(ranks) * cars * cars
        while left < right:
            mid = (left + right) // 2
            total = sum(int(math.sqrt(mid // r)) for r in ranks)
            if total >= cars:
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-40',
        title: 'Allocate Minimum Number of Pages',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/allocate-minimum-number-of-pages/',
        description: 'Given an array of integers denoting the number of pages in n books and integer m students, allocate books to m students such that the maximum number of pages assigned to a student is minimized.',
        language: 'python',
        solution: `class Solution:
    def findPages(self, pages: List[int], m: int) -> int:
        if m > len(pages):
            return -1
        def canAllocate(mid: int) -> bool:
            students = 1
            curr = 0
            for p in pages:
                if p > mid:
                    return False
                if curr + p > mid:
                    students += 1
                    curr = p
                else:
                    curr += p
            return students <= m
        left, right = max(pages), sum(pages)
        while left < right:
            mid = (left + right) // 2
            if canAllocate(mid):
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-41',
        title: 'Aggressive Cows',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/aggressive-cows/',
        description: 'Given an array of stall positions and integer k cows, place cows in stalls such that the minimum distance between any two cows is maximized. Return that maximum minimum distance.',
        language: 'python',
        solution: `class Solution:
    def aggressiveCows(self, stalls: List[int], k: int) -> int:
        stalls.sort()
        def canPlace(mid: int) -> bool:
            count = 1
            last = stalls[0]
            for i in range(1, len(stalls)):
                if stalls[i] - last >= mid:
                    count += 1
                    last = stalls[i]
                    if count == k:
                        return True
            return False
        left, right = 1, stalls[-1] - stalls[0]
        while left < right:
            mid = (left + right + 1) // 2
            if canPlace(mid):
                left = mid
            else:
                right = mid - 1
        return left`,
      },
      {
        id: 'bs-42',
        title: 'Painter Partition Problem',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/painter-partition-problem/',
        description: 'Given an array boards of board lengths and integer k painters, find the minimum time to paint all boards. Each painter paints contiguous sections and takes 1 unit per board length.',
        language: 'python',
        solution: `class Solution:
    def minTime(self, boards: List[int], k: int) -> int:
        def canFinish(mid: int) -> bool:
            painters = 1
            curr = 0
            for b in boards:
                if b > mid:
                    return False
                if curr + b > mid:
                    painters += 1
                    curr = b
                else:
                    curr += b
            return painters <= k
        left, right = max(boards), sum(boards)
        while left < right:
            mid = (left + right) // 2
            if canFinish(mid):
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-43',
        title: 'Minimum Cost to Make Array Equal',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-make-array-equal/',
        description: 'Given two arrays nums and cost, return the minimum total cost to make all elements of nums equal. The cost to change nums[i] by 1 is cost[i].',
        language: 'python',
        solution: `class Solution:
    def minCost(self, nums: List[int], cost: List[int]) -> int:
        def totalCost(target: int) -> int:
            return sum(abs(n - target) * c for n, c in zip(nums, cost))
        left, right = min(nums), max(nums)
        while left < right:
            mid = (left + right) // 2
            if totalCost(mid) <= totalCost(mid + 1):
                right = mid
            else:
                left = mid + 1
        return totalCost(left)`,
      },
      {
        id: 'bs-44',
        title: 'Maximize Minimum of Array After K Operations',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximize-the-minimum-powered-city/',
        description: 'Given an integer array nums and integer k, apply at most k operations where each operation increments any element by 1. Return the maximum possible minimum value of the array.',
        language: 'python',
        solution: `class Solution:
    def maximizeMin(self, nums: List[int], k: int) -> int:
        def canAchieve(mid: int) -> bool:
            ops = 0
            for num in nums:
                if num < mid:
                    ops += mid - num
            return ops <= k
        left, right = min(nums), min(nums) + k
        while left < right:
            mid = (left + right + 1) // 2
            if canAchieve(mid):
                left = mid
            else:
                right = mid - 1
        return left`,
      },
      {
        id: 'bs-45',
        title: 'Find the Kth Largest Integer in the Array',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/',
        description: 'Given an array of strings nums representing integers and an integer k, return the kth largest integer in nums as a string.',
        language: 'python',
        solution: `class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        nums.sort(key=lambda x: (len(x), x), reverse=True)
        return nums[k - 1]`,
      },
      {
        id: 'bs-46',
        title: 'House Robber IV',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/house-robber-iv/',
        description: 'Given an integer array nums and integer k, return the minimum capability of a robber to steal from at least k houses without stealing from adjacent houses.',
        language: 'python',
        solution: `class Solution:
    def minCapability(self, nums: List[int], k: int) -> int:
        def canSteal(mid: int) -> bool:
            count = i = 0
            while i < len(nums):
                if nums[i] <= mid:
                    count += 1
                    i += 2
                else:
                    i += 1
            return count >= k
        left, right = min(nums), max(nums)
        while left < right:
            mid = (left + right) // 2
            if canSteal(mid):
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-47',
        title: 'Minimum Number of Operations to Make Array Sorted',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-candies-allocated-to-k-children/',
        description: 'Given a candies array and integer k children, return the maximum number of candies each child can get if you can split any pile but not merge.',
        language: 'python',
        solution: `class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        import math
        def canAllocate(mid: int) -> bool:
            if mid == 0:
                return True
            return sum(c // mid for c in candies) >= k
        left, right = 0, max(candies)
        while left < right:
            mid = (left + right + 1) // 2
            if canAllocate(mid):
                left = mid
            else:
                right = mid - 1
        return left`,
      },
      {
        id: 'bs-48',
        title: 'Minimum Speed to Arrive on Time',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-speed-to-arrive-on-time/',
        description: 'Given an array dist of train distances and a float hour, return the minimum positive integer speed to reach the office on time, or -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        import math
        if hour <= len(dist) - 1:
            return -1
        def canReach(speed: int) -> bool:
            time = sum(math.ceil(d / speed) for d in dist[:-1]) + dist[-1] / speed
            return time <= hour
        left, right = 1, 10**7
        while left < right:
            mid = (left + right) // 2
            if canReach(mid):
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-49',
        title: 'Smallest Rectangle Enclosing Black Pixels',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/',
        description: 'Given an image represented by a binary matrix where 0 is white and 1 is black, and a black pixel at (row, col), return the area of the smallest rectangle enclosing all black pixels.',
        language: 'python',
        solution: `class Solution:
    def minArea(self, image: List[List[str]], row: int, col: int) -> int:
        m, n = len(image), len(image[0])
        def hasBlackInCol(c): return any(image[r][c] == '1' for r in range(m))
        def hasBlackInRow(r): return any(image[r][c] == '1' for c in range(n))
        def searchCol(lo, hi, check):
            while lo < hi:
                mid = (lo + hi) // 2
                if check(mid): hi = mid
                else: lo = mid + 1
            return lo
        def searchRow(lo, hi, check):
            while lo < hi:
                mid = (lo + hi) // 2
                if check(mid): hi = mid
                else: lo = mid + 1
            return lo
        left  = searchCol(0, col, hasBlackInCol)
        right = searchCol(col, n, lambda c: not hasBlackInCol(c))
        top   = searchRow(0, row, hasBlackInRow)
        bot   = searchRow(row, m, lambda r: not hasBlackInRow(r))
        return (right - left) * (bot - top)`,
      },
      {
        id: 'bs-50',
        title: 'Cutting Ribbons',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/cutting-ribbons/',
        description: 'Given an integer array ribbons and integer k, return the maximum length you can cut k pieces of ribbon with equal length. Return 0 if impossible.',
        language: 'python',
        solution: `class Solution:
    def maxLength(self, ribbons: List[int], k: int) -> int:
        def canCut(length: int) -> bool:
            return sum(r // length for r in ribbons) >= k
        left, right = 1, max(ribbons)
        while left < right:
            mid = (left + right + 1) // 2
            if canCut(mid):
                left = mid
            else:
                right = mid - 1
        return left if canCut(left) else 0`,
      },
      {
        id: 'bs-51',
        title: 'Maximum Side Length of a Square with Sum <= Threshold',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/',
        description: 'Given a matrix and integer threshold, return the maximum side length of a square submatrix with sum <= threshold, or 0 if there is no such square.',
        language: 'python',
        solution: `class Solution:
    def maxSideLength(self, mat: List[List[int]], threshold: int) -> int:
        m, n = len(mat), len(mat[0])
        prefix = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                prefix[i][j] = mat[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1]
        def getSum(r1, c1, r2, c2):
            return prefix[r2+1][c2+1] - prefix[r1][c2+1] - prefix[r2+1][c1] + prefix[r1][c1]
        def canAchieve(side: int) -> bool:
            for i in range(side - 1, m):
                for j in range(side - 1, n):
                    if getSum(i - side + 1, j - side + 1, i, j) <= threshold:
                        return True
            return False
        left, right = 1, min(m, n)
        result = 0
        while left <= right:
            mid = (left + right) // 2
            if canAchieve(mid):
                result = mid
                left = mid + 1
            else:
                right = mid - 1
        return result`,
      },
      {
        id: 'bs-52',
        title: 'Kth Smallest Number in Multiplication Table',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/',
        description: 'Given three integers m, n, and k, return the kth smallest number in the m x n multiplication table.',
        language: 'python',
        solution: `class Solution:
    def findKthNumber(self, m: int, n: int, k: int) -> int:
        def countLessEqual(mid: int) -> int:
            return sum(min(mid // i, n) for i in range(1, m + 1))
        left, right = 1, m * n
        while left < right:
            mid = (left + right) // 2
            if countLessEqual(mid) >= k:
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-53',
        title: 'Kth Smallest Prime Fraction',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/k-th-smallest-prime-fraction/',
        description: 'Given a sorted array arr of prime numbers and 1, and integer k, return the kth smallest fraction from all fractions arr[i]/arr[j] where i < j.',
        language: 'python',
        solution: `class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        n = len(arr)
        left, right = 0.0, 1.0
        while True:
            mid = (left + right) / 2
            count = 0
            max_frac = [0, 1]
            j = 1
            for i in range(n):
                while j < n and arr[i] >= mid * arr[j]:
                    j += 1
                count += n - j
                if j < n and arr[i] * max_frac[1] > max_frac[0] * arr[j]:
                    max_frac = [arr[i], arr[j]]
            if count == k:
                return max_frac
            elif count < k:
                left = mid
            else:
                right = mid`,
      },
      {
        id: 'bs-54',
        title: 'Swim in Rising Water',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/swim-in-rising-water/',
        description: 'Given an n x n grid where grid[i][j] is the elevation at (i,j), return the minimum time to swim from top-left to bottom-right. At time t, you can swim to any adjacent square with elevation <= t.',
        language: 'python',
        solution: `class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)
        def canReach(t: int) -> bool:
            if grid[0][0] > t:
                return False
            visited = set()
            stack = [(0, 0)]
            visited.add((0, 0))
            while stack:
                r, c = stack.pop()
                if r == n - 1 and c == n - 1:
                    return True
                for dr, dc in [(0,1),(1,0),(0,-1),(-1,0)]:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in visited and grid[nr][nc] <= t:
                        visited.add((nr, nc))
                        stack.append((nr, nc))
            return False
        left, right = grid[0][0], n * n - 1
        while left < right:
            mid = (left + right) // 2
            if canReach(mid):
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-55',
        title: 'Find the Smallest Divisor Given a Threshold II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/',
        description: 'Given an array of integers nums and integer threshold, find the smallest divisor such that the sum of divisions is <= threshold. Each division is rounded up.',
        language: 'python',
        solution: `class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        import math
        def getSum(d: int) -> int:
            return sum(math.ceil(n / d) for n in nums)
        left, right = 1, max(nums)
        while left < right:
            mid = (left + right) // 2
            if getSum(mid) <= threshold:
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-56',
        title: 'Maximum Number of Removable Characters',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-removable-characters/',
        description: 'Given strings s and p, and array removable of indices, return the maximum k such that p is still a subsequence of s after removing the first k indices in removable.',
        language: 'python',
        solution: `class Solution:
    def maximumRemovals(self, s: str, p: str, removable: List[int]) -> int:
        def isSubseq(k: int) -> bool:
            removed = set(removable[:k])
            i = j = 0
            while i < len(s) and j < len(p):
                if i not in removed and s[i] == p[j]:
                    j += 1
                i += 1
            return j == len(p)
        left, right = 0, len(removable)
        while left < right:
            mid = (left + right + 1) // 2
            if isSubseq(mid):
                left = mid
            else:
                right = mid - 1
        return left`,
      },
      {
        id: 'bs-57',
        title: 'Maximum Profit From Trading Stocks',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-profit-from-trading-stocks/',
        description: 'Given arrays present and future prices of stocks and integer budget, return the maximum profit you can make by buying and selling stocks without exceeding the budget.',
        language: 'python',
        solution: `class Solution:
    def maximumProfit(self, present: List[int], future: List[int], budget: int) -> int:
        profits = sorted(
            [(future[i] - present[i], present[i])
             for i in range(len(present))
             if future[i] > present[i]],
            reverse=True
        )
        result = 0
        for profit, cost in profits:
            if budget >= cost:
                budget -= cost
                result += profit
        return result`,
      },
      {
        id: 'bs-58',
        title: 'Find Target Indices After Sorting Array',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/find-target-indices-after-sorting-array/',
        description: 'Given an integer array nums and integer target, return a list of target indices after sorting nums in non-decreasing order.',
        language: 'python',
        solution: `class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        from bisect import bisect_left, bisect_right
        nums.sort()
        left = bisect_left(nums, target)
        right = bisect_right(nums, target)
        return list(range(left, right))`,
      },
      {
        id: 'bs-59',
        title: 'Minimum Time to Eat All Grains',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-time-to-eat-all-grains/',
        description: 'Given arrays hens and grains, return the minimum time for all hens to eat all grains. Each hen eats one grain per unit time and can only move one step at a time.',
        language: 'python',
        solution: `class Solution:
    def minimumTime(self, hens: List[int], grains: List[int]) -> int:
        from bisect import bisect_left
        hens.sort()
        grains.sort()
        def canFinish(t: int) -> bool:
            g = 0
            for h in hens:
                if g == len(grains):
                    break
                if grains[g] > h + t:
                    return False
                lo = grains[g]
                if lo >= h:
                    g = bisect_right(grains, h + t, g)
                else:
                    extra = h - lo
                    g = bisect_right(grains, h + t, g) if extra >= t else bisect_right(grains, max(lo + t, h + t - extra), g)
            return g >= len(grains)
        from bisect import bisect_right
        left, right = 0, max(abs(hens[-1] - grains[0]), abs(hens[0] - grains[-1])) + max(grains) - min(grains)
        while left < right:
            mid = (left + right) // 2
            if canFinish(mid):
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-60',
        title: 'Maximum Number of Tasks You Can Assign',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/',
        description: 'Given tasks and workers arrays and integers pills and strength, return the maximum number of tasks that can be assigned. Each worker can take a pill to increase strength by strength.',
        language: 'python',
        solution: `class Solution:
    def maxTaskAssign(self, tasks: List[int], workers: List[int], pills: int, strength: int) -> int:
        from sortedcontainers import SortedList
        tasks.sort()
        workers.sort()
        def canAssign(k: int) -> bool:
            available = SortedList(workers[len(workers) - k:])
            p = pills
            for i in range(k - 1, -1, -1):
                if available[-1] >= tasks[i]:
                    available.pop(-1)
                elif p > 0:
                    idx = available.bisect_left(tasks[i] - strength)
                    if idx < len(available):
                        available.pop(idx)
                        p -= 1
                    else:
                        return False
                else:
                    return False
            return True
        left, right = 0, min(len(tasks), len(workers))
        while left < right:
            mid = (left + right + 1) // 2
            if canAssign(mid):
                left = mid
            else:
                right = mid - 1
        return left`,
      },
      {
        id: 'bs-61',
        title: 'Count Pairs Whose Sum is Less than Target',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/',
        description: 'Given an integer array nums and integer target, return the number of pairs (i, j) where i < j and nums[i] + nums[j] < target.',
        language: 'python',
        solution: `class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        nums.sort()
        left, right = 0, len(nums) - 1
        result = 0
        while left < right:
            if nums[left] + nums[right] < target:
                result += right - left
                left += 1
            else:
                right -= 1
        return result`,
      },
      {
        id: 'bs-62',
        title: 'Maximum Value of a String in an Array',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/',
        description: 'Given an array of alphanumeric strings strs, return the maximum value. The value of a string is its numeric value if it consists only of digits, otherwise its length.',
        language: 'python',
        solution: `class Solution:
    def maximumValue(self, strs: List[str]) -> int:
        def val(s: str) -> int:
            return int(s) if s.isdigit() else len(s)
        return max(val(s) for s in strs)`,
      },
      {
        id: 'bs-63',
        title: 'Minimum Number of Days to Disconnect Island',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/',
        description: 'Given a binary grid, return the minimum number of days to disconnect the island (make the grid have zero or more than one island) by changing 1s to 0s.',
        language: 'python',
        solution: `class Solution:
    def minDays(self, grid: List[List[int]]) -> int:
        def countIslands() -> int:
            visited = set()
            count = 0
            def dfs(r, c):
                if (r, c) in visited or not (0 <= r < len(grid)) or not (0 <= c < len(grid[0])) or grid[r][c] == 0:
                    return
                visited.add((r, c))
                for dr, dc in [(0,1),(1,0),(0,-1),(-1,0)]:
                    dfs(r + dr, c + dc)
            for i in range(len(grid)):
                for j in range(len(grid[0])):
                    if grid[i][j] == 1 and (i, j) not in visited:
                        dfs(i, j)
                        count += 1
            return count
        if countIslands() != 1:
            return 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    grid[i][j] = 0
                    if countIslands() != 1:
                        return 1
                    grid[i][j] = 1
        return 2`,
      },
      {
        id: 'bs-64',
        title: 'Find the Distance Value Between Two Arrays',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-distance-value-between-two-arrays/',
        description: 'Given two integer arrays arr1 and arr2 and integer d, return the distance value between the two arrays. The distance is the number of elements in arr1 where no element in arr2 has absolute difference <= d.',
        language: 'python',
        solution: `class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        from bisect import bisect_left, bisect_right
        arr2.sort()
        result = 0
        for x in arr1:
            lo = bisect_left(arr2, x - d)
            hi = bisect_right(arr2, x + d)
            if lo == hi:
                result += 1
        return result`,
      },
      {
        id: 'bs-65',
        title: 'Maximum Bags With Full Capacity of Rocks',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/',
        description: 'Given arrays capacity and rocks and integer additionalRocks, return the maximum number of bags you can fill to full capacity by distributing additionalRocks optimally.',
        language: 'python',
        solution: `class Solution:
    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
        diff = sorted(c - r for c, r in zip(capacity, rocks))
        result = 0
        for d in diff:
            if additionalRocks >= d:
                additionalRocks -= d
                result += 1
            else:
                break
        return result`,
      },
      {
        id: 'bs-66',
        title: 'Maximum Number of Integers to Choose From a Range I',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/',
        description: 'Given a banned integer array, integer n and integer maxSum, return the maximum number of integers you can choose from 1 to n such that no chosen integer is in banned and the sum does not exceed maxSum.',
        language: 'python',
        solution: `class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        banned_set = set(banned)
        result = curr_sum = 0
        for i in range(1, n + 1):
            if i in banned_set:
                continue
            if curr_sum + i > maxSum:
                break
            curr_sum += i
            result += 1
        return result`,
      },
      {
        id: 'bs-67',
        title: 'Minimum Operations to Make a Uni-Value Grid',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/',
        description: 'Given a 2D grid and integer x, return the minimum number of operations to make all elements equal, where each operation adds or subtracts x. Return -1 if impossible.',
        language: 'python',
        solution: `class Solution:
    def minOperations(self, grid: List[List[int]], x: int) -> int:
        nums = sorted(v for row in grid for v in row)
        remainder = nums[0] % x
        if any(n % x != remainder for n in nums):
            return -1
        median = nums[len(nums) // 2]
        return sum(abs(n - median) // x for n in nums)`,
      },
      {
        id: 'bs-68',
        title: 'Maximum Total Reward Using Operations I',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-total-reward-using-operations-i/',
        description: 'Given an integer array rewardValues, return the maximum total reward you can collect. You can pick a value only if it is strictly greater than your current total reward.',
        language: 'python',
        solution: `class Solution:
    def maxTotalReward(self, rewardValues: List[int]) -> int:
        rewardValues = sorted(set(rewardValues))
        dp = {0}
        for v in rewardValues:
            dp |= {s + v for s in dp if s < v}
        return max(dp)`,
      },
      {
        id: 'bs-69',
        title: 'Minimum Absolute Difference in BST',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-absolute-difference-in-bst/',
        description: 'Given the root of a Binary Search Tree, return the minimum absolute difference between the values of any two different nodes in the tree.',
        language: 'python',
        solution: `class Solution:
    def getMinimumDifference(self, root) -> int:
        prev = None
        result = float('inf')
        def inorder(node):
            nonlocal prev, result
            if not node:
                return
            inorder(node.left)
            if prev is not None:
                result = min(result, node.val - prev)
            prev = node.val
            inorder(node.right)
        inorder(root)
        return result`,
      },
      {
        id: 'bs-70',
        title: 'Find the Longest Valid Obstacle Course at Each Position',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/',
        description: 'Given an integer array obstacles, return an array where ans[i] is the length of the longest obstacle course ending at index i, where each obstacle is at least as tall as the previous.',
        language: 'python',
        solution: `class Solution:
    def longestObstacleCourseAtEachPosition(self, obstacles: List[int]) -> List[int]:
        from bisect import bisect_right
        tails = []
        result = []
        for ob in obstacles:
            idx = bisect_right(tails, ob)
            if idx == len(tails):
                tails.append(ob)
            else:
                tails[idx] = ob
            result.append(idx + 1)
        return result`,
      },
      {
        id: 'bs-71',
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
            idx = bisect_left(tails, num)
            if idx == len(tails):
                tails.append(num)
            else:
                tails[idx] = num
        return len(tails)`,
      },
      {
        id: 'bs-72',
        title: 'Russian Doll Envelopes',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/russian-doll-envelopes/',
        description: 'Given a 2D array envelopes where envelopes[i] = [wi, hi], return the maximum number of envelopes you can Russian doll (put one inside the other).',
        language: 'python',
        solution: `class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        from bisect import bisect_left
        envelopes.sort(key=lambda x: (x[0], -x[1]))
        tails = []
        for _, h in envelopes:
            idx = bisect_left(tails, h)
            if idx == len(tails):
                tails.append(h)
            else:
                tails[idx] = h
        return len(tails)`,
      },
      {
        id: 'bs-73',
        title: 'Count of Smaller Numbers After Self',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/',
        description: 'Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].',
        language: 'python',
        solution: `class Solution:
    def countSmaller(self, nums: List[int]) -> List[int]:
        from bisect import bisect_left, insort
        result = []
        sorted_list = []
        for num in reversed(nums):
            idx = bisect_left(sorted_list, num)
            result.append(idx)
            insort(sorted_list, num)
        return result[::-1]`,
      },
      {
        id: 'bs-74',
        title: 'Count of Range Sum',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/count-of-range-sum/',
        description: 'Given an integer array nums and two integers lower and upper, return the number of range sums that lie in the inclusive range [lower, upper].',
        language: 'python',
        solution: `class Solution:
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
        from sortedcontainers import SortedList
        sl = SortedList([0])
        prefix = result = 0
        for num in nums:
            prefix += num
            result += sl.bisect_right(prefix - lower) - sl.bisect_left(prefix - upper)
            sl.add(prefix)
        return result`,
      },
      {
        id: 'bs-75',
        title: 'Minimum Number of Arrows to Burst Balloons',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/',
        description: 'Given a 2D array points where points[i] = [xstart, xend] represents a balloon, return the minimum number of arrows to burst all balloons.',
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
        return arrows`,
      },
      {
        id: 'bs-76',
        title: 'Online Election',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/online-election/',
        description: 'Given arrays persons and times, implement the TopVotedCandidate class with a q(t) method that returns the person leading the election at time t.',
        language: 'python',
        solution: `class TopVotedCandidate:
    def __init__(self, persons: List[int], times: List[int]):
        from collections import defaultdict
        self.times = times
        self.leaders = []
        votes = defaultdict(int)
        leader = -1
        for p in persons:
            votes[p] += 1
            if votes[p] >= votes[leader]:
                leader = p
            self.leaders.append(leader)

    def q(self, t: int) -> int:
        from bisect import bisect_right
        idx = bisect_right(self.times, t) - 1
        return self.leaders[idx]`,
      },
      {
        id: 'bs-77',
        title: 'Maximum Sum of 3 Non-Overlapping Subarrays',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/',
        description: 'Given an integer array nums and integer k, find three non-overlapping subarrays of length k with maximum sum and return their starting indices.',
        language: 'python',
        solution: `class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        sums = [sum(nums[:k])]
        for i in range(1, n - k + 1):
            sums.append(sums[-1] + nums[i + k - 1] - nums[i - 1])
        left = [0] * n
        best = 0
        for i in range(n):
            if sums[i] > sums[best]:
                best = i
            left[i] = best
        right = [0] * n
        best = n - k
        for i in range(n - k, -1, -1):
            if sums[i] >= sums[best]:
                best = i
            right[i] = best
        result = [-1, -1, -1]
        for j in range(k, n - 2 * k + 1):
            l, r = left[j - k], right[j + k]
            total = sums[l] + sums[j] + sums[r]
            if result[0] == -1 or total > sums[result[0]] + sums[result[1]] + sums[result[2]]:
                result = [l, j, r]
        return result`,
      },
      {
        id: 'bs-78',
        title: 'Ways to Split Array Into Three Subarrays',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/',
        description: 'Given an array nums of non-negative integers, return the number of ways to split nums into three non-empty contiguous parts where sum of left <= sum of mid <= sum of right.',
        language: 'python',
        solution: `class Solution:
    def waysToSplit(self, nums: List[int]) -> int:
        from bisect import bisect_left, bisect_right
        MOD = 10**9 + 7
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]
        total = prefix[n]
        result = 0
        for i in range(1, n - 1):
            left_sum = prefix[i]
            if left_sum * 3 > total:
                break
            min_j = bisect_left(prefix, 2 * left_sum, i + 1, n)
            max_j = bisect_right(prefix, (total + left_sum) // 2, i + 1, n)
            result = (result + max(0, max_j - min_j)) % MOD
        return result`,
      },
      {
        id: 'bs-79',
        title: 'Minimum Interval to Include Each Query',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/',
        description: 'Given a 2D array intervals and an integer array queries, for each query return the size of the smallest interval that contains the query point, or -1 if none exists.',
        language: 'python',
        solution: `class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        import heapq
        intervals.sort()
        heap = []
        result = {}
        i = 0
        for q in sorted(queries):
            while i < len(intervals) and intervals[i][0] <= q:
                l, r = intervals[i]
                heapq.heappush(heap, (r - l + 1, r))
                i += 1
            while heap and heap[0][1] < q:
                heapq.heappop(heap)
            result[q] = heap[0][0] if heap else -1
        return [result[q] for q in queries]`,
      },
      {
        id: 'bs-80',
        title: 'Median of a Row Wise Sorted Matrix',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/',
        description: 'Given a row-wise sorted matrix of odd size, return the median of the matrix.',
        language: 'python',
        solution: `class Solution:
    def matrixMedian(self, grid: List[List[int]]) -> int:
        from bisect import bisect_right
        m, n = len(grid), len(grid[0])
        lo, hi = 1, 10**6
        desired = (m * n + 1) // 2
        while lo < hi:
            mid = (lo + hi) // 2
            count = sum(bisect_right(row, mid) for row in grid)
            if count >= desired:
                hi = mid
            else:
                lo = mid + 1
        return lo`,
      },
      {
        id: 'bs-81',
        title: 'Find K-th Smallest Pair Distance',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/find-k-th-smallest-pair-distance/',
        description: 'Given an integer array nums and integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where i < j.',
        language: 'python',
        solution: `class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        from bisect import bisect_right
        nums.sort()
        def countPairs(mid: int) -> int:
            count = left = 0
            for right in range(len(nums)):
                while nums[right] - nums[left] > mid:
                    left += 1
                count += right - left
            return count
        left, right = 0, nums[-1] - nums[0]
        while left < right:
            mid = (left + right) // 2
            if countPairs(mid) >= k:
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-82',
        title: 'Minimize Max Distance to Gas Station',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimize-max-distance-to-gas-station/',
        description: 'Given an integer array stations of sorted positions and integer k, add k new gas stations to minimize the maximum distance between adjacent stations. Return the answer with 1e-6 precision.',
        language: 'python',
        solution: `class Solution:
    def minmaxGasDist(self, stations: List[int], k: int) -> float:
        def countStations(dist: float) -> int:
            return sum(int((stations[i+1] - stations[i]) / dist) for i in range(len(stations) - 1))
        lo, hi = 0.0, stations[-1] - stations[0]
        for _ in range(100):
            mid = (lo + hi) / 2
            if countStations(mid) <= k:
                hi = mid
            else:
                lo = mid
        return lo`,
      },
      {
        id: 'bs-83',
        title: 'Split Array into Consecutive Subsequences',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/split-array-into-consecutive-subsequences/',
        description: 'Given an integer array nums sorted in non-decreasing order, return true if you can split it into one or more subsequences such that each subsequence consists of consecutive integers and has a length of at least 3.',
        language: 'python',
        solution: `class Solution:
    def isPossible(self, nums: List[int]) -> bool:
        from collections import Counter
        freq = Counter(nums)
        appendfreq = Counter()
        for num in nums:
            if freq[num] == 0:
                continue
            if appendfreq[num] > 0:
                appendfreq[num] -= 1
                appendfreq[num + 1] += 1
                freq[num] -= 1
            elif freq[num + 1] > 0 and freq[num + 2] > 0:
                freq[num] -= 1
                freq[num + 1] -= 1
                freq[num + 2] -= 1
                appendfreq[num + 3] += 1
            else:
                return False
        return True`,
      },
      {
        id: 'bs-84',
        title: 'Maximum Distance in Arrays',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-distance-in-arrays/',
        description: 'Given a list of sorted integer arrays, return the maximum distance defined as the absolute difference between elements from two different arrays.',
        language: 'python',
        solution: `class Solution:
    def maxDistance(self, arrays: List[List[int]]) -> int:
        result = 0
        min_val = arrays[0][0]
        max_val = arrays[0][-1]
        for i in range(1, len(arrays)):
            result = max(result, abs(arrays[i][-1] - min_val), abs(max_val - arrays[i][0]))
            min_val = min(min_val, arrays[i][0])
            max_val = max(max_val, arrays[i][-1])
        return result`,
      },
      {
        id: 'bs-85',
        title: 'Minimum Cost to Hire K Workers',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-hire-k-workers/',
        description: 'Given quality and wage arrays and integer k, return the minimum cost to hire exactly k workers. Each worker must be paid at least their minimum wage expectation and proportional to their quality.',
        language: 'python',
        solution: `class Solution:
    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
        import heapq
        workers = sorted((w / q, q) for w, q in zip(wage, quality))
        result = float('inf')
        pool = []
        pool_sum = 0
        for ratio, q in workers:
            heapq.heappush(pool, -q)
            pool_sum += q
            if len(pool) > k:
                pool_sum += heapq.heappop(pool)
            if len(pool) == k:
                result = min(result, ratio * pool_sum)
        return result`,
      },
      {
        id: 'bs-86',
        title: 'Find Minimum Time to Finish All Jobs',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/',
        description: 'Given an integer array jobs and integer k workers, assign all jobs to workers to minimize the maximum working time of any worker.',
        language: 'python',
        solution: `class Solution:
    def minimumTimeRequired(self, jobs: List[int], k: int) -> int:
        jobs.sort(reverse=True)
        def canFinish(limit: int) -> bool:
            workers = [0] * k
            def backtrack(idx):
                if idx == len(jobs):
                    return True
                seen = set()
                for i in range(k):
                    if workers[i] in seen:
                        continue
                    if workers[i] + jobs[idx] <= limit:
                        seen.add(workers[i])
                        workers[i] += jobs[idx]
                        if backtrack(idx + 1):
                            return True
                        workers[i] -= jobs[idx]
                return False
            return backtrack(0)
        left, right = max(jobs), sum(jobs)
        while left < right:
            mid = (left + right) // 2
            if canFinish(mid):
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-87',
        title: 'Maximum Profit in Job Scheduling II',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/',
        description: 'Given start, end, and profit arrays, return the maximum profit by scheduling non-overlapping jobs.',
        language: 'python',
        solution: `class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        from bisect import bisect_left
        jobs = sorted(zip(endTime, startTime, profit))
        dp = [[0, 0]]
        for end, start, pro in jobs:
            idx = bisect_left(dp, [start + 1]) - 1
            if dp[idx][1] + pro > dp[-1][1]:
                dp.append([end, dp[idx][1] + pro])
        return dp[-1][1]`,
      },
      {
        id: 'bs-88',
        title: 'Plates Between Candles',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/plates-between-candles/',
        description: 'Given a string s of plates and candles and queries array, for each query return the number of plates between the leftmost and rightmost candles in the query range.',
        language: 'python',
        solution: `class Solution:
    def platesBetweenCandles(self, s: str, queries: List[List[int]]) -> List[int]:
        from bisect import bisect_left, bisect_right
        n = len(s)
        candles = [i for i, c in enumerate(s) if c == '|']
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + (s[i] == '*')
        result = []
        for l, r in queries:
            lo = bisect_left(candles, l)
            hi = bisect_right(candles, r) - 1
            if lo < hi:
                left_c = candles[lo]
                right_c = candles[hi]
                result.append(prefix[right_c + 1] - prefix[left_c])
            else:
                result.append(0)
        return result`,
      },
      {
        id: 'bs-90',
        title: 'Maximum Elegance of a K-Length Subsequence',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/',
        description: 'Given a 2D array items where items[i] = [profit, category] and integer k, return the maximum elegance of a k-length subsequence. Elegance is total profit + distinct categories squared.',
        language: 'python',
        solution: `class Solution:
    def findMaximumElegance(self, items: List[List[int]], k: int) -> int:
        items.sort(key=lambda x: -x[0])
        total_profit = 0
        categories = set()
        dup_profits = []
        for i in range(k):
            p, c = items[i]
            total_profit += p
            if c in categories:
                dup_profits.append(p)
            categories.add(c)
        result = total_profit + len(categories) ** 2
        for i in range(k, len(items)):
            p, c = items[i]
            if c not in categories and dup_profits:
                total_profit -= dup_profits.pop()
                total_profit += p
                categories.add(c)
                result = max(result, total_profit + len(categories) ** 2)
        return result`,
      },
      {
        id: 'bs-91',
        title: 'Minimum Cost to Cut a Stick',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-cut-a-stick/',
        description: 'Given a stick of length n and an array cuts, return the minimum total cost to perform all the cuts. The cost of a cut is the length of the stick being cut.',
        language: 'python',
        solution: `class Solution:
    def minCost(self, n: int, cuts: List[int]) -> int:
        cuts = sorted([0] + cuts + [n])
        m = len(cuts)
        dp = [[0] * m for _ in range(m)]
        for diff in range(2, m):
            for i in range(m - diff):
                j = i + diff
                dp[i][j] = float('inf')
                for k in range(i + 1, j):
                    dp[i][j] = min(dp[i][j], cuts[j] - cuts[i] + dp[i][k] + dp[k][j])
        return dp[0][m - 1]`,
      },
      {
        id: 'bs-92',
        title: 'Maximum Number of Events That Can Be Attended II',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/',
        description: 'Given a 2D array events where events[i] = [startDay, endDay, value] and integer k, return the maximum sum of values of at most k non-overlapping events.',
        language: 'python',
        solution: `class Solution:
    def maxValue(self, events: List[List[int]], k: int) -> int:
        from bisect import bisect_right
        events.sort()
        n = len(events)
        starts = [e[0] for e in events]
        from functools import lru_cache
        @lru_cache(None)
        def dp(i: int, rem: int) -> int:
            if i == n or rem == 0:
                return 0
            skip = dp(i + 1, rem)
            next_i = bisect_right(starts, events[i][1])
            take = events[i][2] + dp(next_i, rem - 1)
            return max(skip, take)
        return dp(0, k)`,
      },
      {
        id: 'bs-93',
        title: 'Minimum Number of Work Sessions to Finish the Tasks',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/',
        description: 'Given an integer array tasks and integer sessionTime, return the minimum number of work sessions to finish all tasks. Each session lasts at most sessionTime.',
        language: 'python',
        solution: `class Solution:
    def minSessions(self, tasks: List[int], sessionTime: int) -> int:
        tasks.sort(reverse=True)
        n = len(tasks)
        def canFinish(k: int) -> bool:
            sessions = [0] * k
            def backtrack(idx):
                if idx == n:
                    return True
                seen = set()
                for i in range(k):
                    if sessions[i] in seen:
                        continue
                    if sessions[i] + tasks[idx] <= sessionTime:
                        seen.add(sessions[i])
                        sessions[i] += tasks[idx]
                        if backtrack(idx + 1):
                            return True
                        sessions[i] -= tasks[idx]
                return False
            return backtrack(0)
        left, right = 1, n
        while left < right:
            mid = (left + right) // 2
            if canFinish(mid):
                right = mid
            else:
                left = mid + 1
        return left`,
      },
      {
        id: 'bs-94',
        title: 'Maximum Number of Consecutive Values You Can Make',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/',
        description: 'Given an integer array coins of distinct values, return the maximum number of consecutive integer values starting from 0 that you can make using any combination of coins.',
        language: 'python',
        solution: `class Solution:
    def getMaximumConsecutive(self, coins: List[int]) -> int:
        coins.sort()
        result = 0
        for coin in coins:
            if coin > result + 1:
                break
            result += coin
        return result + 1`,
      },
      {
        id: 'bs-89',
        title: 'Number of Flowers in Full Bloom',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-flowers-in-full-bloom/',
        description: 'Given a 2D array flowers where flowers[i] = [start, end] and an array people, return an array where answer[i] is the number of flowers blooming when person i arrives.',
        language: 'python',
        solution: `class Solution:
    def fullBloomFlowers(self, flowers: List[List[int]], people: List[int]) -> List[int]:
        from bisect import bisect_right, bisect_left
        starts = sorted(f[0] for f in flowers)
        ends = sorted(f[1] for f in flowers)
        return [bisect_right(starts, p) - bisect_left(ends, p) for p in people]`,
      },
      {
        id: 'bs-95',
        title: 'Maximum Score From Removing Substrings',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-score-from-removing-substrings/',
        description: 'Given a string s and integers x and y, return the maximum score from removing substrings "ab" (score x) and "ba" (score y) in any order.',
        language: 'python',
        solution: `class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        def remove(s, pair, score):
            stack = []
            total = 0
            for c in s:
                if stack and stack[-1] == pair[0] and c == pair[1]:
                    stack.pop()
                    total += score
                else:
                    stack.append(c)
            return ''.join(stack), total
        result = 0
        if x > y:
            s, points = remove(s, 'ab', x)
            result += points
            s, points = remove(s, 'ba', y)
            result += points
        else:
            s, points = remove(s, 'ba', y)
            result += points
            s, points = remove(s, 'ab', x)
            result += points
        return result`,
      },
      {
        id: 'bs-96',
        title: 'Minimum Number of Moves to Seat Everyone',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/',
        description: 'Given two integer arrays seats and students of equal length, return the minimum number of moves to seat every student. A move shifts a student by one position.',
        language: 'python',
        solution: `class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()
        return sum(abs(s - t) for s, t in zip(seats, students))`,
      },
      {
        id: 'bs-97',
        title: 'Maximum Product of the Length of Two Palindromic Substrings',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/',
        description: 'Given a string s, return the maximum product of the lengths of two non-overlapping palindromic substrings of s where both have odd length.',
        language: 'python',
        solution: `class Solution:
    def maxProduct(self, s: str) -> int:
        n = len(s)
        p = [0] * n
        l = r = -1
        for i in range(n):
            k = 1 if i > r else min(p[l + r - i], r - i + 1)
            while i - k >= 0 and i + k < n and s[i - k] == s[i + k]:
                k += 1
            p[i] = k - 1
            if i + p[i] > r:
                l, r = i - p[i], i + p[i]
        left = [1] * n
        cur = 1
        for i in range(n):
            cur = max(cur, 2 * p[i] + 1)
            left[i] = cur
        right = [1] * n
        cur = 1
        for i in range(n - 1, -1, -1):
            cur = max(cur, 2 * p[i] + 1)
            right[i] = cur
        return max(left[i] * right[i + 1] for i in range(n - 1))`,
      },
      {
        id: 'bs-98',
        title: 'Maximum Profit From Stock With Cooldown',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
        description: 'Given an array prices of stock prices, find the maximum profit with the restriction that after selling you must wait one day before buying again.',
        language: 'python',
        solution: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        hold = float('-inf')
        sold = cool = 0
        for price in prices:
            prev_sold = sold
            sold = hold + price
            hold = max(hold, cool - price)
            cool = max(cool, prev_sold)
        return max(sold, cool)`,
      },
      {
        id: 'bs-99',
        title: 'Minimum Cost For Tickets',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-for-tickets/',
        description: 'Given an array days of travel days and costs array of 1-day, 7-day, and 30-day passes, return the minimum cost to travel every day in the given list.',
        language: 'python',
        solution: `class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        travel = set(days)
        dp = [0] * 366
        for i in range(1, 366):
            if i not in travel:
                dp[i] = dp[i - 1]
            else:
                dp[i] = min(
                    dp[i - 1] + costs[0],
                    dp[max(0, i - 7)] + costs[1],
                    dp[max(0, i - 30)] + costs[2]
                )
        return dp[365]`,
      },
      {
        id: 'bs-100',
        title: 'Reach End of Array With Max Score',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/reach-end-of-array-with-max-score/',
        description: 'Given an integer array nums, return the maximum score to reach the last index. Score is calculated by multiplying the number of steps taken by the minimum value in those steps.',
        language: 'python',
        solution: `class Solution:
    def findMaximumScore(self, nums: List[int]) -> int:
        result = 0
        curr_max = 0
        for i in range(len(nums) - 1):
            curr_max = max(curr_max, nums[i])
            result += curr_max
        return result`,
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
      {
        id: 'fsp-26',
        title: 'Reverse Linked List',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/',
        description: 'Given the head of a singly linked list, reverse the list and return the reversed list.',
        language: 'python',
        solution: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow, prev = head, None
        while slow:
            slow.next, prev, slow = prev, slow, slow.next
        return prev`,
      },
      {
        id: 'fsp-27',
        title: 'Add Two Numbers',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/add-two-numbers/',
        description: 'Given two non-empty linked lists representing two non-negative integers stored in reverse order, add the two numbers and return the sum as a linked list.',
        language: 'python',
        solution: `class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        slow, carry = dummy, 0
        while l1 or l2 or carry:
            val = carry
            if l1:
                val += l1.val
                l1 = l1.next
            if l2:
                val += l2.val
                l2 = l2.next
            carry, val = divmod(val, 10)
            slow.next = ListNode(val)
            slow = slow.next
        return dummy.next`,
      },
      {
        id: 'fsp-28',
        title: 'Add Two Numbers II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/add-two-numbers-ii/',
        description: 'Given two non-empty linked lists representing non-negative integers stored in forward order, add the two numbers and return the sum as a linked list.',
        language: 'python',
        solution: `class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        s1, s2 = [], []
        while l1:
            s1.append(l1.val)
            l1 = l1.next
        while l2:
            s2.append(l2.val)
            l2 = l2.next
        carry = 0
        head = None
        while s1 or s2 or carry:
            val = carry
            if s1: val += s1.pop()
            if s2: val += s2.pop()
            carry, val = divmod(val, 10)
            node = ListNode(val)
            node.next = head
            head = node
        return head`,
      },
      {
        id: 'fsp-29',
        title: 'Copy List with Random Pointer',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
        description: 'Given a linked list where each node has a next and random pointer, construct a deep copy of the list.',
        language: 'python',
        solution: `class Solution:
    def copyRandomList(self, head: Optional[Node]) -> Optional[Node]:
        if not head:
            return None
        old_to_new = {}
        slow = head
        while slow:
            old_to_new[slow] = Node(slow.val)
            slow = slow.next
        slow = head
        while slow:
            if slow.next:
                old_to_new[slow].next = old_to_new[slow.next]
            if slow.random:
                old_to_new[slow].random = old_to_new[slow.random]
            slow = slow.next
        return old_to_new[head]`,
      },
      {
        id: 'fsp-30',
        title: 'LRU Cache',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/lru-cache/',
        description: 'Design a data structure that follows the Least Recently Used cache constraint with O(1) get and put operations.',
        language: 'python',
        solution: `class LRUCache:
    def __init__(self, capacity: int):
        from collections import OrderedDict
        self.cache = OrderedDict()
        self.cap = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)`,
      },
      {
        id: 'fsp-31',
        title: 'Merge Two Sorted Lists',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/',
        description: 'Given the heads of two sorted linked lists, merge them into one sorted linked list and return its head.',
        language: 'python',
        solution: `class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        slow = dummy
        while l1 and l2:
            if l1.val <= l2.val:
                slow.next, l1 = l1, l1.next
            else:
                slow.next, l2 = l2, l2.next
            slow = slow.next
        slow.next = l1 or l2
        return dummy.next`,
      },
      {
        id: 'fsp-32',
        title: 'Merge K Sorted Lists',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/',
        description: 'Given an array of k linked lists, each sorted in ascending order, merge all the linked lists into one sorted linked list and return its head.',
        language: 'python',
        solution: `class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        import heapq
        dummy = ListNode(0)
        slow = dummy
        heap = []
        for i, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, i, node))
        while heap:
            val, i, node = heapq.heappop(heap)
            slow.next = node
            slow = slow.next
            if node.next:
                heapq.heappush(heap, (node.next.val, i, node.next))
        return dummy.next`,
      },
      {
        id: 'fsp-33',
        title: 'Reverse Nodes in Even Length Groups',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/reverse-nodes-in-even-length-groups/',
        description: 'Given the head of a linked list, reverse the nodes in each group of even length and return the modified list.',
        language: 'python',
        solution: `class Solution:
    def reverseEvenLengthGroups(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = head
        group = 2
        while slow.next:
            fast = slow
            count = 0
            while fast.next and count < group:
                fast = fast.next
                count += 1
            if count % 2 == 0:
                cur = slow.next
                prev = None
                for _ in range(count):
                    cur.next, prev, cur = prev, cur, cur.next
                slow.next.next = cur
                slow.next = prev
            slow = fast
            group += 1
        return head`,
      },
      {
        id: 'fsp-34',
        title: 'Design Linked List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/design-linked-list/',
        description: 'Design your implementation of a linked list with get, addAtHead, addAtTail, addAtIndex, and deleteAtIndex operations.',
        language: 'python',
        solution: `class MyLinkedList:
    def __init__(self):
        self.dummy = ListNode(0)
        self.size = 0

    def get(self, index: int) -> int:
        if index >= self.size:
            return -1
        slow = self.dummy.next
        for _ in range(index):
            slow = slow.next
        return slow.val

    def addAtHead(self, val: int) -> None:
        node = ListNode(val, self.dummy.next)
        self.dummy.next = node
        self.size += 1

    def addAtTail(self, val: int) -> None:
        slow = self.dummy
        while slow.next:
            slow = slow.next
        slow.next = ListNode(val)
        self.size += 1

    def addAtIndex(self, index: int, val: int) -> None:
        if index > self.size:
            return
        slow = self.dummy
        for _ in range(index):
            slow = slow.next
        slow.next = ListNode(val, slow.next)
        self.size += 1

    def deleteAtIndex(self, index: int) -> None:
        if index >= self.size:
            return
        slow = self.dummy
        for _ in range(index):
            slow = slow.next
        slow.next = slow.next.next
        self.size -= 1`,
      },
      {
        id: 'fsp-35',
        title: 'Partition List',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/partition-list/',
        description: 'Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x while preserving the original relative order.',
        language: 'python',
        solution: `class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        less_dummy = ListNode(0)
        greater_dummy = ListNode(0)
        slow, fast = less_dummy, greater_dummy
        curr = head
        while curr:
            if curr.val < x:
                slow.next = curr
                slow = slow.next
            else:
                fast.next = curr
                fast = fast.next
            curr = curr.next
        fast.next = None
        slow.next = greater_dummy.next
        return less_dummy.next`,
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
      {
        id: 'bt-5',
        title: 'Subsets II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/subsets-ii/',
        description: 'Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets.',
        language: 'python',
        solution: `class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = []
        def backtrack(start, current):
            result.append(current[:])
            for i in range(start, len(nums)):
                if i > start and nums[i] == nums[i - 1]:
                    continue
                current.append(nums[i])
                backtrack(i + 1, current)
                current.pop()
        backtrack(0, [])
        return result`
      },
      {
        id: 'bt-6',
        title: 'Permutations II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/permutations-ii/',
        description: 'Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.',
        language: 'python',
        solution: `class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = []
        used = [False] * len(nums)
        def backtrack(current):
            if len(current) == len(nums):
                result.append(current[:])
                return
            for i in range(len(nums)):
                if used[i]:
                    continue
                if i > 0 and nums[i] == nums[i - 1] and not used[i - 1]:
                    continue
                used[i] = True
                current.append(nums[i])
                backtrack(current)
                current.pop()
                used[i] = False
        backtrack([])
        return result`
      },
      {
        id: 'bt-7',
        title: 'Combination Sum II',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/combination-sum-ii/',
        description: 'Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once.',
        language: 'python',
        solution: `class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        result = []
        def backtrack(start, current, total):
            if total == target:
                result.append(current[:])
                return
            if total > target:
                return
            for i in range(start, len(candidates)):
                if i > start and candidates[i] == candidates[i - 1]:
                    continue
                current.append(candidates[i])
                backtrack(i + 1, current, total + candidates[i])
                current.pop()
        backtrack(0, [], 0)
        return result`
      },
      {
        id: 'bt-8',
        title: 'N-Queens',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/n-queens/',
        description: 'The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle.',
        language: 'python',
        solution: `class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        result = []
        cols = set()
        diag1 = set()  # row - col
        diag2 = set()  # row + col
        board = [['.' ] * n for _ in range(n)]
        def backtrack(row):
            if row == n:
                result.append([''.join(r) for r in board])
                return
            for col in range(n):
                if col in cols or (row - col) in diag1 or (row + col) in diag2:
                    continue
                cols.add(col)
                diag1.add(row - col)
                diag2.add(row + col)
                board[row][col] = 'Q'
                backtrack(row + 1)
                cols.remove(col)
                diag1.remove(row - col)
                diag2.remove(row + col)
                board[row][col] = '.'
        backtrack(0)
        return result`
      },
      {
        id: 'bt-9',
        title: 'Palindrome Partitioning',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/palindrome-partitioning/',
        description: 'Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.',
        language: 'python',
        solution: `class Solution:
    def partition(self, s: str) -> List[List[str]]:
        result = []
        def is_palindrome(sub):
            return sub == sub[::-1]
        def backtrack(start, current):
            if start == len(s):
                result.append(current[:])
                return
            for end in range(start + 1, len(s) + 1):
                substr = s[start:end]
                if is_palindrome(substr):
                    current.append(substr)
                    backtrack(end, current)
                    current.pop()
        backtrack(0, [])
        return result`
      },
      {
        id: 'bt-10',
        title: 'Letter Combinations of a Phone Number',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
        description: 'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.',
        language: 'python',
        solution: `class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        phone_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        result = []
        def backtrack(index, current):
            if index == len(digits):
                result.append(''.join(current))
                return
            for letter in phone_map[digits[index]]:
                current.append(letter)
                backtrack(index + 1, current)
                current.pop()
        backtrack(0, [])
        return result`
      },
      {
        id: 'bt-11',
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
                result.append(''.join(current))
                return
            if open_count < n:
                current.append('(')
                backtrack(current, open_count + 1, close_count)
                current.pop()
            if close_count < open_count:
                current.append(')')
                backtrack(current, open_count, close_count + 1)
                current.pop()
        backtrack([], 0, 0)
        return result`
      },
      {
        id: 'bt-12',
        title: 'Sudoku Solver',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/sudoku-solver/',
        description: 'Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the rules of sudoku.',
        language: 'python',
        solution: `class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        def is_valid(row, col, num):
            for i in range(9):
                if board[row][i] == num:
                    return False
                if board[i][col] == num:
                    return False
                r = 3 * (row // 3) + i // 3
                c = 3 * (col // 3) + i % 3
                if board[r][c] == num:
                    return False
            return True
        def backtrack():
            for r in range(9):
                for c in range(9):
                    if board[r][c] == '.':
                        for num in '123456789':
                            if is_valid(r, c, num):
                                board[r][c] = num
                                if backtrack():
                                    return True
                                board[r][c] = '.'
                        return False
            return True
        backtrack()`
      },
      {
        id: 'bt-13',
        title: 'Combination Sum III',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/combination-sum-iii/',
        description: 'Find all valid combinations of k numbers that sum up to n such that only numbers 1 through 9 are used and each number is used at most once.',
        language: 'python',
        solution: `class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        result = []
        def backtrack(start, current, total):
            if len(current) == k and total == n:
                result.append(current[:])
                return
            if len(current) == k or total >= n:
                return
            for i in range(start, 10):
                current.append(i)
                backtrack(i + 1, current, total + i)
                current.pop()
        backtrack(1, [], 0)
        return result`
      },
      {
        id: 'bt-14',
        title: 'Word Search II',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/word-search-ii/',
        description: 'Given an m x n board of characters and a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells.',
        language: 'python',
        solution: `class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        # Build a Trie from the word list
        trie = {}
        for word in words:
            node = trie
            for ch in word:
                node = node.setdefault(ch, {})
            node['$'] = word  # mark end of word

        rows, cols = len(board), len(board[0])
        result = []

        def dfs(r, c, node):
            ch = board[r][c]
            if ch not in node:
                return
            next_node = node[ch]
            if '$' in next_node:
                result.append(next_node['$'])
                del next_node['$']  # avoid duplicates
            board[r][c] = '#'  # mark visited
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] != '#':
                    dfs(nr, nc, next_node)
            board[r][c] = ch  # restore

        for r in range(rows):
            for c in range(cols):
                dfs(r, c, trie)
        return result`
      },
      {
    id: 'bt-15',
    title: 'Serialize and Deserialize Binary Tree',
    difficulty: 'Hard',
    leetcodeUrl: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
    description: 'Design an algorithm to serialize and deserialize a binary tree. Serialization is the process of converting a data structure into a sequence of bits so that it can be stored or reconstructed later.',
    language: 'python',
    solution: `class Codec:
    def serialize(self, root):
        if not root:
            return 'N'
        return str(root.val) + ',' + self.serialize(root.left) + ',' + self.serialize(root.right)

    def deserialize(self, data):
        vals = iter(data.split(','))
        def build():
            val = next(vals)
            if val == 'N':
                return None
            node = TreeNode(int(val))
            node.left = build()
            node.right = build()
            return node
        return build()`
},

{
    id: 'bt-16',
    title: 'Binary Tree Maximum Path Sum',
    difficulty: 'Hard',
    leetcodeUrl: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
    description: 'A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. The path does not need to pass through the root. Return the maximum path sum of any non-empty path.',
    language: 'python',
    solution: `class Solution:
    def maxPathSum(self, root: TreeNode) -> int:
        self.max_sum = float('-inf')

        def dfs(node):
            if not node:
                return 0
            left = max(dfs(node.left), 0)
            right = max(dfs(node.right), 0)
            self.max_sum = max(self.max_sum, node.val + left + right)
            return node.val + max(left, right)

        dfs(root)
        return self.max_sum`
},

{
    id: 'bt-17',
    title: 'Longest Consecutive Sequence',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence/',
    description: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.',
    language: 'python',
    solution: `class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        best = 0

        for num in num_set:
            if num - 1 not in num_set:
                current = num
                streak = 1
                while current + 1 in num_set:
                    current += 1
                    streak += 1
                best = max(best, streak)

        return best`
},

{
    id: 'bt-18',
    title: 'Course Schedule II',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/course-schedule-ii/',
    description: 'There are numCourses courses labeled from 0 to numCourses - 1. Given prerequisites pairs, return the ordering of courses you should take to finish all courses. If impossible, return an empty array.',
    language: 'python',
    solution: `class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = defaultdict(list)
        for a, b in prerequisites:
            graph[b].append(a)

        UNVISITED, VISITING, VISITED = 0, 1, 2
        state = [UNVISITED] * numCourses
        order = []

        def dfs(node):
            if state[node] == VISITING:
                return False
            if state[node] == VISITED:
                return True
            state[node] = VISITING
            for nei in graph[node]:
                if not dfs(nei):
                    return False
            state[node] = VISITED
            order.append(node)
            return True

        for i in range(numCourses):
            if not dfs(i):
                return []
        return order`
},

{
    id: 'bt-19',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    leetcodeUrl: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
    description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)).',
    language: 'python',
    solution: `class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        A, B = nums1, nums2
        if len(A) > len(B):
            A, B = B, A
        total = len(A) + len(B)
        half = total // 2
        lo, hi = 0, len(A)

        while lo <= hi:
            i = (lo + hi) // 2
            j = half - i
            Aleft = A[i-1] if i > 0 else float('-inf')
            Aright = A[i] if i < len(A) else float('inf')
            Bleft = B[j-1] if j > 0 else float('-inf')
            Bright = B[j] if j < len(B) else float('inf')

            if Aleft <= Bright and Bleft <= Aright:
                if total % 2:
                    return min(Aright, Bright)
                return (max(Aleft, Bleft) + min(Aright, Bright)) / 2
            elif Aleft > Bright:
                hi = i - 1
            else:
                lo = i + 1`
},

{
    id: 'bt-20',
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    leetcodeUrl: 'https://leetcode.com/problems/trapping-rain-water/',
    description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    language: 'python',
    solution: `class Solution:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0
        l, r = 0, len(height) - 1
        left_max, right_max = height[l], height[r]
        water = 0

        while l < r:
            if left_max <= right_max:
                l += 1
                left_max = max(left_max, height[l])
                water += left_max - height[l]
            else:
                r -= 1
                right_max = max(right_max, height[r])
                water += right_max - height[r]

        return water`
},

{
    id: 'bt-21',
    title: 'LRU Cache',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/lru-cache/',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class with get and put operations, each running in O(1) time.',
    language: 'python',
    solution: `class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.left = Node(0, 0)   # LRU end
        self.right = Node(0, 0)  # MRU end
        self.left.next = self.right
        self.right.prev = self.left

    def remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def insert(self, node):
        node.prev = self.right.prev
        node.next = self.right
        self.right.prev.next = node
        self.right.prev = node

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        self.cache[key] = Node(key, value)
        self.insert(self.cache[key])
        if len(self.cache) > self.cap:
            lru = self.left.next
            self.remove(lru)
            del self.cache[lru.key]`
},

{
    id: 'bt-22',
    title: 'Minimum Window Substring',
    difficulty: 'Hard',
    leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/',
    description: 'Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. Return empty string if no such window exists.',
    language: 'python',
    solution: `class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not t or not s:
            return ''
        need = Counter(t)
        have, total = 0, len(need)
        window = {}
        res, res_len = [-1, -1], float('inf')
        l = 0

        for r, ch in enumerate(s):
            window[ch] = window.get(ch, 0) + 1
            if ch in need and window[ch] == need[ch]:
                have += 1
            while have == total:
                if (r - l + 1) < res_len:
                    res = [l, r]
                    res_len = r - l + 1
                window[s[l]] -= 1
                if s[l] in need and window[s[l]] < need[s[l]]:
                    have -= 1
                l += 1

        l, r = res
        return s[l:r+1] if res_len != float('inf') else ''`
},

{
    id: 'bt-23',
    title: 'Number of Islands',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/number-of-islands/',
    description: 'Given an m x n 2D binary grid which represents a map of land and water, return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.',
    language: 'python',
    solution: `class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0
        rows, cols = len(grid), len(grid[0])
        count = 0

        def dfs(r, c):
            if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
                return
            grid[r][c] = '0'
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1':
                    dfs(r, c)
                    count += 1

        return count`
},

{
    id: 'bt-24',
    title: 'Jump Game II',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/jump-game-ii/',
    description: 'Given a 0-indexed array of integers nums where nums[i] represents the maximum jump length from index i, return the minimum number of jumps to reach nums[n-1]. You can always reach the last index.',
    language: 'python',
    solution: `class Solution:
    def jump(self, nums: List[int]) -> int:
        jumps = 0
        current_end = 0
        farthest = 0

        for i in range(len(nums) - 1):
            farthest = max(farthest, i + nums[i])
            if i == current_end:
                jumps += 1
                current_end = farthest
                if current_end >= len(nums) - 1:
                    break

        return jumps`
},
{
    id: 'bt-25',
    title: 'Rotate Image',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/rotate-image/',
    description: 'You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place.',
    language: 'python',
    solution: `class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)
        # Transpose
        for i in range(n):
            for j in range(i+1, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        # Reverse each row
        for i in range(n):
            matrix[i].reverse()`
},

{
    id: 'bt-26',
    title: 'Spiral Matrix',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/spiral-matrix/',
    description: 'Given an m x n matrix, return all elements of the matrix in spiral order.',
    language: 'python',
    solution: `class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        res = []
        top, bottom = 0, len(matrix) - 1
        left, right = 0, len(matrix[0]) - 1

        while top <= bottom and left <= right:
            for c in range(left, right + 1):
                res.append(matrix[top][c])
            top += 1
            for r in range(top, bottom + 1):
                res.append(matrix[r][right])
            right -= 1
            if top <= bottom:
                for c in range(right, left - 1, -1):
                    res.append(matrix[bottom][c])
                bottom -= 1
            if left <= right:
                for r in range(bottom, top - 1, -1):
                    res.append(matrix[r][left])
                left += 1

        return res`
},

{
    id: 'bt-27',
    title: 'Container With Most Water',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/',
    description: 'You are given an integer array height of length n. Find two lines that together with the x-axis form a container that holds the most water. Return the maximum amount of water a container can store.',
    language: 'python',
    solution: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        max_water = 0

        while l < r:
            water = (r - l) * min(height[l], height[r])
            max_water = max(max_water, water)
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1

        return max_water`
},

{
    id: 'bt-28',
    title: 'Find Median from Data Stream',
    difficulty: 'Hard',
    leetcodeUrl: 'https://leetcode.com/problems/find-median-from-data-stream/',
    description: 'The MedianFinder class should support adding integers from a data stream and finding the median of all elements so far. Implement addNum and findMedian in O(log n) and O(1) respectively.',
    language: 'python',
    solution: `class MedianFinder:
    def __init__(self):
        self.small = []  # max-heap (negated)
        self.large = []  # min-heap

    def addNum(self, num: int) -> None:
        heapq.heappush(self.small, -num)
        if self.small and self.large and (-self.small[0] > self.large[0]):
            heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.small) > len(self.large) + 1:
            heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`
},

{
    id: 'bt-29',
    title: 'Subsets II',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/subsets-ii/',
    description: 'Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets.',
    language: 'python',
    solution: `class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []

        def backtrack(start, current):
            res.append(current[:])
            for i in range(start, len(nums)):
                if i > start and nums[i] == nums[i-1]:
                    continue
                current.append(nums[i])
                backtrack(i + 1, current)
                current.pop()

        backtrack(0, [])
        return res`
},

{
    id: 'bt-30',
    title: 'Decode Ways',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/decode-ways/',
    description: 'A message containing letters A-Z can be encoded into numbers using a mapping. Given a string s containing only digits, return the number of ways to decode it.',
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
            one = int(s[i-1])
            two = int(s[i-2:i])
            if one != 0:
                dp[i] += dp[i-1]
            if 10 <= two <= 26:
                dp[i] += dp[i-2]

        return dp[n]`
},

{
    id: 'bt-31',
    title: 'Pacific Atlantic Water Flow',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
    description: 'Given an m x n matrix of heights, return a list of grid coordinates where rain water can flow to both the Pacific and Atlantic oceans.',
    language: 'python',
    solution: `class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        rows, cols = len(heights), len(heights[0])
        pac, atl = set(), set()

        def bfs(starts, visited):
            queue = deque(starts)
            visited.update(starts)
            while queue:
                r, c = queue.popleft()
                for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                    nr, nc = r+dr, c+dc
                    if (0 <= nr < rows and 0 <= nc < cols
                            and (nr, nc) not in visited
                            and heights[nr][nc] >= heights[r][c]):
                        visited.add((nr, nc))
                        queue.append((nr, nc))

        pac_starts = [(r, 0) for r in range(rows)] + [(0, c) for c in range(cols)]
        atl_starts = [(r, cols-1) for r in range(rows)] + [(rows-1, c) for c in range(cols)]
        bfs(pac_starts, pac)
        bfs(atl_starts, atl)

        return [[r, c] for r, c in pac & atl]`
},

{
    id: 'bt-32',
    title: 'Coin Change',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/coin-change/',
    description: 'Given an array of coin denominations and a total amount, return the fewest number of coins needed to make up that amount. Return -1 if the amount cannot be made up.',
    language: 'python',
    solution: `class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0

        for coin in coins:
            for amt in range(coin, amount + 1):
                dp[amt] = min(dp[amt], dp[amt - coin] + 1)

        return dp[amount] if dp[amount] != float('inf') else -1`
},

{
    id: 'bt-33',
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring/',
    description: 'Given a string s, return the longest palindromic substring in s.',
    language: 'python',
    solution: `class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ''
        res_len = 0

        for i in range(len(s)):
            # Odd length
            l, r = i, i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > res_len:
                    res = s[l:r+1]
                    res_len = r - l + 1
                l -= 1
                r += 1
            # Even length
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > res_len:
                    res = s[l:r+1]
                    res_len = r - l + 1
                l -= 1
                r += 1

        return res`
},

{
    id: 'bt-34',
    title: 'Graph Valid Tree',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/graph-valid-tree/',
    description: 'Given n nodes labeled from 0 to n-1 and a list of undirected edges, write a function to check whether these edges make up a valid tree.',
    language: 'python',
    solution: `class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) != n - 1:
            return False
        adj = defaultdict(list)
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        visited = set()

        def dfs(node, parent):
            visited.add(node)
            for nei in adj[node]:
                if nei == parent:
                    continue
                if nei in visited:
                    return False
                if not dfs(nei, node):
                    return False
            return True

        return dfs(0, -1) and len(visited) == n`
},
{
    id: 'bt-35',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/',
    description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
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
    id: 'bt-36',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/',
    description: 'Given an integer array nums, find the subarray which has the largest sum and return its sum. (Kadane\'s Algorithm)',
    language: 'python',
    solution: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = nums[0]
        current = nums[0]

        for num in nums[1:]:
            current = max(num, current + num)
            max_sum = max(max_sum, current)

        return max_sum`
},

{
    id: 'bt-37',
    title: 'House Robber',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/house-robber/',
    description: 'You are a robber planning to rob houses along a street. Adjacent houses have security systems. Given an integer array nums representing money in each house, return the maximum amount you can rob without alerting the police.',
    language: 'python',
    solution: `class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        prev2, prev1 = 0, 0

        for num in nums:
            curr = max(prev1, prev2 + num)
            prev2 = prev1
            prev1 = curr

        return prev1`
},

{
    id: 'bt-38',
    title: 'Combination Sum',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/combination-sum/',
    description: 'Given an array of distinct integers candidates and a target integer, return all unique combinations of candidates where the chosen numbers sum to target. The same number may be chosen from candidates an unlimited number of times.',
    language: 'python',
    solution: `class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        def backtrack(start, current, total):
            if total == target:
                res.append(current[:])
                return
            if total > target:
                return
            for i in range(start, len(candidates)):
                current.append(candidates[i])
                backtrack(i, current, total + candidates[i])
                current.pop()

        backtrack(0, [], 0)
        return res`
},

{
    id: 'bt-39',
    title: 'Validate Binary Search Tree',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree/',
    description: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST has left subtree nodes less than the node, right subtree nodes greater, and both subtrees are also valid BSTs.',
    language: 'python',
    solution: `class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        def validate(node, min_val, max_val):
            if not node:
                return True
            if node.val <= min_val or node.val >= max_val:
                return False
            return (validate(node.left, min_val, node.val) and
                    validate(node.right, node.val, max_val))

        return validate(root, float('-inf'), float('inf'))`
},

{
    id: 'bt-40',
    title: 'Kth Smallest Element in a BST',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
    description: 'Given the root of a binary search tree and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.',
    language: 'python',
    solution: `class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        stack = []
        curr = root

        while curr or stack:
            while curr:
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            k -= 1
            if k == 0:
                return curr.val
            curr = curr.right`
},

{
    id: 'bt-41',
    title: 'Top K Frequent Elements',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/',
    description: 'Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order. Your algorithm must run in better than O(n log n) time complexity.',
    language: 'python',
    solution: `class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums)
        buckets = [[] for _ in range(len(nums) + 1)]

        for num, freq in count.items():
            buckets[freq].append(num)

        res = []
        for i in range(len(buckets) - 1, 0, -1):
            for num in buckets[i]:
                res.append(num)
                if len(res) == k:
                    return res`
},

{
    id: 'bt-42',
    title: 'Unique Paths',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/unique-paths/',
    description: 'There is a robot on an m x n grid. The robot can only move either down or right. Given two integers m and n, return the number of possible unique paths the robot can take to reach the bottom-right corner.',
    language: 'python',
    solution: `class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [1] * n

        for _ in range(1, m):
            for j in range(1, n):
                dp[j] += dp[j - 1]

        return dp[n - 1]`
},

{
    id: 'bt-43',
    title: 'Meeting Rooms II',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms-ii/',
    description: 'Given an array of meeting time intervals where intervals[i] = [start, end], return the minimum number of conference rooms required to hold all meetings.',
    language: 'python',
    solution: `class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        start_times = sorted(i[0] for i in intervals)
        end_times = sorted(i[1] for i in intervals)

        rooms = 0
        e_ptr = 0
        for s in start_times:
            if s < end_times[e_ptr]:
                rooms += 1
            else:
                e_ptr += 1

        return rooms`
},

{
    id: 'bt-44',
    title: 'Longest Common Subsequence',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/longest-common-subsequence/',
    description: 'Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence is a sequence derived from another string by deleting some characters without changing the relative order of the remaining characters.',
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

        return dp[m][n]`
},
{
    id: 'bt-45',
    title: 'Palindrome Partitioning',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/palindrome-partitioning/',
    description: 'Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.',
    language: 'python',
    solution: `class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []

        def isPalin(sub):
            return sub == sub[::-1]

        def backtrack(start, current):
            if start == len(s):
                res.append(current[:])
                return
            for end in range(start + 1, len(s) + 1):
                if isPalin(s[start:end]):
                    current.append(s[start:end])
                    backtrack(end, current)
                    current.pop()

        backtrack(0, [])
        return res`
},

{
    id: 'bt-46',
    title: 'Largest Rectangle in Histogram',
    difficulty: 'Hard',
    leetcodeUrl: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
    description: 'Given an array of integers heights representing the histogram bar heights where the width of each bar is 1, return the area of the largest rectangle in the histogram.',
    language: 'python',
    solution: `class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []  # (index, height)
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

{
    id: 'bt-47',
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
    description: 'Given the root of a binary tree, return the level order traversal of its nodes values (i.e., from left to right, level by level).',
    language: 'python',
    solution: `class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        res = []
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
            res.append(level)

        return res`
},

{
    id: 'bt-48',
    title: 'Maximum Product Subarray',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/',
    description: 'Given an integer array nums, find a subarray that has the largest product, and return the product. The test cases are generated so that the answer will fit in a 32-bit integer.',
    language: 'python',
    solution: `class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = max(nums)
        cur_min, cur_max = 1, 1

        for n in nums:
            if n == 0:
                cur_min, cur_max = 1, 1
                continue
            tmp = cur_max * n
            cur_max = max(n * cur_max, n * cur_min, n)
            cur_min = min(tmp, n * cur_min, n)
            res = max(res, cur_max)

        return res`
},

{
    id: 'bt-49',
    title: 'Word Break',
    difficulty: 'Medium',
    leetcodeUrl: 'https://leetcode.com/problems/word-break/',
    description: 'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.',
    language: 'python',
    solution: `class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        word_set = set(wordDict)
        n = len(s)
        dp = [False] * (n + 1)
        dp[0] = True

        for i in range(1, n + 1):
            for j in range(i):
                if dp[j] and s[j:i] in word_set:
                    dp[i] = True
                    break

        return dp[n]`
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
        third = float('-inf')
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
        description: "Design a class that collects daily price quotes for a stock and returns the span of that stock's price for the current day.",
        language: 'python',
        solution: `class StockSpanner:
    def __init__(self):
        self.stack = []

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
        stack = []
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
        description: 'The min-product of an array is equal to the minimum value multiplied by the array\'s sum. Return the maximum min-product of any non-empty subarray of nums modulo 1e9+7.',
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
        stack = []
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
        self.available = []

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
                stack.pop()
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
      {
        id: 'ms-71',
        title: 'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/',
        description: 'Given an array nums and an integer limit, return the size of the longest subarray such that the absolute difference between any two elements is less than or equal to limit.',
        language: 'python',
        solution: `class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        from collections import deque
        max_dq = deque()
        min_dq = deque()
        left = 0
        result = 0
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
            result = max(result, right - left + 1)
        return result`
      },
      {
        id: 'ms-72',
        title: 'Shortest Subarray with Sum at Least K',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/',
        description: 'Given an integer array nums and an integer k, return the length of the shortest non-empty subarray with a sum of at least k. If no such subarray exists, return -1.',
        language: 'python',
        solution: `class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        from collections import deque
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]
        dq = deque()
        result = n + 1
        for i in range(n + 1):
            while dq and prefix[i] - prefix[dq[0]] >= k:
                result = min(result, i - dq.popleft())
            while dq and prefix[dq[-1]] >= prefix[i]:
                dq.pop()
            dq.append(i)
        return result if result <= n else -1`
      },
      {
        id: 'ms-73',
        title: 'Maximum Sum of Two Non-Overlapping Subarrays',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/',
        description: 'Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.',
        language: 'python',
        solution: `class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        def helper(L, M):
            n = len(nums)
            prefix = [0] * (n + 1)
            for i in range(n):
                prefix[i + 1] = prefix[i] + nums[i]
            result = 0
            max_L = 0
            for i in range(L + M, n + 1):
                max_L = max(max_L, prefix[i - M] - prefix[i - M - L])
                result = max(result, max_L + prefix[i] - prefix[i - M])
            return result
        return max(helper(firstLen, secondLen), helper(secondLen, firstLen))`
      },
      {
        id: 'ms-74',
        title: 'Maximum Product Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/',
        description: 'Given an integer array nums, find a subarray that has the largest product and return the product. The answer will fit in a 32-bit integer.',
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
        id: 'ms-75',
        title: 'Odd Even Jump',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/odd-even-jump/',
        description: 'You are given an integer array arr. From each index i you can jump to j where arr[j] is the smallest value >= arr[i] on odd jumps, or largest value <= arr[i] on even jumps. Return how many indices allow you to reach the end.',
        language: 'python',
        solution: `class Solution:
    def oddEvenJumps(self, arr: List[int]) -> int:
        n = len(arr)
        def make_next(sorted_indices):
            result = [None] * n
            stack = []
            for i in sorted_indices:
                while stack and stack[-1] < i:
                    result[stack.pop()] = i
                stack.append(i)
            return result
        odd_next = make_next(sorted(range(n), key=lambda i: (arr[i], i)))
        even_next = make_next(sorted(range(n), key=lambda i: (-arr[i], i)))
        odd = [False] * n
        even = [False] * n
        odd[-1] = even[-1] = True
        for i in range(n - 2, -1, -1):
            if odd_next[i] is not None:
                odd[i] = even[odd_next[i]]
            if even_next[i] is not None:
                even[i] = odd[even_next[i]]
        return sum(odd)`
      },
      {
        id: 'ms-76',
        title: 'Minimum Number of Increments on Subarrays',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-number-of-increments-on-subarrays/',
        description: 'Given an array target, you start with an all-zero array. In one operation you can increment any contiguous subarray by 1. Return the minimum number of operations to form target.',
        language: 'python',
        solution: `class Solution:
    def minNumberOperations(self, target: List[int]) -> int:
        result = target[0]
        for i in range(1, len(target)):
            if target[i] > target[i - 1]:
                result += target[i] - target[i - 1]
        return result`
      },
      {
        id: 'ms-77',
        title: 'Maximum Number of Robots Within Budget',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-robots-within-budget/',
        description: 'You have n robots each with chargeTimes and runningCosts. The total cost of running k consecutive robots is max(chargeTimes) + k * sum(runningCosts). Return the max k robots you can run within budget.',
        language: 'python',
        solution: `class Solution:
    def maximumRobots(self, chargeTimes: List[int], runningCosts: List[int], budget: int) -> int:
        from collections import deque
        dq = deque()
        result = 0
        total = 0
        left = 0
        for right in range(len(chargeTimes)):
            total += runningCosts[right]
            while dq and chargeTimes[dq[-1]] <= chargeTimes[right]:
                dq.pop()
            dq.append(right)
            k = right - left + 1
            while dq and chargeTimes[dq[0]] + k * total > budget:
                total -= runningCosts[left]
                if dq[0] == left:
                    dq.popleft()
                left += 1
                k -= 1
            result = max(result, right - left + 1)
        return result`
      },
      {
        id: 'ms-78',
        title: 'Minimum Cost to Cut a Stick',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-cost-to-cut-a-stick/',
        description: 'Given a stick of length n and an array cuts, you can perform cuts in any order. The cost of a cut is the length of the stick being cut. Return the minimum total cost to make all cuts.',
        language: 'python',
        solution: `class Solution:
    def minCost(self, n: int, cuts: List[int]) -> int:
        cuts = sorted([0] + cuts + [n])
        m = len(cuts)
        from functools import lru_cache
        @lru_cache(None)
        def dp(i, j):
            if j - i <= 1:
                return 0
            return min(
                cuts[j] - cuts[i] + dp(i, k) + dp(k, j)
                for k in range(i + 1, j)
            )
        return dp(0, m - 1)`
      },
      {
        id: 'ms-79',
        title: 'Maximum Score From Performing Multiplication Operations',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/',
        description: 'Given arrays nums and multipliers, at each step pick the first or last element of nums, multiply it with multipliers[i], add to score, and remove it. Return the maximum score after multipliers.length operations.',
        language: 'python',
        solution: `class Solution:
    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:
        from functools import lru_cache
        n = len(nums)
        m = len(multipliers)
        @lru_cache(None)
        def dp(i, left):
            if i == m:
                return 0
            right = n - 1 - (i - left)
            mult = multipliers[i]
            pick_left = mult * nums[left] + dp(i + 1, left + 1)
            pick_right = mult * nums[right] + dp(i + 1, left)
            return max(pick_left, pick_right)
        return dp(0, 0)`
      },
      {
        id: 'ms-80',
        title: 'Number of Subarrays with Bounded Maximum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/',
        description: 'Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the maximum element is in the range [left, right].',
        language: 'python',
        solution: `class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        def count(bound):
            result = 0
            curr = 0
            for num in nums:
                curr = curr + 1 if num <= bound else 0
                result += curr
            return result
        return count(right) - count(left - 1)`
      },
      {
        id: 'ms-81',
        title: 'Maximum Erasure Value',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-erasure-value/',
        description: 'Given an array nums, find the maximum sum of a subarray with all unique elements.',
        language: 'python',
        solution: `class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        seen = {}
        left = 0
        curr_sum = 0
        result = 0
        for right, num in enumerate(nums):
            if num in seen and seen[num] >= left:
                left = seen[num] + 1
            curr_sum = sum(nums[left:right + 1])
            result = max(result, curr_sum)
            seen[num] = right
        return result`
      },
      {
        id: 'ms-82',
        title: 'Minimum Window Substring',
        difficulty: 'Hard',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/',
        description: 'Given strings s and t, return the minimum window substring of s that contains all characters of t. If no such window exists return empty string.',
        language: 'python',
        solution: `class Solution:
    def minWindow(self, s: str, t: str) -> str:
        from collections import Counter
        need = Counter(t)
        missing = len(t)
        left = 0
        result = ""
        for right, ch in enumerate(s):
            if need[ch] > 0:
                missing -= 1
            need[ch] -= 1
            if missing == 0:
                while need[s[left]] < 0:
                    need[s[left]] += 1
                    left += 1
                if not result or right - left + 1 < len(result):
                    result = s[left:right + 1]
                need[s[left]] += 1
                missing += 1
                left += 1
        return result`
      },
      {
        id: 'ms-83',
        title: 'Fruit Into Baskets',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/fruit-into-baskets/',
        description: 'Given an array fruits where fruits[i] is the type of fruit on tree i, you have two baskets and each basket can hold only one type of fruit. Return the maximum number of fruits you can pick from a subarray using at most 2 types.',
        language: 'python',
        solution: `class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        from collections import defaultdict
        basket = defaultdict(int)
        left = 0
        result = 0
        for right, fruit in enumerate(fruits):
            basket[fruit] += 1
            while len(basket) > 2:
                basket[fruits[left]] -= 1
                if basket[fruits[left]] == 0:
                    del basket[fruits[left]]
                left += 1
            result = max(result, right - left + 1)
        return result`
      },
      {
        id: 'ms-84',
        title: 'Subarray Product Less Than K',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/subarray-product-less-than-k/',
        description: 'Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements is strictly less than k.',
        language: 'python',
        solution: `class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        prod = 1
        left = 0
        result = 0
        for right, num in enumerate(nums):
            prod *= num
            while prod >= k:
                prod //= nums[left]
                left += 1
            result += right - left + 1
        return result`
      },
      {
        id: 'ms-85',
        title: 'Count Number of Nice Subarrays',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/count-number-of-nice-subarrays/',
        description: 'Given an array nums of integers and integer k, a subarray is nice if there are exactly k odd numbers in it. Return the number of nice subarrays.',
        language: 'python',
        solution: `class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        from collections import defaultdict
        count = defaultdict(int)
        count[0] = 1
        odd_count = 0
        result = 0
        for num in nums:
            odd_count += num % 2
            result += count[odd_count - k]
            count[odd_count] += 1
        return result`
      },
      {
        id: 'ms-86',
        title: 'Maximum Points You Can Obtain from Cards',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/',
        description: 'Given an array cardPoints and integer k, you can take k cards from the beginning or end of the array. Return the maximum score you can obtain.',
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
        id: 'ms-87',
        title: 'Minimum Size Subarray Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
        description: 'Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray return 0.',
        language: 'python',
        solution: `class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        curr_sum = 0
        result = float('inf')
        for right in range(len(nums)):
            curr_sum += nums[right]
            while curr_sum >= target:
                result = min(result, right - left + 1)
                curr_sum -= nums[left]
                left += 1
        return 0 if result == float('inf') else result`
      },
      {
        id: 'ms-88',
        title: 'Longest Substring with At Most K Distinct Characters',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/',
        description: 'Given a string s and integer k, return the length of the longest substring that contains at most k distinct characters.',
        language: 'python',
        solution: `class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        from collections import defaultdict
        freq = defaultdict(int)
        left = 0
        result = 0
        for right, ch in enumerate(s):
            freq[ch] += 1
            while len(freq) > k:
                freq[s[left]] -= 1
                if freq[s[left]] == 0:
                    del freq[s[left]]
                left += 1
            result = max(result, right - left + 1)
        return result`
      },
      {
        id: 'ms-89',
        title: 'Grumpy Bookstore Owner',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/grumpy-bookstore-owner/',
        description: 'A bookstore owner has customers array and grumpy array. When grumpy[i]=1, customers are lost. Owner can suppress grumpiness for minutes consecutive minutes. Return maximum satisfied customers.',
        language: 'python',
        solution: `class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        base = sum(c for c, g in zip(customers, grumpy) if g == 0)
        gain = sum(customers[:minutes][i] * grumpy[:minutes][i] for i in range(minutes))
        max_gain = gain
        for i in range(minutes, len(customers)):
            gain += customers[i] * grumpy[i]
            gain -= customers[i - minutes] * grumpy[i - minutes]
            max_gain = max(max_gain, gain)
        return base + max_gain`
      },
      {
        id: 'ms-90',
        title: 'Maximum Average Subarray I',
        difficulty: 'Easy',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-average-subarray-i/',
        description: 'Given an integer array nums and integer k, find the contiguous subarray of length k that has the maximum average value and return this value.',
        language: 'python',
        solution: `class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        curr_sum = sum(nums[:k])
        max_sum = curr_sum
        for i in range(k, len(nums)):
            curr_sum += nums[i] - nums[i - k]
            max_sum = max(max_sum, curr_sum)
        return max_sum / k`
      },
      {
        id: 'ms-91',
        title: 'Permutation in String',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/permutation-in-string/',
        description: 'Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. In other words, return true if one of s1 permutations is a substring of s2.',
        language: 'python',
        solution: `class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        from collections import Counter
        need = Counter(s1)
        window = Counter()
        left = 0
        matches = 0
        for right, ch in enumerate(s2):
            window[ch] += 1
            if window[ch] == need[ch]:
                matches += 1
            if right - left + 1 > len(s1):
                left_ch = s2[left]
                if window[left_ch] == need[left_ch]:
                    matches -= 1
                window[left_ch] -= 1
                left += 1
        return matches == len(need)`
      },
      {
        id: 'ms-92',
        title: 'Find All Anagrams in a String',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
        description: 'Given strings s and p, return an array of all the start indices of p anagrams in s. An anagram is a permutation of characters.',
        language: 'python',
        solution: `class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        from collections import Counter
        need = Counter(p)
        window = Counter()
        left = 0
        matches = 0
        result = []
        for right, ch in enumerate(s):
            window[ch] += 1
            if window[ch] == need[ch]:
                matches += 1
            if right - left + 1 > len(p):
                left_ch = s[left]
                if window[left_ch] == need[left_ch]:
                    matches -= 1
                window[left_ch] -= 1
                left += 1
            if matches == len(need):
                result.append(left)
        return result`
      },
      {
        id: 'ms-93',
        title: 'Longest Repeating Character Replacement',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
        description: 'Given a string s and integer k, you can replace at most k characters. Return the length of the longest substring containing the same letter after replacements.',
        language: 'python',
        solution: `class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        from collections import defaultdict
        freq = defaultdict(int)
        left = 0
        max_freq = 0
        result = 0
        for right, ch in enumerate(s):
            freq[ch] += 1
            max_freq = max(max_freq, freq[ch])
            while (right - left + 1) - max_freq > k:
                freq[s[left]] -= 1
                left += 1
            result = max(result, right - left + 1)
        return result`
      },
      {
        id: 'ms-94',
        title: 'Minimum Operations to Reduce X to Zero',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/',
        description: 'Given an integer array nums and integer x, remove the minimum number of elements from the front or back of the array such that the remaining elements sum equals sum(nums) - x. Return minimum operations or -1.',
        language: 'python',
        solution: `class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        target = sum(nums) - x
        if target < 0:
            return -1
        if target == 0:
            return len(nums)
        left = 0
        curr_sum = 0
        max_len = -1
        for right in range(len(nums)):
            curr_sum += nums[right]
            while curr_sum > target and left <= right:
                curr_sum -= nums[left]
                left += 1
            if curr_sum == target:
                max_len = max(max_len, right - left + 1)
        return -1 if max_len == -1 else len(nums) - max_len`
      },
      {
        id: 'ms-95',
        title: 'Maximum Number of Vowels in a Substring of Given Length',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/',
        description: 'Given a string s and integer k, return the maximum number of vowel letters in any substring of s with length k.',
        language: 'python',
        solution: `class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set('aeiou')
        curr = sum(1 for ch in s[:k] if ch in vowels)
        result = curr
        for i in range(k, len(s)):
            curr += (s[i] in vowels) - (s[i - k] in vowels)
            result = max(result, curr)
        return result`
      },
      {
        id: 'ms-96',
        title: 'Longest Subarray of 1s After Deleting One Element',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/',
        description: 'Given a binary array nums, you must delete exactly one element. Return the size of the longest non-empty subarray containing only 1s in the resulting array.',
        language: 'python',
        solution: `class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        left = 0
        zeros = 0
        result = 0
        for right in range(len(nums)):
            if nums[right] == 0:
                zeros += 1
            while zeros > 1:
                if nums[left] == 0:
                    zeros -= 1
                left += 1
            result = max(result, right - left)
        return result`
      },
      {
        id: 'ms-97',
        title: 'Max Consecutive Ones III',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/max-consecutive-ones-iii/',
        description: 'Given a binary array nums and an integer k, return the maximum number of consecutive 1s in the array if you can flip at most k 0s.',
        language: 'python',
        solution: `class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        zeros = 0
        result = 0
        for right in range(len(nums)):
            if nums[right] == 0:
                zeros += 1
            while zeros > k:
                if nums[left] == 0:
                    zeros -= 1
                left += 1
            result = max(result, right - left + 1)
        return result`
      },
      {
        id: 'ms-98',
        title: 'Number of Substrings Containing All Three Characters',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/',
        description: 'Given a string s consisting only of characters a, b and c, return the number of substrings containing at least one occurrence of all these characters.',
        language: 'python',
        solution: `class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        last = {'a': -1, 'b': -1, 'c': -1}
        result = 0
        for i, ch in enumerate(s):
            last[ch] = i
            result += 1 + min(last['a'], last['b'], last['c'])
        return result`
      },
      {
        id: 'ms-99',
        title: 'Binary Subarrays With Sum',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/binary-subarrays-with-sum/',
        description: 'Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum equal to goal.',
        language: 'python',
        solution: `class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        from collections import defaultdict
        prefix = defaultdict(int)
        prefix[0] = 1
        curr_sum = 0
        result = 0
        for num in nums:
            curr_sum += num
            result += prefix[curr_sum - goal]
            prefix[curr_sum] += 1
        return result`
      },
      {
        id: 'ms-100',
        title: 'Longest Nice Subarray',
        difficulty: 'Medium',
        leetcodeUrl: 'https://leetcode.com/problems/longest-nice-subarray/',
        description: 'Given an array nums of positive integers, a subarray is nice if the bitwise AND of every pair of elements in different positions is 0. Return the length of the longest nice subarray.',
        language: 'python',
        solution: `class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        left = 0
        used_bits = 0
        result = 0
        for right in range(len(nums)):
            while used_bits & nums[right]:
                used_bits ^= nums[left]
                left += 1
            used_bits |= nums[right]
            result = max(result, right - left + 1)
        return result`
      },
    ]
  }
];