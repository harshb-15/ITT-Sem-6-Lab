def main():
    n = int(input())
    lst = []
    for i in range(n):
        num = input()
        lst.append(num)
    flag = True
    for i in range(int(n/2)):
        if(lst[i]!=lst[n-1-i]):
            flag = False
            break
    if(flag):
        print("Its Palindrome")
    else:
        print("Not Palindrome")
    
if __name__ == '__main__':
    main()