//module that handles budget data using module pattern (using iife that returns an object)
//BUDGET CONTROLLER 
var budgetController = (() => {
    
}) ();

//UI CONTROLLER
var UIController = ( () => {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add_btn'
    }

    //function to get input data - public function so we can use in other controllers so it must be in return object
    //object we return will be assigned to UIController
    return {
        getInput: () => {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp 
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },

        //exposing DOMstrings to use in other modules 
        getDOMstrings: () => {
            return {
                DOMstrings
            }
        }

    };


})();

//GLOBAL APP CONTROLLER
var controller = ((budgetCtrl, UICtrl) => {
    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
        //1. get the filed input data
        var input = UICtrl.getInput();
        console.log(input);

        //2. add item to budget controller

        //3. add item to ui

        //4. calcualte budget

        //5. display budget on

    };

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', (event) => {
        //key code for pressing 'enter' (which property for older browsers)
        if(event.keyCode === 13 || event.which === 13) {

            ctrlAddItem();

                        

        }
    });
   

})(budgetController, UIController); //keeps the code separate - this controller now "knows" about the other 2 mmodules  