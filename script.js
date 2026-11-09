"use strict";

const questions = [
  ["눈 떴더니 광장에서 해바라기씨 파티 중이에요.", "씨앗 한 줌 챙겨서 친구들 사이로 간다.", "내 굴에서 느긋하게 아침을 보내고 나중에 들른다.", "EI"],
  ["톱밥 밑에서 수상한 열쇠가 나왔어요.", "“이거 혹시 달빛에만 열리는 문 열쇠 아냐?”", "“이 모양이면 저기 씨앗 창고 자물쇠에 맞겠는데?”", "NS"],
  ["친구가 만든 종이 터널이 무너졌어요. 어디부터 다시 할까요?", "친구가 제일 아끼던 입구를 살릴 방법부터 찾는다.", "처음 무너진 지점을 찾아 튼튼하게 고칠 곳부터 본다.", "FT"],
  ["내일은 햄스터 마을 소풍이에요.", "간식이랑 돗자리를 오늘 밤에 문 앞에 둔다.", "내일 날씨랑 기분 보고 그때 챙긴다.", "JP"],
  ["하루 종일 뛰어다녀서 충전이 필요해요.", "조용한 굴에서 혼자 간식을 오물오물 먹는다.", "편한 친구를 불러 간식을 나눠 먹으며 수다를 떤다.", "IE"],
  ["친구에게 오늘 본 빵집을 소개해요.", "“파란 간판이 있고, 문 앞에서 갓 구운 빵 냄새가 났어.”", "“문 열고 들어가면 동화 속 마을로 통할 것 같았어.”", "SN"],
  ["축제 부스를 딱 하나만 열 수 있어요.", "준비 시간과 재료를 따져 운영하기 좋은 부스를 고른다.", "준비하는 친구들이 가장 기대하는 부스를 고른다.", "TF"],
  ["비 때문에 야외 쳇바퀴 대회가 취소됐어요.", "“지금 있는 상자로 미로 대회 열까?”", "“실내에서 할 종목이랑 순서부터 정하자.”", "PJ"],
  ["휴일 오후, 어떻게 보내야 기운이 나요?", "친구와 시장 한 바퀴", "내 굴에서 혼자 느긋하게", "EI"],
  ["처음 보는 씨앗을 받았어요. 뭐가 먼저 궁금해요?", "무슨 맛이고 어디서 났는지", "심으면 어떤 신기한 일이 생길지", "SN"],
  ["마지막 쿠키 하나. 나눌 방법을 정할 때 무엇부터 살펴요?", "모두에게 적용할 수 있는 기준", "친구마다 그 쿠키를 원하는 사정", "TF"],
  ["처음 온 시장을 어떻게 둘러봐요?", "꼭 들를 가게부터 정하기", "눈길 가는 골목부터 들어가기", "JP"],
  ["옆 마을 햄스터들이 우리 마을에 놀러 왔어요.", "누가 왔는지 잠깐 지켜보고, 자연스럽게 얘기할 때 인사한다.", "먼저 말을 걸고 어떤 마을에서 왔는지 물어본다.", "IE"],
  ["숲길에서 처음 보는 발자국을 발견했어요.", "어떤 신기한 손님이 다녀갔을지 상상해 본다.", "크기와 모양을 보면서 내가 본 발자국과 비교한다.", "NS"],
  ["친구가 씨앗 모으기 대회에서 실수하고 속상해해요.", "많이 아쉬웠겠다며 친구 마음부터 살핀다.", "어디서 실수했는지 함께 보고 다음 방법을 찾는다.", "FT"],
  ["굴로 돌아가는 길에 작은 야시장이 열렸어요.", "일단 들러 보고 집에 갈 시간은 그때 정한다.", "집에 갈 시간을 먼저 정하고 남은 시간에 들른다.", "PJ"],
];

