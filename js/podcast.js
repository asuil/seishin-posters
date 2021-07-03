/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

let edition;
let title;
let titleSize;
let subtitle;
let subtitleSize;
let date;
let time;

const setValues = () => {
  edition = 'S2E7';
  title = 'al abordaje mina-san';
  titleSize = 18;
  subtitle = 'tatakae arturo-kun';
  subtitleSize = 30;
  date = new Date();
  time = '21:30';
};

const setInputs = () => {
  document.getElementsByName('title-size')[0].value = titleSize;
  document.getElementsByName('subtitle-size')[0].value = subtitleSize;
  document.getElementsByName('edition')[0].value = edition;
  document.getElementsByName('date')[0].value = date.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
  document.getElementsByName('time')[0].value = time;
};

const fill = () => {
  document.getElementById('edition').innerHTML = edition.toLowerCase();
  document.getElementById('title').innerHTML = title.toLowerCase();
  document.getElementById('title').style.fontSize = `${titleSize / 10}rem`;
  document.getElementById('subtitle').innerHTML = subtitle.toLowerCase();
  document.getElementById('subtitle').style.fontSize = `${subtitleSize / 10}rem`;
  document.getElementById('day-name').innerHTML = date.toLocaleDateString('es-CL', { weekday: 'short' }).substr(0, 3);
  document.getElementById('day-number').innerHTML = date.toLocaleDateString('es-CL', { day: '2-digit' });
  document.getElementById('month').innerHTML = date.toLocaleDateString('es-CL', { month: 'short' }).substr(0, 3);
  document.getElementById('time').innerHTML = time;
};

const convert = () => {
  const toConvert = document.getElementById('to-convert');
  // eslint-disable-next-line no-undef
  domtoimage.toPng(toConvert).then(
    (dataUrl) => {
      const img = new Image();
      img.src = dataUrl;

      const link = document.createElement('a');
      link.download = `afiche_podcast_${edition}`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      document.getElementById('error').style.display = 'none';
    },
  ).catch(
    (error) => {
      document.getElementById('error').style.display = 'block';
      document.getElementById('error').innerHTML = error;
    },
  );
};

const updateTitle = () => {
  title = String(document.getElementsByName('title')[0].value);
  fill();
};
const updateTitleSize = () => {
  titleSize = parseInt(document.getElementsByName('title-size')[0].value, 10);
  fill();
};
const updateSubtitle = () => {
  subtitle = String(document.getElementsByName('subtitle')[0].value);
  fill();
};
const updateSubtitleSize = () => {
  subtitleSize = parseInt(document.getElementsByName('subtitle-size')[0].value, 10);
  fill();
};
const updateEdition = () => {
  edition = String(document.getElementsByName('edition')[0].value);
  fill();
};
const updateDate = () => {
  date = new Date(`${document.getElementsByName('date')[0].value} 00:00:00`);
  fill();
};
const updateTime = () => {
  time = document.getElementsByName('time')[0].value;
  fill();
};
