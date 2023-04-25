---
title: "Zettelkasten: what, why, and how"
date: 2023-01-17T22:44:01-06:00
tags:
  - notetaking
  - organization
desc: "An introduction to a barebones notetaking system that finally organized my thoughts"
author: skovati
---

# Zettelhuh?

Zettelkasten is a notetaking system pioneered by the German sociologist and philosopher Niklas Luhmann. He was an extremely prolific researcher, publishing over 70 books and 400 articles on a variety of subjects. Luhmann attributed this creative success to his unique notetaking approach: zettelkasten — German for "note box".

Essentially, instead of writing in a notebook, Luhmann would use individual note cards while jotting down ideas. Each note card had one single thought, idea, or piece of information, as well as some sort of unique identifier. Instead of filing these note cards away hierarchically — as is common practice, e.g. one drawer for philosophy notes, one for economics, etc — Luhmann would tag cards with the topics they related to, as well as link notes (by referencing the unique identifier of one note in another) that shared an idea in common.

# Why Bother?

The Zettelkasten method essentially flips traditional notetaking on its head. Instead of forcing your notes into some predefined structure, e.g. this folder for notes from math class and this folder for technical notes about work, you let the notes' structure organically emerge through linking and tagging.

An example of traditional, hierarchical notetaking

![](/img/hier.webp)

Compared to Zettelkasten notetaking with tags and links

![](/img/tagandlink.webp)

This flexbility allows your Zettelkasten notes to dynamically define their own structure over time, while staying organized with searchable tags and titles.

## Robustness

Since this structure organically emerges over time, a Zettelkasten note system is resilient and adaptive to changing life conditions. For example, while in college you might need to take a lot of hierarchical notes, e.g.

- uni
    - math
        - number theory
            - chapter 7
                - interesting theorem

but this hierarchy might not make sense once you graduate and starting taking notes at at your job, where you aren't able to draw such clean lines between subject matters.

If you were only using a traditional hierarchical notetaking system in college, you'd have to rework your entire setup. Zettelkasten, however, can easily adapt to your new notetaking needs.

This robustness means your zettelkasten can accumulate thousands of ideas and references over several years instead of frusterating you into giving up like other methods have a tendency to do.

## Deeper understanding

The Zettelkasten system bears resemblance to the structure of the human brain in that it encourages the creation of connections between different piece of information. By making these connections, you are literally strengthening the neural connections between these ideas in your head, or creating new connections, generating ideas.

It is a way of repeatedly and actively engaging with the material, rather than passively consuming it. This process of actively linking and connecting information is believed to aid in retention and recall, making it a more effective way of learning information.

Additionally, by linking notes together, it helps you see patterns and understand how different pieces of information fit together into the larger picture.

## Easy to draw from

Especially when using a digital notetaking system like I'll soon talk about, extracting information from your "second brain" couldn't be easier. Using "fuzzy" search, i.e. where you can search for inexact matches, you can easily search through existing notes for keywords or topics. Once you've found an interesting idea, you can visit the connections that note has until you've traced an interesting train of thought that can become the basis for a blog post, essay, music video, etc.

# A minimal, digital approach

Here is a visualization of my current (small) digital zettelkasten:

![](/img/zkgraph.webp)

My system has two steps: generate notes, back them up.

## Neovim

To generate my notes, I leverage neovim, which I've [talked about previously](/articles/neovim). In my digital system, each "note card" is simply a [markdown](https://en.wikipedia.org/wiki/Markdown) based text file.

I use a plugin called [telekasten](https://github.com/renerocksai/telekasten.nvim) which lets me create templates for both zettelkasten and daily journals, and provides quick shortcuts for creating new notes. All I have to do is open vim and hit `<leader>zn`, then a buffer opens with my templated note ready to add content and tags.

Telekasten also provides note searching functionality, so I can easily find and insert links to other notes using a fuzzy finder called [telescope](https://github.com/nvim-telescope/telescope.nvim).

These generated zettelkasten just live as flat `.md` files in a directory.

## GPG and git

Once I have my bundle of `.md` files representing my second brain, I like to back them up somehow. One could simply upload this folder to Dropbox or Google Drive, but I decided to create a small shell script that automatically compresses and encrypts my zettelkasten vault to a single `vault.tar.asc`, which I then push to a remote `git` repository. One huge advantage to this system is at any point I can look back at my commits and get my vault from that exact day. Additionally, since `git` is a standard protocol, I can take advantage of the plethora of remote git repo hosting services like [github](https://github.com), [gitlab](https://gitlab.com), [sourcehut](https://git.sr.ht), etc to get many distributed backups for free.

The script has three main parts, tar archiving, encryption, and pushing

Here I simply tar up my zettelkasten and journal into a `vault.tar` file
```sh
cd "$vault_dir" || exit 1

tar cf vault.tar journal zk || {
    printf "%s\n" "unable to tar vault..."
    exit 1
}
```

Then, I sign, encrypt, and armor this file
```sh
gpg --quiet --output vault.tar.asc --yes --armor --sign --encrypt vault.tar || {
    printf "%s\n" "unable to encrypt vault..."
    exit 1
}
```

And finally push to my remote git repos.
```sh
git add vault.tar.asc \
    && git commit -m "update vault" \
    && git push origin main \
    && git push mirror
```

The full script is available [here](https://git.sr.ht/~skovati/dotfiles/tree/master/item/bin/.local/bin/vault)

## Obsidian

[Obsidian](https://obsidian.md/) is a *fantastic* piece of software that a lot of my workflow has been based off of. Frankly if I wasn't so addicted to the terminal and vim, I'd just use Obsidian since it has all the features I need and more. I wanted a more extensbible and scriptable system, which is why I hacked together this plugin / shell script workflow, but Obsidian would be perfect for someone looking to get into Zettelkasten without technical terminal expertise.

A huge bonus of my current system is that the tag, link, and file format is entirely compatible with the Obsidian system, so I can switch between the two and open Obsidian up to get a visualization of my notes.

# Notetaking tips

Finally, a few tips of mine I learned after notetaking for several months:

## Atomicity

Try to keep your notes as focused as possible on one idea. If you have more to say, create another note and link it!

## Review notes regularly

Looking over a list of notes or tags regularly helps you jog your memory and recall old ideas. Luhmann's original technique was actually to create a kind of "staging" note that was just word vomit to get an idea on paper. He would then refine these temporary notes into "permanent" notes, that had a single concise idea with tags and links. One way to accomplish this in my system is with a "staging" tag; then just periodically refine any notes with this tag.

## Create "reference" notes

A reference note just contains a quote, a book title with a link, the name of a movie with a synopsis, etc. These references notes can be linked to from notes created while consuming the original reference material. Then you can see e.g. all the ideas you got while reading a particular book!

## Write down everything

Add notes without fear! Adding notes is never a bad thing with Zettelkasten, as the system becomes more useful the more info there is. Tangentially, don't delete notes unless you're refactoring them into more concise or focused notes.

## Let your notetaking be fluid

Don't copy exactly what some guy on the internet tells you to do! This is *your* notetaking system, and the main advantage of it is that it adapts to your notetaking habits. Build yourself a unique system and don't be afraid to make changes and adapt it to your style.
