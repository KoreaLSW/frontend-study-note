## 1. Hydration이란?

**Hydration(하이드레이션)**은 SSR(Server-Side Rendering) 또는 SSG(Static Site Generation)로 만들어진
**정적인 HTML에 React의 이벤트와 상태(state) 기능을 다시 연결하여
‘살아있는 React 앱’으로 활성화하는 과정**이다.

쉽게 말하면:

> **서버가 만든 HTML + 브라우저에서 실행되는 React JS = 완성된 React 앱**

---

## 2. Hydration이 필요한 이유

SSR/SSG에서는 서버가 HTML을 미리 그려서 보내기 때문에
사용자는 **화면을 바로 볼 수 있지만, 동작은 하지 않는다.**

- 버튼 클릭 불가
- 입력 불가
- 상태 업데이트 없음
- useEffect 실행 안 됨

즉, **보이기만 하고 죽어있는 상태**.

Hydration은 그 HTML을 기반으로

- 이벤트 핸들러 연결
- state 초기화
- React 컴포넌트 트리 연결

하여 **동작 가능한 앱**으로 만든다.

---

## 3. Hydration의 동작 과정

SSR/SSG → Hydration
진행 순서는 다음과 같다.

### 1) 서버에서 HTML 생성 (SSR/SSG)

```html
<div>
  <button>좋아요</button>
  <p>0</p>
</div>
```

- React 컴포넌트 실행 결과를 HTML로 변환하여 브라우저로 전송
- 화면은 즉시 보임

### 2) 브라우저에서 JS 번들을 다운로드

React 코드(컴포넌트, 이벤트, 상태 등)가 이 때 로드됨.

### 3) React가 Virtual DOM 생성

클라이언트 측 React는 **동일한 컴포넌트 트리를 다시 한 번 생성**한다.

### 4) HTML 비교

React는 서버가 만든 HTML과
클라이언트가 만든 Virtual DOM을 비교한다.

### 5) 동일하면 Hydration 진행

- 클릭 이벤트 연결
- 상태(state) 시스템 활성화
- useEffect 실행

🎉 최종적으로 HTML이 **동적 React 앱**으로 변한다.

---

## 4. Hydration 실패(Hydration Error)

다음과 같은 메시지가 뜰 때:

```
Hydration failed because the initial UI does not match what was rendered on the server.
```

### 원인

- 서버와 클라이언트가 **다른 HTML**을 생성했을 경우
- 랜덤 값 사용 (`Math.random()`, `Date.now()`)
- 브라우저 환경 의존 코드 (`window`, `document`)를 SSR에서 사용
- 조건부 렌더링이 서버/클라이언트에서 다르게 평가됨
- locale, timezone, user-agent 차이로 값이 달라짐

### 결과

- Hydration을 중단하고
- 기존 HTML을 버린 후
- **CSR 방식으로 새로 렌더링**한다.

---

## 5. Hydration의 장점

| 장점                 | 설명                                   |
| -------------------- | -------------------------------------- |
| **빠른 초기 렌더링** | HTML이 먼저 보이기 때문                |
| **SEO 우수**         | 검색엔진이 HTML 내용을 읽을 수 있음    |
| **React 기능 유지**  | 이벤트, 상태, 훅 등을 그대로 사용 가능 |
| **기존 HTML 재사용** | 브라우저 렌더링 비용 절감              |

---

## 6. Hydration의 단점

| 단점                        | 설명                                          |
| --------------------------- | --------------------------------------------- |
| **JS 번들 크기 의존**       | JS를 다운로드해야 상호작용 가능               |
| **Hydration 비용**          | HTML 비교 → 이벤트 연결 과정이 무거울 수 있음 |
| **Hydration mismatch 에러** | 서버/클라이언트 HTML 불일치 시 문제 발생      |

---

## 7. 한 문장 요약

> **Hydration = 서버에서 만들어진 HTML 위에 React의 이벤트와 상태를 연결해 앱을 되살리는 과정**
