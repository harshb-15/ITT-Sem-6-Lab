def main():
    n = int(input())
    st1 = set()
    st2 = set()
    for i in range(n):
        str = input()
        st1.add(str)
    for i in range(n):
        str = input()
        st2.add(str)
    z = st1.union(st2)
    print(f"Union {z}")
    z = st1.intersection(st2)
    print(f"Intersection {z}")
    z = st1.difference(st2)
    print("A-B:",z)
    z = st2.difference(st1)
    print(f"B-A: {z}")
    
if __name__ == '__main__':
    main()