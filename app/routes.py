#!/usr/bin/python3

import os

import kore

from flask import request, Flask, render_template, redirect, session, url_for
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
@app.route('/index')
@register_breadcrumb(app, '.', 'Home')
def home():
    """
        Main page that will be presented to an account after successful login. Page should redirect to login
        if a valid session is not detected.
    """
    return render_template('page-index.html')


@app.route('/login', methods=['GET', 'POST'])
@register_breadcrumb(app, '.', 'Login')
def login():
    """
        Login page that will be presented to an account prior to entering any user specific page.
        Successful login will return a valid session id.
    """
    session['logged_in'] = True
    return redirect(url_for('app.home'))


@app.route('/logout')
@register_breadcrumb(app, '.', 'Logout')
def logout():
    """
        Logout page.  Used to switch users or to null session.
    """
    session.clear()
    return redirect(url_for('app.login'))


"""
    Template pages that require a valid session token.  Currently this is not implemented because my last attempt
    was too clunky.  Currently rethinking how to handle this in a first class.
"""


@app.route('/page-search', methods=["GET", "POST"])
@register_breadcrumb(app, '.', 'Search')
def page_search():
    """
        Page focuses on doing analytical searches based off of cipher.  If a user browses to this page via a GET request
        they will be prevented with an empty search page.  If the user browses via a redirect [POST] then it will
        run their query and return the render the results on the page.
    """

    if request.method == 'POST':
        kore.search.run_query(request.form.get('cipher'))
        return render_template('page-search.html')
    else:
        return render_template('page-search.html')

@app.route('/alerts')
@register_breadcrumb(app, '.', 'Alerts')
def page_alerts():
    return render_template('page-alerts.html')


@app.route('/user-profile')
@register_breadcrumb(app, '.', 'Profile')
def page_user_profile():
    return render_template('page-user-profile.html')


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