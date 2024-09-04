# stoelendans

## contributing

### install dependencies

Run the following command to install all dependencies

```shell
nix develop
```

To check the CI locally run:
```shell
nix build .#checks.x86_64-linux.spellcheck
nix build .#site
```
### How do I ignore a word for the spell checker?

Edit ```.cspell.json``` and add the word to the list

## License

BSD-2-Clause

