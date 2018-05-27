# Egghead Vim Terminal

1. verify support
  1. `vi`
  2. `:echo (has'terminal')`
2. open four panes
  1. `:edit net-server.js`
  3. `:split net-client.js`
  4. `:new`
  5. `<C-w> L`
  6. `:terminal ++curwin node net-server.js`
  8. `:terminal node net-client.js`
3. move between panes
  1. `<C-w> [hjkl]`
4. turn `net-client.js` pane to `Terminal-Normal mode`
  1. `<C-w> N`
5. turn `net-client.js` pane to `Terminal-Job mode`
  1. `[ia]`
6. kill `net-client.js` job
  1. `<C-w><C-c>`
