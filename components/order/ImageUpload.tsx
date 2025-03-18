"use client"

import { CldUploadWidget } from "next-cloudinary"
import { TbPhotoPlus } from "react-icons/tb"

export default function ImageUpload() {
  return (
    <CldUploadWidget>
      {() => (
        <>
          <div className="space-y-2">
            <label className="text-slate-800">Imagen de producto</label>
            <TbPhotoPlus size={50} />
            <p className="text-lg font-semibold">Agregar Imagen</p>
          </div>
        </>
      )}
    </CldUploadWidget>
  )
}
