from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        field = ['id', 'video_id', 'text', 'likes', 'dislike', 'user', 'user_id']
        depth = 1