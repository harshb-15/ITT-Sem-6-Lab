def main():
    str = input()
    final = str.split(" ")
    final.sort()
    print(" ".join(final))
    
if __name__ == '__main__':
    main()