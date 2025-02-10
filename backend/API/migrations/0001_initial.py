# Generated by Django 5.1.6 on 2025-02-10 19:52

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Leaderboard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quests_completed', models.IntegerField(default=0)),
                ('average_score', models.FloatField(default=0)),
                ('ranking', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='leaderboard', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Quest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('count_tasks', models.IntegerField()),
                ('time_limit', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('difficulty', models.CharField(choices=[('easy', 'Easy'), ('medium', 'Medium'), ('hard', 'Hard')], max_length=20)),
                ('rating', models.FloatField(default=0)),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published'), ('archived', 'Archived')], max_length=20)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='quests', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='avatars/')),
                ('name', models.CharField(max_length=100)),
                ('average_rating', models.FloatField(default=0)),
                ('quest_history', models.TextField(blank=True, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('completed_quests', models.ManyToManyField(blank=True, related_name='completers', to='API.quest')),
                ('created_quests', models.ManyToManyField(blank=True, related_name='creators', to='API.quest')),
            ],
        ),
        migrations.CreateModel(
            name='QuestMedia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('media_type', models.CharField(choices=[('image', 'Image'), ('video', 'Video')], max_length=20)),
                ('media_url', models.URLField()),
                ('caption', models.TextField(blank=True, null=True)),
                ('quest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='media', to='API.quest')),
            ],
        ),
        migrations.CreateModel(
            name='QuestRating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)])),
                ('comment', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('quest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ratings', to='API.quest')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ratings', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='QuestTask',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_number', models.IntegerField()),
                ('task_type', models.CharField(choices=[('multiple_choice', 'Multiple Choice'), ('text_answer', 'Text Answer'), ('image_search', 'Image Search')], max_length=50)),
                ('media_type', models.CharField(choices=[('text', 'Text'), ('image', 'Image'), ('video', 'Video')], max_length=20)),
                ('media_url', models.URLField(blank=True, null=True)),
                ('question_text', models.TextField(blank=True, null=True)),
                ('options', models.JSONField(blank=True, null=True)),
                ('correct_answer', models.TextField()),
                ('time_limit', models.IntegerField()),
                ('quest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='API.quest')),
            ],
        ),
        migrations.CreateModel(
            name='QuestProgress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_spent', models.IntegerField(default=0)),
                ('status', models.CharField(choices=[('in_progress', 'In Progress'), ('completed', 'Completed'), ('failed', 'Failed')], max_length=20)),
                ('quest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='progress', to='API.quest')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='progress', to=settings.AUTH_USER_MODEL)),
                ('current_task', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='API.questtask')),
            ],
        ),
        migrations.CreateModel(
            name='TaskOption',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('option_text', models.TextField()),
                ('is_correct', models.BooleanField(default=False)),
                ('task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='task_options', to='API.questtask')),
            ],
        ),
    ]
