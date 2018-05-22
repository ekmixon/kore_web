#!/usr/bin/python3

import os
from flask import render_template, session, redirect, url_for, Flask
from flask_breadcrumbs import Breadcrumbs, register_breadcrumb

"""
    Building out the application object [app].  Need to rename 'app' to something that makes sense.
    Can do this later.
"""
app = Flask(__name__)

""" 
    Separating out the Login, Logout, and Home pages from the rest of the pages.  These are the only 
    pages that will not require a session prior to rendering.
"""


@app.route('/')
@app.route('/home')
@app.route('/index')
@register_breadcrumb(app, '.', 'Home')
def home():
    return render_template('page-index.html')


@app.route('/login', methods=['GET', 'POST'])
@register_breadcrumb(app, '.', 'Login')
def login():
    session['logged_in'] = True
    return redirect(url_for('app.home'))


@app.route('/logout')
@register_breadcrumb(app, '.', 'Logout')
def logout():
    session.clear()
    return redirect(url_for('app.login'))


"""
    Template pages that require a valid session token.  Currently this is not implemented because my last attempt
    was too clunky.  Currently rethinking how to handle this in a first class.
"""


@app.route('/alerts')
@register_breadcrumb(app, '.', 'Alerts')
def page_alerts():
    return render_template('page-alerts.html')


@app.route('/user-profile')
@register_breadcrumb(app, '.', 'Profile')
def page_user_profile():
    return render_template('page-user-profile.html')


@app.route('/search')
@register_breadcrumb(app, '.', 'Search')
def page_search():
    return render_template('page-search.html')


if __name__ == '__main__':
    """
        This is to enable debug testing of routes directly in Flask.  Not for production run through nginx/uwsgi.
        All print statements are debug. 
        
        Notes:
        
        [*] Secret key being set to random will render all sessions invalid upon app restart.  Design decision erroring
            on security vice availability.
        [*] Need to think about implementing Blueprint to help manage this project.
    """
    print("starting up")
    app.secret_key = os.urandom(24)
    Breadcrumbs(app=app)
    app.run(host='0.0.0.0', port=80, debug=True)