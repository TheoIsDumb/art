#!/bin/python3

import os

imgs = os.listdir('img')
thumbs = os.listdir('thumb')

print(len(imgs), len(thumbs))

def check(item):
    return item not in thumbs

left = list(filter(check, imgs))

for f in left:
    os.system(f"cwebp img/{f} -resize 0 480 -o thumb/{f}")
