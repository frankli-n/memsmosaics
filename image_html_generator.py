import os

for e in os.listdir("./images_organised_small/gallery_small"):
	pass
	# print "<a href='../images_organised_large/art_for_sale/%s' target=blank> <img src='../images_organised_small/art_for_sale/%s' class='all forsale'></a>"%(e,e)

for e in os.listdir("./images_organised_small/gallery_small"):
	# print "<a href='../images_organised_large/art_sold/%s' target=blank> <img src='../images_organised_small/art_sold/%s' class='all sold'></a>"%(e,e)
	print "<img src='../images_organised_small/gallery_small/%s' class='all mosaics'>"%(e)

'''
  <a class='gallery-link' href='../images/2boat.jpg'>
    <figure class='gallery-image'>
      <img src='../images_small/1moth.jpg'>
      <figcaption>Moth - using gold and moth wings</figcaption>
    </figure>
  </a>
  '''