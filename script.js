const tell = document.getElementById('add');
tell.addEventListener('click', function () {
  let imageLink = document.getElementById('first').value;
  console.log(imageLink);
  let get = document.createElement('img');
  get.src = imageLink;
  document.getElementById('second').appendChild(get);
});
