#!/usr/bin/python3

import os
import sys

from enum import Enum
from flask import Flask
from flask_wtf import CSRFProtect

class Environment:
    def __init__(self, debug, srvhost, srvport):
        self.DEBUG = debug
        self.SRVHOST = srvhost
        self.SRVPORT = srvport


# Possible Environments to run Flask in
class Environments(Enum):
    DEV = Environment(True, '127.0.0.1', 8080)
    PROD = Environment(False, '0.0.0.0', 80)


if __name__ == '__main__':
    # Default to running in dev mode. This means a) running locally, b) on port 8080 and c) with DEBUG=True
    environment = Environments.PROD if sys.argv[1] and sys.argv[1] == 'prod' else Environments.DEV

    csrf = CSRFProtect()

    app = Flask(__name__)
    csrf.init_app(app)

    try:
        app.secret_key = os.urandom(24)
        app.run(host=environment.SRVHOST, port=environment.SRVPORT, debug=environment.DEBUG)
    except Exception as e:
        print("Error starting Flask server. Check that Neo4J is running.")
        sys.exit(1)