---
title: "Intro to Linux - Chapter 2"
date: 2021-05-25T18:00:48-05:00
draft: false
tags:
  - linux
  - intro
---

## What is a "Linux" anyways?
*Author: Skovati, Date: 2020-12-25*

This chapter *is* optional, but highly recommended. To really get a good perspective on Linux as a whole I think some historical context is necessary. It all starts back in the 60s when MIT and AT&T's Bell Labs were developing Multics, a time-sharing operating system for the GE-645 mainframe computer. That baby had dual 435kHz processors, 3 MBs of memory, could connect to 35 terminals simultaneously, and looked like this: 

![GE-645](/GE645.webp "GE-645")

While Multics was probably the most influential operating system of all time, it wasn't without its issues, and after a few years working on the project, Ken Thompson, Dennis Ritchie, and a few others decided to start over with something called *Uniplexed Information and Computing Service* or Unics—later renamed Unix. While originally written in assembly language, it was eventually ported to be the first OS written in *C*, a new high-level programming language also created at Bell Labs (seriously look at the [Wikipedia](https://en.wikipedia.org/wiki/Bell_Labs) page for Bell Labs, they invented everything from Unix to the transistor). Unix was revolutionary, introducing hierarchical file systems, text-based applications, shell scripting, pipelining commands, devices as files, and the so-called "Unix Philosophy". This philosophy can be summarized as "Each program should just do one thing and do it well"—meaning one program should list files in a directory, while an entirely separate program should facilitate changing directories or creating new files. This is in great contrast with a *monolithic* design style, where one singular *File Manager* is responsible for **all** the desired behavior for creating, managing, moving, renaming, or deleting files. This increased modularity that Unix got from this philosophy allowed it to be extremely extensible and scale very well. The Unix philosophy is still often referenced today in software design—most commonly Keep It Simple Stupid.

![](/img/ktdr.webp "Ken Thompson and Dennis Ritchie at Bell Labs")

Although Unix was revolutionary for its time, a few notable people disagreed with it being the closed-source property of AT&T, and thought an operating system like that should be open-source, transparent, and free for use and redistribution. One of these people was the Richard Stallman, a researcher at MIT's AI Laboratory. Stallman believed that computer users should be free to study the source code of the programs they used, modify the source code, and redistribute their modified versions in a collaborative sense. This philosophy was later published as the [GNU Manifesto](https://www.gnu.org/gnu/manifesto.html). Stallman then went to write his own GNU operating system, inspired by and compatible with the popular proprietary Unix OS. Stallman is credited with inventing the idea of *free* or *libre* software. To facilitate this new idea of FOSS software, he created a new "copyleft" license called the [GNU Public License](https://www.gnu.org/licenses/gpl-3.0.html) or GPL for short. Software published with this license must make its source code accessible and available to modify and redistribute for free; additionally, other software that uses GPL licensed software must itself uphold the license, thus creating a cascading effect of FOSS projects that are contributed to for the greater good by both volunteers *and* large corporations. He and his team were able to implement all of the system and user utilities needed for a general operating system, but they were still missing a kernel by the time the 90s rolled around.

So what is a "kernel" in an operating system? I'm no systems programmer, but essentially it does the translation between hardware and software in an OS. So anytime that a program is launched, it requests CPU and memory resources from the kernel; the kernel is the software that actually holds device drivers and sends instructions to the CPU and handles virtual memory for different programs. The Linux kernel also does all the filesystem work, interfaces with block devices, networks, and facilitates communication between system processes. Essentially, when you plug a USB stick into your laptop running Linux, the kernel is the software responsible for communicating with it using the USB drivers, detecting and mounting the filesystem on the drive, and sending all the serial data to and from the block device. 

An operating system kernel is a *lot* of work to create, so you can understand why it was the last thing for the GNU system to implement. Luckily, a Finnish programmer by the name of Linus Torvalds came to the rescue, as he was working on a Unix-like OS kernel called Linux around the early 90s. So, the GNU system needed a Unix-like kernel, and Linux needed Unix-like userland utilities, so Richard Stallman and Linux Torvalds worked together to create what is now know as the GNU/Linux operating system, which often goes by its nickname "Linux".

![The history of Unix-like systems](/img/unix_hist.webp "The history of Unix-like systems")

Today Linux is everywhere. Over 90% of the world's cloud infrastructure runs a Linux based operating system, over 75% of the worlds phones run a Linux kernel—as Google's Android operating system uses the Linux kernel, and **all** of the worlds top 500 supercomputers run Linux. Linux runs on everything from your router to smartwatch to your car to your bluetooth speaker to the X-ray machines at the hospital. Linux is most commonly packaged into "Linux distributions" or distros for short, which we will get to in a later chapter.

So, to recap, what we know as Linux today is actually result of decades of operating system forks, rewrites, and design. Window managers and web browsers inhabit the high-level, the GNU system utilities takes care of the mid-level, and the Linux kernel deals with the low-level. 

I would be remissed if I didn't mention Linux's cousins, the BSDs. I'll keep this short, but back in the 80s when Stallman was developing his own system *based* on Unix, some genius students and researchers at UC Berkeley were creating a direct *copy* of the Unix system called Berkeley Software Distribution or BSD for short. The original BSD has seen many forks; today the main BSDs are FreeBSD, OpenBSD, and NetBSD. The BSDs are considered to have been a more direct implementation of the Unix philosophy, which many prefer, and it was licensed with its own BSD style license. This license doesn't require software that uses other BSD licensed software to be licensed itself, so many companies use BSDs in order to keep their code closed source; most notably Sony's PlayStation OS and Apples macOS and iOS are BSD based for this reason.

Finally, the preamble is over, and we can get into the meat of using Linux.

[Chapter 3 - Linux Terminology - Distros, Package Managers, and More.](/articles/linux/intro/ch3)
