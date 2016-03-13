from app import app
from flask import render_template, flash, redirect
from .forms import LoginForm


@app.route('/')
@app.route('/index')
def index():
    user = {'nickname': 'Sindhu'}  # fake user
    recommendations = [  # fake list of recommendations
        {
            'name': 'The Offspring',
            'type': 'Band',
            'url': 'https://www.facebook.com/Offspring'
        },
        {
            'name': 'Deadpool',
            'type': 'Movie',
            'url': 'https://www.facebook.com/DeadpoolMovie/'
        }
    ]
    return render_template('index.html',
                           title='Home',
                           recommendations=recommendations,
                           user=user)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for OpenID="%s", remember_me=%s' %
              (form.openid.data, str(form.remember_me.data)))
        return redirect('/index')
    return render_template('login.html',
                           title='Sign In',
                           form=form)
