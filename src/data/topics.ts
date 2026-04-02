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
      }
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
}
]

    ]
  }
];
