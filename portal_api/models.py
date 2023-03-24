from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    image = models.ImageField(upload_to='thumbnail/images', null=True, blank=True)
    text = models.TextField()
    src_article = models.CharField(max_length=100)
    src_magazine = models.CharField(max_length=200)


class Exhibit(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    image = models.ImageField(upload_to='thumbnail/images', null=True, blank=True)
    text = models.TextField()


class Video(models.Model):
    time_ago = models.CharField(max_length=100)
    video_source = models.CharField(max_length=100)


class Earth(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    texture = models.CharField(max_length=100)
    text = models.TextField()


class Location(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='thumbnail/images', null=True, blank=True)


class Relief(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    text = models.TextField()