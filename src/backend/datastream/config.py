from schwab import auth
import json
from datetime import datetime, timedelta

# This is a configuration file for the Schwab API client. Can be generated at https://developer.schwab.com/home
api_key = ''
app_secret = ''
callback_url = ''
token_path = ''

c = auth.easy_client(api_key, app_secret, callback_url, token_path)
