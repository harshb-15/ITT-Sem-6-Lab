def main():
    n = int(input())
    binary = bin(n).replace("0b", "") 
    octal = oct(n).replace("0o", "")
    hexa = hex(n).replace("0x","")
    print(binary)
    print(octal)
    print(hexa)
if __name__ == '__main__':
    main()