
from django.urls import path
from .import views
urlpatterns = [
    path('',views.home,name='home'),
    
    path('test/',views.test,name='test'),
    path('r/<int:id>/',views.r,name='home2'),
    path('image/',views.text_to_image,name='texttoimage'),
        
    
]





