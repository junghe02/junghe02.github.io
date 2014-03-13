Stack = function() {

	var lst = []

	this.checkNext = function() {
		return lst[-1]
	}

	this.isEmpty = function() {
		if (lst.length == 0) {
			return true 
		}
		else {
			return false
		}
	}

	this.length = function() {
		return lst.length
	}

	this.copy = function() {
		newList = lst
        newStack = Stack()
		
        for (var item in newList)
            newStack.push(item)

        return newStack
	}

	this.size = function() {

	}
}


set = function() {

}


wordLadder = function() {

	var startWord = document.getElementById("startWord")
	var endWord = document.getElementById("endWord")
	var dropDown = document.getElementById("dropDownSelector")
	var selectedWordLength = dropDown.options[dropDown.selectedIndex].value

	if (selectedWordLength == "threeLetterWords") {
        useList = threeLetterWords
	}

    else if (selectedWordLength == "fourLetterWords)" {
        useList = fourLetterWords
    }

    else (selectedWordLength == "fiveLetterWords") {
        useList = fiveLetterWords
    }

    queue = new Queue()
    stack = new Stack()
    stack.push(startWord)
    queue.push(stack)
    usedWordsList = new set()
    usedWordsList.add(startWord)

    finished = false

    while (not finished) :
        theStack = queue.pop()
        topWord = theStack.checkNext()
        //
        nextWords = getOneDifferents(topWord, useList)
        for (word in nextWords) {
            if (word not in usedWords) {
                usedWords.add(word)
                newStack = currentStack.clone()
                newStack.push(word)
                if (word == endWord) {
                    finished = True
                    //found = True
                    finalList = []
                    for (pos in range (newStack.size())){
                        finalList.push(newStack.pop())
                    }
                }
                queue.enqueue(newStack)
            }
        }
        if queue.size() == 0:
            done = True
            found = False

}