        /*
자바스크립트 문제.

vscode를 이용하여 작성합니다. 
chap6 폴더를 생성한 후에 파일을 생성합니다. 
파일명은 index.html에다가 작성해 주시면 되겠습니다. 

게임에 필요한 데이터를 모아놓을 객체를 미리 선언해 놓았습니다. 
해당 객체는 처음에는 건드릴 필요가 없지만, 프로그램이 진행되면서
프로퍼티의 값은 변경될 가능성이 있습니다.

맨 아래에 작성된 즉시 실행 함수에 의해서 
브라우저가 실행 되자마자 프로그램이 동작하게 됩니다. 
첫번째 alert()이 진행되고 나서 무한 루프가 동작합니다. 
무한 루프의 조건식은 inputNumber 함수의 리턴값입니다. 아마 논리값이겠죠?
inputNumber가 논리를 판단하는 것은 아닙니다. return문을 보시면 checkNumber가 return 하는 값을
그대로 리턴하는 것을 보여주고 있습니다.
checkNumber에서 정답, 오답 여부 및 up/down 여부를 판단해서 논리값을 주면 되겠습니다. 
나머지 함수들은 타이밍 맞게 호출해 주시면 됩니다. 
각 함수의 이름과 해야 할 일을 작성해 놓았습니다. 
요구사항에 맞게 코드를 작성해 보세요.
*/
        //필요한 데이터: 랜덤 숫자, 횟수카운트, 카운트다운, 최소값, 최대값

        //최대범위를 저장할 변수
        const MAX = 100;

        //게임에 필요한 데이터를 모아놓을 객체
        const gameData = {
            secret_num: Math.floor(Math.random() * MAX) + 1,
            count: 0,
            countdown: 6,
            min: 1,
            max: MAX
        };

        ////////////////////////함수 정의부///////////////////////////////

        //사용자의 입력을 수행하는 함수
        function inputNumber() {

            //객체에서 min과 max의 값을 뽑아서 메세지를 완성.
            //객체 디스트럭쳐링으로 뽑아 보세요~
            const {min, max} = gameData;
            const num = +prompt(`${min}~${max} 사이의 숫자를 입력하세요!`)
            //사용자의 입력값을 객체에 추가
            gameData.input = num;
            //입력값 검증 함수를 호출.
            return checkNumber();

        }

        //사용자의 입력값을 검증하는 함수
        function checkNumber() {
            const {input, secret_num} = gameData
            if (input == secret_num) {
                alert(`${gameData.count+1}회 만에 정답!!`);
                checkCountDown();
                return true;
            } else if (input > secret_num) {
                alert('오답~ DOWN~!')
                gameData.count++;
                gameData.countdown--;
                alertCountDown();
                gameData.max = input - 1;
                return false;

            } else if (input < secret_num) {
                alert('오답~ UP~!')
                gameData.count++;
                gameData.countdown--;
                alertCountDown();
                gameData.min = input + 1;
                return false;
            }


        }

        //사용자의 카운트다운을 체크하여 승리 여부를 알려주는 함수
        function checkCountDown(countdown) {
            if (gameData.countdown > 0) {
                alert('승리!');
            } else {
                alert('패배.');
            }
        }


        //사용자의 남은 카운트다운 횟수를 알려주는 함수
        function alertCountDown(countdown) {
            if(gameData.countdown > 0){
                alert('남은 횟수: ' + gameData.countdown);
            }
            else if (gameData.countdown === 0) {
                alert('남은 횟수 소진..TO BE CONTINUE..! ');
            }
            else if(gameData.countdown<0){
                alert('CONTINUE..! ');
            }
        }


        //핵심 실행부 (main의 역할을 하는 함수)
        //즉시 실행 함수로 선언하여 따로 호출하지 않아도
        //바로 실행될 수 있도록 작성.

        (function () {
            alert('[UP & DOWN 게임 - 1 ~ 100 사이의 숫자를 맞춰보세요!]');

            //입력을 담당하는 함수를 호출할 예정.
            while (!inputNumber()) {
                //true가 리턴되면 프로그램 종료.
                //false가 리턴되면 게임 계속 진행.
            }

        }());