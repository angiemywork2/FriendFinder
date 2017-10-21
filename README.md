# FriendFinder

The survey has 10 questions of comapatibility. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
The user's most compatible friend uses the following as a guide:
Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5
The absolute value of the differences are used. Put another way: no negative solutions! The app calculates both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.
Once you've found the current user's most compatible friend, the result as a modal will pop-up.
The modal will display both the name and picture of the closest match.
