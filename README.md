# Egghead Vim Terminal

1. verify support
  * `:echo (has'terminal')`
2. open a terminal with a shell
  * `:terminal ++curwin`
4. execute the visible code
  * `:terminal <COMMAND>`
5. start a hidden job
  * `:terminal ++hidden <COMMAND>`
6. move between panes
  * `<C-w> [hjkl]`
7. Terminal-Normal mode v Terminal-Job mode
  * `<C-w> N`
8. kill a running job
  * `<C-w><C-c>`
9. more info
  * `:help terminal`
