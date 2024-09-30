import axios from "axios";
import MyCard from "./MyCard";
import projectLogo from "../assets/LOGO11.png"; // will replace by ajax data
import { useEffect, useState } from "react";

export default function PaintingsListContainer() {
  // const api = "http://localhost:8080/mvweb0923/forReactServlet";
  const api = "http://localhost:8080/artistproject/PTController/findall";
  const [data, setData] = useState([]);
  const [requestPageNumber, setRequestPageNumber] = useState();
  const [artisList, setArtisList] = useState([]);

  //撈取資料庫
  const getdata = async () => {
    try {
      const result = await axios.get(`${api}?page=${requestPageNumber}`);
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    const plaintingTypeName = data
      .filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.artisName === item.artisName)
      )
      .map((t) => t.artisName);
    console.log(plaintingTypeName);
    setArtisList(plaintingTypeName);
  }, [data]);

  return (
    <>
      <div className="container ">
        {artisList.map((d, i) => {
          return (
            <>
              <div className="divByArtis ">
                <p className="h2">Artis： {d}</p>
                <div className="list">
                  {
                    data
                      .filter((item) => item.artisName === d)
                      .map((d, i) => {
                        return <MyCard key={i} Paintings={d} />;
                      })
                    // data.map((d, i) => {
                    //   return <MyCard key={i} Paintings={d} />;
                    //   // return <MyCard key={i} photo={d.smallUrl} altText={d.paintingName} />;
                    // })
                  }
                </div>
              </div>
              <hr></hr>
            </>
          );
        })}
      </div>
    </>
  );
}
