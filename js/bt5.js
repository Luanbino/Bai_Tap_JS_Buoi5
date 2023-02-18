//bài 1: Quản lý tuyển Sinh
function tagID(id) {
  return document.getElementById(id);

  }
function tinhTong(diem1, diem2, diem3) {
  var sum = 0;
  sum = diem1 + diem2 + diem3;
  return sum;
}
document.getElementById("btn-tuyen-sinh").onclick = function () {
  var diemChuan = Number(tagID("diemChuan").value);
  var khuVuc = Number(tagID("chonKhuVuc").value);
  var doiTuong = Number(tagID("doiTuong").value);
  var diemMon1 = Number(tagID("diemMon1").value);
  var diemMon2 = Number(tagID("diemMon2").value);
  var diemMon3 = Number(tagID("diemMon3").value);

  var tong = tinhTong(diemMon1, diemMon2, diemMon3) + khuVuc + doiTuong;
   
  var  ketQua =0;
  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 ==0  ){
    ketQua = "Bạn đã Rớt! Do có điểm bằng 0." 
  }else{
    ketQua = tong >= diemChuan
      ? (  ketQua = "Bạn đã đậu."+ " Tổng điểm:" + tong)
      : (ketQua = "Bạn đã Rớt." + " Tổng điểm:" + tong);
  }
  tagID("kqTuyenSinh").innerHTML = ketQua;
};

// Bài 2 tính tiền điện
tagID("btn-tien-dien").onclick = function () {
  var hoTen = tagID("name").value;
  var soKw = Number(tagID("soKW").value);
  var tongTien = 0;
  if (soKw == 0) {
    alert(" Số KW không hợp lệ! Vui lòng nhập lai.");
  } else if (soKw <= 50) {
    tongTien = soKw * 500;
  } else if (soKw <= 100) {
    tongTien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  tagID("kqTienDien").innerHTML =
    "Họ Tên: " + hoTen + "," + "Tiền điện" + tongTien.toLocaleString("de-DE");
};

//Bài 3: Tính thuế thu nhập cá nhân
tagID("btn-thue").onclick = function () {
  var hoTen = tagID("youName").value;
  var thuNhap = Number(tagID("thuNhap").value);
  var nguoiPhuThuoc = Number(tagID("nguoiPhuThuoc").value);

  var ketQua = 0;
  var thuNhapChiuThue = thueThuNhap(thuNhap, nguoiPhuThuoc);
  if (thuNhap < 6000000) {
    alert("Số tiền thu nhâp không hợp lệ!");
  } else if (thuNhap <= 60000000) {
    ketQua = (thuNhapChiuThue * 5) / 100;
  } else if (thuNhap <= 120000000) {
    ketQua = (thuNhapChiuThue * 10) / 100;
  } else if (thuNhap <= 210000000) {
    ketQua = (thuNhapChiuThue * 15) / 100;
  } else if (thuNhap <= 384000000) {
    ketQua = (thuNhapChiuThue * 20) / 100;
  } else if (thuNhap <= 624000000) {
    ketQua = (thuNhapChiuThue * 25) / 100;
  } else if (thuNhap <= 960000000) {
    ketQua = (thuNhapChiuThue * 30) / 100;
  } else {
    ketQua = (thuNhapChiuThue * 35) / 100;
  }

  tagID("kqTienThue").innerHTML =
    "Họ Tên: " +
    hoTen +
    ", " +
    "Tiền thuế thu nhập cá nhân:" +
    ketQua.toLocaleString("de-DE") +
    " VND";
};

function thueThuNhap(tienNam, soPhuthuoc) {
  var chiuThue = 0;
  chiuThue = tienNam - 4000000 - soPhuthuoc * 1600000;
  return chiuThue;
}

// bai 4:Tính tiền cáp
tagID("loaiKhachHang").onclick = function () {
  var khachHang = tagID("loaiKhachHang").value;
  if (khachHang == 2) {
    tagID("soCap").className = " d-block";
  } else {
    tagID("soCap").className = " d-none";
  }
};
tagID("btn-tien-cap").onclick = function () {
  var khachHang = tagID("loaiKhachHang").value;
  var maKH = tagID("maKhachHang").value;
  var kenhCaoCap = Number(tagID("soKenh").value);
  var soCap = Number(tagID("soCap").value);
  ketQua = 0;
  if (khachHang == 0) {
    alert("Vui lòng chọn loại khách hàng!");
  } else if (khachHang == 1) {
    ketQua = 25 + 7.5 * kenhCaoCap;
  } else {
    ketQua = soCap <= 10 ? 90 + 50* kenhCaoCap : 90 + 50* kenhCaoCap +(soCap-10)*5;
  }
  tagID('kqTienCap').innerHTML = 'Mã Khách Hàng: '+ maKH + '; '+'Tièn Cáp: $'+ ketQua.toFixed(2);
};