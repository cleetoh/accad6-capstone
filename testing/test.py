from flask import url_for

outstr = url_for('static', variable='testing.py')
print(outstr)