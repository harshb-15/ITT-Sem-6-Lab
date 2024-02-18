import re
txt = "Hello Mister how are you"
x = re.findall("([d-h]|[A-M])", txt)
print(x)