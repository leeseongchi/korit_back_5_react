응답데이터_뿌려주기();

function 응답데이터_뿌려주기() {
    const reponseData = {
        title: "응답데이터",
        dataList: [
            {
                name: "김준일",
                age: 31
            },
            {
                name: "김준이",
                age: 32
            },
            {
                name: "김준삼",
                age: 33
            }
        ]
    };

    console.log(타이틀_컴포넌트(reponseData.title));

    for(let i = 0; i < reponseData.dataList.length; i++) {
        console.log(테이블_TR_TD_컴포넌트(reponseData.dataList[i]));
    }

    for(let 학생 of reponseData.dataList) {
        console.log(테이블_TR_TD_컴포넌트(학생));
    }

    // 비구조 할당
    const 타이틀 = reponseData.title;
    const 학생 = reponseData.dataList[0];
    const 학생들 = reponseData.dataList;

    const { title, dataList } = reponseData;
    const { name, age } = dataList[0];

    for(let 학생 of dataList) {
        console.log(테이블_TR_TD_컴포넌트(학생, title));
    }

    const user = {
        username: "aaa",
        password: "1234",
        naems: "김준일"
    }

    // const username = user.username;
    // const password = user.password;

    const { username, password } = user;

    console.log(username);
    console.log(password);
}

function 타이틀_컴포넌트(타이틀) {
    return `
        <h1>${타이틀}</h1>
    `;
}

function 테이블_TR_TD_컴포넌트({ name, age }, title) {
    console.log(title);
    return `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
        </tr>
    `;
}