#!/usr/bin/python3

import os
import kore

from flask import render_template, session, redirect, url_for, Flask
from flask_breadcrumbs import Breadcrumbs, register_breadcrumb


"""
    Building out the application object [app].  Need to rename 'app' to something that makes sense.
    Can do this later.
"""
app = Flask(__name__)
Breadcrumbs(app=app)
BREADCRUMB = kore.Breadcrumb()
""" 
    Separating out the Login, Logout, and Home pages from the rest of the pages.  These are the only 
    pages that will not require a session prior to rendering.
"""


@app.route('/')
@app.route('/home')
@app.route('/index')
@register_breadcrumb(app, '.', 'Home')
def home():
    BREADCRUMB.update("Home")
    return render_template('page-index.html', breadcrumb=BREADCRUMB, aggregator = kore.aggregator)


@app.route('/login', methods=['GET', 'POST'])
@register_breadcrumb(app, '.', 'Login')
def login():
    BREADCRUMB.update("Login")
    session['logged_in'] = True
    return redirect(url_for('app.home'))


@app.route('/logout')
@register_breadcrumb(app, '.', 'Logout')
def logout():
    BREADCRUMB.update("Logout")
    session.clear()
    return redirect(url_for('app.login'))


"""
    Template pages that require a valid session token.  Currently this is not implemented because my last attempt
    was too clunky.  Currently rethinking how to handle this in a first class.
"""


@app.route('/alerts')
@register_breadcrumb(app, '.', 'Alerts')
def page_alerts():
    BREADCRUMB.update("Alerts")
    return render_template('page-alerts.html', breadcrumb=BREADCRUMB)


@app.route('/user-profile')
@register_breadcrumb(app, '.', 'Profile')
def page_user_profile():
    BREADCRUMB.update("Profile")
    return render_template('page-user-profile.html', breadcrumb=BREADCRUMB)


@app.route('/search')
@register_breadcrumb(app, '.', 'Search')
def page_search():
    BREADCRUMB.update("Search")
    return render_template('page-search.html', breadcrumb=BREADCRUMB)


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
    app.run(host='0.0.0.0', port=80, debug=True)