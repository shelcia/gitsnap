export const svgToPngURL = (svg) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
      URL.revokeObjectURL(img.src);
    };
    img.onerror = (e) => {
      reject(e);
      URL.revokeObjectURL(img.src);
    };
    img.src = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  });

export const downloadSvgAsPng = async (svg) => {
  const pngURL = await svgToPngURL(svg);
  try {
    const a = document.createElement("a");
    a.href = pngURL;
    a.download = "gitsnap-banner.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } finally {
    URL.revokeObjectURL(pngURL);
  }
};

export const downloadSvg = async (svg) => {
  const svgBlob = new Blob([svg], { type: "image/svg+xml" });
  const svgUrl = URL.createObjectURL(svgBlob);
  try {
    const a = document.createElement("a");
    a.href = svgUrl;
    a.download = "Image.svg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
};
