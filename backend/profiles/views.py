from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


class ProfileView(APIView):

    def get(self,request):
        return Response('Hello world',status=status.HTTP_200_OK)