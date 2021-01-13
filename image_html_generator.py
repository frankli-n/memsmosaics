import os

for e in os.listdir("./images_organised_small/gallery_small"):
	pass
	# print "<a href='../images_organised_large/art_for_sale/%s' target=blank> <img src='../images_organised_small/art_for_sale/%s' class='all forsale'></a>"%(e,e)

for e in os.listdir("./images_organised_large/gallery_large"):
    css_class = e.split('_')
    print css_class
    for x in css_class:
      if x == 'all' or 'nature' or 'new' or 'jewellery' or 'people' or 'other':
        print x
    print "<a href='../images_organised_large/gallery_large/%s' target=blank> <img src='../images_organised_small/gallery_small/%s'"%(e,e)
	# print "<img src='../images_organised_small/gallery_small/%s' class='all mosaics'>"%(e)

'''
  <a class='gallery-link' href='../images/2boat.jpg'>
    <figure class='gallery-image'>
      <img src='../images_small/1moth.jpg'>
      <figcaption>Moth - using gold and moth wings</figcaption>
    </figure>
  </a>
  '''