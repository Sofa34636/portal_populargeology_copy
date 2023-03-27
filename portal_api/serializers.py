from rest_framework import serializers

from .models import Article, Earth, Location, Relief, Video, Exhibit


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'


class EarthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Earth
        fields = '__all__'


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'


class ReliefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relief
        fields = '__all__'


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'


class ExhibitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exhibit
        fields = '__all__'
