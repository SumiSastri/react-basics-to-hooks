Better PRs

1. Check branch is the right one before making changes

2. Think about what you want to code before you so that your commit is a meaningful chunk of code - clear/ logical/ focuses on doing one thing

3. Pull latest changes from master and merge into branch

Merge mistakes

- Look at the diff
- Files changed
- Error commits (get changes from master and make sure it is up to date)
- Look at the branch - Check branch in relation to master (nothing behind)
- Check the changes are only changes that you have made
- If it has nothing to do with what you are doing that is a red-flag/ Avoid changing it / avoid committing it
- Revert changes that have nothing to do with the commit
- If you are not working on this file remove it (discard change)

4. Code a single block of code and make sure the small block you are committing works

- run prettier
- unit
- cypress tests
- spin up FE/ check for bugs in console

5. Save file and check the diff

- Make sure the diff makes sense
- Is a file needed? Any lurking files? Discard change
- git restore - the file name (ui)

6. Think about your commit message so that you keep git history clean make the commit. The commit messages should be

- Clear. Logical. Readable
- Highlight how changes have been made and why
- Maintain history of the code base

Git history (who looks at it or why)
Anyone - who is interested

- Understanding changes
- Debugging
- File - blame - git history
- Adds latency

7. When you check the Jira ticket focus on the AC’s and do not detract focus

- ensure you are only changing files and code required so that the reviewer is able to match the changes you made to the AC’s
- if context is required do an in-line comment (Add single line comment) to highlight the exact code that the context referred to (not in the commit or description of PR)
- if required add a comment on Jira as well

8. In a draft review keep it as clean as you can but will not be reviewed - here is where if stuck add an in-line or slack and ask for help

- Single line comment with @person
- Slack
- (Not in the PR description or the commit)
  Debugging - logs / todos and uncommented codes

9. Don’t change it if it does not need to be changed. Every change you make is reviewed by the reviewer.

Eg: Documentation/ tech debt/ refactoring - separate-ticket

Look at blame to see the commits and changes

Changes that are not relevant to the ticket Confuses the reviewer & messes up git history - everyone who is maintaining the project) - links to different commits if git history changes - so when merged and reviewing at every stage of the clean up to deploy process adds work/ and has no clarity of purpose make it more difficult to assess the validity of the code

1. Many small PRs better than one large one
2. 1 PR to 1 ticket
3. Splitting ticket to sub-task
4. Smaller the incremental changes the better
5. More stability in versioning - more precise to pinpoint
6. Git log - rebase/ instead of merge
   Git documentation/ Git Book/ Git Hub (issues)

GitHub issues - discussions for React Features
Relevant library approaches - learn
CSS - Chris Koya
React- AirBNB
Yelp - blog
Engineering blogs by companies
Dev apps - paid

Git

Change incorrect branch name

git branch -m <new name>

Conflicts
$git pull
Fix conflicts - save files after conflicts fixed

Add files
$ git add/rm <file>

Check status - make sure changes saved and all files added
$git status

Commit files
$ git commit

Push files
— git merge —continue after fixing conflicts

https://stackoverflow.com/questions/37972753/git-reset-single-file-in-feature-branch-to-be-the-same-as-in-master

Step 1: From your project repository, bring in the changes and test.

git fetch origin
git checkout -b AM-1603-React-Tech-Debt-Fix-Folder-Structure origin/AM-1603-React-Tech-Debt-Fix-Folder-Structure
git merge master

Step 2: Merge the changes and update on GitHub.

git checkout master
git merge --no-ff AM-1603-React-Tech-Debt-Fix-Folder-Structure
git push origin master

https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History

Git logs:
git log --pretty=format:"%cn - %cd %h %s %t"

Look at the tree
git log --pretty=format:'%h %s' --graph
git log --graph --oneline --decorate --all

git cat-file -p HEAD

Rebasing:
From current branch:
$ git checkout -b diverging-branch
$ git rebase master
$ git checkout master
$ git pull
Go back to current branch and merge master

git checkout -b diverging-branch
git branch -d master
git pull
git checkout master

Fast forwards
Stack overflow: https://stackoverflow.com/questions/16288176/your-branch-is-ahead-of-origin-master-by-3-commits

- Look at the log
  git log --pretty=format:"%cn - %cd %h %s %t"  
  git log --graph --oneline --decorate --all

- Look at diff
  git diff master origin/master

$git revert - commit #
(run "git revert --continue" to continue)
(use "git revert --skip" to skip this patch)
(use "git revert --abort" to cancel the revert operation)

$git reset - - head -hard (resets it to one commit previous)
git reset --hard origin/master (resets to master)

- Look at diff again to check it has worked
  git diff master origin/master

It might be a question of rebasing - pulling changes and rebasing to the right node of divergence
git pull --rebase
