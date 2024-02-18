def main():
    s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    str = input()
    fstr = ""
    for i in range(len(str)):
        if(s.find(str[i])!=-1):
            fstr = fstr + str[i]
    
    print(fstr)
if __name__ == '__main__':
    main()