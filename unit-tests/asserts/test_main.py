import pytest
from bs4 import BeautifulSoup as BS
import requests

#####################################################
'''
Note that the functions below only check for a functional frontend.
Add the backend checks after the Firebase connection has been established.
'''

def check_requests(url):
    '''
    Returns the status code of requests to URLs.
    '''
    return requests.get(url)

def template(page, contents):
    '''
    Template for checking of web page frontend.
    '''
    req = check_requests(f"http://127.0.0.1:5000/{page}")
    assert req.status_code == 200

    soup = BS(req.text, "html.parser").prettify()
    for i in contents:
        assert i in soup

def test_home_page():
    '''
    Tests the default web app page.
    '''
    template("", ["Lorem ipsum dolor sit amet"])

def test_login_page():
    '''
    Tests the login page.
    '''
    template("login", ["Don't have an account?", "Sign up"])

def test_reset_password_page():
    '''
    Tests the reset passwords page.
    '''
    template("reset-password", ["Reset Password"])

def test_sign_up_page():
    '''
    Tests the sign-up page.
    '''
    template("signup", ["Sign Up", "Already have an account?"])