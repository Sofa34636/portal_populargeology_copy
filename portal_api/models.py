
from django.db import models

ALL_TIMES = (
        ('bigBang', 'Большой Взрыв'),
        ('solarSystem', 'Солнечная Система'),
        ('moonFormation', 'Образование Луны'),
        ('История Земли', (
            ('blackEarth', 'Черная Земля'),
            ('blueEarth', 'Голубая Земля'),
            ('greyEarth', 'Серая Земля'),
            ('livingEarth', 'Живая Земля'),
            ('redEarth', 'Красная Земля'),
            ('boringBillion', 'Скучный Миллиард'),
            ('whiteEarth', 'Белая Земля'),
            ('greenEarth', 'Зеленая Земля'),
            ('ageOfMan', 'Эпоха Человека'),
            ('present', 'Настоящее'),
            ('future', 'Будущее'),
        )),)


EARTH_TIMES = (
            ('blackEarth', 'Черная Земля'),
            ('blueEarth', 'Голубая Земля'),
            ('greyEarth', 'Серая Земля'),
            ('livingEarth', 'Живая Земля'),
            ('redEarth', 'Красная Земля'),
            ('boringBillion', 'Скучный Миллиард'),
            ('whiteEarth', 'Белая Земля'),
            ('greenEarth', 'Зеленая Земля'),
            ('ageOfMan', 'Эпоха Человека'),
            ('present', 'Настоящее'),
            ('future', 'Будущее'),
        )


class Article(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    image = models.ImageField(upload_to='articles', null=True, blank=True)
    text = models.TextField()
    src_article = models.CharField(max_length=100)
    src_magazine = models.CharField(max_length=500)
    time = models.CharField(max_length=13, choices=ALL_TIMES)

    def __str__(self):
        return self.title


class Exhibit(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    image = models.ImageField(upload_to='exhibits', null=True, blank=True)
    text = models.TextField()
    time = models.CharField(max_length=13, choices=ALL_TIMES)

    def __str__(self):
        return self.title


class Video(models.Model):
    time_ago = models.CharField(max_length=100)
    video = models.FileField(upload_to='videos', null=True, blank=True)
    time = models.CharField(max_length=13, choices=ALL_TIMES)

    def __str__(self):
        return self.time_ago


class Earth(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    text = models.TextField()
    time = models.CharField(max_length=13, choices=EARTH_TIMES)

    ambientMap = models.FileField(upload_to='textures', null=True, blank=True)
    baseMap = models.FileField(upload_to='textures', null=True, blank=True)
    heightMap = models.FileField(upload_to='textures', null=True, blank=True)
    metallicMap = models.FileField(upload_to='textures', null=True, blank=True)
    normalMap = models.FileField(upload_to='textures', null=True, blank=True)
    roughnessMap = models.FileField(upload_to='textures', null=True, blank=True)
    cloudMap = models.FileField(upload_to='textures', null=True, blank=True)

    def __str__(self):
        return self.title


# class EarthTextures(models.Model):
#     earth = models.ForeignKey(Earth, on_delete=models.CASCADE, related_name='textures')
#     textures = models.FileField(upload_to='textures', max_length=100, null=True)
#

class Location(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='locations', null=True, blank=True)
    time = models.CharField(max_length=13, choices=ALL_TIMES)

    def __str__(self):
        return self.title


class Relief(models.Model):
    title = models.CharField(max_length=100)
    time_ago = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    image = models.ImageField(upload_to='reliefs', null=True, blank=True)
    text = models.TextField()
    time = models.CharField(max_length=13, choices=ALL_TIMES)

    def __str__(self):
        return self.title

