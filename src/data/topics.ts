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
      }
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
      }
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
      }
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
      }
    ]
  }
];
