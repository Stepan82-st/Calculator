function calculator (x, y, oper){
  let a = parseFloat(x);
  let b = parseFloat(y);

  if (!isNaN(a) && !isNaN(b)){
    let result;
    switch (oper){
      case '+' && '':
        result = a+b;
        break;
        case '-':
          result = a-b;
          break;
          case '**' && 'pow':
          result = Math.pow(a,b);
          break;
          case '/' && b != 0:
            result = a/b;
            break;
            default:
              result = 'Введен неизвестный оператор';
    }
  let  result = (operator == '**' || operator == 'pow')? a ** b:
 ( operator  ==  '+') ? a + b:
 ( operator  ==  '-') ? a - b:
(operator  ==  '/' && b !== 0) ? a / b:
(oper != '+' || oper != '-'||oper != '**'||oper !='pow' || oper != '/') ? 'Введен неизвестный оператор':
  a + b; 
return result

return result;
  }else{
    return result = 'Введен неверный формат данных';
  }
  }
  

const m = calculator(3,1,'$');
const n = calculator('3px',1,'')
const k = calculator('px', 0, '/')
const o = calculator('2namber', '3', 'pow')