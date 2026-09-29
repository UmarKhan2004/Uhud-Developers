from django.db import models
class Inquiry(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)
    phone=models.CharField(max_length=100)
    message=models.TextField()
    created_at=models.DateTimeField( auto_now_add=True)
    status=models.CharField(max_length=20,default="new")
    def __str__(self):
        return f"Inquiry from {self.name}"
