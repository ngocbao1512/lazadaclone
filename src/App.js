import React,{Component} from 'react';
import './App.css';
import Productdeal from './components/Productdeal'
import Bosuutap from './components/Bosuutap'
import Lazmall from './components/Lazmall'
import Onlyforyou from './components/onlyforyou';

class App extends Component {

  render() {
    /* ================================= */
    /* =========  danh rieng cho ban === */
    var Foryou = [
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/3c7875c71cbbbe1e3215fe60d8502117.png_200x200q80.jpg_.webp',
        tensanpham : '[Voucher 8%] [Tặng 1 bàn chơi lego 600k] Bộ 5 tã/Bỉm quần cao cấp Moony Natural bề mặt bông 100% cotton organic size M46, size L36, size XL32',
        giaban : '1.988.000 ₫',
        gianhap : '2.900.000 ₫',
        giamgia : '-31%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/6fc05e16fb38371d955a4ce2dd522aa6.jpg_200x200Q100.jpg_.webp',
        tensanpham : 'Dây Jack Chuyển Đổi Tai Nghe 3.5mm Sang 2 Cổng 3.5mm Cho Âm Thanh Audio Và Mic J01',
        giaban : '13.000 ₫',
        gianhap : '25.000 ₫',
        giamgia : '-48%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/df31ed0285e5c84ac1ccea55fc841012.jpg_200x200q80.jpg_.webp',
        tensanpham : 'Combo 4 chai gel rửa tay khô ON1 hương Fresh Sakura 100ml',
        giaban : '90.000 ₫',
        gianhap : '',
        giamgia : ''
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },
      {
        image : 'https://vn-test-11.slatic.net/p/c8044495d27b3c8162f0224780a6e2ff.jpg_200x200Q100.jpg_.webp',
        tensanpham : '1 Bộ Đồ Chơi Bàn Học Kèm Lego Có Ghế 62x8x31cm (hàng quà tặng Moony) SHOP BE DAU TAY',
        giaban : '275.000 ₫',
        gianhap : '355.000 ₫',
        giamgia : '-23%'
      },

    ];
    let foryous = Foryou.map((foryou) => {
      return <Onlyforyou
                image = {foryou.image}
                tensanpham = {foryou.tensanpham}
                giaban = {foryou.giaban}
                gianhap = {foryou.gianhap}
                giamgia = {foryou.giamgia}>
             </Onlyforyou>
    });


    /* ================================= */
    /* =========  laz mall ============= */
    var lazmall = [
      {
        banner : 'https://vn-test-11.slatic.net/p/383454a0f2c6ccc507e46847bb34b3e9.jpg_200x200Q100.jpg_.webp',
        logo : 'https://vn-test-11.slatic.net/shop/347a35f4b9e3800da985e0ee0f0f681b.jpeg_80x80Q100.jpg_.webp',
        ten : 'GUTEK',
        mota : 'GUTEK'
      },
      {
        banner : 'https://vn-test-11.slatic.net/p/1d05c4325badc2f2224cbb9c1d1e1074.jpg_200x200Q100.jpg_.webp',
        logo : 'https://vn-test-11.slatic.net/shop/145ca3b5a67724a74956895dc881ce04.jpeg_80x80Q100.jpg_.webp',
        ten : 'Merries',
        mota : 'Merries'
      },
      {
        banner : 'https://vn-test-11.slatic.net/p/06035397ac2e09b2f6e225c0249b0b85.jpg_200x200Q100.jpg_.webp',
        logo : 'https://vn-test-11.slatic.net/shop/6b65a09bcc2630fb80bd8cc64ad250d9.jpeg_80x80Q100.jpg_.webp',
        ten : 'Fahasa',
        mota : 'Nhà Sách Fahasa'
      },
      {
        banner : 'https://my-live-02.slatic.net/p/ae75353daf16e831488f78a2a2649dc1.jpg',
        logo : 'https://vn-test-11.slatic.net/shop/65a46b4bcbe9190ff5237bb658770a12.jpeg_80x80Q100.jpg_.webp',
        ten : 'Houseeker',
        mota : 'Houseeker'
      },
      {
        banner : 'https://vn-test-11.slatic.net/p/0104cbb42b6692a32f99d46ab5e98580.jpg_200x200Q100.jpg_.webp',
        logo : 'https://vn-test-11.slatic.net/shop/d0525c8634ab43f0de6326415135b94a.jpeg_80x80Q100.jpg_.webp',
        ten : 'Baseus Flagship store',
        mota : 'Baseus Flagship store'
      },
      {
        banner : 'https://vn-test-11.slatic.net/p/mdc/0c9a27efae43edfd35c8eb496bfa3f34.png_200x200Q100.jpg_.webp',
        logo : 'https://vn-test-11.slatic.net/shop/3c2034e9e11e10974bc17229ac8e6b69.jpeg_80x80Q100.jpg_.webp',
        ten : 'Công ty Happy Live',
        mota : 'Công ty Happy Live'
      },
    ];

