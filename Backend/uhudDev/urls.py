from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InquirySystemViewSet

router = DefaultRouter()
router.register(r'inquiry', InquirySystemViewSet, basename='inquiry')

urlpatterns = [
    path('', include(router.urls)),
]