from PIL import Image

img = Image.open(r"C:\Users\tessa\PycharmProjects\Aubot_Gifs\images\red_crab\Red-Crab.png")
#img = img.resize((100,100))

rotate_img1 = img.rotate(20)
rotate_img2 = img.rotate(-20)

rotate_img1 = rotate_img1.resize((100,100))
rotate_img2 = rotate_img2.resize((100,100))
img = img.resize((100,100))

rotate_img1.show()
rotate_img2.show()
img.show()
