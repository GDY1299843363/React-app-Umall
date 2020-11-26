import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import { reqCateGoods } from '../../utils/http'
import List from '../Home/components/GoodsList/GoodsList'
export default class BigList extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id)

        reqCateGoods(this.props.match.params.id).then(res => {
            this.setState({
                list: res.data.list
            })
        })
    }
    render() {

        return (
            <div className='list'>
                <Header title={this.props.match.params.name} back></Header>
                <List goods={this.state.list}></List>
            </div>
        )
    }
}
