# stoelendans

### Contribute to questions

If you find a spell mistake for a question, please [submit an issue](https://github.com/sempruijs/stoelendans/issues/new) regarding the question and a solution.
You can also submit a pull request yourself by updating ```questions.ts```

All ideas for interesting questions are welcome.

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

