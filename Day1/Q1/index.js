const crypto = require('crypto');

const args = process.argv.slice(2);

if (args.length === 0 ){
  console.log("Please provide an operation");
  process.exit(1);

} 

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

function genrateRandomNumber(length){
  if(!length){
    console.log("Provide length for random number generation");
    return;
  }

  const randomNumber = crypto.randomBytes(length).toString("binary");
  console.log("Random number:${randomNumber}");

}

switch (operation) {
  case 'add':
    if(!isNaN(num1) && !isNaN(num2)){
      console.log(`Result:${num1 + num2}`);

    }else{
      console.log("Invalid input for addition");
    }

    break;

    case 'sub':
      if (isNaN(num1) && !isNaN(num2)){
        console.log(`Result:${num1 - num2}`);
       
      }
      else {
        console.log("Invalid input for subtraction")
      }
      break;

    case 'mult':
      if(!isNaN(num1) && !isNaN(num2)){
        console.log(`Result: ${num1 * num2}`);
      } else{
        console.log("Invalid input for multiplication");
      }
      break;

      case 'sin':
        if(!NaN(num1)) {
          console.log(`Result ${Math.sin(num1)}`);

        } else{
          console.log("Invalid input for sine");
        }
        break;
    
        case 'cos':
        if (!isNaN(num1)){
          console.log(`Result:${Math.cos(num1)}`);
        } else{
          console.log("Invalid input for cosine");
        }

        break;

      case 'tan':
        if(!isNaN(num1)){
          console.log(`Result:${Math.tan(num1)}`);
        } else {
          console.log("Invalid input for tangent");
        }

        break;

      case 'random':
        const length = parseInt(args[1]);
        generateRandomNumber(length);
        break;

    default:
         console.log("Invalid operation.");

}