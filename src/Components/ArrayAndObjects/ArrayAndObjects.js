import React from "react";

function ArrayAndObjects() {
  const [changingObject, setChangingObject] = React.useState(null);

  const [array, setArray] = React.useState([]);

  const dummyArray = [
    {
      id: 1,
      label: "parent1",
      childs: [
        {
          parentId: 1,
          label: "child1",
        },
        {
          parentId: 1,
          label: "child2",
        },
        {
          parentId: 1,
          label: "child3",
        },
      ],
    },
    {
      id: 2,
      label: "parent2",
      childs: [
        {
          parentId: 2,
          label: "child1",
        },
        {
          parentId: 2,
          label: "child2",
        },
        {
          parentId: 2,
          label: "child3",
        },
      ],
    },
    {
      id: 3,
      label: "parent3",
    },
    {
      id: 4,
      label: "parent4",
    },
  ];

  const initialObject = {
    name: "Abc",
    "Middle Name": "mno",
    lastName: "xyz",
    address: "Pune",
    Age: 20,
  };

  React.useEffect(() => {
    // array.filter
    let filteredArray = dummyArray.filter((item) => item.id === 1);

    // array.find
    let found = dummyArray.find((item) => item.label === "parent2");

    // array.splice
    // array.splice(index,deleteCount,insertion)

    dummyArray.splice(1, 1);
    dummyArray.splice(1, 1, { id: 6, label: "parent6" });

    console.log("found", dummyArray);

    setArray(filteredArray);
  }, []);

  React.useEffect(() => {
    // to access the keyValue pairs in the object :
    console.log("The Object Value 1:", initialObject?.name);
    console.log("The Value 2:", initialObject?.["Middle Name"]);

    // The method to delete some key value pairs from object :
    delete initialObject.name;
    delete initialObject.lastName;
    delete initialObject["Middle Name"];

    console.log("The modified Object :", initialObject);

    // setChangingObject(initialObject);
  }, [initialObject]);

  React.useEffect(() => {
    console.log("The changing array is :", array);
  }, [array]);

  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Array Mapping
      </div>
      <div>
        {dummyArray?.length > 0
          ? dummyArray.map((item, itemIndex) => {
              return (
                <>
                  <div
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                    key={itemIndex}
                  >
                    <span>{item.id}</span>
                    <span>{item.label}</span>
                  </div>
                  <div>
                    {item["childs"] && item["childs"]?.length > 0
                      ? item.childs.map((child, childIndex) => {
                          return (
                            <div
                              key={childIndex}
                              style={{
                                marginLeft:"30px",
                                marginTop: "10px",
                                marginBottom: "10px",
                                fontSize: "20px",
                                fontWeight: "bold",
                              }}
                            >
                              <span>{child.parentId}</span>
                              <span>{child.label}</span>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ArrayAndObjects;
