# Palm Reader AI

> 이 저장소는 molpass가 포크한 사본입니다. 영어 원문은 [README.en.md](./README.en.md)를 참고하세요.

Palm Reader AI는 인공지능으로 손금 이미지를 분석해 신비로운 리딩을 제공하는 웹 애플리케이션입니다.

## 주요 기능

- 손금 이미지 업로드 및 AI 분석
- 개인 맞춤형 손금 리딩 제공
- 음성 리딩을 위한 TTS(텍스트 음성 변환) 기능
- 지난 리딩 기록 갤러리
- 반응형의 신비로운 UI 디자인

## 기술 스택

- **프론트엔드**: Next.js with React
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: shadcn/ui
- **애니메이션**: Framer Motion
- **아이콘**: Lucide React
- **API 요청**: Axios
- **TTS(음성 변환)**: Hugging Face Inference API
- **탈중앙화 스토리지**: Pinata IPFS

## AI 모델

- **손금 분석**: facebook/detr-resnet-50 (객체 탐지)
- **텍스트 생성**: meta-llama/Llama-2-7b-chat-hf
- **음성 변환(TTS)**: espnet/kan-bayashi_ljspeech_vits

## 프로젝트 구조

- `components/`: React 컴포넌트 (Hero, FileUpload, PalmReading 등)
- `pages/`: Next.js 페이지 및 API 라우트
- `lib/`: 유틸리티 함수 및 AI 모델 연동
- `public/`: 정적 자산(static assets)

## 시작하기

1. 저장소를 클론합니다:
   ```
   git clone https://github.com/ehernandezvilla/palm-reader-ai
   ```

2. 의존성을 설치합니다:
   ```
   npm install
   ```

3. 환경 변수를 설정합니다:
   다음 내용으로 `.env.local` 파일을 생성합니다:
   ```
   HUGGINGFACE_API_KEY=your_huggingface_api_key
   PINATA_API_KEY=your_pinata_api_key
   PINATA_SECRET_API_KEY=your_pinata_secret_key
   ```

4. 개발 서버를 실행합니다:
   ```
   npm run dev
   ```

5. 브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## 라이선스

[MIT](https://choosealicense.com/licenses/mit/)
