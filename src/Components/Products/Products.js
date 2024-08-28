import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../Reducers/CounterSlice";

function Products() {
  const defaultValues = {
    productName: "",
    productPrice: 0,
    productQuantity: 0,
  };

  const dispatch = useDispatch();

  const { watch, register } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const [productName, productPrice, productQuantity] = watch([
    "productName",
    "productPrice",
    "productQuantity",
  ]);
  const [imageData, setImageData] = React.useState("");

  function getProductInfo() {
    let productObject = {
      Name: productName,
      Price: productPrice,
      Quantity: productQuantity,
      Image: imageData,
    };
    dispatch(addProduct(productObject));
  }

  function handleFile(e) {
    console.log("Value of the file selected is :", e.target.files[0]);

    // for converting selected file into base 64 string which is known by the image tag

    let file = e.target.files[0];

    const reader = new FileReader(); // it is provided by javascript to handle / reading local files selected in file type input .

    reader.onloadend = () => {
      setImageData(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div>
      <div className="my-2 font-bold flex justify-center text-xl">Products</div>
      <div className="my-5 grid grid-cols-4 gap-4 items-center">
        <div className="border border-gray-500 rounded-lg p-2 h-10">
          <input
            name="productName"
            {...register("productName")}
            placeholder="Product Name"
            className="border border-gray-400 rounded text-center "
            style={{ outline: "none" }}
            type="text"
          />
        </div>
        <div className="border border-gray-500 rounded-lg p-2 h-10">
          <input
            name="productPrice"
            {...register("productPrice")}
            placeholder="Product Price"
            className="border border-gray-400 rounded text-center "
            style={{ outline: "none" }}
            type="number"
          />
        </div>
        <div className="border border-gray-500 rounded-lg p-2 h-10">
          <input
            name="productQuantity"
            {...register("productQuantity")}
            placeholder="Quantity"
            className="border border-gray-400 rounded text-center "
            style={{ outline: "none" }}
            type="number"
          />
        </div>
        <div className="border border-gray-500 rounded-lg p-2 h-10">
          <input
            type="file"
            onChange={(e) => {
              handleFile(e);
            }}
          />
        </div>
      </div>
      <div className="my-5 flex justify-center">
        <button
          onClick={() => {
            getProductInfo();
          }}
          type="button"
          className="px-3 rounded bg-blue-600 text-white"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Products;
