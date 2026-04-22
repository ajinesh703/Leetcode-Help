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
        return Counter(s) == Counter(t)`
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
        return result`
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
        return list(anagram_map.values())`
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
        return prefix`
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
        return Counter(s) == Counter(t)`
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
        return -1`
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
        return filtered == filtered[::-1]`
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
        
        return res`
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
        
        return list(mp.values())`
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
        
        return res`
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
        
        return s[start:end]`
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
        
        return max(min(num, INT_MAX), INT_MIN)`
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
        return result`
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
        
        return "".join(rows)`
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
      }
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
