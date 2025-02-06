from rest_framework import viewsets, permissions
from .models import Profile, Quest, QuestTask, QuestProgress, QuestRating, Leaderboard, QuestMedia, TaskOption
from .serializers import (
    ProfileSerializer,
    QuestSerializer,
    QuestTaskSerializer,
    QuestProgressSerializer,
    QuestRatingSerializer,
    LeaderboardSerializer,
    QuestMediaSerializer,
    TaskOptionSerializer
)

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]  # Only authenticated users can access profile data

    def perform_create(self, serializer):
        # Create profile after user registration (auto-create profile for new users)
        user = self.request.user
        serializer.save(user=user)

class QuestViewSet(viewsets.ModelViewSet):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # Associate the logged-in user as the author of the quest
        author = self.request.user
        serializer.save(author=author)

class QuestTaskViewSet(viewsets.ModelViewSet):
    queryset = QuestTask.objects.all()
    serializer_class = QuestTaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # Associate the task with the corresponding quest
        quest_id = self.request.data.get('quest')
        quest = Quest.objects.get(id=quest_id)
        serializer.save(quest=quest)

class QuestProgressViewSet(viewsets.ModelViewSet):
    queryset = QuestProgress.objects.all()
    serializer_class = QuestProgressSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        quest_id = self.request.data.get('quest')
        quest = Quest.objects.get(id=quest_id)
        serializer.save(user=user, quest=quest)

class QuestRatingViewSet(viewsets.ModelViewSet):
    queryset = QuestRating.objects.all()
    serializer_class = QuestRatingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        quest_id = self.request.data.get('quest')
        quest = Quest.objects.get(id=quest_id)
        serializer.save(user=user, quest=quest)

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        # Here you can update leaderboard information when a user completes a quest or task
        serializer.save(user=user)

class QuestMediaViewSet(viewsets.ModelViewSet):
    queryset = QuestMedia.objects.all()
    serializer_class = QuestMediaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        quest_id = self.request.data.get('quest')
        quest = Quest.objects.get(id=quest_id)
        serializer.save(quest=quest)

class TaskOptionViewSet(viewsets.ModelViewSet):
    queryset = TaskOption.objects.all()
    serializer_class = TaskOptionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        task_id = self.request.data.get('task')
        task = QuestTask.objects.get(id=task_id)
        serializer.save(task=task)
