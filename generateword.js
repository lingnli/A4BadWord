function generateword(option) {
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    founder: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
  };
  const career = {
    engineer: "工程師",
    designer: "設計師",
    founder: "創業家"
  };

  const phrase = ["很簡單", "很容易", "很快", "很正常"];

  let output = "身為一個";

  if (option) {
    output += `${career[option]}，`;
    output += task.engineer[random(task[option].length)];
    output += phrase[random(phrase.length)];
  } else {
    return "請選擇一個職業！";
  }

  return output;
}

function random(length) {
  return Math.floor(Math.random() * length);
}

module.exports = generateword;
