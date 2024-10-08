# Django voting_system

## 프로젝트 개요
이 프로젝트는 Django를 학습하고, 팀원들 간의 협업 능력 향상을 목표로 합니다.

## 팀원별 작업 내용
각 팀원은 자신의 브랜치에서 작업한 후 프로젝트의 원격 저장소에 push합니다. 

## 프로젝트 개요
이 프로젝트는 투표(vote)와 게시글(post) 기능을 각각 별도의 프로젝트로 분리하여 마이크로서비스 아키텍처(MSA)를 구현하는 것을 목표로 합니다. 
백엔드는 Django를 사용하여 개발되며, 프론트엔드는 React로 구현됩니다. 배포와 모니터링 작업도 프로젝트의 일부로 포함되어 있습니다.

## 팀원별 작업

### 1. **개발 환경 설정 및 ORM 만들기**
   - 프로젝트 개발에 필요한 환경 설정 및 종속성 설치
   - 데이터베이스 테이블 구조 정의 및 ORM 작성

### 2. **투표(vote)와 게시글(post) 기능 분리**
   - MSA 원칙을 준수하여, 투표와 게시글 기능을 각각 다른 Django 프로젝트로 분리
   - 각 프로젝트에 맞는 데이터베이스 설정 및 API 구현

### 3. **리액트를 이용한 프론트엔드 페이지 제작**
   - React를 사용하여 사용자 인터페이스 개발
   - 투표 및 게시글 관리 화면 구성

### 4. **배포**
   - 서버 환경에 맞게 백엔드 및 프론트엔드 배포
   - CI/CD 파이프라인 설정을 통해 자동 배포 환경 구축

### 5. **모니터링**
   - Prometheus 및 Grafana 등을 이용하여 시스템 성능 및 서비스 상태 모니터링
   - 로그 및 메트릭 수집을 통한 장애 감지 시스템 구현

## 프로젝트 구조
- `post/`: 게시글 관리 마이크로서비스
- `vote/`: 투표 관리 마이크로서비스
- `frontend/`: React를 사용한 프론트엔드 코드



## Django 투표 서비스 실행 방법
1. 마이그레이션 수행 및 서버실행
```bash
python manage.py migrate
python manage.py runserver
```
2. 서비스 접속
브라우저에서 http://localhost:8000으로 접속합니다.



## 기여 가이드
1. 커밋 메시지 가이드라인
- 명확한 커밋 메시지를 사용합니다.
```plaintext
[feat] 방명록 작성 기능 추가
[fix] 방명록 오류 수정
```
2. Pull Request
- 작업이 완료되면 main 브랜치로의 Pull Request를 생성합니다.
- 리뷰를 통해 코드 품질을 개선합니다.

