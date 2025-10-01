[작업 히스토리]

250917

- 리액트, 타입스트립트, 셋팅
- 리덕스, scss, styled-component, react-router-dom, react-dnd-html5-backend,react-syntax-highlighter 설치
- 언어변경 설정 i18next react-i18next 사용

250918
 - react-typed 설치
 - home 퀴즈 언어번역
 - 문제1 => 드래그한 한 텍스트값은 변하지 않는다.


250929
 - scss 최적화
 - commone 변수 지정 => 새로운 scss를 구출 할 때 항상 @use common을 해줘야 한다.
 - app에 모든 scss import
 - style-componet를 사용하지만 색상, 폰트 사이즈 등은 클래스로 제어, 실시간으로 변경되는 값만 style-componet에 적용
 - loading 페이지 제작
 - home.vue 언어변경 적용
 - url로 시작 언어 제어 (https://hyeongwoo94.github.io/parkhyeongwoo/#/en, https://hyeongwoo94.github.io/parkhyeongwoo/#/ko)
[페이지 정의]

250930
    - home에서 드래그드롭이 모바일에서 안되는거 확인
    - 피시용, 모바일용 따로 제작? 아님 현재 만든 것을 전체 수정?
    - alert을 훅으로 변환해서 사용해야한다. 그래야 유지보수에서 편함 





[오류사항- 해결방안]
- 언어변경
언어변경 후 페이지 이동시 언어가 다시 한국어로 돌아감
==>언어변경 변수를 로컬스토리지에 넣어서 제어하게 함
```js
<Home>
의도: 드래그 드롭을 활용해서 나의 페이지를 들어가기위해 재미요소를 더했다.
<ExplaninModal>
의도: 모달을 활용해서 현재 보이는 페이지의 기능들을 어떻게 사용했는지를 설명한다. => 나의 기술 스킬을 설명하는것
```


