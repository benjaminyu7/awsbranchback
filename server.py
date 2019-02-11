from flask import (
    Flask,
    render_template,
    send_from_directory
)

# Create the application instance
app = Flask(__name__, template_folder="templates")

# Create a URL route in our application for "/"
@app.route('/<path:path>')
def home(path):
    """
    This function just responds to the browser ULR
    localhost:5000/

    :return:        the rendered template 'home.html'
    """
    return send_from_directory('.',path)

# If we're running in stand alone mode, run the application
if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000,debug=True)
