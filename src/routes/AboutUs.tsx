import { Helmet } from "react-helmet";
import conf from "../Config";

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Home - {conf.SITE_NAME}</title>
      </Helmet>
      <div className="bg-white">
        <div className="container1 mx-auto">
          <div className="text-red-600 pt-10 relative h-30 ">
            <div className="absolute inset-x-0 top-0 h-16  text-3xl font-bold ">Giới thiệu CGV</div>
            <div className="video-frame">
              <iframe src={"https://www.youtube.com/embed/e1ZSLVTZ47M"}></iframe>
            </div>
          </div>
          <div className=" gap-1 text-gray-900 flex justify-center pt-8">
            <div className="">
              <div>
                <p>
                  <a className="font-bold  text-gray-900">CJ CGV</a> là một trong top 5 cụm rạp
                  chiếu phim lớn nhất toàn cầu và là nhà phát hành, cụm rạp chiếu phim lớn nhất Việt
                  Nam.Mục tiêu của chúng tôi là trở thành hình mẫu công ty điển hình đóng góp cho sự
                  phát triển không ngừng của ngành công nghiệp điện ảnh Việt Nam.
                </p>
                <br></br>
                <p>
                  <a className="font-bold  text-gray-900">CJ CGV</a> đã tạo nên khái niệm độc đáo về
                  việc chuyển đổi rạp chiếu phim truyền thống thành tổ hợp văn hóa “
                  <a className="font-bold  text-gray-900">Cultureplex</a>”, nơi khán giả không chỉ
                  đến thưởng thức điện ảnh đa dạng thông qua các công nghệ tiên tiến như{" "}
                  <a className="font-bold  text-gray-900">SCREENX</a>,{" "}
                  <a className="font-bold  text-gray-900">IMAX</a>,{" "}
                  <a className="font-bold  text-gray-900">STARIUM</a>,{" "}
                  <a className="font-bold  text-gray-900">4DX</a>,{" "}
                  <a className="font-bold  text-gray-900">Dolby Atmos</a>, cũng như thưởng thức ẩm
                  thực hoàn toàn mới và khác biệt trong khi trải nghiệm dịch vụ chất lượng nhất tại
                  CGV.
                </p>
                <br></br>
                <p>
                  Thông qua những nỗ lực trong việc xây dựng{" "}
                  <a className="font-bold  text-gray-900">
                    chương trình Nhà biên kịch tài năng, Dự án phim ngắn CJ, Lớp học làm phim TOTO,
                    CGV ArtHouse
                  </a>{" "}
                  cùng việc tài trợ cho các hoạt động liên hoan phim lớn trong nước như{" "}
                  <a className="font-bold  text-gray-900">
                    Liên hoan Phim quốc tế Hà Nội, Liên hoan Phim Việt Nam, CJ CGV Việt Nam
                  </a>{" "}
                  mong muốn sẽ khám phá và hỗ trợ phát triển cho các nhà làm phim trẻ tài năng của
                  Việt Nam.
                </p>
                <br></br>
                <p>
                  <a className="font-bold  text-gray-900">CJ CGV Việt Nam</a> cũng tập trung quan
                  tâm đến đối tượng khán giả ở các khu vực không có điều kiện tiếp cận nhiều với
                  điện ảnh, bằng cách tạo cơ hội để họ có thể thưởng thức những bộ phim chất lượng
                  cao thông qua các chương trình vì cộng đồng như{" "}
                  <a className="font-bold  text-gray-900">Trăng cười </a>và{" "}
                  <a className="font-bold  text-gray-900">Điện ảnh cho mọi người</a>.
                </p>
                <br></br>
                <p>
                  <a className="font-bold  text-gray-900">CJ CGV Việt Nam</a> sẽ tiếp tục cuộc hành
                  trình bền bỉ trong việc góp phần xây dựng một nền công nghiệp điện ảnh Việt Nam
                  ngày càng vững mạnh hơn cùng các khách hàng tiềm năng, các nhà làm phim, các đối
                  tác kinh doanh uy tín, và cùng toàn thể xã hội.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
