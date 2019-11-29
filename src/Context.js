import React, {Component} from 'react';
import {Homes} from './data';

const HomeContext = React.createContext();

export class HomeContext extends Component {
	constructor(props) {
		super(props);
		this.state={
			detailHome: [],
			home=[]
		};
	}
	setHomes = () => {

	}
}