from flask import Flask,render_template

# Create a Flask application
app = Flask(__name__)

# Define a route for the root URL
@app.route('/')
def hello_world():
    return render_template('index.html')

if __name__ == '__main__':
    # Run the Flask application
    app.run(debug=True)