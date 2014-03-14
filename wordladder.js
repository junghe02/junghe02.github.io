Stack = function() {

	var lst = []

	this.pushOnto = function(item) {
		lst.push(item)
		return
	}
 
	this.pop = function() {
		return lst.pop()
	}

	this.checkNext = function() {
		return lst[lst.length-1]
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
		var newList = lst.slice(0)
        var newStack = Stack()
		
        for (var i = 0; i < newList.length; i++) {
            newStack.push(newList[i])
        }

        return newStack
	}

	this.size = function() {

	}
}


Queue = function() {
	var lst = []

	this.enqueue = function(item) {
		lst.push(item)
		return 
	}

	this.dequeue = function() {
		var removed = new lst.splice(0,1)
		return removed[0]
	}

	this.isEmpty = function() {

		if (lst.length == 0) {
            return true
		}

        else {
            return false
        }
	}

	this.size = function() {

		return lst.length
	}
        
}

getOneDifferents = function(word,wordList) {

	var OneDifferents = []

	for (var i=0;i<wordList.length;i++) {

        var sameCh = 0

        for (var j=0;j<wordList[i].length;j++) {

            if (wordList[i][j] == word[j]) {
                sameCh += 1
            }
        }
		
        if (sameCh == word.length -1) {

            oneDifferents.push(wordList[i])
        }
	}
    return oneDifferents
}


set = function() {

	var setList = []

	this.add = function(item) {
		setList.push(item)
		return 
	}

	this.contains = function(item) {
		var found = false
		for (var i=0;i<setList.length;i++){
			if (setList[i] = item) {
				found = true
			}
		}
		 return false
	}


}


wordLadder = function() {

	var startWord = document.getElementById("startWord")
	var endWord = document.getElementById("endWord")
	var dropDown = document.getElementById("dropDownSelector")
	var selectedWordLength = dropDown.options[dropDown.selectedIndex].value

	if (selectedWordLength == "threeLetterWords") {
        var useList = threeLetterWords
	}

    else if (selectedWordLength == "fourLetterWords") {
        var useList = fourLetterWords
    }

    else (selectedWordLength == "fiveLetterWords") {
        var useList = fiveLetterWords
    }

    var queue = new Queue()
    var stack = new Stack()

    stack.pushOnto(startWord)
    queue.enqueue(stack)
    usedWordsList = new set()
    usedWordsList.add(startWord)

    var finished = false
    var found = false

    while (!finished) :
    	var theStack = new queue.dequeue()
        var topWord = new theStack.checkNext()
        var nextWords = new getOneDifferents(topWord, useList)

        for (var i = 0; i<nextWords.length; i++) {
        	var nextUsed = false

        	for (var j = 0; j<usedWords.length; j++) {
        		if (nextWords[i] == usedWords[j]) {
					nextUsed = true;
				}
        	}

            if (!in nextUsed) {
                usedWords.add(nextWords[i])
                var newStack = theStack.copy()
                newStack.pushOnto(nextWords[i])

                if (nextWords[i] == endWord) {
                    finished = true
                    found = true
                    finalList = []
                    var finalList = newStack.show()
                }
                queue.enqueue(newStack)
            }
        }
        if (queue.size() == 0) {
        	done = true
            found = false
        }
            

}
