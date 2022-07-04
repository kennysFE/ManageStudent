// Mo hinh quan li code MVC

// M: Model : chua cac file prototype - lop doi tuong, moi class la mot doi tuong  
// V: View la noi chua cac gile html. layout giao dien nguoi dung 
// C : Controller la noi chua cac file xu li cho giao dien 

// Tao 1 mang SinhVien 

var mangSinhVien = [];
document.querySelector('#btnThemSinhVien').onclick = function () {
    // tao lop doi tuong moi 
    var sv = new SinhVien();
    // Lay thong tin tu giao dien dua vao input sv
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.Email = document.querySelector('#Email').value;
    // tao bien ns de format theo dung date trong window hoac browser

    var ns = new Date(document.querySelector('#ngaySinh').value);

    sv.ngaySinh = ns.toLocaleDateString();
    sv.khoaHoc = document.querySelector('#khoaHoc').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    // Test xem co lay duoc du lieu hay ko 
    console.log(sv);
    // Cach1 : Tao html = create Element
    /*
        
            // output : Hien mot chuoi html string <tr></tr>
        
            // B1 : Tao the tr 
            var trSinhVien = document.createElement('tr');
            // B2: tao the th
            var tdmaSinhVien = document.createElement('td');
            tdmaSinhVien.innerHTML = sv.maSinhVien;
        
            var tdtenSinhVien = document.createElement('td');
            tdtenSinhVien.innerHTML = sv.tenSinhVien;
        
            var tdemail = document.createElement('td');
            tdemail.innerHTML = sv.Email;
        
            var tdngaySinh = document.createElement('td');
            tdngaySinh.innerHTML = sv.ngaySinh;
        
            var tdkhoaHoc = document.createElement('td');
            tdkhoaHoc.innerHTML = sv.khoaHoc;
        
            var tdDiemTrungBinh = document.createElement('td');
            tdDiemTrungBinh.innerHTML = sv.tinhdiemtrungbinh();
        
            // Them nut xoa chinh sua 
        
            var buttonxoa = document.createElement('button')
            buttonxoa.innerHTML = 'xoa';
            buttonxoa.className = 'btn btn-danger';
        
            // xay dung onclick cho nut button
            buttonxoa.onclick = function() {
                // parentElement dom tu the con sang the cha
                // var tddel = buttonxoa.parentElement;
                // closet tddel : dom den selector gan nhat 
                var tddel = buttonxoa.closest('tr');
                tddel.remove();
            }
        
            // Them nut xoa vao td 
            var tdxoa = document.createElement('td')
            tdxoa.appendChild(buttonxoa);
            
            //b3 Them the td vao tr
            trSinhVien.appendChild(tdmaSinhVien);
            trSinhVien.appendChild(tdtenSinhVien);
            trSinhVien.appendChild(tdemail);
            trSinhVien.appendChild(tdngaySinh);
            trSinhVien.appendChild(tdkhoaHoc);
            trSinhVien.appendChild(tdDiemTrungBinh);
            trSinhVien.appendChild(tdxoa);
            
            // b4 : Them noi dung tr vao giao dien 
            var tbody = document.querySelector('#tblSinhVien');
            tbody.appendChild(trSinhVien);
        */

    // Cach 2 : Xu li theo mang (OPP)
    mangSinhVien.push(sv);
    console.log(mangSinhVien);
    renderTableSinhVien(mangSinhVien);
}

// Tao function xu li tao ra object cho moi sinh vien 
function renderTableSinhVien(arraySinhvien) {
    // Tao gia tri ban dau 
    var htmlcontent = '';
    // Cho vong lap chay duyet qua cac object sinh vien co trong mang
    for (var index = 0; index < arraySinhvien.length; index++) {
        // Cac buoc xu li 
        // tao mot bien nhan gia tri tu object da duyet 
        var sv = arraySinhvien[index];
        // Tu object tao ra the td
        // De nhan gia tri cua bien phai de giau ${} truoc thuoc tinh do 
        var tr = `
        <tr>
            <td>${sv.maSinhVien}</td>
            <td>${sv.tenSinhVien}</td>
            <td>${sv.Email}</td>
            <td>${sv.ngaySinh}</td>
            <td>${sv.khoaHoc}</td>
            <td>${sv.tinhdiemtrungbinh()}</td>
            <td>
                <button class="btn btn-danger" onclick =
                "xoaSinhVien('${index}')">Xoa</button>
                <button class="btn btn-primary ml-2">Sua</button> 
            </td>
        </tr>
        `;
        // Khi tao xong se duoc them vao gia tri ban dau
        htmlcontent += tr;
    }

    document.querySelector('#tblSinhVien').innerHTML = htmlcontent;

}

function xoaSinhVien(index) {
    // Xoa 1 phan tu trong mang 
    mangSinhVien.splice(index, 1);
    // Reload lai danh sach table 
    renderTableSinhVien(mangSinhVien);
}
