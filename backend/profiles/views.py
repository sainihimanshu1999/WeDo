from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status



# class ProfileView(APIView):

#     def get_user(self,id):
#         try:
#             queryset = Profile.objects.get(id=id)
#             serializer = ProfileSerializer(queryset)
#             return Response(serializer.data, status = status.HTTP_200_OK)
#         except Profile.DoesNotExist:
#             return Response(status = status.HTTP_400_BAD_REQUEST)

#     def get(self,request,id = None):
#         if id:
#             return self.get_user(id)
#         else:
#             queryset = Profile.objects.all()
#             serializer = ProfileSerializer(queryset, many=True)
#             if serializer:
#                 return Response(serializer.data, status = status.HTTP_200_OK)
#             else:
#                 return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)