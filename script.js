// script.js

// Update the count of uploaded files, transcribed files, and saved files
const uploadedFilesCount = 100;
const transcribedFilesCount = 50;
const savedFilesCount = 20;

document.querySelector('.boxes .box:nth-child(1) p').textContent = uploadedFilesCount;
document.querySelector('.boxes .box:nth-child(2) p').textContent = transcribedFilesCount;
document.querySelector('.boxes .box:nth-child(3) p').textContent = savedFilesCount;

// Update the recent files table dynamically
const recentFilesTable = document.querySelector('.recent-files tbody');

// Sample data for recent files
const recentFilesData = [
  {
    name: 'Peng Meeting Audio',
    type: 'mp3',
    duration: '20 min',
    dateCreated: '1/5/2023',
    lastUpdated: '5/5/2023',
    action: ''
  },
  {
    name: 'Tofunmi Idowu SML10025',
    type: 'mp4',
    duration: '25 min',
    dateCreated: '25/4/2023',
    lastUpdated: '30/4/2023',
    action: ''
  },
  // Add more recent files data here
];

// Loop through the recent files data and create table rows dynamically
recentFilesData.forEach(file => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${file.name}</td>
    <td>${file.type}</td>
    <td>${file.duration}</td>
    <td>${file.dateCreated}</td>
    <td>${file.lastUpdated}</td>
    <td>${file.action}</td>
  `;
  recentFilesTable.appendChild(row);
});

// Handle transcription button click
const transcriptionButton = document.querySelector('.transcription button');
const transcriptionLanguage = document.querySelector('.transcription p');

transcriptionButton.addEventListener('click', () => {
  // Code to upload and transcribe the file goes here
  transcriptionLanguage.textContent = 'Transcription Language: English';
});

// Handle speaker identification checkbox change
const speakerIdentificationCheckbox = document.querySelector('#speaker-identification');

speakerIdentificationCheckbox.addEventListener('change', () => {
  if (speakerIdentificationCheckbox.checked) {
    // Code to enable speaker identification goes here
  } else {
    // Code to disable speaker identification goes here
  }
});

// Handle customization options change
const fontSizeRange = document.querySelector('#font-size');
const fontStyleSelect = document.querySelector('#font-style');
const fontColorInput = document.querySelector('#font-color');
const transcriptionText = document.querySelector('.transcription');

fontSizeRange.addEventListener('input', () => {
  transcriptionText.style.fontSize = `${fontSizeRange.value}px`;
});

fontStyleSelect.addEventListener('change', () => {
  transcriptionText.style.fontFamily = fontStyleSelect.value;
});

fontColorInput.addEventListener('input', () => {
  transcriptionText.style.color = fontColorInput.value;
});