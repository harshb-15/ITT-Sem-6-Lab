res = 0
while(1):
    print(f"Result: {round(res, 2)}")
    b = input("Operator: ")
    a = input("Number: ")
    if(a=="!"):
        break
    a = int(a)
    if(b=="+"):
        res+=a
    elif(b=="-"):
        res-=a
    elif(b=="*"):
        res*=a
    elif(b=="/"): 
        res/=a
    
    
    