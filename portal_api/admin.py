from django.contrib import admin

# Register your models here.

from .models import Article, Earth, Location, Reconstruction, Video, Exhibit

admin.site.register(Article)
admin.site.register(Earth)
admin.site.register(Location)
admin.site.register(Reconstruction)
admin.site.register(Video)
admin.site.register(Exhibit)
