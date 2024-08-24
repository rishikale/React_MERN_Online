import React from "react";

function TableModification() {
  const DummyTableData = [
    {
      id: 1,
      item: "itemOne",
      price: 0,
      quantity: 0,
      totalAmount: 0,
    },
    {
      id: 1,
      item: "itemTwo",
      price: 0,
      quantity: 0,
      totalAmount: 0,
    },
    {
      id: 1,
      item: "itemThree",
      price: 0,
      quantity: 0,
      totalAmount: 0,
    },
    {
      id: 1,
      item: "itemFour",
      price: 0,
      quantity: 0,
      totalAmount: 0,
    },
    {
      id: 1,
      item: "itemFive",
      price: 0,
      quantity: 0,
      totalAmount: 0,
    },
  ];

  const [tableData, setTableData] = React.useState(DummyTableData);
  const [totals, setTotals] = React.useState({
    totalPrice: 0,
    totalQuantity: 0,
    totalAmount: 0,
  });

  const handleItemPrice = (e, index) => {
    let dataArray = [...tableData];

    dataArray[index].price = Number(e.target.value);

    dataArray[index].totalAmount =
      Number(dataArray[index].quantity) * Number(e.target.value);

    setTableData(dataArray);
  };

  const handleItemQuantity = (e, index) => {
    let dataArray = [...tableData];

    dataArray[index].quantity = Number(e.target.value);

    dataArray[index].totalAmount =
      Number(dataArray[index].price) * Number(e.target.value);

    setTableData(dataArray);
  };

  React.useEffect(() => {
    console.log("The changing tableData is :", tableData);

    let totalPrice = 0;
    let totalQuantity = 0;
    let totalAmount = 0;

    if (tableData?.length > 0) {
      for (let tableObject of tableData) {
        totalPrice = Number(totalPrice) + Number(tableObject.price);
        totalQuantity = Number(totalQuantity) + Number(tableObject.quantity);
        totalAmount = Number(totalAmount) + Number(tableObject.totalAmount);
      }

      setTotals((prev) => ({
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
        totalAmount: totalAmount,
      }));
    }
  }, [tableData]);

  React.useEffect(() => {
    console.log("The totals object is :", totals);
  }, [totals]);

  return (
    <div>
      <div className="text-xl font-semibold my-2">Table Modification</div>
      <div className="flex justify-center">
        <table>
          <thead>
            <tr>
              <td className="border border-slate-700 p-2 font-bold">Item</td>
              <td className="border border-slate-700 p-2 font-bold">Price</td>
              <td className="border border-slate-700 p-2 font-bold">
                Quantity
              </td>
              <td className="border border-slate-700 p-2 font-bold">
                Total Amount
              </td>
            </tr>
          </thead>
          <tbody>
            {tableData?.length > 0
              ? tableData.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td className="border border-slate-700 p-2">
                        {row.item}
                      </td>
                      <td className="border border-slate-700 p-2">
                        <input
                          className="border border-gray-400 rounded-lg text-center"
                          name={`price${index}`}
                          defaultValue={row.price}
                          onChange={(e) => {
                            handleItemPrice(e, index);
                          }}
                        />
                      </td>
                      <td className="border border-slate-700 p-2">
                        <input
                          className="border border-gray-400 rounded-lg text-center"
                          name={`quantity${index}`}
                          defaultValue={row.quantity}
                          onChange={(e) => {
                            handleItemQuantity(e, index);
                          }}
                        />
                      </td>
                      <td className="border border-slate-700 p-2">
                        <input
                          className="border border-gray-400 rounded-lg text-center"
                          name={`totalAmount${index}`}
                          value={row.totalAmount}
                        />
                      </td>
                    </tr>
                  );
                })
              : ""}
            <tr>
              <td className="font-bold p-2 border border-slate-700">
                Total :
              </td>
              <td className="font-bold p-2 border border-slate-700">
                {totals?.totalPrice}
              </td>
              <td className="font-bold p-2 border border-slate-700">
                {totals?.totalQuantity}
              </td>
              <td className="font-bold p-2 border border-slate-700">
                {totals?.totalAmount}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableModification;
