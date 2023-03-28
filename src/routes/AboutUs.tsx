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
            <div className="absolute inset-x-0 top-0 h-16  text-3xl font-bold ">About CGV</div>
            <div className="video-frame">
              <iframe src={"https://www.youtube.com/embed/e1ZSLVTZ47M"}></iframe>
            </div>
          </div>
          <div className=" gap-1 text-gray-900 flex justify-center pt-8">
            <div className="">
              <div>
                <p>
                  <a className="font-bold  text-gray-900">CJ CGV</a> is one of the top 5 cinema
                  clusters The largest movie theater in the world and the largest distributor and
                  cinema complex in Vietnam Nam.Our goal is to become a typical company model that
                  contributes to the the continuous development of Vietnam's film industry.
                </p>
                <br></br>
                <p>
                  <a className="font-bold  text-gray-900">CJ CGV</a> created the unique concept of
                  the conversion of a traditional cinema into a cultural complex “
                  <a className="font-bold  text-gray-900">Cultureplex</a>”, where the audience not
                  only to enjoy diverse cinema through advanced technologies such as{" "}
                  <a className="font-bold  text-gray-900">SCREENX</a>,{" "}
                  <a className="font-bold  text-gray-900">IMAX</a>,{" "}
                  <a className="font-bold  text-gray-900">STARIUM</a>,{" "}
                  <a className="font-bold  text-gray-900">4DX</a>,{" "}
                  <a className="font-bold  text-gray-900">Dolby Atmos</a>, as well as enjoy the
                  moisture completely new and different food while experiencing the best service at
                  CGV.
                </p>
                <br></br>
                <p>
                  Through efforts in building{" "}
                  <a className="font-bold  text-gray-900">
                    Talented Screenwriter program, CJ Short Film Project, TOTO Film Making Class,
                    CGV ArtHouse
                  </a>{" "}
                  and sponsoring major film festival activities in the country such as{" "}
                  <a className="font-bold  text-gray-900">
                    Hanoi International Film Festival, Vietnam Film Festival, CJ CGV Vietnam
                  </a>{" "}
                  wishes to discover and support the development of talented young filmmakers of
                  Vietnam.
                </p>
                <br></br>
                <p>
                  <a className="font-bold  text-gray-900">CJ CGV Viet Nam </a> also focus focus on
                  audiences in areas that do not have much access to cinema, by giving them the
                  opportunity to enjoy quality movies through community programs such as{" "}
                  <a className="font-bold  text-gray-900">Trăng cười </a>và{" "}
                  <a className="font-bold  text-gray-900">Điện ảnh cho mọi người</a>.
                </p>
                <br></br>
                <p>
                  <a className="font-bold  text-gray-900">CJ CGV Viet Nam </a> will continue the
                  journey persistent process in contributing to the construction of a Vietnamese
                  film industry growing stronger with potential customers, filmmakers, partners
                  business reputation, and with the whole society.
                </p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
