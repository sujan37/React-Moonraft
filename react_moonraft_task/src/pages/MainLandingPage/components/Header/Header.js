import React,{Component} from 'react';
// import Aux from '../../hoc/Auxiliary'; 
import { OuterWrap,UserInfo,Bar,TransactionMonth,Name } from './HeaderStyle';
import UserImg from '../../../../commonComponents/UserImg/UserImg';
import { Redirect } from 'react-router-dom';


class Header extends Component {
    
    state = {
        navigate: false
    }

    logoutHandler = (e) => {
        localStorage.clear('token');
        this.setState({navigate: true});
    }
    
    render(){

        const {navigate} = this.state;

        if (navigate) {
            return <Redirect to='/' push={true} />
        }

        return (
            <>
                <OuterWrap>
                    <UserInfo>
                        <UserImg isSmall/>
                        <Name>Joel George</Name>
                    </UserInfo>
                    <TransactionMonth>JANUARY</TransactionMonth>
                    <div className="header-end">
                        <button onClick={e=>this.logoutHandler(e)}>LogOut</button>
                        <div>
                            <Bar></Bar>
                            <Bar></Bar>
                            <Bar></Bar>
                        </div>
                    </div>
                </OuterWrap>
            </>
        );

    }
}

export default Header;