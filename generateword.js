function generateword(option) {
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    founder: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
  };

  const phrase = ["很簡單", "很容易", "很快", "很正常"];

  let output = "";

  if (option === "engineer") {
    output += "身為一個工程師，";
    output += task.engineer[random(task.engineer.length)];
    output += phrase[random(phrase.length)];
  }

  if (option === "designer") {
    output += "身為一個設計師，";
    output += task.designer[random(task.designer.length)];
    output += phrase[random(phrase.length)];
  }

  if (option === "founder") {
    output += "身為一個創業家，";
    output += task.founder[random(task.founder.length)];
    output += phrase[random(phrase.length)];
  }

  return output;
}

function random(length) {
  return Math.floor(Math.random() * length);
}

module.exports = generateword;
