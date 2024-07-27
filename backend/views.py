import flask from Flask,request

app = Flask(__name__)

app.route('/addrecpie',methods['POST'])
def addRecpie():
    data =  request.get_json()
    print(data)

if __name__= "__main__":
    app.run(debug=True)
