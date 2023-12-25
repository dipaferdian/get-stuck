import React from "react";
import Layout from "../Layouts/Layout";
import Item from "./Item";


function Page(): React.ReactElement{

    return (
        <>
         <Layout item={<Item />}/>
        </>
    )
}

export default Page