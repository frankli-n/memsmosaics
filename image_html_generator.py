import os

for e in os.listdir("./images_organised/art_for_sale"):
	print "<a href='../images_organised/art_for_sale/%s' target=blank> <img src='../images_organised_small/art_for_sale/%s' class='all forsale'></a>"%(e,e)

for e in os.listdir("./images_organised/art_sold"):
	print "<a href='../images_organised/art_sold/%s' target=blank> <img src='../images_organised_small/art_sold/%s' class='all sold'></a>"%(e,e)

'''
  <a class='gallery-link' href='../images/2boat.jpg'>
    <figure class='gallery-image'>
      <img src='../images_small/1moth.jpg'>
      <figcaption>Moth - using gold and moth wings</figcaption>
    </figure>
  </a>
  '''