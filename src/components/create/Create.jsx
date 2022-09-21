import React from "react";
import "./Create.css";
import { Input, VStack, Image, Text } from "@chakra-ui/react";
import { HiArrowRight } from "react-icons/hi";
import { BsPlusSquare } from "react-icons/bs";

export default function Create({}) {
  const fileRef = React.useRef();
  const [image, setImage] = React.useState();

  const onFilePick = () => {
    fileRef.current.click();
  };

  const onFileSelect = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="create-container">
      <div className="create-wrapper">
        <h1 className="create-title">Create New Event</h1>
        <div className="input-container">
          <div className="left-container">
            {image ? (
              <div className="img-container">
                <Image
                  rounded={"2xl"}
                  objectFit="cover"
                  src={image}
                  alt=""
                  onClick={onFilePick}
                />
                <div className="img-over-pick-btn">
                  <BsPlusSquare /> <span>Select your image</span>
                </div>
              </div>
            ) : (
              <div className="select-img-container" onClick={onFilePick}>
                <BsPlusSquare /> <span>Select your image</span>
              </div>
            )}

            <input
              ref={fileRef}
              id="file"
              type="file"
              accept="image/*"
              onChange={onFileSelect}
              style={{ visibility: "hidden" }}
            />
          </div>
          <div className="right-container">
            <VStack gap={3} pt={3}>
              <Input placeholder="Event Name" />
              <Input placeholder="Host Name" />

              <Input
                placeholder="Select Start Date and Time"
                size="md"
                type="datetime-local"
              />

              <Input
                placeholder="Select End Date and Time"
                size="md"
                type="datetime-local"
              />
            </VStack>
            <a href="/event" className="btn-main">
              Next <HiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
