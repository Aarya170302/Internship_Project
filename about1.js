window.addEventListener("scroll", progressAll);

function progressAll() {
  const triggerProgress = (window.innerHeight / 8) * 4;
  const progressTop = document.getElementById("sec2");

  const progressStart = progressTop.getBoundingClientRect().top;

  if (progressStart < triggerProgress) {
    // HTML

    const progress = document.getElementById("progressDoneHtml");
    progress.style.width = progress.getAttribute("data-done");
    progress.style.opacity = 1;

    // CSS

    const progressCss = document.getElementById("progressDoneCss");
    progressCss.style.width = progressCss.getAttribute("data-done");
    progressCss.style.opacity = 1;

    //NODE

    const progressnode = document.getElementById("progressDonenode");
    progressnode.style.width = progressnode.getAttribute("data-done");
    progressnode.style.opacity = 1;

    // BOOTSTRAP

    const progressBootstrap = document.getElementById("progressDoneBootstrap");
    progressBootstrap.style.width = progressBootstrap.getAttribute("data-done");
    progressBootstrap.style.opacity = 1;

    // JAVASCRIPT

    const progressJavscript = document.getElementById("progressDoneJavascript");
    progressJavscript.style.width = progressJavscript.getAttribute("data-done");
    progressJavscript.style.opacity = 1;

    // REACT

    const progressReact = document.getElementById("progressDoneReact");
    progressReact.style.width = progressReact.getAttribute("data-done");
    progressReact.style.opacity = 1;
  }
}

//End of day 5
