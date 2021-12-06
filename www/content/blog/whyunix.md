---
title: "Why Unix?"
date: 2021-12-05T10:09:54-05:00
draft: true
tags:
  - unix
  - linux
  - operating systems
  - FOSS
---

This post is meant to be inspiration to those considering using a unix-like system (I'm mainly referring to a Linux distro or one of the BSDs) similar to my [Why Vim?](../blog/whyvim.md) post.

The first set of blog posts I made on this website were about the history of unix/linux, and how to get started experimenting with these systems. However, I got carried away and turned this into a multi part saga, so this post will attempt to condense these thoughts into a standalone post about why *you* should use this flavor of operating system.

Note: I'll often say Linux here, but most of what I say applies to \*BSD and other unix-like systems.

## Freedom and Philosophy
Unix systems are often synonymous with the Free and Open Source Software movement, henceforth referred to as FOSS. Open source means the source code is available to the public, so you can go ahead and browse the [Linux source code](https://github.com/torvalds/linux/) to see exactly how the networking drivers work or how virtual memory is managed. While this might not interest *you* specifically, having source code available and open to the public means security experts can audit the code for security bugs, experienced programmers can code up new features and merge them into the project, or you can simply be sure the code isn't doing anything nefarious like selling your data to advertisers.

FOSS also means the software is "free" or "libre", meaning you are often legally allowed and encouraged to copy the code and make your own version (often called a "fork") and distribute your version. This means hacking on the system and making it exactly how you want is highly encouraged and this is a driving factor behind the rich Linux community.

Unix-like operating systems are also free as in there is no license you have to pay for in order to use the software. No more calling Microsoft to try and get your expired Windows license extended.

## Modularity and Customization
The beauty of unix systems (and here this excludes macOS) is their modularity and extensibility. Linux is just the kernel, and so requires many other programs like desktop environments, networking management, user utilities, web browsers, and more to become a usable operating system. In Windows or macOS, these choices are made for you, and you are given one document viewer, one video player, one default web browser, one desktop environment, one file manager, etc. While many of these things can be changed (ie most people switch to use Google Chrome), the developers of these proprietary OS's **want** you to stay in their walled garden, and actively discourage heavily customizing your setup and messing around.

Linux systems are in stark contrast to this idea. If you don't like something about your setup, change it! There are [thousands](https://en.wikipedia.org/wiki/List_of_Linux_distributions) of Linux distributions (distros) that each cater to a different audience. Want a stable OS to run a minecraft server on that old laptop of yours? Check out [Debian](https://www.debian.org/)! Interested in a bleeding edge gaming setup for your new build? Check out [Archlinux](https://archlinux.org/)! The list goes on and on... point being that instead of trying to make a one-size-fits-all, jack of all trades master of none OS like Windows or macOS, unix systems embrace this modularity and let the user choose what they want. This reason extends to every piece of software you'll use on a Linux system; you can choose from desktop environments and window managers and more to give you the exact customized experience you're looking for. While this does take more time up front choosing software you want to use, it pays off in the long run when you get to use the exact setup you want everyday. I personally use a customized tiling window manager called [dwm](https://dwm.suckless.org) that has vastly improved my programming/note-taking workflow... no chance I could get something like that running on Windows easily.

## Extensibility
Unix systems are also famously extensible, meaning functionality that wasn't explicitly programmed in by the original devs can easily be added on. This is often done through the use of plain text. Yes that's right, plain text. Unix treats everything, from attached devices like your monitor or keyboard, to system settings, to the contents of memory, as a text file. So, if programs agree to take plain text as input and output more plain text, they can be linked together and interact with the system in ways that weren't explicitly programmed in. This may sound like gibberish, but offers essentially unlimited possibilities. A simple example is something like the backlight brightness for your laptop. In Windows this brightness value is stored in some arcane location that is only meant to be changed through the official settings app, but in Linux this is simply a number stored in a text file in /sys/class/backlight/\*/brightness, so you could easily write a small script or program to, for example, dim the screen after 7pm by writing a new number to that file. In Windows however, this functionality would have to have been explicitly programmed in by some developer at Microsoft, so if they didn't implement screen dimming the way you like you're out of luck. This is a trivial example but hopefully explains the idea of extensibility in unix systems through text interfaces, an idea that can be applied to much more complex problems.

## Scripting and Automation
I often hear the sentiment that the terminal is "only for hackers" or similar, but this is far from the truth. Since plain text is the common interface within unix-like systems, the terminal (and shell scripting as an extension of that) is simply the most powerful way to interact with your system. As previously stated, if you want some feature in an graphical application, it has to be *explicitly* placed there by the author, ie you can't click the button if it wasn't programmed in the first place. However, on unix systems, programs often input and output text, which you can directly access and modify on the command line.

Maybe, for example, your graphical note-taking application doesn't have a "sort alphabetically" feature for lists. You'd be out of luck within the confines of that one application normally, but if you could either export to or originally write in a plain text format, you could simply take the output of your notes and use it as input to a command line program like `sort`, which will output your notes sorted alphabetically. Better yet, you could write a small shell script (which is a script file with terminal commands meant to be automatically run) to automate this for you, so your to-do list is always sorted! This kind of extensibility and automation is native to the command line; it's much harder to automate clicking a button in a graphical user interface.

Essentially, since unix-systems use text as the common interface between programs and devices, and the since terminal is the most effective way to work with and manipulate that text, their combination is extremely powerful and gives you control over your system and the ability to automate things easily.

## Lightweight and Minimal
The fact that Windows installs Candy Crush by default should be reason enough to ditch it, but in general unix OS's are extremely lightweight compared to Windows or macOS. If you're running on lower end or older hardware, a lightweight Linux distro can breathe new life into your computer. Currently, my system uses 180 MB of memory idle, compared to several *gigabytes* used by an "idle" Windows system. While I do happen to take this to the extreme with minimal software, it just goes to show *how much* more bloat and unnecessary software is running on your average Windows install.

## Privacy, Security, and Reliability
Using a FOSS operating system like Linux or BSD is a breath of fresh air in the modern digital age where companies mine as much data as possible to track you or sell to advertisers. This simply isn't an issue, since Linux and other unix-like OS's don't have a toxic business model that requires monetization of everything. No more Cortana listening to you signing to yourself or Apple shoving their new TV streaming service down your throat.

Unix systems are also often more secure, as companies like Google and Amazon heavily invest in security within the Linux kernel that runs the YouTube servers and AWS services that the internet depends on. The open source model also means security experts can audit and fix any bugs or exploits early and out in the open.

And speaking of Linux running on servers, a massive chunk of modern digital infrastructure runs on these OS's. Everything from your WiFi router to cell phone to car to your bank account is run on Linux or a Unix-like operating system. The reliability of Unix systems that can be trusted to run the world's economy; why wouldn't you want that reliability on your personal laptop too?

## Package Management
Package managers originated in unix-like operating systems, although there is a large effort to get them on Windows and macOS because they're so awesome. If you aren't familiar, a package manager is Unix's way of installing, managing, and removing software. Normally on a Windows or macOS install, if you wanted to install, for example, the spotify desktop app, you'd open a web brower, search for spotify, go to their website, download the latest version, run the executable that installs the program, and finally open it. On Linux, you can run one simple command instead `apt install spotify`. These package managers are created and maintained by the distribution you're using

## Education and Enjoyment
Lastly, using a unix-like operating system is just *fun*. You'll learn new things, think about problems from a new perspective, find a vibrant and friendly online community, and even brush up on technical skills that are useful on the job. You likely already know your way around your current OS, so why not give something new a try and keep learning?

## Where to now?
Install Linux! I have an overview of how to get started [here](../linux/intro/ch3).
