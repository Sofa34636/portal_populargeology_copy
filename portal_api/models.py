from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    image = models.ImageField(upload_to='articles', null=True, blank=True)
    text = models.TextField()
    src_article = models.CharField(max_length=100)
    src_magazine = models.CharField(max_length=500)

    def __str__(self):
        return self.title


class Exhibit(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    image = models.ImageField(upload_to='exhibits', null=True, blank=True)
    text = models.TextField()

    def __str__(self):
        return self.title

class Video(models.Model):
    time_ago = models.CharField(max_length=100)
    video_source = models.CharField(max_length=100)

    def __str__(self):
        return self.time_ago


class Earth(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    texture = models.ImageField(upload_to='textures', null=True, blank=True)
    text = models.TextField()

    def __str__(self):
        return self.title


class Location(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='locations', null=True, blank=True)

    def __str__(self):
        return self.title


class Relief(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    image = models.ImageField(upload_to='reliefs', null=True, blank=True)
    text = models.TextField()

    def __str__(self):
        return self.title

