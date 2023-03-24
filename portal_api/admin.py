from django.contrib import admin

# Register your models here.

from .models import Article, Earth, Location, Relief, Video, Exhibit

admin.site.register(Article)
admin.site.register(Earth)
admin.site.register(Location)
admin.site.register(Relief)
admin.site.register(Video)
admin.site.register(Exhibit)
