import React, { useState } from "react"

function Test () {

    const [items, setItems] = useState("")
   
   const uploadFile = (e) => {
      const schoolItems = []
      const splitData = items.split(",")
      splitData.forEach(char => {
          schoolItems.push(char)
      })
      console.log(schoolItems)
   }

    return (
        <>
            <label htmlFor="school items" className="fs-3 d-block m-2">List Items</label>
            <input type="text" className="" onChange={(e) => setItems(e.target.value)} name="school items" placeholder="Enter files, with comma"/>
            <input type="submit" name="upload file" value="Send" onClick={uploadFile}/>
        </>
    )
}


export default Test







