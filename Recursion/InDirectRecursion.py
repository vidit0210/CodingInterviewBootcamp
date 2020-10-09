def printNaturalNumbers(lowerRange, upperRange):
    if lowerRange <= upperRange:
        print(lowerRange)
        lowerRange += 1
        helperFunction(lowerRange, upperRange)
    else:
        return


def helperFunction(lowerRange, upperRange):
    if lowerRange <= upperRange:
        print(lowerRange)
        lowerRange += 1
        printNaturalNumbers(lowerRange, upperRange)
    else:
        return


# Driver Program
n = 5
printNaturalNumbers(1, n)
