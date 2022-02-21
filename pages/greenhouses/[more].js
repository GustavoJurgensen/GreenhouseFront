import ChartContainer from "../../components/ChartContainer";

import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function More(context) {
    const [obj, setObj] = useState([])
    const router = useRouter();
    useEffect(() => {
        // Do mount stuff here such as executing your request.
        const last = window.location.href.split('/').pop()
        console.log(last)
        axios.get('https://greenhouseapi.herokuapp.com/greenhouse/' + last)
            .then(res => {
                setObj(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    console.log(obj)
    return (
        <>
            <ChartContainer id={obj.id} addr={obj.addr} crop={obj.cropType} obj={obj} router={router}/>
        </>
    )
}
