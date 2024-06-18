import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from 'uuid'
import {
  arrayUnion,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../utils/firebase";
type IFile = {
  fayl: File;
  preview: string
}
export default function DropzoneBAckup({ id, setId }: { id: string, setId: (b: string) => void }) {
  const [selectedImages, setSelectedImages] = useState<IFile[]>([]);
  const [load, setLoad] = useState(false);
  const baseStyle: React.CSSProperties = {
    width: "500px",
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
  } = useDropzone({ onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  useEffect(() => {
    if (id.length > 0) {
      uploadImage()
    }
  }, [id])

  const uploadImage = async () => {
    if (!selectedImages.length) {
      return;
    }
    setLoad(true);

    await Promise.all(
      selectedImages.map((image) => {
        const imageRef = ref(storage, `/images/${uuidv4()} ${image.fayl.name}`);
        const uploadTask = uploadBytesResumable(imageRef, image.fayl);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                if (id.length > 0) {
                  await updateDoc(doc(db, "products", id), {
                    images: arrayUnion(downloadURL),
                  });
                  setSelectedImages([]);
                  setId('')
                  setLoad(false);
                }
              }
            );
          }
        );
      })
    );
  };

  const deleteImage = (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault()
    setSelectedImages(selectedImages.filter((_, index) => index !== i));
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
        {selectedImages?.map((img, i) => (
          <div key={i} style={{ position: "relative", width: "fit-content" }}>
            <img
              src={img.preview}
              width={100}
              style={{ opacity: load ? 0.4 : 1, borderRadius: 10 }}
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
