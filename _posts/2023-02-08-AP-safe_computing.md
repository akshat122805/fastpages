---
toc: true
comments: false
layout: post
title: Big Idea 5.6 Safe Computing
description: This tech talk discusses safe computing
permalink: /safe
categories: [5.D, 5.E]
type: ap
week: 22
---

# Safe Computing

### Personal Identifiable Information (PII)
As we create a Web Site and post information we are adding to the Searchable PII.  However, there is a dichotomy as a site ***like LinkedIn is a place where we want to be known for our accomplishments***.  But be aware, the person that looks at your LinkedIn will, **most likely**, look at things like TikTok, Instagram or Facebook.  

### PII considerations
* Things that will be known by everyone:  Name, Email (suggest a junk email), Picture, High School attended, College Attended, Properties you own, State-City of residence, all State-City of previous residence, Credit Reports, ... 
* Gray area items, more cautious: Birth date, Place of Birth, Street Address, Phone Number, Maiden names of Mother and Grandmother, Drivers License Number, ...
* Things that you should strive to keep absolutely secret: Credentials for Access, Two-Factor Authentication on Financial accounts, Social Security Number, Tax records, ...

### Beware, Establish practices for your own Safety
* ***Multi-factor authentication*** often requires you to enter a code that has been texted or emailed to you.   Other types of authentication are biometrics (finger print or facial recognition).
* ***Malware*** is often sent in attachments to things in email.  Often they request you to click on an attachment and it starts the process of adding a virus to your computer.
* ***Phishing*** is where unknown sources try to entice you into a response, like click here and receive $500.  Often such systems impersonate someone like Amazon asking for login information.  Be careful to look closely at source of email (ie amzn.com vs amazon.com).

### Factors to Increase Security of System (**recommend** Watch 5.6 Video 2)
* Most of my financials or critical systems use **Multi Factor authentication**
* Biometrics is something that is used secure systems, fingerprints or facial recognition
* ***Symmetric*** encryption is a type of encryption where only ***one key (a secret key)*** is used to both encrypt and decrypt electronic information.
* ***Asymmetric cryptography***, also known as public-key cryptography, is a process that uses a pair of related keys -- ***one public key and one private key*** -- to encrypt and decrypt a message and protect it from unauthorized access or use.
* SSL Uses both Asymmetric and Symmetric Encryption



# 5.6 Reflection
1. Slack is one. As for our group project, we will be collecting only a user's full name in order for it to be displayed on the leaderboard. Other information that will be collected includes a uid, password, and number of tokens. No emails or personal info will be collected.

2. It is important to be very cautious with PII online as my dad is a software engineer for Google and he knows the risks of personal exposure online. For this reason, I've been pretty secretive about my identity online and choose not to enter personal information or customize accounts if given the option.

3. Good passwords would be random characters with no relation at all, a bad password is something like a common phrase or series of characters that is easy to guess. Another step that is used to assist in authentication is 2FA, which is highly secure as it requires your account info to be accurate. How it works is it will send a code to the email or phone number that is linked to your account and you must tell it that code in order to authenticate that it's really you who is trying to access your account.

4. Symmetric encryption is when series is encrypted and asymmetric is when its not encrypted. 

5. In AWS, we used symmetric encryption when we created the instance for our project. 

6. No instance where I've been a victim of a phishing attack, the most common technique is through email. 