const hamsters = {
  INTJ: ["굴 설계햄", "📐", "#dce3f5", "아직 출발 안 함. 지름길 3개 확보.", "시작하기 전에 어디서 막힐지부터 머릿속으로 그려봐요."],
  INTP: ["씨앗 연구햄", "🔍", "#e9def6", "간식 먹다가 연구 주제 생김.", "사소한 것도 궁금해지면 납득할 때까지 살펴봐요."],
  ENTJ: ["원정대장햄", "🚩", "#efd9ea", "누가 할래? 오케이, 내가 할게.", "목표가 정해지면 누가 뭘 할지부터 잡고 움직여요."],
  ENTP: ["발명왕햄", "💡", "#e7efbd", "쳇바퀴에 날개 달면 출근 가능?", "익숙한 물건을 보면 새 쓰임새부터 떠올라요."],
  INFJ: ["달빛 등불햄", "🏮", "#dce0f1", "“괜찮아” 한마디에 등불 챙겨 나옴.", "친구가 말로 다 못한 기분을 살피고 조용히 곁에 있어요."],
  INFP: ["구름 작가햄", "☁️", "#f6dee9", "멍때린 줄 알았지? 세계관 짜는 중.", "평범한 풍경에도 나만의 이야기와 의미를 붙여요."],
  ENFJ: ["응원단장햄", "📣", "#f8ded4", "친구 대회인데 내가 목 다 쉼.", "친구가 주저할 때 먼저 용기를 북돋아 줘요."],
  ENFP: ["풍선 탐험햄", "🎈", "#e2eef8", "잠깐 나왔다가 모험 시작함.", "재밌는 가능성이 보이면 친구에게도 같이 가자고 해요."],
  ISTJ: ["씨앗 금고햄", "🌰", "#eee2cc", "비상 간식의 비상 간식까지 있음.", "필요한 걸 미리 챙겨두고 약속한 일은 끝까지 해요."],
  ISFJ: ["담요 수선햄", "🧵", "#f6e8c9", "네가 좋아하는 거? 지난번에 말했잖아.", "지나가는 말도 기억했다가 필요한 순간에 슬쩍 챙겨줘요."],
  ESTJ: ["축제 감독햄", "📋", "#fae0c0", "다들 축제 중. 나만 동선 보는 중.", "여러 사람이 움직일 때 순서와 역할을 잡아 일이 굴러가게 해요."],
  ESFJ: ["간식 파티햄", "🍪", "#f8e0ce", "각자 최애 간식으로 세팅 완.", "함께 모이면 빠진 사람은 없는지, 다들 즐기는지 살펴요."],
  ISTP: ["쳇바퀴 정비햄", "🔧", "#d5ece6", "설명하는 사이에 이미 고침.", "문제가 생기면 일단 손으로 살펴보고 해결법을 찾아요."],
  ISFP: ["꽃잎 화가햄", "🎨", "#dfeccd", "돌멩이 주웠는데 전시 준비 중.", "눈에 들어온 색이나 분위기를 내 방식대로 표현하는 걸 좋아해요."],
  ESTP: ["미끄럼틀 레이서햄", "🛷", "#f7d9d5", "일단 타 봄. 후기 있음.", "재밌어 보이면 몸부터 움직이고, 현장에서 요령을 익혀요."],
  ESFP: ["무대 스타햄", "🎤", "#f8e8b8", "한 곡만 부른다더니 앙코르 중.", "즐거운 순간이 오면 같이 있는 사람까지 끌어들여요."],
};

const axes = ["EI", "SN", "TF", "JP"];
const originalTieBreakStart = 8;
const get = (id) => document.getElementById(id);
const screens = ["start-screen", "quiz-screen", "result-screen"];
const progress = get("seed-progress");
const shareButton = get("share-button");
const shareStatus = get("share-status");
const shareText = get("share-text");
const saveCard = get("save-card");
const gallery = get("gallery");
const galleryButton = get("gallery-button");
const dialog = get("hamster-dialog");
const seedShape = get("seed-template").content.firstElementChild;
const seeds = questions.map(() => seedShape.cloneNode(true));
progress.append(...seeds);

let answers = [];
let questionIndex = 0;
let result = null;

function showScreen(id) {
  screens.forEach((screen) => { get(screen).hidden = screen !== id; });
  window.scrollTo(0, 0);
}

function startQuiz() {
  answers = [];
  questionIndex = 0;
  result = null;
  showScreen("quiz-screen");
  renderQuestion();
}

