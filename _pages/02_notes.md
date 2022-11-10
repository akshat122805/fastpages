---
layout: page
title: CSP Notes
categories: [notes]
permalink: /notes/
---

## How to start coding

```bash
PS C:\Users\Aksha> wsl
(base) akshat1228@LAPTOP-V4AGJ4SP:/mnt/c/Users/Aksha$ cd
(base) akshat1228@LAPTOP-V4AGJ4SP:~$ ls
anaconda3  apcsp  vscode  wsl
(base) akshat1228@LAPTOP-V4AGJ4SP:~$ cd vscode
(base) akshat1228@LAPTOP-V4AGJ4SP:~/vscode$ ls
APCSP  vscode
(base) akshat1228@LAPTOP-V4AGJ4SP:~/vscode$ cd vscode
(base) akshat1228@LAPTOP-V4AGJ4SP:~/vscode/vscode$ code .
```
## Creating a Notebook using Bash

- You can do this by simply entering vscode through wsl. Here are some python commands:

```bash
echo "Using conditional statement to create a project directory and project"

# Variable section
export project_dir=$HOME/vscode  # change vscode to different name to test git clone
export project=$project_dir/APCSP  # change APCSP to name of project from git clone
export project_repo="https://github.com/nighthawkcoders/APCSP.git"  # change to project of choice

cd ~    # start in home directory

# Conditional block to make a project directory
if [ ! -d $project_dir ]
then 
    echo "Directory $project_dir does not exists... makinng directory $project_dir"
    mkdir -p $project_dir
fi
echo "Directory $project_dir exists." 

# Conditional block to git clone a project from project_repo
if [ ! -d $project ]
then
    echo "Directory $project does not exists... cloning $project_repo"
    cd $project_dir
    git clone $project_repo
    cd ~
fi
echo "Directory $project exists." 
```
# Key Terms Continued (Trimester Cumulative)

1. **Collaboration**: One of the keys when working with a team on code. It is the art of communication that is essential to making functional code.

2. **Flask**: Web Application Framework that is important to develop web applications.

3. **Jinja2**: The Web Template Language that is compatible with Flask and Python.

4. **Bootstrap**: An HTML/CSS template engine that helps to create more aesthetically appealing sites.

5. **Pseudo Code**: This is essentially another term used to describe the comments that are made to describe each line or functionality of code.

6. **JavaScript**: Another programming language that is essential, especially for frontend developers.

7. **Procedural Abstraction**: The practice of promoting reuse instead of continuously coding the same thing again and again.

8. **Agile Methodology**: The use of pair programming, test-driven development, stand-ups, planning sessions, and sprints. This also includes well defined team roles.

9. **AWS**: Amazon Web Services is a tool that allows for the *deployment* of our projects. It is a large part of the backend of our project.

10. **Nginx**: An open source software used for web serving, reverse proxy, caching, load balancing, media streaming, etc.

11. **Certbot**: This is another open source software tool that allows for encrypted certifications for hosted sites.

12. **DNS**: DNS, or Domain Name Services, allows for the assignment of a friendly name to a web server.

13. **API**: Application Programming Interface, it is a way for multiple programs to communicate/call each other.

14. **API URL**: The endpoint to which the API is directed.

15. **API Headers**: The dictionary data structure used to send special messaging to the endpoint.

16. **Document Object Model**: The Document Object Model, or DOM, is the interaction between HTML and JavaScript.

17. **HTTP/HTTPS**: HTTP, or Hyper Text Transfer Protocol, is in charge of the communication between a web server and web browser. HTTPS, on the other hand, is in charge for more **secure** communication between a web server and a web browser.

18. **TCP/IP**: Transmission Control Protocol, Internet Protocol. These messages are divided into small packets and sent between computers on the Internet.

19. **Network Layer**: The wireless and physical layers that move bits across the Internet.
