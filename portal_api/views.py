from django.http import JsonResponse
from django.shortcuts import render
from h11 import Response

# Create your views here.

from .models import Article, Earth, Location, Relief, Video, Exhibit
from .serializers import ArticleSerializer, EarthSerializer, LocationSerializer, ReliefSerializer, VideoSerializer, \
    ExhibitSerializer

from rest_framework import viewsets, response, status


class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def article_list(request):
        if request.method == 'GET':
            articles = Article.objects.all()

            title = request.query_params.get('title', None)
            if title is not None:
                tutorials = articles.filter(title__icontains=title)

            tutorials_serializer = ArticleSerializer(tutorials, many=True)
            return JsonResponse(tutorials_serializer.data, safe=False)

        elif request.method == 'DELETE':
            count = Article.objects.all().delete()
            return JsonResponse({'message': '{} Articles were deleted successfully!'.format(count[0])},
                                status=status.HTTP_204_NO_CONTENT)


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
