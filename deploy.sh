#!/bin/bash

# Navigate to your project directory
# cd /path/to/your/project

echo "Enter your commit message:"
read commitMessage

# Add all changed files to the staging area
git add .

# Commit the changes with the user-provided message
git commit -m "$commitMessage"

# Push the changes to the remote repository
git push origin main
