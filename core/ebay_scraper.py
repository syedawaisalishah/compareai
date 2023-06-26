import requests
from bs4 import BeautifulSoup

class Scraper:
    def __init__(self, keyword):
        self.keyword = keyword
        self.url = f"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw={keyword}&_sacat=0"
        self.product_containers = []

    def scrape(self):
        response = requests.get(self.url)
        soup = BeautifulSoup(response.text, "html.parser")
        self.product_containers = soup.find_all("li", class_="s-item s-item__pl-on-bottom")

    def get_product_info(self, index):
        if index < 0 or index >= len(self.product_containers):
            return None

        container = self.product_containers[index]

        try:
            title_element = container.find("span", role="heading")
            title = title_element.text.strip()
        except AttributeError:
            title = "Title not found"

        try:
            price_element = container.find("span", class_="s-item__price")
            price = price_element.text.strip()
        except AttributeError:
            price = "Price not found"

        try:
            link_element = container.find("a", class_="s-item__link")
            link = link_element["href"]
        except (AttributeError, KeyError):
            link = "Link not found"

        return {
            "Title": title,
            "Price": price,
            "Link": link
        }
