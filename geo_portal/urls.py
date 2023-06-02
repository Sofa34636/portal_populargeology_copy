from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from portal_api.views import ArticleView, ExhibitView, VideoView, EarthView, LocationView, ReconstructionView
from rest_framework.routers import DefaultRouter

route = DefaultRouter()

route.register('article', ArticleView, basename='article_view')
route.register('exhibit', ExhibitView, basename='exhibit_view')
route.register('video', VideoView, basename='video_view')
route.register('earth', EarthView, basename='earth_view')
route.register('location', LocationView, basename='location_view')
route.register('reconstruction', ReconstructionView, basename='reconstruction_view')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
