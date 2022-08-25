from pymongo import MongoClient 
from pprint import pprint 

MONGO_URL = "mongodb://mongo:27017"
client = MongoClient(MONGO_URL)
db = client.admin
db_list = db.command("listDatabases")
pprint(db_list)

pprint('Modify code -> to test image recreation')