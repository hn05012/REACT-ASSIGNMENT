# User management refactoring task

The goal of this task is to refactor the code from running, but riddled with anti-patterns into good code that adheres to best practices and makes use of React's features to achieve a good architecture.

The focus of this task should be to improve code quality. Do not add or remove features, and make sure the app still works after the refactoring. This also means that changing folder structure or project configuration is not part of this goal.

# Refactoring changes

- Removed globalThis usage
- Moved state directly into component using useState
- Added useCallback for handlers to optimize performance
- updated types where neccesary