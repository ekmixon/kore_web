#!/usr/bin/python3

import os
from flask import Flask, Blueprint, render_template, redirect, url_for, request, session

app = Flask(__name__)
app.secret_key = os.urandom(24)

@app.route('/')
@app.route('/home')
@app.route('/index')
def home():
    print "made it to index"
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    session['logged_in'] = True
    session['sidebar_collapse'] = False
    return redirect(url_for('app.home'))

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('app.login'))

@app.route('/alerts')
def alerts():
    return render_template('alerts.html')


if __name__ == '__main__':
    '''
    This is to enable debug testing of routes directly in Flask.  Not for production run through nginx/uwsgi.
    '''
    print "starting up"
    app.secret_key = os.urandom(24)
    app.run(host='0.0.0.0',port=80, debug=True)