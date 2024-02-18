def takeArr(n):
    arr = []
    for i in range(n):
        temp = []
        for j in range(n):
            num = int(input())
            temp.append(num)
        arr.append(temp)
    return arr
def printArr(arr, n):
    for i in range(n):
        for j in range(n):
            print(arr[i][j], end = " ")
        print()
        

def main():
    n = int(input())
    a = takeArr(n)
    b = takeArr(n)
    c = [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            c[i][j] = a[i][j] + b[i][j]
    printArr(c, len(c))
    
if __name__ == '__main__':
    main()