    let Lazmalls = lazmall.map((lzmall) => {
      return <Lazmall
                banner = {lzmall.banner}
                logo = {lzmall.logo}
                ten = {lzmall.ten}
                mota = {lzmall.mota}>
             </Lazmall>
    });
    /* ================================= */
    /* =========  bo suu tap =========== */
    var bosuutap = [
      {
        id : 1,
        tensanpham : 'Phụ Kiện 5 Sao >',
        soluong : '12,141 Sản Phẩm ',
        image : 'https://my-live-02.slatic.net/p/5542e3cd7dd6273aae16ad2cc091bdd3.jpg'
      },
      {
        id : 2,
        tensanpham : 'Cuoi Nam Mua Gi >',
        soluong : '7,065 Sản Phẩm ',
        image : 'https://vn-live-01.slatic.net/p/4a739907fe48ecc8a10bd1af1bc1e547.jpg_200x200q80.jpg_.webp'
      },
      {
        id : 3,
        tensanpham : '[Re Cuc]Mua sam tien loi >',
        soluong : '1,152 Sản Phẩm ',
        image : 'https://vn-test-11.slatic.net/p/5/may-duoi-kep-toc-mini-hm-658-4090-21099011-60f49d6cff49fc277c432470d87ccae4-catalog.jpg_80x80q80.jpg_.webp'
      },
      {
        id : 4,
        tensanpham : '<49K - Do tien ich >',
        soluong : '105 Sản Phẩm ',
        image : 'https://vn-test-11.slatic.net/p/240a3c8be293ce32c38c5b7b1dbc0183.jpg_80x80q80.jpg_.webp'
      }
    ];
    let Bosuutaps = bosuutap.map((bst) => {
        return <Bosuutap
                tensanpham = {bst.tensanpham}
                soluong = {bst.soluong}
                image = {bst.image}
                >   
               </Bosuutap>
    });
/* ==================================== */
/* ============= deal chop nhoang====== */
    var productdeal = [
      {
        id : 1,
        title : 'Tã/bỉm dán Merries Jumbo đủ size M76/L64',
        giaban : '410.000 d',
        gianhap : '510.000 d',
        giamgia : '-20%',
        image : 'https://vn-test-11.slatic.net/p/fca32a3e3f3172656111af5b3483fa96.jpg_200x200Q100.jpg_.webp',
        status : true, // true la con hang 
      },
      {
        id : 2,
        title : 'Sữa đặc có đường Marigold 1kg-nhập khẩu',
        giaban : '45.000 d',
        gianhap : '80.000 d',
        giamgia : '-44%',
        image : 'https://vn-test-11.slatic.net/p/ebc2de404e80d1bc780c2af7ff535f72.jpg_200x200Q100.jpg_.webp',
        status : true, // true la con hang 
      },
      {
        id : 3,
        title : '[Voucher 300K] Máy lọc Không khí WIFI Cho Phòn...',
        giaban : '3.990.000 d',
        gianhap : '5.990.000 d',
        giamgia : '-33%',
        image : 'https://vn-test-11.slatic.net/p/ca24f6a86d2a25e8bb976f74f0fd2f7c.png_200x200Q100.jpg_.webp',
        status : true, // true la con hang 
      },
      {
        id : 4,
        title : 'Sữa rửa mặt sạch sâu cho da dầu và da hỗn hợp...',
        giaban : '410.000 d',
        gianhap : '550.000 d',
        giamgia : '-25%',
        image : 'https://vn-test-11.slatic.net/p/f8880fa00ddabf99ef566f93853804e9.jpg_80x80q80.jpg_.webp',
        status : true, // true la con hang 
      },
      {
        id : 5,
        title : 'Cafe bột gu Truyền Thống Gờ cafe - 500gr - Cà phê...',
        giaban : '75.000 d',
        gianhap : '125.000 d',
        giamgia : '-40%',
        image : 'https://vn-test-11.slatic.net/p/52461782ddeb3e29176d859b5b17e29f.jpg_200x200Q100.jpg_.webp',
        status : true, // true la con hang 
      },
      {
        id : 6,
        title : 'Bộ Chuyển Đổi Điện Sóng Sin 1600w - Inverter 12V....',
        giaban : '522.500 d',
        gianhap : '548.000 d',
        giamgia : '-5%',
        image : 'https://vn-test-11.slatic.net/p/183900f5b13789c1acdc9b8e7e79897f.jpg_200x200Q100.jpg_.webp',
        status : true, // true la con hang 
      },

    ];
    
