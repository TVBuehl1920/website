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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-2">
      {imageGallery.map((image, index) => (
        <img
          key={index}
          alt=""
          src={image.url}
          className="cursor-pointer"
          onClick={() => openModal(image.url)}
        />
      ))}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75">
            {" "}
            <span
              className="absolute top-0 right-0 mt-8 mr-8 text-white text-5xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
          </div>
          <div className="relative z-10">
            <img
              src={modalImageUrl}
              alt="Modal Image"
              className="mx-auto max-h-screen"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
