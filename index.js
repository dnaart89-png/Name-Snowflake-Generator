const svgNS = "http://www.w3.org/2000/svg";
const $ = id => document.getElementById(id);
const root = $("root");

function v(id, fb){ const el=$(id); return el ? el.value : fb; }
function selectedFontStack(){
  const sel = $("font");
  return `'${sel.value}', ${sel.selectedOptions[0].dataset.kind || "serif"}`;
}

function generate(){
  const WORD  = (v("word","Mother")).toString();
  const ARMS  = +v("arms",6);
  const FS    = +v("fs",64);
  const LEN   = +v("len",210);
  const GAP   = +v("gap",0);
  const TILT  = +v("tilt",0);
  const COLOR = v("color","#7b2323");
  const FONT  = selectedFontStack();

  root.innerHTML = "";

  // tiny hub dot (reference)
  const hub = document.createElementNS(svgNS,"circle");
  hub.setAttribute("r","2.5"); hub.setAttribute("fill",COLOR); hub.setAttribute("opacity",".55");
  root.appendChild(hub);

  function buildArmPair(){
    const arm = document.createElementNS(svgNS,"g");

    // OUTWARD word
    const gOut = document.createElementNS(svgNS,"g");
    gOut.setAttribute("transform", `rotate(${-90 + TILT})`);
    arm.appendChild(gOut);

    const tOut = document.createElementNS(svgNS,"text");
    tOut.setAttribute("fill", COLOR);
    tOut.setAttribute("font-size", FS);
    tOut.setAttribute("font-family", selectedFontStack());
    tOut.setAttribute("lengthAdjust","spacingAndGlyphs");
    tOut.setAttribute("textLength", String(LEN - GAP));
    tOut.setAttribute("text-anchor","start");
    tOut.setAttribute("x", String(GAP));
    tOut.textContent = WORD;
    gOut.appendChild(tOut);

    // INWARD mirror (flip over arm axis)
    const gIn = document.createElementNS(svgNS,"g");
    gIn.setAttribute("transform", `scale(1,-1) rotate(${-90 - TILT})`);
    arm.appendChild(gIn);

    const tIn = document.createElementNS(svgNS,"text");
    tIn.setAttribute("fill", COLOR);
    tIn.setAttribute("font-size", FS);
    tIn.setAttribute("font-family", selectedFontStack());
    tIn.setAttribute("lengthAdjust","spacingAndGlyphs");
    tIn.setAttribute("textLength", String(LEN - GAP));
    tIn.setAttribute("text-anchor","start");
    tIn.setAttribute("x", String(GAP));
    tIn.textContent = WORD;
    gIn.appendChild(tIn);

    return arm;
  }

  const basePair = buildArmPair();

  for(let i=0;i<ARMS;i++){
    const holder = document.createElementNS(svgNS,"g");
    holder.setAttribute("transform", `rotate(${(360/ARMS)*i})`);
    holder.appendChild(basePair.cloneNode(true));
    root.appendChild(holder);
  }
}

// PNG (OK=white, Cancel=transparent)
function downloadPNG(whiteBg=false) {
  const svg = document.getElementById("flake");
  const serializer = new XMLSerializer();
  let svgStr = serializer.serializeToString(svg);
  if (whiteBg) svgStr = svgStr.replace("<svg ","<svg style=\"background:white\" ");

  const img = new Image();
  const svgBlob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  img.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = svg.viewBox.baseVal.width;
    canvas.height = svg.viewBox.baseVal.height;
    const ctx = canvas.getContext("2d");
    if (!whiteBg) ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img,0,0);
    URL.revokeObjectURL(url);

    const link = document.createElement("a");
    const word = (v("word","snowflake")||"snowflake").replace(/\s+/g,'_');
    link.download = whiteBg ? `${word}_flake_white.png` : `${word}_flake.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  img.src = url;
}

function downloadSVG(){
  const svg = document.getElementById("flake");
  const data = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([data], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const word = (v("word","snowflake")||"snowflake").replace(/\s+/g,'_');
  a.href = url; a.download = `${word}_flake.svg`; a.click();
  URL.revokeObjectURL(url);
}

// listeners
["word","arms","fs","len","gap","tilt","font","color"].forEach(id=>{
  const el = $(id); if (el) el.addEventListener("input", generate);
});
$("go").addEventListener("click", generate);
$("download").addEventListener("click", ()=> {
  const white = confirm("Click OK for white background, Cancel for transparent.");
  downloadPNG(white);
});
$("downloadSvg").addEventListener("click", downloadSVG);
$("reset").addEventListener("click", ()=>{
  $("word").value="Mother"; $("arms").value=6; $("fs").value=40;
  $("len").value=210; $("gap").value=0; $("tilt").value=0;
  $("font").value="Libre Baskerville"; $("color").value="#7b2323";
  generate();
});
document.addEventListener("DOMContentLoaded", generate);
