// http://music.163.com/song/media/outer/url?id=%id%.mp3
const ap = new APlayer({
		container: document.getElementById('aplayer'),
		fixed: true,
		autoplay: false,
		audio: [
			{
				name: "Faded",
				artist: 'Alan Walker,Iselin Solheim',
				url: 'http://music.163.com/song/media/outer/url?id=36990266.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20151231/20151231230206139997.jpg',
			},
			{
				name: "All falls down",
				artist: 'Alan Walker,Noah Cyrus,Digital Farm Animals',
				url: 'http://music.163.com/song/media/outer/url?id=515453363.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20171026/20171026225630480031.jpg',
			},
			{
				name: "Spectre",
				artist: 'Alan Walker',
				url: 'http://music.163.com/song/media/outer/url?id=30064263.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20150720/20150720143238297086.jpg',
			},
			{
				name: "The Spectre",
				artist: 'Alan Walker',
				url: 'http://music.163.com/song/media/outer/url?id=506092035.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20170914/20170914225307625638.jpg',
			},
			{
				name: "Fade",
				artist: 'Alan Walker',
				url: 'http://music.163.com/song/media/outer/url?id=29947420.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20150718/20150718110506779418.jpg',
			},
			{
				name: "Darkside",
				artist: 'Alan Walker,Au/Ra,Tomine Harket',
				url: 'http://music.163.com/song/media/outer/url?id=1296410418.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20180726/20180726223034633026.jpg',
			},
			{
				name: "Diamond Heart",
				artist: 'Alan Walker,Sophia Somajo',
				url: 'hhttp://music.163.com/song/media/outer/url?id=1311782175.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20180927/20180927160215604448.jpg',
			},
			{
				name: "Ignite (Instrumental)",
				artist: 'K-391,Alan Walker',
				url: 'http://music.163.com/song/media/outer/url?id=470547656.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20180510/20180510144502608205.jpg',
			},
			{
				name: "Routine",
				artist: 'Alan Walker',
				url: 'http://music.163.com/song/media/outer/url?id=447916006.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20161223/20161223000536443726.jpg',
			},
			{
				name: "Sing Me To Sleep",
				artist: 'Alan Walker,Iselin Solheim',
				url: 'http://music.163.com/song/media/outer/url?id=415792222.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20160603/20160603103443561463.jpg',
			},
			{
				name: "Hymn For The Weekend (Remix)",
				artist: 'Alan Walker,Coldplay',
				url: 'http://music.163.com/song/media/outer/url?id=419594258.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20160703/20160703175307543441.jpg',
			},
			{
				name: "Alone",
				artist: 'Alan Walker,Noonie Bao',
				url: 'http://music.163.com/song/media/outer/url?id=444269135.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20161201/20161201225413538833.jpg',
			},
			{
				name: "On My Way",
				artist: 'Alan Walker,Sabrina Carpenter,Farruko',
				url: 'http://music.163.com/song/media/outer/url?id=1353010122.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20190320/20190320144202248506.jpg',
			},
			{
				name: "Force",
				artist: 'Alan Walker',
				url: 'http://music.163.com/song/media/outer/url?id=31311107.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20150720/20150720200727676536.jpg',
			},
			{
				name: "Counting Stars",
				artist: 'OneRepublic',
				url: 'http://music.163.com/song/media/outer/url?id=26060065.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20160908/20160908123742484664.jpg',
			},
			{
				name: "Unity",
				artist: 'TheFatRat',
				url: 'http://music.163.com/song/media/outer/url?id=29534449.mp3',
				cover: 'http://p2.music.126.net/GeKPZsDFaMEUx_pQK6PJyA==/6647647302424277.jpg?param=130y130',
			},
			{
				name: "Journey",
				artist: 'Capo Productions',
				url: 'http://music.163.com/song/media/outer/url?id=16846088.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20160908/20160908005500924541.jpg',
			},
			{
				name: "HandClap",
				artist: 'fitz and the tantrums',
				url: 'http://music.163.com/song/media/outer/url?id=407839677.mp3',
				cover: 'http://imge.kugou.com/stdmusic/240/20190114/20190114202321451489.jpg',
			},
			{
				name: "盗将行",
				artist: '花粥,马雨阳',
				url: 'http://music.163.com/song/media/outer/url?id=574566207.mp3',
				cover: 'http://p1.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg?param=130y130',
			},
			{
				name: "出山",
				artist: '花粥,王胜男',
				url: 'http://music.163.com/song/media/outer/url?id=1313354324.mp3',
				cover: 'http://p1.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg?param=130y130',
			},
			{
				name: "Hop",
				artist: 'Azis',
				url: 'http://music.163.com/song/media/outer/url?id=561493928.mp3',
				cover: 'https://p1.music.126.net/DKcytrXy6kmBdOW7tAefgg==/109951163299129274.jpg?param=130y130',
			}
		]
});