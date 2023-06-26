from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import time
from django.shortcuts import render
from .models import *
import openai
from django.http import HttpResponse
from PIL import Image, ImageDraw, ImageFont
from django.http import HttpResponse
from django.urls import path
from django.shortcuts import render
from .amazon_scraper import AmazonScraper

# Create your views here.


def generate(year, make, model, features, product, data):

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="write a related to product on the bases of following template and parameter and data.\n'I found the BAK MX4 Tonneau Cover for your 2013 Ford F150 at the price of $969.88 with free shipping on RealTruck.com. Here's the link to the product: https://www.realtruck.com/bakflip-mx4-tonneau-cover/448329.html\n'\nyear={}\nmake={}\nmodel={}\nproduct:{}\ndata:{}".format(
            year, make, model, product, data),
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    ).choices[0].text
    print(response)

    return response


def generateprompt(year, make, model, features, product, data):

    prompt = """
    write a product description for user that "
    I found the product:{} for your year:{} make:{} model:{} at the price of $969.88 with free shipping on amazon.com Here's the link to the product link the product link price will be get from following data.
    {}
     
    
  """.format(year, make, model, features, product, data)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": prompt},
        ]
    )
    answer = response['choices'][0]['message']['content']

    return answer


def generateprompts(year, make, model, features, product):

    prompt = """
    generate a prompt for product search in website on the base of following parameter:"

     {} {} {} {}  {}
    "
  """.format(year, make, model, features, product,)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": prompt},
        ]
    )
    answer = response['choices'][0]['message']['content']

    return answer


def text_to_image(request):
    # Get the text from the request
    text = request.session.get('img')

    # Create a new image with a white background
    image = Image.new('RGB', (1200, 1500), color='white')

    # Create a Draw object for the image
    draw = ImageDraw.Draw(image)

    # Specify the font and color
    font = ImageFont.truetype("arial.ttf", 16)
    color = (0, 0, 0)

    # Draw the text on the image
    draw.text((100, 100), text, font=font, fill=color)

    # Save the image to a response
    response = HttpResponse(content_type='image/png')
    image.save(response, 'PNG')

    # Set the Content-Disposition header to prompt download
    response['Content-Disposition'] = 'attachment; filename=output.png'

    return response


# @csrf_exempt
# def home(request):

#     if request.method == 'POST':
#         year = request.POST.get('year')
#         print(year)

#         make = request.POST.get('Make')
#         print(make)
#         model = request.POST.get('Model')
#         print(model)
#         features = request.POST.get('Features')
#         print(features)
#         product = request.POST.get('Product')
#         print(product)

#         g = generateprompt(year, make, model, features, product)
#         print(g)

#         if year:
#             URL = f"https://www.amazon.com/s?k={year}"
#             scraper = AmazonScraper(URL)
#             results = scraper.print_product_details()

#         price = truckprices(year=year, make=make, model=model,
#                             features=features, product=product)
#         price.save()

#         request.session['id'] = "http://127.0.0.1:8000/r/{}/".format(price.id)

#         data = {

#             'nav': g,
#             'id': request.session.get('id')
#         }
#         return JsonResponse(data, status=200)

#     else:
#         return render(request, 'home.html')

from .ebay_scraper import Scraper


def home(request):
    if request.method == 'POST':
        year = request.POST.get('year')
        print(year)

        make = request.POST.get('make')
        print(make)
        model = request.POST.get('model')
        print(model)
        features = request.POST.get('features')
        print(features)
        product = request.POST.get('product')
        print(product)

        # g = generateprompts(year, make, model, features, product)

        if year:
            URL = f"https://www.amazon.com/s?k={product+year+make+model+features}"
            scraper = AmazonScraper(URL)


            # Example usage

            scraper.scrape_product_details()
            prompt = """
            I found the {} for your {} {} {} at the price of {} avaliable on amazon.com. Here's the link to the product: <a href='{}'>Link</a>

            """.format(scraper.title, year, make, model, scraper.price, scraper.product_link)

            # url = f"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw={product+year+make+model+features}&_sacat=0"
            # scraper = EbayScraper(url)
            # scraper.scrape_product_details()
            # scraper.get_product_details()
             
            s=product+year+make+model+features
            scraper = Scraper(s)
            scraper.scrape()
            product = scraper.get_product_info(1)  # Get the second result (index 1)

            if product:
                title=product["Title"]
                print(title)
                product["Price"]
                product["Link"]
            else:
                print('noting')

# Access the scraped data using instance variable


           
            prompt2 = """
            I found the {} for your {} {} {} at the price of {} avaliable on ebay.com. Here's the link to the product: <a href='{}'>Link</a>

            """.format(product['Title'], year, make, model, product['Price'], product['Link'], )
        #    r=generate(year, make, model, features, product,results)
        #    print(r)

        # Process the data and generate a response
        # ...
        nic = truckprices(year=year,
    make=make,
    model=model,
    features=features,
    product=product,
    content=prompt
)

        nic.save()
        print(nic.id)
        domains = request.get_host()
        print(domains)
        request.session['id'] = "http://{}/r/{}/".format(domains, nic.id)
        request.session['id1'] = "http://{}/r/{}/".format(domains, nic.id)

        domains = request.get_host()

        request.session['img'] = prompt
        title1='Amazon Results'
        title2='Ebay Results'
        combineprompt = title1 + "\n\n" + prompt + "\n\n" + title2 + "\n\n" + prompt2



        data = {
            'nav': combineprompt,
            'id': request.session.get('id'),
        }
        return JsonResponse(data)
    else:

        return render(request, 'home.html')


def test(request):
    if request.method == 'POST':
        year = request.POST.get('year')
        print(year)

        make = request.POST.get('make')
        print(make)
        model = request.POST.get('model')
        print(model)
        features = request.POST.get('features')
        print(features)
        product = request.POST.get('product')

        # Process the data and generate a response
        # ...

        data = {
            'nav': 'Sample response data for product model with Sample response data for product model with',
            'id': 1,
        }
        return JsonResponse(data, status=200)
    else:

        return render(request, 'test.html')


def r(request, id):
    context = {}
    price = truckprices.objects.get(id=id)
    context['price'] = price
    context['id1'] = request.session.get('id1')

    return render(request, 'home2.html', context)
