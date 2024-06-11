console.log('firebase file');


// Firebase 설정 객체 : 내 firebase에 대한 정보를 이야기하는 부분.
const firebaseConfig = {
    apiKey: "AIzaSyDVRQ4dBFrOpaysctDSXGklA2DXmRxqRcA",
    authDomain: "fir-test-5f475.firebaseapp.com",
    databaseURL: "https://fir-test-5f475-default-rtdb.firebaseio.com",
    projectId: "fir-test-5f475",
    storageBucket: "fir-test-5f475.appspot.com",
    messagingSenderId: "634886961047",
    appId: "1:634886961047:web:77d98394d9afbd1ee2b6d2"
  };

  // Firebase 앱 초기화
  const app = firebase.initializeApp(firebaseConfig);

// Firebase의 실시간 데이터베이스
const database = firebase.database()

// Firebase의 데이터 쓰기 
const WriteUserData = (userId, name, email)=>{
    firebase.database().ref('users/'+userId).set({
        name : name,
        email : email
    })
}

// firebase에 있는 데이터 읽기
const readUserData=(userId)=>{
    const userRef = firebase.database().ref('users/')       //'user/'라는 경로의 참조를 가져옴

    userRef.once('value').then((res)=>{                     //값을 한번 가져와볼게, 그러고나면(then)
        const data = res.val()
        console.log(data);
    })                    

}





/* Mission!
1. addUserBtn 이라는 id를 가진 버튼을 클릭 시
2. 사용자가 input 에 입력한 세개의 데이터를 각각 console 창에 찍어보기
3. 02.JS 실전 폴더 -> ex04 참고*/



/*   //내가 적던 답
let id = document.frm.id
let email = document.frm.email


let addUserBtn = document.getElementById('addUserBtn')
addUserBtn.addEventListener('click',()=>{
    console.log('input에 입력한 세개의 데이터 :');
})*/


// 답

let addUserBtn = document.getElementById('addUserBtn')
let frm = document.frm.elements     //모두 요소들을 가져오겠다!

addUserBtn.addEventListener('click',()=>{
    console.log(frm[0].value);
    console.log(frm[1].value);
    console.log(frm[2].value);
    
    WriteUserData(frm[0].value, frm[2].value,frm[1].value)
})


let getUserBtn = document.getElementById('getUserBtn')
getUserBtn.addEventListener('click',()=>{
    console.log('유저가져오기 ck');
    readUserData('asdf')
})