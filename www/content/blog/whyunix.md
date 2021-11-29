---
title: "Why Unix?"
date: 2021-09-29T10:09:54-05:00
draft: true
tags:
  - unix
---

This post is meant to be inspiration to those considering using a unix-like system (I'm mainly referring to a Linux distro or one of the BSDs) similar to my [Why Vim?](../blog/whyvim.md) post.

The first set of blog posts I made on this website were about the history of unix/linux, and how to get started experimenting with these systems. However, I got carried away and turned this into a multi part saga, so this post will attempt to condense these thoughts into a standalone post about why *you* should use this flavor of operating system.

Note: I'll often say Linux here, but most of what I say applies to \*BSD and other unix-like systems, but most of my experience is with GNU/Linux systems.

## Freedom and Philosophy
Unix systems are often synonymous with the Free and Open Source Software movement, henceforth referred to as FOSS. Open source means the source code is available to the public, so you can go ahead and browse the [Linux source code](https://github.com/torvalds/linux/) to see exactly how the networking drivers work or how virtual memory is managed. While this might not interest *you* specifically, having source code available and open to the public means security experts can audit the code for security bugs, experienced programmers can code up new features and merge them into the project, or you can simply be sure the code isn't doing anything nefarious like selling your data to advertisers.

FOSS also means the software is "free" or "libre", meaning you are often legally allowed and encouraged to copy the code and make your own version (often called a "fork") and distribute your version. This means hacking on the system and making it exactly how you want is highly encouraged and this is a driving factor behind the rich Linux community 

## Efficiency and Extensibility
The beauty of unix systems (and here this excludes macOS) is their modularity and extensibility. Linux is just the kernel, and so requires many other programs like desktop environments, networking management, user utilities, web browsers, and more to become a usable operating system. In Windows or macOS, these choices are made for you, and you are given one network stack, one default web browser, one desktop environment, one file manager, etc. While many of these things can be changed (ie most people switch to use Google Chrome), the developers of these proprietary OS's **want** you to stay in their walled garden, and actively discourage heavily customizing your setup and messing around.

Linux systems are in stark contrast to this idea. If you don't like something about your setup, change it! There are [thousands](https://en.wikipedia.org/wiki/List_of_Linux_distributions) of Linux distributions (distros) that each cater to a different audience. Want a stable OS to run a minecraft server on that old laptop of yours? Check out [Debian](https://www.debian.org/)! Interested in a bleeding edge gaming setup for your new build? Check out [Archlinux](https://archlinux.org/)! The list goes on and on... point being that instead of trying to make a one-size-fits-all, jack of all trades master of none OS like Windows or macOS, unix systems embrace this modularity and let the user choose what they want. This reason extends to every piece of software you'll use on a Linux system; you can choose from desktop environments and window managers and more to give you the exact customized experience you're looking for. While this does take more time up front choosing software you want to use, it pays off in the long run when you get to use the exact setup you want everyday.

Unix systems are also famously extensible, meaning functionality that wasn't explicitly programmed in by the original devs can easily be added on. This is often done through the use of plain text. Yes that's right, plain text. Unix treats everything, from attached devices like your monitor or keyboard, to system settings, to the contents of memory, as a text file. So, if programs agree to take plain text as input and output more plain text, they can be linked together and interact with the system in ways that weren't explicitly programmed in. This may sound like gibberish, but offers essentially unlimited possibilities. A simple example is something like the backlight brightness for your laptop. In Windows this brightness value is stored in some arcane location that is only meant to be changed through the official settings app, but in Linux this is simply a number stored in a text file in /sys/class/backlight/\*/brightness, so you could easily write a small script or program to, for example, dim the screen after 7pm by writing a new number to that file. In Windows however, this functionality would have to have been explicitly programmed in by some developer at Microsoft, so if they didn't implement screen dimming the way you like you're out of luck. This is a trivial example but hopefully explains the idea of extensibility in unix systems through text interfaces, an idea that can be applied to much more complex problems.

## Scripting and Automation
Since plain text is the common interface within 

## Privacy and Security

## Education and Enjoyment
