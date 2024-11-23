
import React, { useState, useEffect } from 'react';
import './DashboardScreen.css';

const Dashboard = () => {
  const [activeDay, setActiveDay] = useState(null);
  const [solvedProblems, setSolvedProblems] = useState({});
  const [progress, setProgress] = useState(0);
  const [globalRank, setGlobalRank] = useState(0);
  const [streak, setStreak] = useState(0);

 
  const problems = {
    1: [
      { name: 'Two Sum', difficulty: '  Easy', leetcode: 'https://leetcode.com/problems/two-sum/', gfg: 'https://practice.geeksforgeeks.org/problems/key-pair5616/1' },
      { name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', gfg: 'https://practice.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1' },
      { name: 'Contains Duplicate', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/contains-duplicate/', gfg: 'https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1' },
      { name: 'Product of Array Except Self', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/product-of-array-except-self/', gfg: 'https://practice.geeksforgeeks.org/problems/product-array-puzzle4525/1' },
      { name: 'Maximum Subarray', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/maximum-subarray/', gfg: 'https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1' },
    ],
    2: [
      { name: 'Maximum Product Subarray', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/maximum-product-subarray/', gfg: 'https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1' },
      { name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', gfg: 'https://practice.geeksforgeeks.org/problems/minimum-element-in-a-sorted-and-rotated-array3611/1' },
      { name: 'Search in Rotated Sorted Array', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', gfg: 'https://practice.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1' },
      { name: '3Sum', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/3sum/', gfg: 'https://practice.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1' },
      { name: 'Container With Most Water', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/container-with-most-water/', gfg: 'https://practice.geeksforgeeks.org/problems/container-with-most-water0535/1' },
    ],
    3: [
      { name: 'Sum of Two Integers', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/sum-of-two-integers/', gfg: 'https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-two-arrays2408/1' },
      { name: 'Number of 1 Bits', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/number-of-1-bits/', gfg: 'https://practice.geeksforgeeks.org/problems/set-bits0143/1' },
      { name: 'Counting Bits', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/counting-bits/', gfg: 'https://practice.geeksforgeeks.org /problems/number-of-1-bits-in-binary-representation-of-a-number/1' },
      { name: 'Missing Number', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/missing-number/', gfg: 'https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1' },
      { name: 'Find the Duplicate Number', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/find-the-duplicate-number/', gfg: 'https://practice.geeksforgeeks.org/problems/find-duplicate-in-array/1' },
    ],
    4: [
      { name: 'Reverse Linked List', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/reverse-linked-list/', gfg: 'https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1' },
      { name: 'Merge Two Sorted Lists', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/merge-two-sorted-lists/', gfg: 'https://practice.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1' },
      { name: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', gfg: 'https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array/1' },
      { name: 'Remove Element', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/remove-element/', gfg: 'https://practice.geeksforgeeks.org/problems/remove-element-from-array/1' },
      { name: 'Search Insert Position', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/search-insert-position/', gfg: 'https://practice.geeksforgeeks.org/problems/search-insert-position-in-sorted-array/1' },
    ],
    5: [
      { name: 'Valid Anagram', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/valid-anagram/', gfg: 'https://practice.geeksforgeeks.org/problems/anagram-1587115620/1' },
      { name: 'Group Anagrams', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/group-anagrams/', gfg: 'https://practice.geeksforgeeks.org/problems/anagrams-1587115620/1' },
      { name: 'Valid Palindrome', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/valid-palindrome/', gfg: 'https://practice.geeksforgeeks.org/problems/palindrome-1587115620/1' },
      { name: 'Longest Common Prefix', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/longest-common-prefix/', gfg: 'https://practice.geeksforgeeks.org/problems/longest-common-prefix-1587115620/1' },
      { name: 'Implement strStr()', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/implement-strstr/', gfg: 'https://practice.geeksforgeeks.org/problems/implement-strstr-1587115620/1' },
    ],
    6: [
      { name: 'Search in a Binary Search Tree', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/search-in-a-binary-search-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/search-in-a-bst/1' },
      { name: 'Validate Binary Search Tree', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/validate-binary-search-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/validate-bst/1' },
      { name: 'Insert into a Binary Search Tree', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/insert-into-a-binary-search-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/insert-a-node-in-a-bst/1' },
      { name: 'Delete Node in a Binary Search Tree', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/delete-node-in-a-binary-search-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/delete-a-node-in-a-bst/1' },
      { name: 'Lowest Common Ancestor of a Binary Search Tree', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1' },
    ],
    7: [
      { name: 'Symmetric Tree', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/symmetric-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/symmetric-tree/1' },
      { name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1' },
      { name: 'Minimum Depth of Binary Tree', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/minimum-depth-of-binary-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/minimum-depth-of-binary-tree/1' },
      { name: 'Balanced Binary Tree', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/balanced-binary-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1' },
      { name: 'Diameter of Binary Tree', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/diameter-of-binary-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1' },
    ],
    8: [
      { name: 'Subtree of Another Tree', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/subtree-of-another-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/check-if-tree-is-subtree-of-another-tree/1' },
      { name: 'Flatten Binary Tree to Linked List', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/', gfg: 'https://practice.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1' },
      { name: 'Binary Tree Paths', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/binary-tree-paths/', gfg: 'https://practice.geeksforgeeks.org/problems/root-to-leaf-paths/1' },
      { name: 'Sum of Left Leaves', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/sum-of-left-leaves/', gfg: 'https://practice.geeksforgeeks.org/problems/sum-of-left-leaf-nodes/1' },
      { name: 'Path Sum', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/path-sum/', gfg: 'https://practice.geeksforgeeks.org/problems/has-path-sum/1' },
    ],
    9: [
      { name: 'Path Sum II', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/path-sum-ii/', gfg: 'https://practice.geeksforgeeks.org/problems/path-sum-ii/1' },
      { name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', gfg: 'https://practice.geeksforgeeks.org/problems/level-order-traversal/1' },
      { name: 'Binary Tree Zigzag Level Order Traversal', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/', gfg: 'https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1' },
      { name: 'Average of Levels in Binary Tree', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/average-of-levels-in-binary-tree/', gfg: 'https://practice.geeksforgeeks.org/problems/average-of-levels-in-binary-tree/1' },
      { name: 'Find Bottom Left Tree Value', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/find-bottom-left-tree-value/', gfg: 'https://practice.geeksforgeeks.org/problems/find-bottom-left-tree-value/1' },
    ],
    10: [
      { name: 'Validate IP Address', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/validate-ip-address/', gfg: 'https://practice.geeksforgeeks.org/problems/validate-ip-address/1' },
      { name: 'Defanging an IP Address', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/defanging-an-ip-address/', gfg: 'https://practice.geeksforgeeks.org/problems/defanging-an-ip-address/1' },
      { name: 'To Lower Case', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/to-lower-case/', gfg: 'https://practice.geeksforgeeks.org/problems/to-lower-case/1' },
      { name: 'Excel Sheet Column Number', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/excel-sheet-column-number/', gfg: 'https://practice.geeksforgeeks.org/problems/excel-sheet-column-number/1' },
      { name: 'Excel Sheet Column Title', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/excel-sheet-column-title/', gfg: 'https://practice.ge eksforgeeks.org/problems/excel-sheet-column-title/1' },
    ],
    11: [
      { name: 'Add Binary', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/add-binary/', gfg: 'https://practice.geeksforgeeks.org/problems/add-binary-strings/1' },
      { name: 'Add Strings', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/add-strings/', gfg: 'https://practice.geeksforgeeks.org/problems/add-strings/1' },
      { name: 'Multiply Strings', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/multiply-strings/', gfg: 'https://practice.geeksforgeeks.org/problems/multiply-strings/1' },
      { name: 'Plus One', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/plus-one/', gfg: 'https://practice.geeksforgeeks.org/problems/plus-one/1' },
      { name: 'Number of Segments in a String', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/number-of-segments-in-a-string/', gfg: 'https://practice.geeksforgeeks.org/problems/number-of-segments-in-a-string/1' },
    ],
    12: [
      { name: 'Implement Queue using Stacks', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/implement-queue-using-stacks/', gfg: 'https://practice.geeksforgeeks.org/problems/implement-queue-using-stacks/1' },
      { name: 'Implement Stack using Queues', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/implement-stack-using-queues/', gfg: 'https://practice.geeksforgeeks.org/problems/implement-stack-using-queues/1' },
      { name: 'Min Stack', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/min-stack/', gfg: 'https://practice.geeksforgeeks.org/problems/min-stack/1' },
      { name: 'Design Circular Queue', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/design-circular-queue/', gfg: 'https://practice.geeksforgeeks.org/problems/design-circular-queue/1' },
      { name: 'Design Circular Deque', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/design-circular-deque/', gfg: 'https://practice.geeksforgeeks.org/problems/design-circular-deque/1' },
    ],
    13: [
      { name: 'Min Heap', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/min-heap/', gfg: 'https://practice.geeksforgeeks.org/problems/min-heap/1' },
      { name: 'Max Heap', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/max-heap/', gfg: 'https://practice.geeksforgeeks.org/problems/max-heap/1' },
      { name: 'Heapify', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/heapify/', gfg: 'https://practice.geeksforgeeks.org/problems/heapify/1' },
      { name: 'Merge K Sorted Lists', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/merge-k-sorted-lists/', gfg: 'https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1' },
      { name: 'Top K Frequent Elements', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/top-k-frequent-elements/', gfg: 'https://practice.geeksforgeeks.org/problems/top-k-frequent-elements/1' },
    ],
    14: [
      { name: 'Find Median from Data Stream', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/find-median-from-data-stream/', gfg: 'https://practice.geeksforgeeks.org/problems/find-median-from-data-stream/1' },
      { name: 'Sliding Window Maximum', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/sliding-window-maximum/', gfg: 'https://practice.geeksforgeeks.org/problems/sliding-window-maximum/1' },
      { name: 'Sliding Window Median', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/sliding-window-median/', gfg: 'https://practice.geeksforgeeks.org/problems/sliding-window-median/1' },
      { name: 'Kth Largest Element in an Array', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', gfg: 'https://practice.geeksforgeeks.org/problems/kth-largest-element-in-an-array/1' },
      { name: 'Kth Smallest Element in a Sorted Matrix', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/', gfg: 'https://practice.geeksforgeeks.org/problems/kth-smallest-element-in-a-sorted-matrix/1' },
    ],
    15: [
      { name: 'Merge Two Sorted Lists', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/merge-two-sorted-lists/', gfg: 'https://practice.geeksforgeeks.org/problems/merge-two-sorted-lists/1' },
      { name: 'Merge K Sorted Lists', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/merge-k-sorted-lists/', gfg: 'https://practice.geeksforgeeks.org/problems/merge-k-sorted-lists/1' },
      { name: 'Sort List', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/sort-list/', gfg: 'https://practice.geeksforgeeks.org/problems/sort-list/1' },
      { name: 'Insertion Sort List', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/insertion-sort-list/', gfg: 'https://practice.geeksforgeeks.org/problems/insertion-sort-list/1' },
      { name: 'Partition List', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/partition-list/', gfg: 'https://practice.geeksforgeeks.org/problems/partition-list/1' },
    ],
    16: [
      { name: 'Reverse Linked List', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/reverse-linked-list/', gfg: 'https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1' },
      { name: 'Reverse Linked List II', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/reverse-linked-list-ii/', gfg: 'https://practice.geeksforgeeks.org/problems/reverse-linked-list-ii/1' },
      { name: 'Rotate List', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/rotate-list/', gfg: 'https://practice.geeksforgeeks.org/problems/rotate-list/1' },
      { name: 'Swap Nodes in Pairs', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/swap-nodes-in-pairs/', gfg: 'https://practice.geeksforgeeks.org/problems/swap-nodes-in-pairs/1' },
      { name: 'Remove Linked List Elements', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/remove-linked-list-elements/', gfg: 'https://practice.geeksforgeeks.org/problems/remove-linked-list-elements/1' },
    ],
    17: [
      { name: 'Odd Even Linked List', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/odd-even-linked-list/', gfg: 'https://practice.geeksforgeeks.org/problems/odd-even-linked-list/1' },
      { name: 'Palindrome Linked List', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/palindrome-linked-list/', gfg: 'https://practice.geeksforgeeks.org/problems/palindrome-linked-list/1' },
      { name: 'Intersection of Two Linked Lists', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/intersection-of-two-linked-lists/', gfg: 'https://practice.geeksforgeeks.org/problems/intersection-of-two-linked-lists/1' },
      { name: 'Linked List Cycle', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/linked-list-cycle/', gfg: 'https://practice.geeksforgeeks.org/problems/linked-list-cycle/1' },
      { name: 'Linked List Cycle II', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/linked-list-cycle-ii/', gfg: 'https://practice.geeksforgeeks.org/problems/linked-list-cycle-ii/1' },
    ],
    18: [
      { name: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', gfg: 'https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array/1' },
      { name: 'Remove Duplicates from Sorted Array II', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/', gfg: 'https://practice.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array-ii/1' },
      { name: 'Search in Rotated Sorted Array', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', gfg: 'https:// practice.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1' },
      { name: 'Search in Rotated Sorted Array II', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/', gfg: 'https://practice.geeksforgeeks.org/problems/search-in-a-rotated-array-ii/1' },
      { name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', gfg: 'https://practice.geeksforgeeks.org/problems/minimum-element-in-a-sorted-and-rotated-array3611/1' },
    ],
    19: [
      { name: 'Search Insert Position', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/search-insert-position/', gfg: 'https://practice.geeksforgeeks.org/problems/search-insert-position-in-sorted-array/1' },
      { name: 'First Bad Version', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/first-bad-version/', gfg: 'https://practice.geeksforgeeks.org/problems/first-bad-version/1' },
      { name: 'Find Peak Element', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/find-peak-element/', gfg: 'https://practice.geeksforgeeks.org/problems/find-peak-element/1' },
      { name: 'Search a 2D Matrix', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/search-a-2d-matrix/', gfg: 'https://practice.geeksforgeeks.org/problems/search-a-2d-matrix/1' },
      { name: 'Search a 2D Matrix II', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/search-a-2d-matrix-ii/', gfg: 'https://practice.geeksforgeeks.org/problems/search-a-2d-matrix-ii/1' },
    ],
    20: [
      { name: 'Valid Sudoku', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/valid-sudoku/', gfg: 'https://practice.geeksforgeeks.org/problems/valid-sudoku/1' },
      { name: 'Sudoku Solver', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/sudoku-solver/', gfg: 'https://practice.geeksforgeeks.org/problems/sudoku-solver/1' },
      { name: 'N-Queens', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/n-queens/', gfg: 'https://practice.geeksforgeeks.org/problems/n-queens/1' },
      { name: 'N-Queens II', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/n-queens-ii/', gfg: 'https://practice.geeksforgeeks.org/problems/n-queens-ii/1' },
      { name: 'Unique Paths', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/unique-paths/', gfg: 'https://practice.geeksforgeeks.org/problems/unique-paths/1' },
    ],
  };

  const totalProblems = Object.values(problems).flat().length;

  useEffect(() => {
    const solvedCount = Object.values(solvedProblems).filter(Boolean).length;
    setProgress((solvedCount / totalProblems) * 100);

    // Simulating global rank and streak (replace with actual data fetching logic)
    setGlobalRank(1);
    setStreak(10);
  }, [solvedProblems, totalProblems]);

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const toggleProblem = (day, index) => {
    setSolvedProblems(prev => {
      const key = `${day}-${index}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile">
          <h2>Profile</h2>
        </div>
        <nav className="navigation">
          <ul>
            <li className="active">DSA Sheets</li>
            <ul className="sub-menu">
              <li className="selected">Striver's SDE Sheet</li>
            </ul>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <div className="fixed-header">
          <header className="header">
            <h1>Striver's SDE Sheet – Top Coding Interview Problems</h1>
            <div className="user-stats">
              <span className="global-rank">Global Rank: #{globalRank}</span>
              <span className="streak">Streak: {streak} days</span>
            </div>
            <p className="sheet">
            SDE Sheet contains very handily crafted and picked top coding interview questions from different topics of
        Data Structures & Algorithms. These questions are one of the most asked coding interview questions in coding
        interviews of companies like Google, Amazon, Microsoft, Facebook, Swiggy, Flipkart, etc., and cover almost
        all of the concepts related to Data Structure & Algorithms.
            </p>
          </header>

          <section className="progress-section">
            <div className="progress-bar-container">
              <p>Your Progress: <strong>{Math.round(progress)}%</strong></p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </section>
        </div>

        <div className="scrollable-content">
          <section className="days-section">
            {Object.keys(problems).map((day) => (
              <div key={day} className={`day ${activeDay === day ? 'active' : ''}`}>
                <h3 onClick={() => toggleDay(day)}>
                  Day {day}: Arrays Part-{day}
                  <span className="problem-count">
                    {problems[day].filter((_, index) => solvedProblems[`${day}-${index}`]).length}/{problems[day].length}
                  </span>
                </h3>
                <div className="problems">
                  {problems[day].map((problem, index) => (
                    <div key={index} className="problem">
                      <input
                        type="checkbox"
                        checked={solvedProblems[`${day}-${index}`] || false}
                        onChange={() => toggleProblem(day, index)}
                      />
                      <a href={problem.leetcode} target="_blank" rel="noopener noreferrer">
                 {problem.name} (LeetCode)
                      </a>
                      <a href={problem.gfg} target="_blank" rel="noopener noreferrer">
                        {problem.name} (GFG)
                      </a>
                      <span className="difficulty">{problem.difficulty}  </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <button className="revision-btn">Show Revision</button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;