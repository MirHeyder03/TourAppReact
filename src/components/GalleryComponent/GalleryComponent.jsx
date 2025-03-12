import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const GalleryComponent = ({ photos }) => {
  const [showingId, setShowingId] = useState(0);
  const [modal, setModal] = useState(false);
  const backPage = () => {
    setModal(false);
  };
  const getImg = (id) => {
    setModal(true);
    setShowingId(id);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const imgAction = (isNext) => {
    isNext
      ? showingId !== photos.length
        ? setShowingId((pre) => pre + 1)
        : setShowingId(1)
      : showingId !== 1
      ? setShowingId((pre) => pre - 1)
      : setShowingId(photos?.length);
  };
  return (
    <>
      <div
        className={modal ? "model open" : "model"}
        onClick={() => backPage()}
      >
        <button
          className="imgLeftArrow"
          onClick={(e) => {
            stopPropagation(e);
            imgAction(false);
          }}
        >
          <MdArrowBackIos
            className="icon"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
          />
        </button>
        <img
          src={
            showingId !== 0
              ? photos.find(({ id }) => id === showingId).image
              : ""
          }
          alt={
            showingId !== 0
              ? photos.find(({ id }) => id === showingId).title
              : ""
          }
          onClick={stopPropagation}
        />
        <button
          className="imgRightArrow"
          onClick={(e) => {
            stopPropagation(e);
            imgAction(true);
          }}
        >
          <MdArrowForwardIos
            className="icon"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
            }}
          />
        </button>

        <AiOutlineClose
          onClick={() => {
            setModal(false);
            setShowingId(0);
            stopPropagation();
          }}
          className="bg-transparent"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center cursor-pointer">
        {photos.map((item) => {
          return (
            <div className="pics" key={item.id} onClick={() => getImg(item.id)}>
              <img
                src={`https://admintour.thejavachip.com/storage/${item?.image}`}
                style={{ height: "20rem", width: "25rem" }}
                alt={item.title}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryComponent;
