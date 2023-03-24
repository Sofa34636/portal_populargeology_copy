
from django.shortcuts import render
from h11 import Response

# Create your views here.

from .models import Article, Earth, Location, Relief, Video, Exhibit
from .serializers import ArticleSerializer, EarthSerializer, LocationSerializer, ReliefSerializer, VideoSerializer, ExhibitSerializer

from rest_framework import viewsets, response, status


class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


class EarthView(viewsets.ModelViewSet):
    queryset = Earth.objects.all()
    serializer_class = EarthSerializer


class LocationView(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class ReliefView(viewsets.ModelViewSet):
    queryset = Relief.objects.all()
    serializer_class = ReliefSerializer


class VideoView(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


class ExhibitView(viewsets.ModelViewSet):
    queryset = Exhibit.objects.all()
    serializer_class = ExhibitSerializer

