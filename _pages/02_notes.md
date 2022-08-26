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

