
n = int(input("Enter n: "))

arr = []
for i in range(n):
    temp = []
    for j in range(n):
        num = int(input())
        temp.append(num)
    arr.append(temp)
brr = []
for i in range(n):
    temp = []
    for j in range(n):
        num = int(input())
        temp.append(num)
    brr.append(temp)
crr = [ [0]*n for _ in range(n) ]
for i in range(n):
    for j in range(n):
        for k in range(n):
            crr[i][j] += arr[i][k]*brr[k][j]
print("Final: ")
for i in range(n):
    for j in range(n):
        print(crr[i][j], end = " ")
    print()