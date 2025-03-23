from pymongo import MongoClient

def test_mongodb_connection():
    try:
        uri = "mongodb://root:password@recpie_sharing-mongodb-1:27017/"
        client = MongoClient(uri)
        db = client['recpie']
        print("Database connected successfully")

        # Insert a test document
        db['recpieRecord'].insert_one({"name": "Test Recipe", "ingredients": ["ingredient1", "ingredient2"]})
        print("Data added successfully")

        # Retrieve and print documents
        collection = db['recpieRecord'].find({})
        for doc in collection:
            print(doc)
        
    except Exception as e:
        print("Connection failed: ", e)

if __name__ == "__main__":
    test_mongodb_connection()
