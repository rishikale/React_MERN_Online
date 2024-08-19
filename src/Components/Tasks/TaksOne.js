import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function TaskOne() {
  const defaultValues = {
    price: 0,
    quantity: 0,
    totalAmount: 0,
  };

  const { watch, register, setValue } = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  });


  const [priceWatch, quantityWatch] = watch(["price", "quantity"]);

  useEffect(() => {
    if (Number(priceWatch) > 0 && Number(quantityWatch) > 0) {
      let totalAmount = Number(priceWatch) * Number(quantityWatch);
      setValue("totalAmount", totalAmount);
    }
  }, [quantityWatch]);

  return (
    <form>
      <div>Task One</div>
      <div className="my-5">
        <input className="mx-4" name="price" {...register("price")} />
        <input className="mx-4" name="quantity" {...register("quantity")} />
        <input
          className="mx-4"
          name="totalAmount"
          {...register("totalAmount")}
        />
      </div>
    </form>
  );
}

export default TaskOne;
