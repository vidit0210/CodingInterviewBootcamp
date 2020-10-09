def factorial(targetNumber):
    if(targetNumber == 1):
        return 1
    return targetNumber * factorial(targetNumber-1)


print(factorial(5))
