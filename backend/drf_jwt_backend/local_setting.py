# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-bw7te%y%4b3e7r$b4z11b6ttw48boydh0=$tv#@%mwno69remy"

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": 'youtube_database',
        "HOST": 'localhost',
        "USER": 'root',
        "PASSWORD": 'hatemenow'
    }
}