
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
from bson import json_util
import base64
CORS(app)
from db_manager import MongoDb

db_manager = MongoDb()

@app.route('/addrecipe', methods=['POST'])
def add_recipe():

    data = request.get_json()
    image_data = data.get('imageUrl')

    if image_data:
        # Save image data in MongoDB
        data['image'] = base64.b64decode(image_data.split(',')[1])
    print(data)
    db_manager.addRepieData(data)

    return 'Recipe added'

@app.route('/getrecpie',methods=['GET'])
def getallrecpie():
    data = db_manager.getallrecpiefromdb()

    return json_util.dumps(data)



if __name__ == "__main__":
    app.run(debug=True)
