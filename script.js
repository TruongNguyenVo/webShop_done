
// hàm hiển thị navbar khi click vào icon bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
	bar.addEventListener('click', () => {
		nav.classList.add('active');
	})
}
//hàm đóng navbar
const close = document.getElementById('close');
if(close){
	close.addEventListener('click', () => {
		nav.classList.remove('active');
	})
}
// hàm thay đổi màu sản phẩm ở sproduct.html
var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

// nếu click vào mục smalling[0] thì MainImg sẽ được thay thế bằng smallimg[0]
smallimg[0].onclick = function() {
	MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
	MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
	MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
	MainImg.src = smallimg[3].src;
}
