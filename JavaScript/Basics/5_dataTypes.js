/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이있음.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 *
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

/**
 * undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값.
 *
 * 직접 undefined로 값을 초기화하는건 지양해야함.
 */

/**
 * null 타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때
 * 사용됨.
 */

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용함.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용함.
 */

/**
 * Object 타입
 *
 * Map
 * 키:벨류의 쌍으로 이루어져있음.
 * key:value
 *
 */

const dictionary = {
  red: '빨간색',
  orange: '주황색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);

console.log(typeof dictionary);

/**
 * Array 타입
 *
 * 값을 리스트로 나열 할 수 있는 타입.
 */

const NmixxMembersArray = ['해원', '베이', '릴리', '지우', '설윤', '규진'];
console.log(NmixxMembersArray);

/**
 * index
 *
 * 0부터 시작함.
 * 1씩 올라감.
 */

console.log(NmixxMembersArray[0]);
console.log(NmixxMembersArray[5]);

NmixxMembersArray[0] = '카리나';
console.log(NmixxMembersArray[0]);

console.log(typeof NmixxMembersArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시흘 함
 *                   C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에 의해 타입을 "추론"한다.
 * JS -> dynamic typing
 */
