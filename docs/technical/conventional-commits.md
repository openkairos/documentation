# Conventional commits

> [!IMPORTANT]
> Only use lowercase letters for every part of the commit message (type, scope, description).

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification across all our
projects. This is a must in all the PR titles as we are squashing and merging all PRs. This results in a clean, human
and machine-readable git history.

The commit message must be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Here is an example:

```
feat(hooks): support async hooks
```

## Types

The following types are allowed:

| Type  | Description                                 |
|-------|---------------------------------------------|
| feat  | A new feature                               |
| fix   | A bug fix                                   |
| chore | For anything that's not a feature or a fix. |

## How to decide the type

> [!IMPORTANT]
> Rule of thumb: Always think from the user's perspective.

You should look at the changes you made from the user's perspective. If you added a new feature, use `feat`, if you
fixed a bug, use `fix`. If you made changes that do not affect the user (e.g., code refactoring, documentation updates,
build process changes), use `chore`.

It might be confusing at first, but with practice it will become second nature. Here is a confusing example for many
developers but it will help you understand the concept better:

You **FIXED** a flaky test that was causing CI failures. Many developers would be tempted to use `fix` here, but from
the
user's perspective, nothing changed. The user does not care about your tests, they care about the functionality of the
code. Since you did not change any functionality, you should use `chore` here. In this case your commit message would
look like:

```
chore(tests): fix user registration flaky test

- Removed the randomness from the test to ensure consistent results
- Closes #123
```

## Scopes

The scope is optional, but it is recommended to use it to provide additional context about the change. Scopes change
over the life of the project, so be sure to check the existing scopes. The best way to find the right scope is to look
at the issue titles. Most of the time, the issue title will contain the scope in `[scope]` format. If you are unsure,
either ask a maintainer or leave it out.

## Description

The description is a short summary of the change. It should be concise and to the point. Use the imperative mood (e.g.,
"add", "fix", "remove") in the description. Do not capitalize the first letter of the description.

You could use this trick to write better descriptions: Imagine you are completing the sentence "If you merged this
commit, it will ...". The `...` part should be your description.

## Body

The body is optional. You can use the body to provide additional context.

## Footer

The footer is optional. You can use the footer to reference issues that are closed by this commit. Using the [GitHub
keywords](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests)
is handy here.
