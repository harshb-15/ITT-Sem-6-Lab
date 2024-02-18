s = 'abcdefghijklmnopqrstuvwxyz'
def main():
    str =  input()
    estr = ""
    for i in range(len(str)):
        estr = estr + s[s.find(str[i]) - 6]
    print(estr)
if __name__ == '__main__':
    main()