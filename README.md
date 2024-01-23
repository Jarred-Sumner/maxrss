# maxrss

Print the maximum memory usage of a process.

```bash
$ bunx maxrss echo hello
hello
Peak memory usage: 1.36 MB
```

If you want to control the prefix of the output, you can use the `--prefix` flag:

```bash
$ bunx maxrss --prefix="boop!" echo hello
hello
boop! 1.36 MB
```

`--prefix` is the only flag, besides `--help`.
