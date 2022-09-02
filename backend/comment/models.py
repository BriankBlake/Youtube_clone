from ast import Delete
from django.db import models

from backend.authentication.models import User

# Create your models here.
class comment ():
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField()
    text = models.CharField()
    likes = models.IntegerField()
    dislikes = models.IntegerField()