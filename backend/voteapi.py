from flask import Flask, jsonify
from flask import request
from flask_cors import CORS
from solvenasheq import solvefornasheq

app = Flask(__name__)
CORS(app)
