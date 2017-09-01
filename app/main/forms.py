from flask_wtf import Form
from wtforms.validators import DataRequired, Email
from dmutils.forms import StripWhitespaceStringField


class EmailAddressForm(Form):
    email_address = StripWhitespaceStringField('Email address', validators=[
        DataRequired(message="Email can not be empty"),
        Email(message="Please enter a valid email address")
    ])


class MoveUserForm(Form):
    user_to_move_email_address = StripWhitespaceStringField('Move an existing user to this supplier', validators=[
        DataRequired(message="Email can not be empty"),
        Email(message="Please enter a valid email address")
    ])
