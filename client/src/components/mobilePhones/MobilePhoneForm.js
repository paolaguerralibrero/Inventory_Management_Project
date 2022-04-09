import React, {useEffect, useState} from "react";

const MobilePhoneForm = ({mobilePhone, onCreate, onUpdate, manufacturers}) => {

    const [stateMobilePhone, setStateMobilePhone] = useState({
        model: "",
        manufacturer: "",
        productNumber: "",
        category: "", 
        stock: 0,
        buyingPrice: 0,
        sellingPrice: 0,
        colour: "",
        size: 0.0
    })

    useEffect(() => {
        if(mobilePhone){
            let copiedMobilePhone = {...mobilePhone}
            setStateMobilePhone(copiedMobilePhone);
        }
    }, [mobilePhone])

    let heading = ""
    if(!mobilePhone){
        heading = "Add Mobile Phone to inventory"
    } else {
        heading = "Edit " + mobilePhone.model;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(stateMobilePhone.id){
            onUpdate(stateMobilePhone)
        }else{
            onCreate(stateMobilePhone);
        }
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedMobilePhone = {...stateMobilePhone};
        copiedMobilePhone[propertyName] = event.target.value;
        setStateMobilePhone(copiedMobilePhone)
    }

   const manufacturerOptions = manufacturers.map((manufacturer, index) => {
        return <option key={index} value={index}>{manufacturer}</option>
    })


    const findMobileLaptopManufacturerIndex = () => {
        if(mobilePhone){
            for(let manufacturer of manufacturers){
                if(manufacturer == mobilePhone.manufacturer){
                    console.log(parseInt(manufacturers.indexOf(manufacturer)));
                    return manufacturers.indexOf(manufacturer)
                }
            }
            return null
    }
    }

    return (
        <>
        <h3>{heading}</h3>
        <form onSubmit={handleSubmit}>
            <p>Manufacturer:
            <select name="manufacturer" defaultValue={findMobileLaptopManufacturerIndex() || "select-manufacturer"}>
            <option disabled value="select-manufacturer">Manufacturer</option>
            {manufacturerOptions}
            </select>
            </p>
            <p>Model:<input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateMobilePhone.model}/></p>
            <p>Product Number:<input type="text" placeholder="Product Number" name="productNumber" onChange={handleChange} value={stateMobilePhone.productNumber}/></p>
            <p>Category:<input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateMobilePhone.category}/></p>
            <p>Colour:<input type="text" placeholder="Colour" name="colour" onChange={handleChange} value={stateMobilePhone.colour}/></p>
            <p>Screen Size:<input type="number" placeholder="Size" name="size" onChange={handleChange} value={stateMobilePhone.size}/></p>
            <p>In Stock:<input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateMobilePhone.stock}/></p>
            <p>Price:<input type="number" placeholder="Selling Price" name="sellingPrice" onChange={handleChange} value={stateMobilePhone.sellingPrice}/></p>
            <p>Purchace Price:<input type="number" placeholder="Buying Price" name="buyingPrice" onChange={handleChange} value={stateMobilePhone.buyingPrice}/></p>
            <p><button type="submit">Save</button></p>
        </form>
        </>
    )
}

export default MobilePhoneForm;
