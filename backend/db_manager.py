from pymongo import MongoClient

class mongoDb:
    def __init__(self):
        self.db = self.connect_to_db()

    def connect_to_db(self):
        try:
            uri = "mongodb://localhost:27017/recpie"
            client = MongoClient(uri)
            print("Database connected successfully")
            return client.get_database('recpie')
        except Exception as e:
            print("Connection failed: ", e)
            return None
    def delet(self):
        self.db['recpieRecord'].delete_many({})
    def addRepieData(self, data):
        self.delet()
        try:
            self.db['recpieRecord'].insert_one(data)
            print("Data added successfully")
        except Exception as e:
            print("Failed to add data: ", e)


