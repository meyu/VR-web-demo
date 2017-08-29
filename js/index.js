// https://developers.google.com/vr/concepts/vrview-web
window.addEventListener("load", onVrViewLoad);
var vrView;

function onVrViewLoad() {
	vrView = new VRView.Player("#vrview", {
		image: imgs[0],
		is_stereo: false,
		width: 800,
		height: 400,
		is_vr_off: false,
		is_autopan_off: false
	});

	vrView.on("ready", function() {
		loadHotSpot();
	});

	vrView.on("click", function(event) {
		if (event.id.match(/hs[0-9]/)) {
			changeView();
		}
	});
}

function changeView() {
	vrView.setContent({
		image: imgs[1]
	});
	imgs.push(imgs.shift()); //swap小技巧，這裡用就好
	loadHotSpot();
}

var imgs = [
	"https://meyu.github.io/VR-web-demo/img/DSCN0072-min.JPG",
	"https://meyu.github.io/VR-web-demo/img/DSCN0073-min.JPG",
	"https://meyu.github.io/VR-web-demo/img/DSCN0075-min.JPG",
	"https://meyu.github.io/VR-web-demo/img/DSCN0077-min.JPG",
	"https://meyu.github.io/VR-web-demo/img/DSCN0079-min.JPG"
];

function loadHotSpot() {
	vrView.addHotspot("hs1", {
		pitch: 0,
		yaw: 0,
		radius: 0.05,
		distance: 1
	});
	vrView.addHotspot("hs2", {
		pitch: 10,
		yaw: 30,
		radius: 0.08,
		distance: 1
	});
	vrView.addHotspot("hs3", {
		pitch: 20,
		yaw: -30,
		radius: 0.1,
		distance: 2
	});
}