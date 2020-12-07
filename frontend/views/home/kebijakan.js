define(function(){

	var text = " <center style='font-size:16px'>Mutu, Lingkungan, Keselamatan dan Kesehatan Kerja </br>"+
	"PT. Yamaha Motor Parts Manufacturing Indonesia </center> </div> </br>"+
	"<div style='text-align:justify'>"+
	"Yamaha Motor Parts Manufacturing Indonesia sebagai perusahaan yang "+
	"memproduksi komponen penting kendaraaan bermotor berupaya secara terus "+
	"menerus meningkatkan kinerja perusahaan sehingga menjadi perusahaan yang "+
	"memiliki daya saing tinggi dengan komitment sebagai berikut:</br>"+
	"<ol>"+
		"<li>"+
			"Mematuhi semua peraturan dan persyaratan lain yang berlaku "+
			"serta kebijakan Yamaha Motor Corporation (YMC)."+
		"</li>"+
		"<li>"+
			"Menjamin kepuasan pelanggan sesuai dengan misi perusahaan dengan "+
			"sasaran 6 (enam) Tepat, yaitu: Tepat mutu, Tepat waktu, Tepat jenis "+
			"Tepat jumlah, Tepat tujuan dan Tepat harga."+
		"</li>"+
		"<li>"+
			"Berperan aktif dalam perlindungan lingkungan melalui pemanfaatan "+
			"sumber daya alam dan energi secara efektif dan berkesinambungan, "+
			"mitigasi dan adaptasi perubahan iklim serta melindungi keanekaragaman "+
			"hayati dan ekosistem."+
		"</li>"+
		"<li>"+
			"Mencegah terjadinya pencemaran lingkungan, kecelakaan kerja dan penyakit "+
			"akibat kerja sehingga tercipta budaya kerja yang sehat dan aman."+
		"</li>"+
		"<li>"+
			"Mengendalikan dampak dan risiko internal/eksternal yang dapat menghambat"+
			"aktivitas perusahaan dengan menerapkan manajemen resiko secara terukur."+
		"</li>"+
		"<li>"+
			"Melakukan perbaikan berkelanjutan terhadap efektivitas Sistem Manajemen Mutu, "+
			"Lingkungan dan Kesehatan Keselamatan Kerja, agar tetap relevan untuk meningkatkan"+
			"kinerja perusahaan."+
		"</li>"+
	"</ol>"+
	"Kebijakan ini ditinjau secara berkala dan dikomunikasikan kepada seluruh karyawan, vendor,"+
	"supplier maupun pihak lain yang berkepentingan agar dapat dipahami dan dipatuhi."

	return {
		$ui:{
			type: "clean",
			rows:[
				{
					template:"<span style='font-size:20px; text-align:center; font-weight:bold'><center>Kebijakan Sistem Manajemen</center></span>", 
					type:"header"
				},
				{
					template: text
				//	scroll:"y"
				}
			]
			
			}				
		}
	});