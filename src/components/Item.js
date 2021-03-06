import { findAllByTitle } from '@testing-library/react'
import React from 'react'
import Button from './Button'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = () => ({ title, desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first }) => {
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item_container">
                <div className="item_text">
                    <p>{title}</p>
                    <div className="item-textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div className="item_button">
                        <Button imp='primary' text={{leftBtnLink}} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                        )}
                    </div>
                    {first && (
                        <div className="item_expand">
                            <ExpandMoreIcon/>
                        </div>
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Item