function renderQuestion() {
  const [prompt, choiceA, choiceB] = questions[questionIndex];
  const number = questionIndex + 1;
  const total = questions.length;

  get("progress-count").textContent = `${number} / ${total}`;
  progress.setAttribute("aria-valuenow", questionIndex);
  progress.setAttribute("aria-valuetext", `전체 ${total}문항 중 ${number}번째 질문, ${questionIndex}문항 완료`);
  seeds.forEach((seed, index) => {
    seed.classList.toggle("filled", index < questionIndex);
    seed.classList.toggle("current", index === questionIndex);
  });

  get("question-number").textContent = `질문 ${String(number).padStart(2, "0")}`;
  get("question-title").textContent = prompt;
  get("choices").replaceChildren(...[choiceA, choiceB].map((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.setAttribute("aria-pressed", answers[questionIndex] === index);
    const label = document.createElement("span");
    label.className = "choice-letter";
    label.setAttribute("aria-hidden", "true");
    label.textContent = ["A", "B"][index];
    button.append(label, document.createTextNode(choice));
    button.addEventListener("click", () => selectAnswer(index));
    return button;
  }));
  get("back-button").hidden = questionIndex === 0;
  window.scrollTo(0, 0);
  get("question-title").focus({ preventScroll: true });
}

function selectAnswer(choice) {
  answers[questionIndex] = choice;
  questionIndex += 1;
  if (questionIndex === questions.length) {
    showResult(calculateType(answers));
    return;
  }
  renderQuestion();
}

function calculateType(selected) {
  const votes = Object.fromEntries(axes.join("").split("").map((letter) => [letter, 0]));
  questions.forEach((question, index) => {
    votes[question[3][selected[index]]] += 1;
  });

  return axes.map(([first, second], index) => {
    if (votes[first] === votes[second]) {
      // 동점이면 해당 축의 기획안 추가 질문 답변으로 정한다.
      const tieBreak = originalTieBreakStart + index;
      return questions[tieBreak][3][selected[tieBreak]];
    }
    return votes[first] > votes[second] ? first : second;
  }).join("");
}

function hamsterImage(type) {
  const image = document.createElement("img");
  image.src = "./images/" + type + ".svg";
  image.alt = "";
  image.width = 430;
  image.height = 315;
  return image;
}

function renderHamster(prefix, type) {
  const [name, emoji, tint, meme, description] = hamsters[type];
  const art = get(`${prefix}-art`);
  art.style.setProperty("--tint", tint);
  art.replaceChildren(hamsterImage(type));
  get(`${prefix}-type`).textContent = type;
  get(`${prefix}-title`).textContent = `${emoji} ${name}`;
  get(`${prefix}-meme`).textContent = meme;
  get(`${prefix}-description`).textContent = description;
}

function showResult(type) {
  renderHamster("result", type);
  shareStatus.textContent = "";
  shareText.hidden = true;
  shareText.value = "";
  clearSaveLink();
  shareButton.disabled = false;
  gallery.hidden = true;
  galleryButton.setAttribute("aria-expanded", "false");
  result = { type, card: makeShareCard(type).catch(() => null) };
  showScreen("result-screen");
  get("result-title").focus({ preventScroll: true });
}

function toggleGallery() {
  if (!gallery.hidden) {
    gallery.hidden = true;
    galleryButton.setAttribute("aria-expanded", "false");
    return;
  }
  const myType = result.type;
  const types = [myType, ...Object.keys(hamsters).filter((type) => type !== myType)];
  get("gallery-grid").replaceChildren(...types.map((type) => {
    const [name, , tint] = hamsters[type];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-card";
    button.style.setProperty("--tint", tint);
    button.innerHTML = `<strong>${name}</strong><small>${type}</small>`;
    button.prepend(hamsterImage(type));
    if (type === myType) {
      const badge = document.createElement("span");
      badge.className = "mine";
      badge.textContent = "나";
      button.append(badge);
    }
    button.addEventListener("click", () => {
      renderHamster("detail", type);
      dialog.showModal();
    });
    return button;
  }));
  gallery.hidden = false;
  galleryButton.setAttribute("aria-expanded", "true");
  get("gallery-title").focus();
}

function loadCardArt(type) {
  const url = URL.createObjectURL(new Blob([shareArtwork[type]], { type: "image/svg+xml;charset=utf-8" }));
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("결과 그림을 불러오지 못했습니다."));
    };
    img.src = url;
  });
}

