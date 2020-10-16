import React from "react"
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa'

const Icon = ({name}) => {
    switch (name) {
        case 'cross':
            return <h1><FaTimes className="icons" /></h1>
        case 'circle':
            return <h1><FaRegCircle className="icons" /></h1>
        default :
            return <h1><FaPen className="icons" /></h1>
    }
}

export default Icon;