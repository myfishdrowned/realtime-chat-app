import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from pydantic import BaseModel

# Load environment variables
load_dotenv()
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client["todo_db"]  # Database name
collection = db["todos"]  # Collection name

app = FastAPI()

# Pydantic model for Todo item
class Todo(BaseModel):
    task: str

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI is running with MongoDB!"}

@app.get("/todos")
def get_todos():
    """Retrieve all todos from MongoDB"""
    todos = list(collection.find({}, {"_id": 0}))  # Exclude MongoDB's `_id` field
    return {"todos": todos}

@app.post("/todos")
def add_todo(todo: Todo):
    """Add a new todo to MongoDB"""
    if not todo.task.strip():
        raise HTTPException(status_code=400, detail="Task cannot be empty")
    
    collection.insert_one(todo.dict())  # Insert into MongoDB
    return {"message": "Todo added", "task": todo.task}

@app.delete("/todos/{task}")
def delete_todo(task: str):
    """Delete a todo from MongoDB by task name"""
    result = collection.delete_one({"task": task})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Todo not found")
    
    return {"message": f"Deleted '{task}'"}