    let deals = productdeal.map((product,index) => {
      if(product.status) {
        return <Productdeal
                id = {index} 
                title = {product.title}
                giaban = {product.giaban}
                gianhap = {product.gianhap}
                giamgia = {product.giamgia}
                image = {product.image}
                >   
               </Productdeal>
      }
    });


    return (
      <div>   
        <div class="page-header">
          <div className="topheader">
            <div className="linkheader">
              <a href="#">tiet kiem hon voi ung dung</a>
              <a href="#">ban hang cung lazada</a>
              <a href="#">cham soc khach hang</a>
              <a href="#">kiem tra don hang</a>
              <a href="#">dang nhap</a>
              <a href="#">dang ky</a>
              <a href="#">change language</a>
            </div>
          </div>
          <div className="mainheader">
              <div className="logo-bar-content">
                  <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png" className="logo" alt="lazada.com" width="127px" height="40px" />
                  <input type="text" placeholder="Tim kiem tren lazada"></input>
                  <button><i class="fas fa-search"></i></button>
                  
                  <img className="cart" src="https://laz-img-cdn.alicdn.com/tfs/TB1xEeTdBGw3KVjSZFDXXXWEpXa-75-66.png"  alt="lazada.com" />
                  
                  <img className="momo" src="https://icms-image.slatic.net/images/ims-web/85e39433-9bd4-4157-af7b-25f8f1fc751d.jpg"  alt="lazada.com" />       
              </div>
          </div>
          <div className="banner">
          <img className="imgbanner" src="https://icms-image.slatic.net/images/ims-web/3f4a9a12-638d-4c86-aa30-39a7e72710ea.jpg_1200x1200.jpg" alt="" />
          </div>
        </div>
        {/* Deal chop nhoang */}
        <div className="page">
          <div className="dealchopnhoang">
            <p className="title">Deal Chớp Nhoáng</p>
            <div className="spdealchopnhoang">
              <div className="row">
              {deals}
              </div>      
            </div>
          </div>
          {/* bo suu tap */}
          <div className="bosuutap">
            <p className="title">Bộ sưu tập</p>
            <div className="spbosuutap">
              <div className="row">
                {Bosuutaps}
              </div>   
              <div className="row">
              {Bosuutaps}
              </div>         
            </div>
          </div>

          {/* LazMall */}
          <div className="lazamall">
            <p className="title">LazMall</p>
            <div className="splazamall">
              <div className="row">
                {Lazmalls}
              </div>
            </div>
          </div>

          {/* danh rieng cho ban */}
          <div className="danhriengchoban">
            <p className="title">Dành riêng cho bạn</p>
            <div className="spdanhriengchoban">
              
              <div class="row">
                {foryous}
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="footer">
          <div className="voucher-thethanhtoan">
            
            <div className="row">
              
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                
                <img src="https://img.alicdn.com/tfs/TB1yhWyueL2gK0jSZPhXXahvXXa-776-194.png" />
                
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                
                <img src="https://img.alicdn.com/tfs/TB11L1Eubj1gK0jSZFuXXcrHpXa-776-194.png" />
                  
              </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                
                <img src="https://img.alicdn.com/tfs/TB1pQmAueH2gK0jSZFEXXcqMpXa-776-194.png" />
                
                </div>
              
            </div>
            
          </div>
          <div className="linkthongtinlienhe">
            
            <div class="row">
              
              <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              LIÊN HỆ VỚI LAZADA
Hotline & Chat trực tuyến (24/7)
Trung tâm hỗ trợ
Hướng dẫn đặt hàng
Giao hàng & Nhận hàng
Chính sách hàng nhập khẩu
Hướng dẫn đổi trả hàng
              </div>
              
              <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
LAZADA VIỆT NAM
Về Lazada Việt Nam
Bán hàng cùng Lazada
Chương trình Lazada Afﬁliate
Tuyển dụng
Điều khoản sử dụng
Chính sách bảo mật
Báo chí
Bảo vệ quyền sở hữu trí tuệ
Quy chế hoạt động sàn Lazada
Quy trình giải quyết tranh chấp, khiếu nại
              </div>
              
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              CÔNG TY TNHH RECESS
Giấy CNĐKDN: 0308808576 – Ngày cấp: 06/5/2009, được sửa đổi lần thứ 19 ngày 15/8/2019.
Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở kế hoạch và Đầu tư TP.HCM
Địa chỉ đăng ký kinh doanh: Tầng 19, Tòa nhà Saigon Centre – Tháp 2, 67 Lê Lợi, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh, Việt Nam.
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
