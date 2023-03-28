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
            Contact Us
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="">
              <div className="text-gray-900 pt-6  ">
                <div className="font-bold  hover:text-sky-400">TRỤ SỞ CHÍNH </div>
                <div>
                2nd Floor, Rivera Park Saigon - 7/28 Thanh Thai Street, Ward 14, District 10,

Ho City Chi Minh.
                </div>
              </div>

              <div className="text-gray-900 pt-6">
                <div className="font-bold  hover:text-sky-400">DỊCH VỤ KHÁCH HÀNG</div>
                <div>
                  <div> Hotline: 1900 6017</div>
                  <div> Working hours: 8:00 - 22:00</div>
                  <div> All days including Public Holidays</div>
                  Email support:
                  <a href="#" className="no-underline text-red-500 hover:underline ">
                    {" "}
                    hoidap@cgv.vn
                  </a>
                </div>
              </div>

              <div className="text-gray-900 pt-6">
                <div className="font-bold  hover:text-sky-400">ADVERTISING CONTACT</div>
                <div>
                  <div> Sales Department: +84-28-3636 57 57</div>
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
                CONTACT BRAND COMMUNICATION MARKETING COOPERATION
                </div>
                <div>
                  <div> Cinema Marketing Department: +84-28-3636 57 57</div>
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
                CONTACT TO BUY GROUP TICKETS, GIFT CARDS, ORGANIZE EVENTS, RENT THEATERS,... JOIN CHAPTER EDUCATOR WITH CINEMA
                </div>
                <div>
                  <div> Sales Department:</div>

                  <div className="pt-6">
                    <p className="font-medium ">- Southern: </p>
                    <p>Tele: 038 395 3114 (Ms Uyên)</p>
                    <p>
                      Email:{" "}
                      <a href="#" className="no-underline text-red-500 hover:underline ">
                        uyen.nguyen1@cj.net
                      </a>
                    </p>
                  </div>

                  <div className="pt-6">
                    <p className="font-medium ">- Northern: </p>
                    <p>Tele. 0985300835 (Ms Lan Anh)</p>
                    <p>
                      Email:{" "}
                      <a href="#" className="no-underline text-red-500 hover:underline ">
                        anh.nguyen@cj.net
                      </a>
                    </p>
                  </div>

                  <div className="pt-6">
                    <p className="font-medium ">- Central: </p>
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
                CONTACT MEDIA & SPONSORSHIP
                </div>
                <div>
                  <div> Media Department: +84-28-3636-5757</div>
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
