const video = document.getElementById('video');
const source = document.createElement('source');
const track = document.createElement('track');

document.getElementById('anime').onsubmit = function(e) {
    e.preventDefault()
    console.log(document.getElementById('title').value);
    const title = document.getElementById('title').value
    source.setAttribute('src', `${title}.mp4`);
    source.setAttribute('type', `video/mp4`);
    video.appendChild(source);


    return false;
};