# Manual to Automation @ <a href="https://sky.co.uk/"><img src="https://logos-world.net/wp-content/uploads/2021/02/Sky-Logo.png" alt="playwright" height="27" /></a> - Lesson 2 - Parallel Testing and BrowserStack

## Introduction

This example code shows a TestNG implementation of parallel testing on BrowserStack.

## Necessary Tools

There are a few things that you will need before you can get started.

* NodeJS - use [this](https://phoenixnap.com/kb/install-node-js-npm-on-windows) guide for Windows and [this](https://phoenixnap.com/kb/install-npm-mac) Mac. For anyone having difficulty, [this](https://www.baeldung.com/install-maven-on-windows-linux-mac) is a more detailed breakdown of the steps.
* Git for pulling down the code - follow [this](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) guide for installing Git on all platforms. There are other useful guides on the website mentioned previously. Start [here](https://github.com/git-guides) anad follow through to the various links to learn more about Git. It will be very useful on your automation journey. If you have any issues with tokens or user credentials, let me know as this can trip a lot of people up.
* Visual Studio Code which can be downloaded from [here](https://code.visualstudio.com/download)

## Installation

To get the project ready to run on your machine, follow the steps below:

* Open a terminal. (Terminal on Mac, Command Prompt on Windows)
* Go to the directory where you want to place the code using [cd](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cd) for Windows, and it functions mostly the same for Mac. You just use "cd" but the folder structure on Mac is different (/Users/username/Documents instead of C:/Users/username/Documents)
* Copy the following command into the terminal, (remember, you must have [Git](https://git-scm.com/downloads) installed)
```sh
git clone https://github.com/Manual-To-Automation-Sky/Javascript-Lesson-2-Parallel-Testing.git.
```
* Move into the directory that you just cloned by typing
```sh
cd Javascript-Lesson-2-Parallel-Testing
```
* To run your test, open your package.json file and hover over either the "single-test" or "parallel-test" script properties and click Run Script