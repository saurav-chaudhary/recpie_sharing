from flask import Flask, request

app = Flask(__name__)

@app.route('/addrecipe', methods=['POST'])
def add_recipe():
    data = request.get_json()
    print(data)
    return 'Recipe added', 200

if __name__ == "__main__":
    app.run(debug=True)
