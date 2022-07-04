// Khai bap lop doi tuong Sinh vien gom cac thuoc tinh nao
function SinhVien () {
    this.maSinhVien = 0;
    this.tenSinhVien = '';
    this.Email= '';
    this.ngaySinh = '';
    this.khoaHoc = '';
    this.diemToan = 0;
    this.diemLy = 0;
    this.diemHoa = 0;


    this.tinhdiemtrungbinh = function () {
        var diemTB = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa))/3;
        return diemTB;
    };

    this.xeploai = function () {

    };
}