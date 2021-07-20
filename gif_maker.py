#gif.py
import sys
import datetime
import imageio

VALID_EXTENSIONS = ('png', 'jpg')


def create_gif(filenames, duration):
    images = []
    for filename in filenames:
        images.append(imageio.imread(filename))
    output_file = 'Gif-%s.gif' % datetime.datetime.now().strftime('%Y-%M-%d-%H-%M-%S') #creates file name
    imageio.mimsave(output_file, images, duration) #calls save

create_gif(r"C:\Users\tessa\PycharmProjects\Aubot_Gifs\images\red_crab\gif_images",0.1)