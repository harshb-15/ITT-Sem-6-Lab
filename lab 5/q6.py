def sm(n, arr):
    if(n==1 or n==0):
        return n
    if(arr[n]!=-1):
        return arr[n]
    arr[n] = sm(n-1, arr)+sm(n-2, arr)
    return arr[n]

def main():
    n = int(input())
    arr = [-1]*(n+1)
    arr[0] = 0
    arr[1] = 1
    sm(n, arr)
    print(arr)
if __name__ == '__main__':
    main()