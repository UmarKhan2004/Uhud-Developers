from django.shortcuts import render
from rest_framework import viewsets
from .models import Inquiry
from rest_framework.permissions import AllowAny, IsAdminUser
from .serializers import InquirySystemSerializer
class InquirySystemViewSet(viewsets.ModelViewSet):
    queryset=Inquiry.objects.all()
    serializer_class=InquirySystemSerializer
    def get_permissions(self):
        if self.action=="create":
            return[AllowAny()]
        return[IsAdminUser()]
