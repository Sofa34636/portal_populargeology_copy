from django.http import JsonResponse
from django.shortcuts import render
from h11 import Response

# Create your views here.

from .models import Article, Earth, Location, Relief, Video, Exhibit
from .serializers import ArticleSerializer, EarthSerializer, LocationSerializer, ReliefSerializer, VideoSerializer, \
    ExhibitSerializer

from rest_framework import viewsets, response, status
from django_filters.rest_framework import DjangoFilterBackend


class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filterset_fields = ['time']


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
