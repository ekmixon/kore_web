#!/usr/bin/python3

import os

from flask import Flask
from flask_wtf import CSRFProtect

if __name__ == '__main__':

    csrf = CSRFProtect()

    app = Flask(__name__)
    csrf.init_app(app)

    app.secret_key = os.urandom(24)
    app.run(host="0.0.0.0", port=80, debug=True)