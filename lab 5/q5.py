def sm(n):
    if(n==1 or n==0):
        return n
    return n + sm(n-1)

def main():
    n = int(input())
    print(sm(n))
if __name__ == '__main__':
    main()