from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
from db_manager import mongoDb

db_manager = mongoDb()

@app.route('/addrecipe', methods=['POST'])
def add_recipe():

    data = request.get_json()
    print(data)
    db_manager.addRepieData(data)

    return 'Recipe added'

if __name__ == "__main__":
    app.run(debug=True)
