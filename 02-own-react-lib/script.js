function customeRender(reactElement, container){
    const domElement=document.createElement(reactElement.type)  //createElement is used to create element
    domElement.innerHTML=reactElement.children                    // to fill dom element
    // domElement.setAttribute('href', reactElement.props.href) 
    // domElement.setAttribute('target', reactElement.props.target)
    
    
    // container.appendChild(domElement)                            //this code is not good s in this each attribute we are filling manully and for more we'll face issues


    for(const prop in reactElement.props){                          // loop to check all attributes automatic
        if(prop=='children')continue;                                 //previous time in react chlidren is given in props
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)

}


const reactElement={                                                            //this is the format which we gave for our custom react
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to open Google'

}

const mainContainer= document.querySelector('#root')


customeRender(reactElement, mainContainer)