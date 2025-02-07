from fastapi import FastAPI

app = FastAPI()

# In-memory storage
todos = []

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI is running!"}

@app.get("/todos")
def get_todos():
    return {"todos": todos}

@app.post("/todos")
def add_todo(todo: str):
    todos.append(todo)
    return {"message": "Todo added", "todos": todos}

@app.delete("/todos/{index}")
def delete_todo(index: int):
    if 0 <= index < len(todos):
        removed_todo = todos.pop(index)
        return {"message": f"Deleted '{removed_todo}'", "todos": todos}
    return {"error": "Invalid index"}
