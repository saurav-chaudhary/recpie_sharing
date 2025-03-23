from pymongo import MongoClient
from pymongo.errors import  PyMongoError

class MongoDb:
    def __init__(self):
        self.db = self.connect_to_db()

    def connect_to_db(self):
        try:
            uri = "mongodb://localhost:27017/"
            client = MongoClient(uri)
            print("Database connected successfully")
            return client['recpie']
        except Exception as e:
            print("Failed to connect to the database. Please check your connection.")
            return None
        except PyMongoError as e:
            print(f"PyMongo Error: {e}")
            return None

    def add_repie_data(self, data):
        if self.db is not None:
            try:
                self.db['recpieRecord'].insert_one(data)
                print("Data added successfully")
            except PyMongoError as e:
                print(f"Failed to add data: {e}")

    def get_all_repie_from_db(self):
        if self.db is not None:
            try:
                collection = self.db['recpieRecord'].find({})
                return [doc for doc in collection]
            except PyMongoError as e:
                print(f"Failed to retrieve data: {e}")
                return []
        return []
