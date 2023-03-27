import { Helmet } from "react-helmet";
import conf from "../Config";

import { Fragment, useState } from "react";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Home - {conf.SITE_NAME}</title>
      </Helmet>
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="text-red-600 pt-10 relative h-30 ">
            <div className="absolute inset-x-0 top-0 h-16  text-3xl  text-center font-bold ">
              Liên hệ với chúng tôi
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="">
              <div className="text-gray-900 pt-6  ">
                <div className="font-bold  hover:text-sky-400">TRỤ SỞ CHÍNH </div>
                <div>
                  Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái,<br></br> P.14, Q.10, Thành phố Hồ
                  Chí Minh.
                </div>
              </div>

              <div className="text-gray-900 pt-6">
                <div className="font-bold  hover:text-sky-400">DỊCH VỤ KHÁCH HÀNG</div>
                <div>
                  <div> Hotline: 1900 6017</div>
                  <div> Giờ làm việc: 8:00 - 22:00</div>
                  <div> Tất cả các ngày bao gồm cả Lễ Tết</div>
                  Email hỗ trợ:
                  <a href="#" className="no-underline text-red-500 hover:underline ">
                    {" "}
                    hoidap@cgv.vn
                  </a>
                </div>
              </div>

              <div className="text-gray-900 pt-6">
                <div className="font-bold  hover:text-sky-400">LIÊN HỆ QUẢNG CÁO</div>
                <div>
                  <div> Phòng kinh doanh: +84-28-3636 57 57</div>
                  <div> Ext: 278 (Ms. Thúy An) </div>
                  <div> Hotline: 0335400414</div>
                  Email:
                  <a href="#" className="no-underline text-red-500 hover:underline ">
                    ad.cgv@cj.net
                  </a>
                </div>
              </div>

              <div className="text-gray-900 pt-6">
                <div className="font-bold  hover:text-sky-400">
                  LIÊN HỆ HỢP TÁC TIẾP THỊ TRUYỀN THÔNG THƯƠNG HIỆU
                </div>
                <div>
                  <div> Phòng Cinema Marketing: +84-28-3636 57 57</div>
                  <div> TExt: 302 (Mr. Cường)</div>
                  Email:
                  <a href="#" className="no-underline text-red-500 hover:underline ">
                    {" "}
                    phuccuong.nguyen@cj.net
                  </a>
                </div>
              </div>
              <br></br>
            </div>

            <div>
              <div className="text-gray-900 pt-6">
                <div className="font-bold  hover:text-sky-400">
                  LIÊN HỆ MUA VÉ NHÓM, THẺ QUÀ TẶNG, TỔ CHỨC SỰ KIỆN, THUÊ RẠP,… THAM GIA CHƯƠNG
                  TRÌNH GIÁO DỤC CÙNG ĐIỆN ẢNH
                </div>
                <div>
                  <div> Phòng kinh doanh:</div>

                  <div className="pt-6">
                    <p className="font-medium ">- Miền Nam: </p>
                    <p>Tele: 038 395 3114 (Ms Uyên)</p>
                    <p>
                      Email:{" "}
                      <a href="#" className="no-underline text-red-500 hover:underline ">
                        uyen.nguyen1@cj.net
                      </a>
                    </p>
                  </div>

                  <div className="pt-6">
                    <p className="font-medium ">- Miền Bắc: </p>
                    <p>Tele. 0985300835 (Ms Lan Anh)</p>
                    <p>
                      Email:{" "}
                      <a href="#" className="no-underline text-red-500 hover:underline ">
                        anh.nguyen@cj.net
                      </a>
                    </p>
                  </div>

                  <div className="pt-6">
                    <p className="font-medium ">- Miền Trung: </p>
                    <p>Tele: 0974464212(Mr Xuan Huy)</p>
                    <p>
                      Email:{" "}
                      <a href="#" className="no-underline text-red-500 hover:underline ">
                        huy.vu@cj.net
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-gray-900 pt-6">
                <div className="font-bold  hover:text-sky-400">
                  LIÊN HỆ HỢP TÁC TRUYỀN THÔNG & TÀI TRỢ
                </div>
                <div>
                  <div> Phòng truyền thông: +84-28-3636-5757</div>
                  Email:
                  <a href="#" className="no-underline text-red-500 hover:underline ">
                    dieulinh.tran@cj.net
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <a href="https://maps.gstatic.com/maps-api"></a>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Contact;
