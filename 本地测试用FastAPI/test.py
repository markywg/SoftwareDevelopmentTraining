from typing import Optional
from fastapi import FastAPI,Response
from pydantic import BaseModel

app = FastAPI()

@app.get("/hello")
async def hello(response:Response):
    response.headers["Access-Control-Allow-Origin"]="*"
    result={"message":"Hello"}
    return result

@app.get("/a+b")
async def calc(name:str,a:int,b:int,response:Response):
    response.headers["Access-Control-Allow-Origin"]="*"
    result={"name":name,"result":a+b}
    return result

@app.post("/create_message/{message}")
async def create_message(message:str,creator:str,id:int,response:Response):
    response.headers["Access-Control-Allow-Origin"]="*"
    result={"message":message,"creator":creator,"id":id}
    return result

class people(BaseModel):
    name:str
    sex:str="Female"
    old:int
    introduction:Optional[str]=None

@app.post("/create_people")
async def create_people(people:people,response:Response):
    response.headers["Access-Control-Allow-Origin"]="*"
    result={**people.dict(),"note":"You send the packet successfully!"}
    return result