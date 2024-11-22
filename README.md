# MFWM Manager Hiring Interview - Bug Challenge

## Overview
`user-dashboard.tsx` contains a simplified React component for our system's user dashboard, which allows an admin to see users in the system. There are two API calls on the page.
- Load all users on initial page load.
- Load specific user details when a user is clicked.

## The Problem
You receive the following information from bug reports, and are the first to start digging in.

- Intermittent failures where users get stuck on initial page load.
  - Users are not seeing any evidence of an error, just an infinite loading icon.
- Reports are widespread across all users, showing this is not a one-off issue.

## The Task
Given that you are the engineering manager of the team...
1. Given the code provided, how would you track down the issue? Feel free to point out both syntactical and architectural issues with the code.
2. You have noticed that this developer has committed issues like this multiple times, and you also noticed that their performance has decreased over the last few months. Can you walk us through how you would address this issue with the developer?
