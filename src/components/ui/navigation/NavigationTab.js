import React, {useState} from "react";
import NavigationTabItem from "./NavigationTabItem";

const NavigationTab = ({options, defaultValue, dispatchAction}) => {

    const [active, setActive] = useState(defaultValue)

    const handleTabChange = (code) => {
        setActive(code)
        dispatchAction(code)
    }

    const opts = options
    const tabs = opts.map(item =>
            <NavigationTabItem
                text={item.text}
                key={item.code}
                code={item.code}
                handleChange={handleTabChange}
                isActive={active === item.code}
            />
    )
    return(
        <div className="navigation-tabs">
            {tabs}
        </div>
    )
}
export default NavigationTab