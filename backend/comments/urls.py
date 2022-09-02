from django.urls import path
from comments import views

urlpatterns = [
    path('<str:id>/', views.get_all_comment),
    path('', views.new_comment),
    path('like_status/<str:id>/', views.likes)
]