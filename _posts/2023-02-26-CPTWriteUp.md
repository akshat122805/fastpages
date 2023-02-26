---
title: CPT Final Project Writeup - Pong/Additional Features 
layout: base
description: TripleAJ Tri 2 CPT Final Project
tags: [markdown]
---

# Introduction

For this post, you will explore the process of development for the game of pong. one of the four major features of our project: TripleAJ Arcade

Additionally this post will explore and try to fulfill as many CPT requirements issued by CollegeBoard.

This post will also explore the other features we worked on outside of our games as well.

<img src="{{site.baseurl}}/images/logofinalaj.png">

<br>

# CPT Submission - 3A 

## 3.a.i

> My program presents an an interactive arcade game called, "Pong" to serve as entertainment for the user. 

<br>

## 3.a.ii

> The user must first pay 10 AJ Tokens (our arcade currency system) in order to play Pong, this will be at the start screen that we decided. 

> The program allows a user to play ping pong against an AI, there are two paddles constantly hitting a ball to one another. Whoever scores 7 first, wins! T

> If the user loses, he/she/they have lost 10 tokens from their total balance. If the user wins, they win 15 tokens for beating the AI, the 15 tokens will be added to their balance along with the 10 tokens reimbursed when the user paid to play at the start. This will be seen at the end screen, the user will also have an option to play the game again in efforts to win their tokens back or to simply have fun. 

<br>

# 3.a.iii

> The controls for my game is simply the mouse moving up and down. We believe controlling the mouse is the easiest way to play the game rather than constantly clicking, "W/A/S/D". 

> The input for our login system (we discuss this later) is your UID, password, and username. 

<br>

# CPT Submission - 3B

## 3.b.i - Token System Code For Pong

>INSERT PHOTO

<br>

## 3.b.ii - Leaderboard Code

>INSERT PHOTO

<br>

# 3.b.iii - Lists for Leaderboard & Token System

> For games, it would not make sense to create a list within the game, so here is what we did: We created a token system in which the amount of token you have in balance will be stated in the leaderboard. This is our primary list connecting all of our 4 features. The token system is different however for each game, for my game, Pong, you either end up winning 15 tokens or losing 10 tokens. This update in winnings/losings will be shown in our leaderboard regarding the total amount of tokens. 

<br>

# 3.b.iv - Ability

> We have the ability to store as many users on the leaderboard as well as have the entire Mortensen class play all of our games and earn tokens. Our leaderboard contains username, amount of tokens, and rank.

<br>

# 3.b.v - How the Leaderboard works for Pong

> Managing Complexity is also present in Pong, it shows how Pong has all sorts of different factors like ball speed, paddle size, and so much more. 

<br>
# CPT Submission - 3C

## 3.c.i

>Insert photo

## 3.c.ii

>Insert photo

<br>

## 3.c.iii - CRUD

> In order to play Pong, you must login or signup, this is another entirely different feature that our group worked on. Our Create links to creating a new account when signing up, our read is basically seeing the account you created on the backend flask. We have 5 different update features, 4 for our games regarding its token system, and 1 special update feature for changing you password. The POST function allows users to create new results for the leaderboard when playing games which is then "READ" by the leaderboard. 

<br>

## 3.c.iv - Selection, Iteration, Sequencing 

### Selection:

- Determining which player wins a point based on hpw the game ends. In this case, the game ends at 7 no matter what, so we made this a rule and a selection. 

- Checking if the ball hits a wall or a paddle, and if so, changing its direction accordingly.

- Same starting direction of the ball at the beginning of each round.

### Iteration 

- Updating the position of the ball and the paddles on each frame of the game loop.

- Checking if the ball collides with any other objects (walls, paddles) on each frame of the game loop.

- Checking if a player has scored a point on each frame of the game loop.

### Sequencing 

- Displaying the game menu when the game is first loaded.

- Waiting for the user to press the "start game" button before beginning the game loop.

- Displaying the winner of the game and updating the leaderboard after the game loop has ended.

<br>

# CPT Submission - 3D

<br>

## 3.d.i - Calls for CRUD

> Create: When a new user registers on your website, a POST call is made to the backend to create a new user account. The user provides their email address and a password, which are stored in the backend database. The server then generates a unique user ID and returns it to the client as a response.

> Read: When a user logs in to your website, a GET call is made to the backend to retrieve their account information. The server checks the user's email and password against the database, and if the credentials are valid, the server returns the user's account information (including their current token balance) to the client.

> Update: When a user updates their password, a PUT call is made to the backend to update the user's account information in the database. The user provides their old password and a new password, and the server checks that the old password is valid before updating the user's account information with the new password.

> Delete: If a user chooses to delete their account, a DELETE call is made to the backend to delete the user's account information from the database. The server checks the user's email and password against the database to verify their identity before deleting their account information.

<br>

## 3.d.ii - Calls for Conditions

- First call test the conditions and has idiot proofing for sign up, checks everything and then also verifies if the user has enough tokens to play pong.

- Second call for conditions is to verify that the backend has received an update in token balance, and that update will be sent to the frontend, to our leaderboard. 

<br>

## 3.d.iii - Results of Calls

- First call results - Allows uers to create account, play games, view leaderboard, earn tokens, etc.

- Second call resultS: Allows website to be updates through JS fetch and allows for all users to see the website constantly updating and functioning.