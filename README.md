# IngSoftFront

## Getting started

### Installation
In this folder...
````
vite
````

### Local run
```
vite run
```
### Preview (the version of the project from a server)
- It is just a little more picky about paths and relative paths
- Remember, it is static so you have to rerun this command if you want to see new changes

```
vite build && vite preview
```
### Repo healthiness 
#### Push
- Always check the branch
- Beware that they might have been other pushes in all branches, so do not forget to ``pull`` first
	- If you have conflicts solve them locally before trying to push again 

#### Commits
- Detail concrete information about the changes (even if it is a test)
- Remember to create a pull request every time you push
- When everything is tested make a pull request to ``master `` or ``dev ``


#### Branches

#### DONT'S
- Don't use the branches ``master `` or ``dev `` directly on your local machine
- Don't use a branch that has fulfilled the duty it was created for

#### Naming
##### Example 1
- We are a bookstore and have a new filter which is a filter in  ``Date``
	- The branch should be named `` feat/filter-date``

##### Example 2
- We are a bookstore and have a problem on a filter in  ``Date``
	- The branch should be named `` fix/filter-date``
