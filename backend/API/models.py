from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    name = models.CharField(max_length=100)
    completed_quests = models.IntegerField(default=0)
    average_rating = models.FloatField(default=0)
    quest_history = models.TextField(null=True, blank=True)  # Can store quest IDs or history as a JSON string

    def __str__(self):
        return self.name

class Quest(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='quests')
    title = models.CharField(max_length=200)
    description = models.TextField()
    num_tasks = models.IntegerField()
    time_limit = models.IntegerField()  # in minutes
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    difficulty = models.CharField(max_length=20, choices=[('easy', 'Easy'), ('medium', 'Medium'), ('hard', 'Hard')])
    rating = models.FloatField(default=0)
    status = models.CharField(max_length=20, choices=[('draft', 'Draft'), ('published', 'Published'), ('archived', 'Archived')])

    def __str__(self):
        return self.title

class QuestTask(models.Model):
    quest = models.ForeignKey(Quest, on_delete=models.CASCADE, related_name='tasks')
    task_number = models.IntegerField()
    task_type = models.CharField(max_length=50, choices=[('multiple_choice', 'Multiple Choice'), ('text_answer', 'Text Answer'), ('image_search', 'Image Search')])
    media_type = models.CharField(max_length=20, choices=[('text', 'Text'), ('image', 'Image'), ('video', 'Video')])
    media_url = models.URLField(null=True, blank=True)
    question_text = models.TextField(null=True, blank=True)
    options = models.JSONField(null=True, blank=True)  # JSON array of options (only for multiple-choice tasks)
    correct_answer = models.TextField()
    time_limit = models.IntegerField()  # in seconds

    def __str__(self):
        return f"Task {self.task_number} in Quest {self.quest.title}"

class QuestProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='progress')
    quest = models.ForeignKey(Quest, on_delete=models.CASCADE, related_name='progress')
    current_task = models.ForeignKey(QuestTask, on_delete=models.SET_NULL, null=True, blank=True)
    time_spent = models.IntegerField(default=0)  # in seconds
    status = models.CharField(max_length=20, choices=[('in_progress', 'In Progress'), ('completed', 'Completed'), ('failed', 'Failed')])

    def __str__(self):
        return f"{self.user.username} Progress in {self.quest.title}"

class QuestRating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ratings')
    quest = models.ForeignKey(Quest, on_delete=models.CASCADE, related_name='ratings')
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])  # 1 to 5 stars
    comment = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Rating by {self.user.username} for {self.quest.title}"

class Leaderboard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='leaderboard')
    quests_completed = models.IntegerField(default=0)
    average_score = models.FloatField(default=0)
    ranking = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} Leaderboard"

class QuestMedia(models.Model):
    quest = models.ForeignKey(Quest, on_delete=models.CASCADE, related_name='media')
    media_type = models.CharField(max_length=20, choices=[('image', 'Image'), ('video', 'Video')])
    media_url = models.URLField()
    caption = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Media for {self.quest.title}"

class TaskOption(models.Model):
    task = models.ForeignKey(QuestTask, on_delete=models.CASCADE, related_name='options')
    option_text = models.TextField()
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return f"Option for Task {self.task.task_number} in Quest {self.task.quest.title}"
