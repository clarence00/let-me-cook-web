import React, { useEffect, useState } from "react";
import Style from "./style.module.css";

import Bookmark from "../../Assets/Bookmark.svg";
import Profile from "../../Assets/Profile.svg";
import CloseBtn from "../../Assets/CloseBtn.svg";
import Options from "../../Assets/ThreeDotSettings.svg";
import YellowIcon from "../../Assets/YellowIcon.svg";
import Heart from "../../Assets/Heart.svg";
import ActiveHeart from "../../Assets/ActiveHeart.svg";
import Chatbox from "../../Assets/Chatbox.svg";
import Gallery from "../../Assets/Gallery.svg";
import Picture from "../../Assets/Demo.jpg";

import NavBar from "../../Components/NavBar";
import ViewPostWrapper from "../../Components/ViewPostWrapper";

import { useNavigate } from "react-router-dom";

function ViewPost() {
  const [text, setText] = useState("");
  const [textareaHeight] = useState("auto");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const textarea = document.getElementById("comment");
    textarea.style.height = "1.5rem";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [text]);

  return (
    <>
      <NavBar />
      <ViewPostWrapper>
        <a
          href=""
          onClick={() => navigate("/home")}>
          <img
            className={Style.closebtn}
            src={CloseBtn}
            alt="closebtn"
          />
        </a>
        <div className={Style.card}>
          <div className={Style.profile_section}>
            <section>
              <div className={Style.top_profile}>
                <img
                  src={Profile}
                  alt="profile"
                />
                <div>
                  <span>Profile</span>
                  <section>
                    <img
                      src={YellowIcon}
                      alt="yellow-icon"
                    />
                    <span>16 hrs</span>
                  </section>
                </div>
              </div>
              <img
                src={Options}
                alt="options"
              />
            </section>
          </div>
          <div className={Style.title_section}>
            <section>Title</section>
          </div>
          <div className={Style.desc_section}>
            <section>Description</section>
          </div>
          <div className={Style.postpic_section}>
            <section>
              <img
                src={Picture}
                alt="post"
              />
            </section>
          </div>
          <div className={Style.status_section}>
            <section>
              <button>
                <img
                  src={Heart}
                  alt="heart"
                />{" "}
                <span>12</span>
              </button>
              <button>
                <img
                  src={Chatbox}
                  alt="chatbox"
                />{" "}
                <span>12</span>
              </button>
              <button>
                <img
                  src={Bookmark}
                  alt="bookmark"
                />{" "}
                <span>12</span>
              </button>
            </section>
          </div>
          <div className={Style.comment_section}>
            <section>
              <img
                src={Profile}
                alt="profile"
              />
              <textarea
                id="comment"
                value={text}
                onChange={handleChange}
                style={{ height: textareaHeight }}
                placeholder="Add a comment"
              />
              <button>
                <img
                  src={Gallery}
                  alt="gallery"
                />
              </button>
            </section>
          </div>
        </div>
        <div className={Style.comment}></div>
      </ViewPostWrapper>
    </>
  );
}

export default ViewPost;
