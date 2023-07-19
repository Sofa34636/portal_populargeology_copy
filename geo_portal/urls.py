from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from portal_api.views import ArticleView, ExhibitView, VideoView, EarthView, LocationView, ReconstructionView
from rest_framework.routers import DefaultRouter, SimpleRouter
from django.urls import re_path
from django.views.static import serve


router = DefaultRouter() if settings.DEBUG else SimpleRouter()

router.register('article', ArticleView, basename='article_view')
router.register('exhibit', ExhibitView, basename='exhibit_view')
router.register('video', VideoView, basename='video_view')
router.register('earth', EarthView, basename='earth_view')
router.register('location', LocationView, basename='location_view')
router.register('reconstruction', ReconstructionView, basename='reconstruction_view')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

if (settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += (
        re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
        re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
    )
