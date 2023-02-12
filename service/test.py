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
import string

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

app.route('/extraction', methods = ['GET', 'POST'])
def extraction():
	print(request)
	file_name = request.files['myFile']
	#We then read the image with text
	images=Image.open(file_name)
	images=numpy.array(images).astype(numpy.float32)

	#convert to grayscale image
	gray=cv2.cvtColor(images, cv2.COLOR_BGR2GRAY)

	#memory usage with image i.e. adding image to memory
	# filename = "{}.jpg".format(os.getpid())
	cv2.imwrite('temp1.jpeg', gray)
	text = pytesseract.image_to_string('temp1.jpeg')
	text.translate({ord(c): None for c in string.whitespace})
	textnew=text.strip()
	return textnew
