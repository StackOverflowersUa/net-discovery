from rest_framework import serializers
from .models import Profile, Quest, QuestTask, QuestProgress, QuestRating, Leaderboard, QuestMedia, TaskOption

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class QuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quest
        fields = '__all__'

class QuestTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestTask
        fields = '__all__'

class QuestProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestProgress
        fields = '__all__'

class QuestRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestRating
        fields = '__all__'

class LeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leaderboard
        fields = '__all__'

class QuestMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestMedia
        fields = '__all__'

class TaskOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskOption
        fields = '__all__'
