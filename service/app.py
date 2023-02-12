from flask import Flask, make_response
from flask_cors import CORS
import os,argparse
import cv2
import pytesseract
import numpy
from PIL import Image
import string
from flask import request, jsonify
from werkzeug.utils import secure_filename



app = Flask(__name__)
CORS(app)
def options():
	response = make_response()
	response.headers.add("Access-Control-Allow-Origin", "*")
	response.headers.add('Access-Control-Allow-Headers', "*")
	response.headers.add('Access-Control-Allow-Methods', "*")
	return response

app.config['CORS_HEADERS'] = 'Content-Type'

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED

app.route('/test', methods = ['POST'])
def test():
	if 'file' not in request.files:
		resp = jsonify({'message' : 'No file part in the request'})
		resp.status_code = 400
		return resp
	file = request.files['file']
	if file.filename == '':
		resp = jsonify({'message' : 'No file selected for uploading'})
		resp.status_code = 400
		return resp
	if file and allowed_file(file.filename):
		filename = secure_filename(file.filename)
		file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
		resp = jsonify({'message' : 'File successfully uploaded'})
		resp.status_code = 201
		return resp
	else:
		resp = jsonify({'message' : 'Allowed file types are txt, pdf, png, jpg, jpeg, gif'})
		resp.status_code = 400
		return resp

app.route('/prediction', methods = ['GET', 'POST'])
def hello_name():
	print(request)
	file_name = request.files['myFile']
	#We then read the image with text
	images=Image.open(file_name)
	images=numpy.array(images).astype(numpy.float32)

	#convert to grayscale image
	gray=cv2.cvtColor(images, cv2.COLOR_BGR2GRAY)

	#memory usage with image i.e. adding image to memory
	# filename = "{}.jpg".format(os.getpid())
	cv2.imwrite('temp.jpeg', gray)
	text = pytesseract.image_to_string('temp.jpeg')
	text.translate({ord(c): None for c in string.whitespace})
	textnew=text.strip()
	return result(textnew)
	# os.remove(filename)
#print(len(remove(textnew)))


def remove(string):
	return "".join(string.split())

def result(textnew):   
	if len(remove(textnew))< 180:
		return "VERY BAD"
	elif len(remove(textnew))> 180 and len(remove(textnew)) < 550:
		return "BAD"
	elif len(remove(textnew))> 550 and len(remove(textnew)) < 1000:
		return "GOOD"
	elif len(remove(textnew))> 1000:
		return "VERY GOOD"

@app.route('/hi', methods=['GET','POST'])
def hi():
	file_name = request.files['myFile']
	#We then read the image with text
	images=Image.open(file_name)
	images=numpy.array(images).astype(numpy.float32)

	#convert to grayscale image
	gray=cv2.cvtColor(images, cv2.COLOR_BGR2GRAY)

	#memory usage with image i.e. adding image to memory
	# filename = "{}.jpg".format(os.getpid())
	cv2.imwrite('temp.jpeg', gray)
	text = pytesseract.image_to_string('temp.jpeg')
	text.translate({ord(c): None for c in string.whitespace})
	textnew=text.strip()
	return result(textnew)

if __name__ == '__main__':
	app.run(host='127.0.0.1', debug = True)