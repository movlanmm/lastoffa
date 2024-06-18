import { deleteObject, ref } from "firebase/storage";
import React, { useCallback } from "react";
import { useMemo } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { storage } from "../utils/firebase";


type IFile = {
  fayl: File;
  preview: string
}

interface DropzoneProps {
  selectedImages: IFile[];
  setSelectedImages: (d: IFile[]) => void;
  uploadedImages?: string[];
  setUploadedImages?: (d: string[]) => void

}

export default function Dropzone({ selectedImages, setSelectedImages, uploadedImages, setUploadedImages }: DropzoneProps) {
  const baseStyle: React.CSSProperties = {
    width: "80%",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const focusedStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    for (let index = 0; index < acceptedFiles.length; index++) {
      setSelectedImages((prev) => [...prev, Object.assign({ fayl: acceptedFiles[index], preview: URL.createObjectURL(acceptedFiles[index]) })])
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop, accept: {
      'image/jpeg': [],
      'image/png': []
    }
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );



  const deleteImage = (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault()
    setSelectedImages(selectedImages.filter((_, index) => index !== i));
  };

  const deleteImageFromStorage = async (e: React.MouseEvent<HTMLElement>, url: string) => {
    e.preventDefault()
    setUploadedImages(uploadedImages?.filter(img => img !== url))
    const imageRef = ref(storage, url)
    try {
      await deleteObject(imageRef)
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          width: "100%",
        }}
      >

        {
          uploadedImages?.length > 0 && (
            uploadedImages?.map((url, i) => (
              <div key={i} style={{ position: "relative", width: "fit-content" }}>
                <img
                  src={url}
                  width={100}
                  className="border-radius-10"
                />
                <button
                  onClick={(e) => deleteImageFromStorage(e, url)}
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 1,
                    backgroundColor: "red",
                    color: "white",
                    width: 30,
                    height: 30,
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '50%'
                  }}
                >
                  x
                </button>
              </div>
            ))
          )
        }

        {selectedImages?.map((img, i) => (
          <div key={i} style={{ position: "relative", width: "fit-content" }}>
            <img
              src={img.preview}
              width={100}
              className="border-radius-10"
            />
            <button
              onClick={(e) => deleteImage(e, i)}
              style={{
                position: "absolute",
                top: 2,
                right: 1,
                backgroundColor: "red",
                color: "white",
                width: 30,
                height: 30,
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '50%'
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
