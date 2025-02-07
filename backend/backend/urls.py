"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter
from API import views


router = DefaultRouter()
router.register(r'profiles', views.ProfileViewSet)
router.register(r'quests', views.QuestViewSet)
router.register(r'quest-tasks', views.QuestTaskViewSet)
router.register(r'quest-progress', views.QuestProgressViewSet)
router.register(r'quest-ratings', views.QuestRatingViewSet)
router.register(r'leaderboards', views.LeaderboardViewSet)
router.register(r'quest-media', views.QuestMediaViewSet)
router.register(r'task-options', views.TaskOptionViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
