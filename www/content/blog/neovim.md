---
title: "Neovim, why I switched"
date: 2021-11-16T11:13:54-06:00
draft: true
tags:
  - vim
  - unix
---

# Neo-what?

[Neovim](https://neovim.io/) is a popular fork of the famous text editor [Vim](https://www.vim.org/) that aims to refactor the codebase, create a sane API, and add modern niceties while retaining the Vim philosophy. Some of the first features the neovim team added were asynchronous processes and the built in terminal emulator, both of which Vim ended up implementing in Vim 8. I'll go into specific features I like about neovim later, but in general they're challenging the Vim status quo and aren't afraid to change things that Vim has done for 30+ years, (a simple example being finally moving the configuration file to $XDG_CONFIG instead of ~/.vimrc), while still maintaining compatability and feature partity with Vim.

# Neo-who?

Neovim, instead of being run by a [BDFL](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life) like Vim, is run by a large community of developers, including a core team. They encourage new contributors and plugin authors, instead of blocking them by forcing every patch through Bram Moolenaar. In my opinion, this is a *much* healier way of developing an open source project. When Bram wants to retire from maintaining Vim, who takes over? Will they have the same vision as Bram? This is simply a non issue in the neovim space. Neovim also has a large budget from donations and sponsors, which allow developers to be paid to work full time on neovim features and fixes. Essentially, besides all of the specific features I love that I'll talk about later, I just vibe with the neovim philosophy and direction a whole lot more than whatever Bram decideds he wants to do. I think having competition and options in the vim-like editor space is extremely positive for the community.

# The initial switch

I originally switched to neovim because I was doing a lot of programming in Java for university at the time and was trying to run [CoC](https://github.com/neoclide/coc.nvim/) and the eclipse java language server with Vim and it simply could not handle it. I saw nvim had implemented better asynchronous event handling, and decided to drop my `.vimrc` into a `init.vim` and to my surprise all of my performance issues vanished. It was at this point I realized there was really no point for me to not switch to neovim full time. I was getting all of the features from vanilla vim, *plus* more features and functions that added essentially no bloat to the editor. I was sold.

# Killer features

Now I'll dig into the details. The following is a short list of what I consider the killer features that convinced me to stay on neovim.

## Lua

Now I realize that Lua isn't the most loved programming language out there, but I'd argue it's a hell of a lot better than vimL. Neovim has brought Lua in as a first class citizen within the neovim ecosystem, meaning you can now write Lua plugins using the fantastic neovim/lua API, and you can configure your editor with an `init.lua`. This gives neovim almost emacs-like flexibility with elisp, since we can pull in luarocks modules and do things like http requests, database manipulation, and UI development a whole lot easier compared to VimScript. 

Neovim ships with LuaJIT, which executes Lua code blazingly fast and only requires ~200KiB of additional disk space. Lua also has fantastic interop with C. It is a minimal scripting language originally designed for configuration which makes it perfect to be the main interface to the neovim core.

As an amatuer plugin developer, I've often been intimidated by writing anything complex in vimL, but I've already written several Lua plugins and functions and find it much easier to work with. Yes it has its own quirks, but not nearly as many as vimL.

The fact that Bram is focusing on vim9 script instead of simply adopting a fully featured scripting/configuration language like Lua makes me seriously question the future of the vanilla vim project...

## LSP

LSP stands for Lauguage Server Protocol, which is a set of standards developed by Microsoft that facilitaces real time communication between a text editor and an external language specific server program that allows code intelligence and completion. Since this is editor agnostic, neovim's implementation of this functionality in the core means we now have access to fantastic tools like `gopls`, `rust_analyzer`, and `denols` that give us completions, function signitures, documentation, go-to definition/reference, renaming, and more. As previously stated, I was using a nodejs implemntation of this called CoC that worked well, but having this functionality built-in to the editor makes it feel native rather than a hack, and has resulted in a lightweight editing experience that doesn't lack code intelligence and debugging features I get from large IDEs like eclipse.

## Treesitter

[Treesitter](https://tree-sitter.github.io/tree-sitter/) is a parsing library that has been included in neovim v0.5+ that allows real time parsing of source code into an abstract syntax tree that can then be used for syntax highlighting, context, and vim-like text objects. This means instead of running hundreds of regex searches for syntax highlighting, neovim can now simply tap into this AST that gets incrementatlly updated on each keystroke to assign highlighting colors based on what text objects **actually** are. So instead of vim looking for floats with a regex like `[0-9].[0-9]+` and highlighting matches a certain color, it can simply assign colors to the float objects in the AST treesitter returns. This means you can easily create language agnostic plugins and colorschemes, since treesitter does the heavy lifting and provides the neovim developers with a fantastic abstraction to work with.

## Virtual text

Virtual text is a new feature in neovim that allows text to be displayed inline with the actual file text. This is currently used in LSP diagnostics so we can easily see what error is thrown without having to have pop up dialog boxes or anything else distracting. This feature is extremely extensible, and can be used to display anything, whether that is info from `git` about previous commit messages, guidelines for 80 character column limits, display of tab, space, or newline characters, and more. To do this in vanilla vim required a hack with the conceal option that rarely worked for me.

## API

One of neovim's main goals was to refactor the codebase and expose a sane core API for developers. This is evident in Lua scripting/plugins as we previously talked about, but this has also caused an explosion in unique uses of neovim. Entirely seperate GUIs can now be made for neovim like [neovide](https://github.com/neovide/neovide), plugins can easily be written in Python, Go, or Rust with neovim API bindings, and neovim can even be embedded inside of browsers or VSCode (like the extremely popular [plugin](https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim)), all since the neovim core is exposed via an API. This opens up so many possibilities that aren't possible with vanilla vim since it is still heavily tied to its interface.

# Final thoughts

These features all have one thing in common: they make neovim **even more** extensible, while retaining the vanilla vim philosophy and featureset. Neovim can now be embedded in your reddit comment textbox in the browser, and it can be turned into a fully featured IDE-like editor through the use of treesitter, LSP, and Lua plugins. All of this is possible because the neovim team decided [they can have nice things](https://www.youtube.com/watch?v=Bt-vmPC_-Ho).

Neovim is vim for the 21st century and is rewrite done right.
