import openai



from autoscraper import AutoScraper

url = 'https://www.amazon.com/s?k=drone'

wanted_list = ['DJI Mini 2 SE, Lightweight and Foldable Mini Drone with QHD Video, 10km Video Transmission, 31-min Flight Time, Under 249 g, Return to Home, Automatic Pro Shots, Drone with Camera for Beginners', '$33900','2019' ,'4K CAMERA WITH EIS & 3 AXIS GIMBAL: Speedbird I63E drones for adults with 4K UHD camera and 3-Axis Motorized Gimbal can freely be adjusted different shooting angle to get a clear video or images with deep contrast and vivid colors. Built-in EIS (Electronic Image Stabilization) can achieve reduces blurring and ensures video quality to maximize this effect. It ensures shooting images and videos stably even when working fast at high altitude.SUPERIOR 5G SEAMLESS TRANSMISSION : The headless aircraft supports 5G WiFi transmission that can save 4K video at 30 frames per second. Guarantees longer and smooth image & video transmission and show you real time picture or video in your phone. On-board memory card reader can also record your experiences.HIGH ALTITUDE & POWERFUL PERFORMANCE: With a max altitude of 394 ft and a flight time of 25 mins. Our rc quadcopters has a maximum takeoff altitude of 10,000 ft. Let you explore to your heart’s content and reach new heights. Our helicopter not only capture great video at slow speeds but also race across the sky at speeds up to 25mph. And it withstand up to level 4 winds allowing you to make the most of any day whether you’re flying along a windy beach or soaring high above the trees.INTELLIGENT FLIGHT FEATURES: GPS drones for adults, multiple GPS functions such as Follow Me, Waypoint Flight, Tap Fly and Point of Interest enable the drone to fly automatically and free your hands. Never lose the airplane. It returns automatically whenever you press one key return, low battery or lost signal. Let your family enjoy the creative fun of flight together!PROFESSIONAL DRONES: For professional personnel, The Speedbird I63E is undoubtedly a reliable professional drone with camera,4K camera lens, Ultra high-definition picture quality, GPS intelligent function, all will enhance your flying experience.''']
p=wanted_list[1]
print(p)

scraper = AutoScraper()
scraper.build(url, wanted_list)
def p(product):
    
    prompt="""show the following in this form like your product is in amazon and the model make year is from this result{}""".format(product)
    response=openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": prompt},
    ]
   )
    answer=response['choices'][0]['message']['content']
    
    

    return answer
s=p(p)
print(s)