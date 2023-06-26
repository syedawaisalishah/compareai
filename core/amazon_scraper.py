from bs4 import BeautifulSoup
import requests

class AmazonScraper:
    def __init__(self, url):
        self.url = url
        self.headers = {'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'en-US, en;q=0.5'}
        self.title = ""
        self.price = ""
        self.rating = ""
        self.review_count = ""
        self.availability = ""
        self.product_link = ""

    def get_title(self, soup):
        try:
            title = soup.find("span", attrs={"id": 'productTitle'})
            title_value = title.text
            title_string = title_value.strip()
        except AttributeError:
            title_string = ""
        return title_string

    def get_price(self, soup):
        try:
            price = soup.find("span", attrs={'class': 'a-offscreen'}).text.strip()
        except AttributeError:
            price = ""
        return price

    def get_rating(self, soup):
        try:
            rating = soup.find("span", attrs={'class': 'a-icon-alt'}).string.strip()
        except AttributeError:
            rating = ""
        return rating

    def get_review_count(self, soup):
        try:
            review_count = soup.find("span", attrs={'id': 'acrCustomerReviewText'}).string.strip()
        except AttributeError:
            review_count = ""
        return review_count

    def get_availability(self, soup):
        try:
            available = soup.find("div", attrs={'id': 'availability'})
            available = available.find("span").string.strip()
        except AttributeError:
            available = "Not Available"
        return available

    def get_product_link(self, soup):
        try:
            link = soup.find("link", {'rel': 'canonical'})['href']
        except (AttributeError, KeyError):
            link = ""
        return link

    def scrape_product_details(self):
        webpage = requests.get(self.url, headers=self.headers)
        soup = BeautifulSoup(webpage.content, "html.parser")
        links = soup.find_all("a", attrs={'class': 'a-link-normal s-no-outline'})
        links_list = []
        for link in links:
            links_list.append(link.get('href'))

        # Loop for extracting product details from each link
        for link in links_list:
            new_webpage = requests.get("https://www.amazon.com" + link, headers=self.headers)
            new_soup = BeautifulSoup(new_webpage.content, "html.parser")
            self.title = self.get_title(new_soup)
            self.price = self.get_price(new_soup)
            self.rating = self.get_rating(new_soup)
            self.review_count = self.get_review_count(new_soup)
            self.availability = self.get_availability(new_soup)
            self.product_link = self.get_product_link(new_soup)
            break
