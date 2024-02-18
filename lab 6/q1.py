
def main():
    str = input()
    for i in range(len(str)):
        if(str[i]!=str[len(str)-i-1]):
            print("Not Palindrome")
            return
    print("Palindrome")
if __name__ == '__main__':
    main()