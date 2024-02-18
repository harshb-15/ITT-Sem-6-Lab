n = int(input("Enter n: "))
arr = []
for i in range(n):
    temp = []
    for j in range(n):
        num = int(input())
        temp.append(num)
    arr.append(temp)
print("Orignal: ")
for i in range(n):
    for j in range(n):
        print(arr[i][j], end = " ")
    print()
for i in range(n):
    for j in range(i):
        arr[i][j], arr[j][i] = arr[j][i], arr[i][j]
print("Transpose: ")
for i in range(n):
    for j in range(n):
        print(arr[i][j], end = " ")
    print()

        