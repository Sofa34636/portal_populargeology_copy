from django.http import JsonResponse
from django.shortcuts import render
from portal_api.utils import execute_script
from h11 import Response

# Create your views here.

from .models import Article, Earth, Location, Reconstruction, Video, Exhibit
from .serializers import ArticleSerializer, EarthSerializer, LocationSerializer, ReconstructionSerializer, VideoSerializer, \
    ExhibitSerializer, PeriodArticlesSerializer


from rest_framework import viewsets, response, status
from rest_framework.generics import GenericAPIView
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
    filterset_fields = ['time']


class ReconstructionView(viewsets.ModelViewSet):
    queryset = Reconstruction.objects.all()
    serializer_class = ReconstructionSerializer
    filterset_fields = ['location']


class VideoView(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    filterset_fields = ['time']


class ExhibitView(viewsets.ModelViewSet):
    queryset = Exhibit.objects.all()
    serializer_class = ExhibitSerializer
    filterset_fields = ['time']

class PeriodArticlesView(GenericAPIView):

    serializer_class = PeriodArticlesSerializer

    def get(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.GET)
        serializer.is_valid(raise_exception=True)
        data = execute_script(**serializer.validated_data)
        if data != 0:
            return JsonResponse(data, status=status.HTTP_200_OK, safe=False)
        return JsonResponse(data={"error": True, "detail": "ошибка скрипта"}, status=status.HTTP_400_BAD_REQUEST)
