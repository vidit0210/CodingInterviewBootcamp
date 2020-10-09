"""
When a function calls itself from the function it is called Direct Recursion
"""


def printNaturalNumbers(lowerRange, upperRange):
    if lowerRange > upperRange:
        return
    print(lowerRange)
    return printNaturalNumbers(lowerRange + 1, upperRange)


printNaturalNumbers(1, 5)
