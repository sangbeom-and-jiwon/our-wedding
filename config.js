/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "한상범",
    father: "한덕근",
    mother: "이미화",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "유지원",
    father: "유경현",
    mother: "임선홍",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-05",
    time: "15:10",
    venue: "MJ컨벤션 3층 다이너스티홀",
    address: "경기도 부천시 소사구 소사본동 65-7(경인로 386)",
    mapLinks: {
      kakao: "https://place.map.kakao.com/27339651",
      naver: "https://naver.me/xjgcfH6y"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "한상범", bank: "OO은행", number: "000-000-000000" },
      { role: "한덕근", bank: "OO은행", number: "000-00-000000" },
      { role: "이미화", bank: "OO은행", number: "000-00-000000" }
    ],
    bride: [
      { role: "유지원", bank: "OO은행", number: "00000-0000-00" },
      { role: "유경현", bank: "OO은행", number: "000000-00-000000" },
      { role: "임선홍", bank: "OO은행", number: "000-00-000000-0" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "한상범 ♥ 유지원 결혼합니다",
    description: "2026년 9월 5일, 소중한 분들을 초대합니다."
  }
};
