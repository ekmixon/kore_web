#!/usr/bin/python3

import os
from flask import Flask, Blueprint, render_template, redirect, url_for, request, session

app = Flask(__name__)
app.secret_key = os.urandom(24)

@routes.route('/')
@routes.route('/home')
@routes.route('/index')
def home():
    update_page("home", "index.html")
    return login_check()

@routes.route('/login', methods=['GET', 'POST'])
def login():
    session['logged_in'] = True
    session['sidebar_collapse'] = False
    return redirect(url_for('routes.home'))

@routes.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('routes.login'))


if __name__ == '__main__':
    '''
    This is to enable debug testing of routes directly in Flask.  Not for production run through nginx/uwsgi.
    '''

    app.secret_key = os.urandom(24)
    app.run(host='0.0.0.0',port=8080, debug=True)