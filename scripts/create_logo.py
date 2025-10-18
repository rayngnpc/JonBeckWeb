from PIL import Image, ImageDraw, ImageFont
img = Image.new('RGB', (400,120), color=(40,40,40))
d = ImageDraw.Draw(img)
try:
    fnt = ImageFont.truetype('arial.ttf', 36)
except:
    fnt = ImageFont.load_default()
d.text((20,30), 'JON BECK', font=fnt, fill=(255,255,255))
img.save(r'd:\Murdoch\GRD263\Assignment Final\website\images\logo.png')
print('Logo created')
