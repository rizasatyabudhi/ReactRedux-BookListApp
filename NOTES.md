1. Container is a component that has direct access to the state that produce by redux
2. Only create container out of components that cares about a particular piece of state (ONLY THE MOST PARENT COMPONENT)
    ex: BooksList = Cares about when the list of books changes
        BookDetail = cares about when the active book changes