async function makeShareCard(type) {
  const [name, , tint, meme] = hamsters[type];
  const image = await loadCardArt(type);
  const canvas = document.createElement("canvas");
  canvas.width = 960;
  canvas.height = 960;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fbf8ee";
  ctx.fillRect(0, 0, 960, 960);
  ctx.fillStyle = tint;
  ctx.fillRect(45, 45, 870, 610);
  ctx.drawImage(image, 70, 66, 820, 600);
  ctx.textAlign = "center";
  const font = '"Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif';
  ctx.fillStyle = "#3e5637";
  ctx.font = `bold 28px ${font}`;
  ctx.fillText(`햄스터리  ·  ${type}`, 480, 711);
  ctx.fillStyle = "#342b24";
  ctx.font = `bold 68px ${font}`;
  ctx.fillText(name, 480, 802, 820);
  ctx.fillStyle = "#3e5637";
  ctx.font = `bold 33px ${font}`;
  ctx.fillText(meme, 480, 874, 820);
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob ? new File([blob], `햄스터리-${type}.png`, { type: "image/png" }) : null));
  });
}

function testLink() {
  if (location.protocol !== "http:" && location.protocol !== "https:") return "";
  return `${location.origin}${location.pathname}`;
}

function clearSaveLink() {
  if (saveCard.hasAttribute("href")) URL.revokeObjectURL(saveCard.href);
  saveCard.removeAttribute("href");
  saveCard.hidden = true;
}

function showSaveLink(file) {
  if (!saveCard.hasAttribute("href")) saveCard.href = URL.createObjectURL(file);
  saveCard.download = file.name;
  saveCard.hidden = false;
}

async function copyMessage(message) {
  try {
    await navigator.clipboard.writeText(message);
    return true;
  } catch {
    shareText.hidden = false;
    shareText.value = message;
    shareText.select();
    try {
      if (document.execCommand("copy")) {
        shareText.hidden = true;
        shareButton.focus();
        return true;
      }
    } catch {
      // 브라우저에서 복사를 차단하면 직접 복사할 수 있게 문구를 남긴다.
    }
    shareText.focus();
    shareText.select();
    return false;
  }
}

async function shareResult() {
  const activeResult = result;
  const { type, card } = activeResult;
  const [name, emoji, , meme] = hamsters[type];
  const url = testLink();
  const message = `나 ${name}(${type}) 나옴ㅋㅋ ${emoji}\n“${meme}”\n너도 해봐 🐹`;
  shareStatus.textContent = "";
  shareText.hidden = true;
  shareButton.disabled = true;

  try {
    const file = await card;
    if (result !== activeResult) return;
    const nativeShare = { title: "햄스터리 테스트 결과", text: message };
    if (url) nativeShare.url = url;
    if (file && navigator.canShare?.({ files: [file] })) {
      nativeShare.files = [file];
    }
    if (navigator.share && (nativeShare.files || !file)) {
      try {
        await navigator.share(nativeShare);
        if (result === activeResult) {
          shareStatus.textContent = url ? "공유를 완료했어요." : "공유를 완료했어요. 로컬 파일에서는 테스트 링크가 포함되지 않아요.";
        }
        return;
      } catch (error) {
        if (error.name === "AbortError" || result !== activeResult) return;
      }
    }
    if (file) showSaveLink(file);
    const copied = await copyMessage(url ? `${message}\n${url}` : message);
    if (result !== activeResult) return;
    const cardStatus = file ? "아래 링크에서 결과 카드를 저장할 수 있어요." : "결과 카드 이미지를 만들지 못했어요.";
    const textStatus = copied ? "결과 문구를 복사했어요." : "아래 결과 문구를 직접 복사할 수 있어요.";
    const linkStatus = url ? "" : " 로컬 파일에서는 테스트 링크가 포함되지 않아요.";
    shareStatus.textContent = `${cardStatus} ${textStatus}${linkStatus}`;
  } finally {
    if (result === activeResult) shareButton.disabled = false;
  }
}

get("start-button").addEventListener("click", startQuiz);
get("restart-button").addEventListener("click", () => {
  result = null;
  clearSaveLink();
  showScreen("start-screen");
  get("start-button").focus({ preventScroll: true });
});
get("back-button").addEventListener("click", () => {
  questionIndex -= 1;
  renderQuestion();
});
shareButton.addEventListener("click", shareResult);
galleryButton.addEventListener("click", toggleGallery);
dialog.querySelector(".close-button").addEventListener("click", () => dialog.close());
