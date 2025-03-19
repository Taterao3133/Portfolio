const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
// const video4 = document.getElementById('projectVideo4')

const videoList = document.querySelectorAll('.project-vidbox video');

videoList.forEach(video => {
    video.addEventListener('mouseover', function () {
        video.play();
    });

    video.addEventListener('mouseout', function () {
        video.pause();
        video.currentTime = 0;
    });
});