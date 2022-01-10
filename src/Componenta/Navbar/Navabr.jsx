import React from 'react'
import salom from '../../RASIM/sr.png'
import icon from '../../RASIM/icon.png'
import Shop from '../../RASIM/Shop.png'
import avatar from '../../RASIM/avatar.png'
import bell from '../../RASIM/bell.png'
import {Conatainer ,Logotip,Search,Store,LogoTitle,Logo,Input,Select ,SearchIcon,Icons , StoreIcon} from './style'

const Navabr = () => {
    return (
        <Conatainer>

            <Logotip>
                 <Logo src={salom}/>
                 <LogoTitle>Furniking</LogoTitle>
            </Logotip>

            <Search>
                  <Input  placeholder="Search here"/>
                  <Select>
                       <option>Categories</option>
                       <option>react</option>
                       <option>jquery</option>
                       <option>vue</option>
                  </Select>
                  <SearchIcon>
                     <Icons src={icon}/>
                  </SearchIcon>
            </Search>

            <Store>
                <StoreIcon src={Shop}/>
                <StoreIcon src={avatar}/>
                <StoreIcon src={bell}/>
            </Store>
        </Conatainer>
    )
}

export default Navabr
