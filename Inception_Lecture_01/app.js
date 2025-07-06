    //  <div id="parent">
    //     <div id="child">
    //         <h1>I am h1 tag</h1>
    //         <h2>i am h2 tag</h2>
    //     </div>
    //     <div id="child2">
    //         <h1>I am h1 tag</h1>
    //         <h2>i am h2 tag</h2>
    //     </div>

    // </div>
    import React from 'react';
    import ReactDOM from 'react-dom/client'

    // const parent = React.createElement("div",
    //     {id:"parent"},
    //     [
    //         React.createElement("div",{id:"child", key:'1'},
    //             [
    //                 React.createElement("h1",{id:"heading1" ,key:'1'},"I am h1 tag"),
    //                 React.createElement("h2",{id:"heading2",key:'2'},"I am h2 tag"),
    //             ]
    //         ),
    //          React.createElement("div",{id:"child2", key:'2'},
    //         [
    //             React.createElement("h1",{id:"heading3",key:'3'},"I am h1 tag"),
    //             React.createElement("h2",{id:"heading4",key:'4'},"I am h2 tag"),
    //         ]
    //     )

    //     ]
    
    // )

    const Title = ()=>(
        <h1>Hi Using function comonent </h1>
    )

    // element

    const element  = 10000

    const HeadingComponent = ()=>(
        <><div id="Container">
            My Name is Dheerendra {100+200}
            {/* <h1> Main Heading : <Title/> </h1> */}
        </div></>
    );

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent/>)