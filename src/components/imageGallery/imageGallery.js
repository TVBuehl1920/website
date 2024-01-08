import React, { useState } from "react"

const ImageGallery = ({ imageArray }) => {
  const [modalImageUrl, setModalImageUrl] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [imageGallery] = useState(imageArray)

  const openModal = imageUrl => {
    setModalImageUrl(imageUrl)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="flex flex-wrap content-center justify-center items-stretch gap-5 xl:gap-7 aspect-w-1 aspect-h-1 ">
      {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 xl:gap-7 aspect-w-1 aspect-h-1"> */}
      {imageGallery.map((image, index) => (
        <img
          key={index}
          alt=""
          src={image.url}
          className="cursor-pointer object-cover w-auto h-auto lg:h-[325px]"
          onClick={() => openModal(image.url)}
        />
      ))}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <span
            className="absolute top-0 right-0 mt-8 mr-8 text-white text-5xl cursor-pointer z-[99]"
            onClick={closeModal}
          >
            &times;
          </span>
          <div className="fixed inset-0 bg-black opacity-75">
            {" "}

          </div>
          <div className="relative z-10">
            <img
              src={modalImageUrl}
              className="mx-auto max-h-screen"
            />
          </div>

        </div>
      )}
    </div>
  )
}

export default ImageGallery
