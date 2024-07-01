const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url($imgLink)`;
    imageView.textContent ="";
    imageView.style.border = 0;
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();
});
dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files
    uploadImage();
});

  var showSidebarBtn = document.getElementById('showsidebar');
  var sideBar = document.querySelector('.sidebar');
  showSidebarBtn.addEventListener('click', function() {

      if (sidebar.style.display === 'none' || sidebar.style.display === '') {
          sidebar.style.display = 'block';
      } else {
          sidebar.style.display = 'none';
      }
  });
  var dismissBtn = document.querySelector('.sidebarbtn');
    var sidebar = document.querySelector('.sidebar');

    dismissBtn.addEventListener('click', function() {

        if (sidebar.style.display === 'flex') {
            sidebar.style.display = 'none';
        } else {
            sidebar.style.display = 'flex';
        }
    });
//MARKET PLACE JS
//Toggle for donation
document.getElementById('toggleButton1').addEventListener('click', function() {
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div4').style.display = 'none';
    document.getElementById('div5').style.display = 'flex';
});