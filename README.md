# Vue.js-Todo-App
Vue.js를 통한 간단한 Todo App 구현

상위 컴포넌트인 App.vue을 Container로 삼아 정보(date)를 가짐 .
하위 컴포넌트를 Presenter Component로 삼아 데이터를 내려주고(props) 하위 컴포넌트에서 요청(emit)
상위 컴포넌트에서 수정하는 방식으로 리팩토링 ->

상위 컴포넌트에서 정보가 바뀌기 때문에 자동으로 하위 컴포넌트의 정보 갱신이 이루어짐
