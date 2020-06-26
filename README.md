# React Component 실습

CSS, React 라이브러리 및 템플릿을  `component`화 시켜 예발자닷컴 메인 페이지를 반응형으로 디자인했다. 

해보면서 익히자는 취지였기 때문에 리액트로 컴포넌트 만드는 방법 정도의 강의를 듣고 시작했다. 눈에 보이는 화면에만 집중해서 코드가 매우 지저분하다. 심지어 만들어 놓고 안 쓰는 컴포넌트들도 삭제하지 않고 그대로 나뒀다. 나중에 시간을 내서 리팩토링 해보면 좋을 것 같다. 

아무튼 아래의 것들에 조금은 익숙해진 것 같다.

- 리액트의 폴더 구조 
- 함수형 컴포넌트 설계
- state와 props를 이용해 데이터 관리
- 자바스크립트 이벤트
- 개발자도구를 활용해 css 적용

#### 완성한 메인 페이지. 

![예발자1](https://user-images.githubusercontent.com/37580034/85753433-37814080-b747-11ea-80a4-856182eaf122.JPG)

![예발자2](https://user-images.githubusercontent.com/37580034/85753443-394b0400-b747-11ea-9b75-b0456fd04eef.JPG)

<br>

잔행하면서 고민한 부분들을 간략하게 정리했다.

<br>

## 🩸 React 

### 1. 폴더 구조 설계

기능별로 컴포넌트를 쪼개 구조화 하는 방식으로 개발했다. 

```js
react-yebalja(프로젝트명)
│
└ src 
   |
   │        
   ├ page  ┬ components ┬ Jumbotron.js // 점보트론
   │       │            ├ SectionBox.js // 섹션 타이틀
   │       │            ├ HorizontalTimeline.js // 연간 타임라인 
   │       │            ├ Table.js   // 비교 표
   │       │            └ Footer.js // 푸터
   │       │           
   │       ├ home.js  // 메인 페이지
   │       └ detail.js // 디테일 페이지
   ├ index.js
   ├ App.js
   └ App.css
```

지금은 메인 페이지 하나만 만들어봐서 굳이 페이지 js파일을 나누지 않았지만, 실제 개발할 때는 이 [블로그](https://medium.com/hivelab-dev/react-js-tutorial-exam-step3-bfec609f5652) 글을 참고하면서 컴포넌트와 props 설계를 고려하면 좋을 것 같다.



### 2. 함수형 컴포넌트 hooks 사용법

머티리얼 ui의 컴포넌트들은 class형이 아니라 함수형으로 구현되어 있어서, 기존의 state와 props 사용법과 약간 다르게 데이터를 전달해야 한다. 

##### jumbotron.js

```js
import React ,{useEffect, useState} from 'react';
import '../styles/Jumbotron.css'

export default function Jumbotron(props) {
	const [title] = useState('');
  	const [content] = useState('');

	return (
			<div class="jumbotron jumbotron-fluid">
  				<div className="container">
    				<h1>{props.title}</h1>
    				<p>{props.content}</p>
  				</div>
			</div>
	);
  }
```

- 먼저 hooks API가 제공하는 `useEffect`, `useState` 를 import한다.
- `Jumbotron(props)` 컴포넌트의 매개변수로 `props`를 전달받는다.
- `useState('초기값')`를 쓰면 변수의 초기값을 세팅할 수 있다. 나는 그냥 빈 문자열로.
- 변수가  `const [title]` 객체 배열의 형태인 이유는 `useState('초기값')` 함수의 반환값이 2개 이기 때문이다. 우리는 그중 첫번째 인덱스에 `props` 값을 저장한다. 
  - 두번째 인덱스는 `setTitle` 이라고 나중에 값을 바꿀 때 쓸 수 있는데, 나는 props를 한번만 사용하고 말거라 굳이 `setTitle` 를 쓸 필요가 없었다.
- `{props.title}` 와 같이 사용한다. 이 값은 점보트론 컴포넌트를 사용할 App 컴포넌트에서 넣어준다.

##### App.js

```js
import React, {Component} from 'react';
import './styles/App.css';
import Jumbotron from './components/Jumbotron'

class App extends Component {
	render() {
	  return (
		<div className="App">
			<Jumbotron 
				title={'예발자닷컴'} 
				content={'예비개발자를 위한 무료 부트캠프 코스를 한 눈에 비교하세요.'}>
			</Jumbotron>
		</div>
	  );
	}
  }

  export default App;
```

- 컴포넌트를 불러올 때 `props` 데이터를 넣어준다.



더 자세한 hooks 사용법은 아래 블로그들 참고.

- https://haeguri.github.io/2019/10/13/react-hooks-basic/
- https://velopert.com/2994



### 3. `but never used` 에러 처리

`const [title] = useState('');` 로 선언한 `title` 변수는 컴포넌트에서 중괄호`{ }` 를 이용해서 사용한다. 이때 아래같은 에러가 나는걸 확인할 수 있다.

```shell
'title' is assigned a value but never used    no-unused-vars
```

`jsx`로 처리되는 변수들은 shadowing이 되서 `eslint`가 인식하지 못하기 때문이다. 그래서 쓰고 있는데도 선언해놓고 사용하지 않는다는 에러를 발생시킨다.

#### 해결법

아래 주석을 문제되는 라인 옆에 추가한다.

```js
// eslint-disable-next-line 
```



### 4. jsx문법으로 외부 js파일 불러오기

##### index.html

script src 속성에 경로를 입력하는 식으로 가져오면 될 줄 알았는데, jsx는 방법이 약간 다른 것 같다. 파일을 링크하는 형태 말고 script 태그 안에 js파일 내용을 그냥 적어야 브라우저가 인식한다. 

그런데 이 방법은 보기 좋지도 않고, 여러 js파일을 사용하기도 어렵다. 

구글링해서 나오는 방법으로 해도 동작하지 않아서 미해결.



<br>



## 🧱 Design Templates

### 1. Material-UI

부트스트랩과 다르게 react Component 를 통채로 제공하는 라이브러리. 근데 생각만큼 컴포넌트가 다양하지 않고 CSS 변경하기가 어렵다. 원래 이 실습 자체를 머티리얼UI 실습으로 시작했는데, 결국 하나도 사용하지 않았다.

#### material-UI CSS 적용하는 방법

```js
//index.js

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
    	<App />
	</MuiThemeProvider>
  document.getElementById('root')
);
```

- `MuiThemeProvider` : 최종 렌더링 할 컴포넌트를 감싸준다. 
- `createMuiTheme` : `scss` 문법으로 CSS 요소들을 수정할 수 있게 해주는 함수.



#### material-UI 웹폰트 적용하는 방법

머티리얼이 기본으로 제공하는 폰트들이 몇 개 있는데, 걔네들을 사용하고 싶으면 `createMuiTheme`를 통해 CSS를 먹일 수 있다. 그런데 한글폰트는 당연히 없어서, 사용하려면 약간 복잡하다. 그냥 header에 링크하는 방법으로는 안된다.

상업용 무료 한글 폰트는 [눈누](https://noonnu.cc/)에서 다운받을 수 있다.

1. ##### `src`디렉토리 안에 `fonts` 디렉토리 생성하고, 다운받은 폰트파일(`.ttf`) 을 넣는다.

2. ##### index.css에서 `font-family`를 등록한다.

   ```css
   // index.css
   @font-face { font-family: 'NEXON Lv2 Gothic Bold'; src: url('../fonts/NEXON\ Lv2\ Gothic\ Bold.ttf') format('truetype'); }
   ```

   이때 `url` 에는 다운받은 폰트가 위치한 상대경로를 넣어주고, `format`은 트루타입!

3. ##### [위]()의 CSS적용법을 참고해, index.js에서 `createMuiTheme` 에 fontFamily를 추가한다.

   ```js
   const theme = createMuiTheme({
     typography: {
       fontFamily: 'NEXON Lv2 Gothic Bold',
     },
   });
   ```

4. ##### index.js의 App 컴포넌트에 전체 적용.

   ```js
   ReactDOM.render(
   	<MuiThemeProvider theme={theme}>
       	<App />
   	</MuiThemeProvider>
     document.getElementById('root')
   );
   ```

   #####  



### 2. Codepen

머티리얼UI에서 제공하는 컴포넌트들이 마음에 들지 않아서, 주로 구글링을 해서 템플릿을 찾았다.  `awesome 30 react table template` 처럼 어-썸을 붙이는게 구글링 꿀팁.

아무튼 주로 [codepen](https://codepen.io/) 이란 사이트로 많이 링크된다. 개인이 작성한 HTML, CSS, JavaScript 템플릿들을 공유하는 오픈소스 커뮤니티인 것 같다. 아래 코드들을 많이 참고해 사용했다.

- ##### timeline

  - https://codepen.io/tutsplus/pen/ZKpNwm/
  - [사용법](https://webdesign.tutsplus.com/ko/tutorials/building-a-horizontal-timeline-with-css-and-javascript--cms-28378)


- ##### table

  https://codepen.io/chriscoyier/pen/PgXRRM


- ##### footer

  https://codepen.io/julesforrest/pen/qLpgNB



### 3. bitly

- 이미지 주소가 너무 길어서 코드가 지저분해질 때 사용하면 좋은 사이트. 
- 키워드를 지정해서 단축 URL로 변환해준다.
- http://bitly.kr/

<br>



## 🎨 CSS / JS

### 1. 모바일 터치 제스처 사용하기

-  [Hammer](https://github.com/hammerjs/hammer.js/tree/master/) : 터치 제스처를 인식하게 해주는 자바스크립트 라이브러리
- `Timeline` 컴포넌트 CSS에 넣으면 좋을듯.

```js
// ADD SWIPE SUPPORT FOR TOUCH DEVICES
		function setSwipeFn(tl, prev, next) {
		  const hammer = new Hammer(tl);
		  hammer.on("swipeleft", () => next.click());
		  hammer.on("swiperight", () => prev.click());
		}
```



### 2. `.SCSS` 파일 `.CSS` 파일로 변환하기

codepen의 템플릿 코드들은 주로 `scss` 파일로 스타일을 적용한다. 아마 문법이 간단하고 구조적이어서 그런듯. 아무튼 css로 변환하는 방법은 여러가지가 있는데, 나는 `node-sass` 라는 패키지를 사용해 컴파일했다.

#### node-sass

1. 설치

   ```shell
   $ npm install -g node-sass
   ```

2. node-sass [옵션] <입력파일경로> [출력파일경로]

   ```shell
   $ node-sass main.scss main.css
   ```

   출력파일이 이미 존재하면 덮어쓰기가 되고, 없으면 생성된다. 나는 특별한 옵션을 넣지는 않았다.

   

### 3. background-color 그라데이션 

```css
background: #74ebd5;
background: -webkit-linear-gradient(to right, #74ebd5, #ACB6E5);
background: linear-gradient(to right, #74ebd5, #ACB6E5)
```



### 4. 텍스트 overflow 막기

```css
overflow:auto 
```

텍스트가 div 태그 밖으로 넘치면 스크롤이 나온다.



### 5. 텍스트 수직정렬하기

정렬대상의 부모요소에 아래 속성을 적용한다.

```css
display: flex;
justify-content: center;
flex-direction: column;
```



### 6. CSS에 애니메이션 넣기

- **`:hover`** 라는 [CSS](https://developer.mozilla.org/ko/docs/Web/CSS) [의사 클래스](https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-classes)를 적용한다. footer의 손 이모티콘을 흔들게 만들 수 있다.

<br>



## 😼 Git

### 1. git pull과 fetch의 차이

#### **pull**

- 원격 저장소로부터 필요한 파일을 다운 + 병합한다.
- 지역 브랜치와, 원격 저장소 origin/master 가 같은 위치를 가리킨다.

#### **fetch**

- 원격 저장소로부터 필요한 파일을 다운만 한다. (병합은 따로 해야 한다.)

- 신중할 때 사용한다.

- 사용하는 이유

  - 원래 내용과 바뀐 내용과의 차이를 알 수 있다.

    ```shell
    git diff HEAD origin/master
    ```

  - commit이 얼마나 됐는지 알 수 있다. 

    ```shell
    git log --decorate --all --oneline
    ```

  - 세부 내용 확인 후 `git merge origin master` 하면 git pull 상태와 같아진다.

- 사용법

```
git checkout master
git fetch
git checkout 새 브랜치
```

