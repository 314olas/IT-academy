var hideNumber = prompt("Enter number from 0 to 100(only number)", 0);

var dozen = confirm("Is your number in first 50?");



switch (dozen){
    case true:
        let firstHalfFifty = confirm("Is your number in first 25?");
        switch (firstHalfFifty) {
            case true:
                let halfSeventeen = confirm("Is your number in first 17?");
                    switch (halfSeventeen) {
                        case true:
                            let firstEight = confirm("Is your number in first 8?");
                            switch (firstEight) {
                                case true:
                                    let firstfour = confirm("Is your number in first 4?");
                                case false:
                                    let socondFour = confirm("Is your number from 4 to 8?");
                            }
                        case false:
                            let secondEight = confirm("Is your number from 8 to 17?");
                    }
            case false:
                let secondSeventeen = confirm("Is your number from 17 to 25");
        }
        break;
    case false:
        let secondHalfFifty = confirm("Is your number from 50 to 75");
        break;
}
